#!/usr/bin/env ruby

require "fileutils"
require "erb"

require "unicode/x"
require "symbolify"
require "az/kernel_method"

module UnicodePages
  FC = '<div class="fc">'
  FCEND = '</div>'
  UL = '<ul class="table">'
  ULEND = '</ul>'
  LEFTTABLE = '<div class="lefttable">'
  LEFTTABLEEND = '</div>'

  class << self
    def all_emoji
      FC + Unicode::Emoji::LIST.map{ |group, sub_groups|
        sub_groups.map{ |sub_group, emoji|
          emoji.map{ |e|
            unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
            '<span class="f u" title="' + unicode_name + '">' + e + '</span>'
          }.join(" ")
        }.join(" ")
      }.join(" ") + FCEND
    end

    def emoji_by_categories
      '<ul class="toc">' + Unicode::Emoji::LIST.map{ |group, sub_groups|
        "<li>#{group} <ul>" + sub_groups.map{ |sub_group, emoji|
          nice_sub_group = sub_group.
            gsub(/-(.*)/){ ", #{$1.capitalize}" }.
            gsub(/(?= |^)(.)/){ $1.upcase }
          sub_group = sub_group.gsub " & ", "--"

          "<li><a href=\"##{sub_group}\">#{nice_sub_group}</a></li>"
        }.join("\n") + "</ul></li>"
      }.join("\n") + "</ul>\n\n" + Unicode::Emoji::LIST.map{ |group, sub_groups|
        "## #{group}\n\n" + sub_groups.map{ |sub_group, emoji|
          nice_sub_group = sub_group.
            gsub(/-(.*)/){ ", #{$1.capitalize}" }.
            gsub(/(?= |^)(.)/){ $1.upcase }
          sub_group = sub_group.gsub " & ", "--"

          "### #{nice_sub_group}\n\n" +
          "Name | Emoji | Codepoint/s\n-|-|-\n" + emoji.map{ |e|
            unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
            codepoints = e.unpack("U*").map{ |cp| "U+%4X" % cp }.join("<br/>")
            unicode_name + '| <span class="f">' + e + '</span> | ' + codepoints
          }.join("\n") #+ "\n{:.left-align .table-20-X}"
        }.join("\n\n")
      }.join("\n\n")
    end

    def emoji_text_name
      "Text, +VS15 | Default, no VS | Emoji, +VS16 | Name | Base Codepoint/s\n-|-|-|-|-\n" +
      Unicode::Emoji::LIST.values.map(&:values).flatten.map{ |e|
        e.gsub! /\u{FE0E}|\u{FE0F}/, ""
        unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
        codepoints = e.unpack("U*").map{ |cp| "U+%4X" % cp }.join("<br/>")
        "<span class=\"n\">#{
          e + [Unicode::Emoji::TEXT_VARIATION_SELECTOR].pack("U*")
        }</span> | <span class=\"n\">#{
          e
        }</span> | <span class=\"n\">#{
          e + [Unicode::Emoji::EMOJI_VARIATION_SELECTOR].pack("U*")
        }</span> | " +
        "#{ unicode_name } | " +
        "#{ codepoints }"
      }.join("\n")
    end

    def hieroglyphs(*codepoint_range)
      '<div class="fc">' +
      codepoint_range.map{ |cp|
        e = [cp].pack("U")
        unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
        '<span class="h" title="' + unicode_name + '">' + e + '</span>'
      }.join(" ") + "</div>"
    end

    def list_blanks
      "<table><tr><th>Name</th><th>Character</th><th>Codepoint</th></tr>" + UnicodeCharacteristics::BLANKS.map{ |codepoint|
        char = [codepoint].pack("U")
        unicode_name = Unicode::Name.readable(char)
      "<tr><td>#{ Unicode::Name.readable(char) }</td><td><span class=\"b\">]<span>#{ char }</span>[</span></td><td>#{format("U+%.4X", char.unpack("U")[0]).rjust(9)}</td></tr>"
      }.join("\n\n") + "</table>"
    end

    def list_separators
      "<table><tr><th>Name</th><th>Character</th><th>Codepoint</th></tr>" + UnicodeCharacteristics::SEPARATORS.map{ |codepoint|
        char = [codepoint].pack("U")
        unicode_name = Unicode::Name.readable(char)
      "<tr><td>#{ Unicode::Name.readable(char) }</td><td><span class=\"b\">]<span>#{ char }</span>[</span></td><td>#{format("U+%.4X", char.unpack("U")[0]).rjust(9)}</td></tr>"
      }.join("\n\n") + "</table>"
    end

    def from_a_to_z
      fonts = Az.fonts - [:circled_negative, :circled_upper, :squared_negative, :squared_upper, :italic_bold, :sans_italic_bold, :fraktur_bold, :script_bold] # there are aliases for the same…
      "<table><tr>" +
      fonts.map{ |font|
        nice_font_name = font.to_s.gsub(/(^|_)([a-z])/) do ($1.empty? ? "" : " ") + $2.upcase end
        "<th class='mini' title='#{nice_font_name}'>" +
        nice_font_name.gsub(" ", "<br/>") +
        "</th>"
      }.join("") + "</tr><tr><td>" + [*?A..?Z, *?a..?z].map { |letter|
        fonts.map{ |font|
          az_letter = az(letter, font)
          az_letter_name = Unicode::Name.readable(az_letter)
          if font == :tag
            '<span class="b2" title="' + az_letter_name + '">]<span>' +
            az_letter +
            '</span>[</span>'
          else
            '<span class="f" title="' + az_letter_name + '">' +
            az_letter +
            '</span>'
          end
        }.join("</td><td>")
      }.join("</td></tr><tr><td>") + "</td></tr></table>"
    end

    def all_picto
      FC + Unicode::Emoji::EXTENDED_PICTOGRAPHIC_NO_EMOJI.map{ |cp|
        e = [cp].pack("U")
        next if Unicode::Types.of(e).include?("Reserved")
        unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
        '<span class="f u" title="' + unicode_name + '">' + e + '</span>'
      }.compact.join(" ") + FCEND
    end

    # def list_ignorables
    #   "# List of Ignorable Characters\n\n" +
    #   "Codepoint | Name | Character\n-|-|-\n" + UnicodeCharacteristics::IGNORABLE.map{ |codepoint|
    #     char = [codepoint].pack("U")
    #     unicode_name = char =~ /\p{Unassigned}/ ?
    #     "*not assigned*" :
    #     Unicode::Name.readable(char)
    #     format("U+%.4X", char.unpack("U")[0]).rjust(9) +
    #     " | #{ unicode_name } | <span class=\"b\">]<span>#{ char }</span>[</span>"
    #   }.join("\n\n")
    # end

    # def list_tags
    #   "# List of Tags\n\n" +
    #   "Codepoint | Name | Character\n-|-|-\n" + UnicodeCharacteristics::TAGS.map{ |codepoint|
    #     char = [codepoint].pack("U")
    #     unicode_name = Unicode::Name.readable(char)
    #     format("U+%.4X", char.unpack("U")[0]).rjust(9) +
    #     " | #{ unicode_name } | <span class=\"b\">]<span>#{ char }</span>[</span>"
    #   }.join("\n\n")
    # end

    # def list_controls
    #   "# Pre-Unicode Control Characters\n\n" +
    #   "<table><tr><th>Codepoint</th><th>Name</th><th>Symbol</th><th>Character</th></tr>" + [*0...0x20, *0x80...0xA0] .map{ |codepoint|
    #     char = [codepoint].pack("U")
    #     unicode_name = Unicode::Name.readable(char)
    #     "<tr><td>#{format("U+%.4X", char.unpack("U")[0]).rjust(9)}</td><td>#{ Unicode::Name.readable(char) }</td><td><span class=\"n\">#{Symbolify.symbolify(char)}</span></td><td><span class=\"b\">]<span>#{ char }</span>[</span></td></tr>"
    #   }.join("\n\n") + "</table>"
    # end

    # def list_numbers
    #   Unicode::NumericValue.chars.group_by{ |char|
    #     Unicode::Name.of(char)[/^\w+( digit| fraction)?/i]
    #   }.map{ |group, chars|
    #     group_name = group.gsub(/(?= |^)(.)/){ $1.upcase }

    #     table_data_untransposed = chars.sort_by{ |char|
    #       Unicode::NumericValue.of(char)
    #     }.group_by{ |char|
    #       Unicode::NumericValue.of(char)
    #     }.to_a

    #     table_data_untransposed.each_slice(10).map{ |slice|
    #       table_data = slice.transpose
    #       length = table_data[0].length

    #       prepared = length.times.map{ |char_index|
    #         line = table_data[1][char_index]
    #         # line[length] = nil
    #         line.map{ |char|
    #           unicode_name = Unicode::Name.readable(char) if char

    #           char ?
    #           "<span class=\"c\" title=\"#{unicode_name}\">#{char}</span>" :
    #           "-"
    #         }
    #       }

    #       "## #{ group_name }\n\n" +
    #       table_data[0].join(" | ") + "\n" +
    #       table_data[0].map{ "-" }.join(" | ") + "\n" +
    #       prepared.transpose.reject{|l|
    #         l.compact.empty?
    #       }.map{|l| l.join(" | ")}.join("\n")
    #     }.join("\n\n")

    #   }.join("\n\n")
    # end

    def list_numbers
      "<table><tr><th>Unicode Character</th><th>Numerical Value</th><th>Name</th><th>Codepoint</th></tr>" + Unicode::NumericValue.chars.map{ |char|
        codepoint = format("U+%.4X", char.unpack1("U"))
        number = Unicode::NumericValue.of(char)
        unicode_name = Unicode::Name.readable(char)
        "<tr><td><span class=\"c\">#{ char }</span></td><td>#{number}</td><td>#{ Unicode::Name.readable(char) }</td><td>#{codepoint}</td></tr>"
      }.join("\n\n") + "</table>"
    end

    def binding_
      binding
    end
  end
end

module RenderPages
  class << self
    def render_erb(template, binding_)
      ERB.new(template, trim_mode: "%<>").result(binding_)
    end

    def generate!
      FileUtils.mkdir_p("src/pages")
      Dir["src/pages.erb/*"].each{ |filename_in|
        filename_out = filename_in.sub(/\Asrc\/pages\.erb/, "src/pages").sub(/.erb$/, "")
        File.write(filename_out, render_erb(File.read(filename_in), UnicodePages.binding_))
        puts "Generated #{filename_out}"
      }
    end
  end
end

RenderPages.generate!