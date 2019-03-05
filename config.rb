require "json"
require "characteristics/unicode"
require "symbolify"

set :css_dir, "stylesheets"
set :images_dir, "images"

configure :build do
  activate :minify_css
end

helpers do
  FC = '<div class="fc">'
  FCEND = '</div>'
  UL = '<ul class="table">'
  ULEND = '</ul>'
  LEFTTABLE = '<div class="lefttable">'
  LEFTTABLEEND = '</div>'

  def all_emoji
    "# All Emoji\n\n" + FC + Unicode::Emoji::LIST.map{ |group, sub_groups|
      sub_groups.map{ |sub_group, emoji|
        emoji.map{ |e|
          unicode_name = (Unicode::SequenceName.of(e) || Unicode::Name.of(e) || "").sub(/\(emoji style\)/, '')
          '<span class="f u" title="' + unicode_name + '">' + e + '</span>'
        }.join(" ")
      }.join(" ")
    }.join(" ") + FCEND
  end

  def emoji_by_categories
    "# Emoji Categories\n\n" + '<ul class="toc">' + Unicode::Emoji::LIST.map{ |group, sub_groups|
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
    "# Emoji vs. Text Presentation\n\n" +
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

  def list_blanks
    "# Blank Characters\n\n" +
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
    "# Unicode Numbers\n\n" +
    "<table><tr><th>Unicode Character</th><th>Numerical Value</th><th>Name</th><th>Codepoint</th></tr>" + Unicode::NumericValue.chars.map{ |char|
      codepoint = format("U+%.4X", char.unpack1("U"))
      number = Unicode::NumericValue.of(char)
      unicode_name = Unicode::Name.readable(char)
     "<tr><td><span class=\"c\">#{ char }</span></td><td>#{number}</td><td>#{ Unicode::Name.readable(char) }</td><td>#{codepoint}</td></tr>"
    }.join("\n\n") + "</table>"
  end
end
