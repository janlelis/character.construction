---
layout: ../layouts/Layout.astro
title: Blank Characters [character construction]
---

# Blank Characters

<div class="intro">
  There are a bunch of white-space character in Unicode. Sometimes, such blank codepoints have a totally different meaning, but as a side-effect, they also do not contain any glyph.

  The following list collects characters which might render no glyph. The exact behavior depends on the platform/operating system.

  Please also note, some codepoints in Unicode are marked as <a href="https://idiosyncratic-ruby.com/66-ruby-has-character.html#ignorable-codepoints">ignorable</a> and often do not render <em>anything</em>, not even a space.
</div>

### Whitespace / Other Invisible

<table><tr><th>Name</th><th>Character</th><th>Codepoint</th></tr><tr><td>CHARACTER TABULATION</td><td><span class="b">]<span>	</span>[</span></td><td>   U+0009</td></tr>

<tr><td>SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+0020</td></tr>

<tr><td>NO-BREAK SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+00A0</td></tr>

<tr><td>SOFT HYPHEN</td><td><span class="b">]<span>­</span>[</span></td><td>   U+00AD</td></tr>

<tr><td>COMBINING GRAPHEME JOINER</td><td><span class="b">]<span>͏</span>[</span></td><td>   U+034F</td></tr>

<tr><td>ARABIC LETTER MARK</td><td><span class="b">]<span>؜</span>[</span></td><td>   U+061C</td></tr>

<tr><td>SYRIAC ABBREVIATION MARK</td><td><span class="b">]<span>܏</span>[</span></td><td>   U+070F</td></tr>

<tr><td>HANGUL CHOSEONG FILLER</td><td><span class="b">]<span>ᅟ</span>[</span></td><td>   U+115F</td></tr>

<tr><td>HANGUL JUNGSEONG FILLER</td><td><span class="b">]<span>ᅠ</span>[</span></td><td>   U+1160</td></tr>

<tr><td>OGHAM SPACE MARK</td><td><span class="b">]<span> </span>[</span></td><td>   U+1680</td></tr>

<tr><td>KHMER VOWEL INHERENT AQ</td><td><span class="b">]<span>឴</span>[</span></td><td>   U+17B4</td></tr>

<tr><td>KHMER VOWEL INHERENT AA</td><td><span class="b">]<span>឵</span>[</span></td><td>   U+17B5</td></tr>

<tr><td>MONGOLIAN VOWEL SEPARATOR</td><td><span class="b">]<span>᠎</span>[</span></td><td>   U+180E</td></tr>

<tr><td>EN QUAD</td><td><span class="b">]<span> </span>[</span></td><td>   U+2000</td></tr>

<tr><td>EM QUAD</td><td><span class="b">]<span> </span>[</span></td><td>   U+2001</td></tr>

<tr><td>EN SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2002</td></tr>

<tr><td>EM SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2003</td></tr>

<tr><td>THREE-PER-EM SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2004</td></tr>

<tr><td>FOUR-PER-EM SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2005</td></tr>

<tr><td>SIX-PER-EM SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2006</td></tr>

<tr><td>FIGURE SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2007</td></tr>

<tr><td>PUNCTUATION SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2008</td></tr>

<tr><td>THIN SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+2009</td></tr>

<tr><td>HAIR SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+200A</td></tr>

<tr><td>ZERO WIDTH SPACE</td><td><span class="b">]<span>​</span>[</span></td><td>   U+200B</td></tr>

<tr><td>ZERO WIDTH NON-JOINER</td><td><span class="b">]<span>‌</span>[</span></td><td>   U+200C</td></tr>

<tr><td>ZERO WIDTH JOINER</td><td><span class="b">]<span>‍</span>[</span></td><td>   U+200D</td></tr>

<tr><td>LEFT-TO-RIGHT MARK</td><td><span class="b">]<span>‎</span>[</span></td><td>   U+200E</td></tr>

<tr><td>RIGHT-TO-LEFT MARK</td><td><span class="b">]<span>‏</span>[</span></td><td>   U+200F</td></tr>

<tr><td>NARROW NO-BREAK SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+202F</td></tr>

<tr><td>MEDIUM MATHEMATICAL SPACE</td><td><span class="b">]<span> </span>[</span></td><td>   U+205F</td></tr>

<tr><td>WORD JOINER</td><td><span class="b">]<span>⁠</span>[</span></td><td>   U+2060</td></tr>

<tr><td>FUNCTION APPLICATION</td><td><span class="b">]<span>⁡</span>[</span></td><td>   U+2061</td></tr>

<tr><td>INVISIBLE TIMES</td><td><span class="b">]<span>⁢</span>[</span></td><td>   U+2062</td></tr>

<tr><td>INVISIBLE SEPARATOR</td><td><span class="b">]<span>⁣</span>[</span></td><td>   U+2063</td></tr>

<tr><td>INVISIBLE PLUS</td><td><span class="b">]<span>⁤</span>[</span></td><td>   U+2064</td></tr>

<tr><td>INHIBIT SYMMETRIC SWAPPING</td><td><span class="b">]<span>⁪</span>[</span></td><td>   U+206A</td></tr>

<tr><td>ACTIVATE SYMMETRIC SWAPPING</td><td><span class="b">]<span>⁫</span>[</span></td><td>   U+206B</td></tr>

<tr><td>INHIBIT ARABIC FORM SHAPING</td><td><span class="b">]<span>⁬</span>[</span></td><td>   U+206C</td></tr>

<tr><td>ACTIVATE ARABIC FORM SHAPING</td><td><span class="b">]<span>⁭</span>[</span></td><td>   U+206D</td></tr>

<tr><td>NATIONAL DIGIT SHAPES</td><td><span class="b">]<span>⁮</span>[</span></td><td>   U+206E</td></tr>

<tr><td>NOMINAL DIGIT SHAPES</td><td><span class="b">]<span>⁯</span>[</span></td><td>   U+206F</td></tr>

<tr><td>IDEOGRAPHIC SPACE</td><td><span class="b">]<span>　</span>[</span></td><td>   U+3000</td></tr>

<tr><td>BRAILLE PATTERN BLANK</td><td><span class="b">]<span>⠀</span>[</span></td><td>   U+2800</td></tr>

<tr><td>HANGUL FILLER</td><td><span class="b">]<span>ㅤ</span>[</span></td><td>   U+3164</td></tr>

<tr><td>ZERO WIDTH NO-BREAK SPACE</td><td><span class="b">]<span>﻿</span>[</span></td><td>   U+FEFF</td></tr>

<tr><td>HALFWIDTH HANGUL FILLER</td><td><span class="b">]<span>ﾠ</span>[</span></td><td>   U+FFA0</td></tr>

<tr><td>KAITHI VOWEL SIGN I</td><td><span class="b">]<span>𑂱</span>[</span></td><td>  U+110B1</td></tr>

<tr><td>SHORTHAND FORMAT LETTER OVERLAP</td><td><span class="b">]<span>𛲠</span>[</span></td><td>  U+1BCA0</td></tr>

<tr><td>SHORTHAND FORMAT CONTINUING OVERLAP</td><td><span class="b">]<span>𛲡</span>[</span></td><td>  U+1BCA1</td></tr>

<tr><td>SHORTHAND FORMAT DOWN STEP</td><td><span class="b">]<span>𛲢</span>[</span></td><td>  U+1BCA2</td></tr>

<tr><td>SHORTHAND FORMAT UP STEP</td><td><span class="b">]<span>𛲣</span>[</span></td><td>  U+1BCA3</td></tr>

<tr><td>MUSICAL SYMBOL NULL NOTEHEAD</td><td><span class="b">]<span>𝅙</span>[</span></td><td>  U+1D159</td></tr>

<tr><td>MUSICAL SYMBOL BEGIN BEAM</td><td><span class="b">]<span>𝅳</span>[</span></td><td>  U+1D173</td></tr>

<tr><td>MUSICAL SYMBOL END BEAM</td><td><span class="b">]<span>𝅴</span>[</span></td><td>  U+1D174</td></tr>

<tr><td>MUSICAL SYMBOL BEGIN TIE</td><td><span class="b">]<span>𝅵</span>[</span></td><td>  U+1D175</td></tr>

<tr><td>MUSICAL SYMBOL END TIE</td><td><span class="b">]<span>𝅶</span>[</span></td><td>  U+1D176</td></tr>

<tr><td>MUSICAL SYMBOL BEGIN SLUR</td><td><span class="b">]<span>𝅷</span>[</span></td><td>  U+1D177</td></tr>

<tr><td>MUSICAL SYMBOL END SLUR</td><td><span class="b">]<span>𝅸</span>[</span></td><td>  U+1D178</td></tr>

<tr><td>MUSICAL SYMBOL BEGIN PHRASE</td><td><span class="b">]<span>𝅹</span>[</span></td><td>  U+1D179</td></tr>

<tr><td>MUSICAL SYMBOL END PHRASE</td><td><span class="b">]<span>𝅺</span>[</span></td><td>  U+1D17A</td></tr></table>

### Line Breaks / Separators

<table><tr><th>Name</th><th>Character</th><th>Codepoint</th></tr><tr><td>LINE FEED</td><td><span class="b">]<span>
</span>[</span></td><td>   U+000A</td></tr>

<tr><td>LINE TABULATION</td><td><span class="b">]<span></span>[</span></td><td>   U+000B</td></tr>

<tr><td>FORM FEED</td><td><span class="b">]<span></span>[</span></td><td>   U+000C</td></tr>

<tr><td>CARRIAGE RETURN</td><td><span class="b">]<span></span>[</span></td><td>   U+000D</td></tr>

<tr><td>NEXT LINE</td><td><span class="b">]<span></span>[</span></td><td>   U+0085</td></tr>

<tr><td>LINE SEPARATOR</td><td><span class="b">]<span> </span>[</span></td><td>   U+2028</td></tr>

<tr><td>PARAGRAPH SEPARATOR</td><td><span class="b">]<span> </span>[</span></td><td>   U+2029</td></tr></table>