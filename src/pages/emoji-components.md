---
layout: ../layouts/Layout.astro
title: Emoji Components [character construction]
---

# Emoji Components

<div class="prelude">Special Emoji codepoints to be combined to create Emoji sequences</div>

## Components for Keycaps

- Used for Emoji Keycap Sequences
- Should not have an Emoji presentation when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+0023</span></td><td><span class="c">#</span></td><td>NUMBER SIGN</td></tr>
<tr><td><span class="u">U+002A</span></td><td><span class="c">*</span></td><td>ASTERISK</td></tr>
<tr><td><span class="u">U+0030</span></td><td><span class="c">0</span></td><td>DIGIT ZERO</td></tr>
<tr><td><span class="u">U+0031</span></td><td><span class="c">1</span></td><td>DIGIT ONE</td></tr>
<tr><td><span class="u">U+0032</span></td><td><span class="c">2</span></td><td>DIGIT TWO</td></tr>
<tr><td><span class="u">U+0033</span></td><td><span class="c">3</span></td><td>DIGIT THREE</td></tr>
<tr><td><span class="u">U+0034</span></td><td><span class="c">4</span></td><td>DIGIT FOUR</td></tr>
<tr><td><span class="u">U+0035</span></td><td><span class="c">5</span></td><td>DIGIT FIVE</td></tr>
<tr><td><span class="u">U+0036</span></td><td><span class="c">6</span></td><td>DIGIT SIX</td></tr>
<tr><td><span class="u">U+0037</span></td><td><span class="c">7</span></td><td>DIGIT SEVEN</td></tr>
<tr><td><span class="u">U+0038</span></td><td><span class="c">8</span></td><td>DIGIT EIGHT</td></tr>
<tr><td><span class="u">U+0039</span></td><td><span class="c">9</span></td><td>DIGIT NINE</td></tr>
<tr><td><span class="u">U+20E3</span></td><td><span class="c">⃣</span></td><td>COMBINING ENCLOSING KEYCAP</td></tr></tbody></table>


## ZWJ: Zero-width Joiner

- Used for Emoji Zwj Sequences
- Is [ignorable (no visible glyph)](/ignorables) when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+200D</span></td><td><span class="c">‍</span></td><td>ZERO WIDTH JOINER</td></tr></tbody></table>


## Variations Selector 16

- VS16 (Emoji Presentation Selector) turns textual Emoji into Emoji Presentation
- See [Emoji or Text Presentation](/emoji-vs-text) and [Unqualified Emoji](/unqualified-emoji)
- Is [ignorable (no visible glyph)](/ignorables) when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+FE0F</span></td><td><span class="c">️</span></td><td>VARIATION SELECTOR-16</td></tr></tbody></table>


## Regional Indicatiors

- Used for Region Flags
- Unicode Standard: Should not have an Emoji presentation when used in isolation
- Practice: Often has an Emoji presentation when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+1F1E6</span></td><td><span class="c">🇦</span></td><td>REGIONAL INDICATOR SYMBOL LETTER A</td></tr>
<tr><td><span class="u">U+1F1E7</span></td><td><span class="c">🇧</span></td><td>REGIONAL INDICATOR SYMBOL LETTER B</td></tr>
<tr><td><span class="u">U+1F1E8</span></td><td><span class="c">🇨</span></td><td>REGIONAL INDICATOR SYMBOL LETTER C</td></tr>
<tr><td><span class="u">U+1F1E9</span></td><td><span class="c">🇩</span></td><td>REGIONAL INDICATOR SYMBOL LETTER D</td></tr>
<tr><td><span class="u">U+1F1EA</span></td><td><span class="c">🇪</span></td><td>REGIONAL INDICATOR SYMBOL LETTER E</td></tr>
<tr><td><span class="u">U+1F1EB</span></td><td><span class="c">🇫</span></td><td>REGIONAL INDICATOR SYMBOL LETTER F</td></tr>
<tr><td><span class="u">U+1F1EC</span></td><td><span class="c">🇬</span></td><td>REGIONAL INDICATOR SYMBOL LETTER G</td></tr>
<tr><td><span class="u">U+1F1ED</span></td><td><span class="c">🇭</span></td><td>REGIONAL INDICATOR SYMBOL LETTER H</td></tr>
<tr><td><span class="u">U+1F1EE</span></td><td><span class="c">🇮</span></td><td>REGIONAL INDICATOR SYMBOL LETTER I</td></tr>
<tr><td><span class="u">U+1F1EF</span></td><td><span class="c">🇯</span></td><td>REGIONAL INDICATOR SYMBOL LETTER J</td></tr>
<tr><td><span class="u">U+1F1F0</span></td><td><span class="c">🇰</span></td><td>REGIONAL INDICATOR SYMBOL LETTER K</td></tr>
<tr><td><span class="u">U+1F1F1</span></td><td><span class="c">🇱</span></td><td>REGIONAL INDICATOR SYMBOL LETTER L</td></tr>
<tr><td><span class="u">U+1F1F2</span></td><td><span class="c">🇲</span></td><td>REGIONAL INDICATOR SYMBOL LETTER M</td></tr>
<tr><td><span class="u">U+1F1F3</span></td><td><span class="c">🇳</span></td><td>REGIONAL INDICATOR SYMBOL LETTER N</td></tr>
<tr><td><span class="u">U+1F1F4</span></td><td><span class="c">🇴</span></td><td>REGIONAL INDICATOR SYMBOL LETTER O</td></tr>
<tr><td><span class="u">U+1F1F5</span></td><td><span class="c">🇵</span></td><td>REGIONAL INDICATOR SYMBOL LETTER P</td></tr>
<tr><td><span class="u">U+1F1F6</span></td><td><span class="c">🇶</span></td><td>REGIONAL INDICATOR SYMBOL LETTER Q</td></tr>
<tr><td><span class="u">U+1F1F7</span></td><td><span class="c">🇷</span></td><td>REGIONAL INDICATOR SYMBOL LETTER R</td></tr>
<tr><td><span class="u">U+1F1F8</span></td><td><span class="c">🇸</span></td><td>REGIONAL INDICATOR SYMBOL LETTER S</td></tr>
<tr><td><span class="u">U+1F1F9</span></td><td><span class="c">🇹</span></td><td>REGIONAL INDICATOR SYMBOL LETTER T</td></tr>
<tr><td><span class="u">U+1F1FA</span></td><td><span class="c">🇺</span></td><td>REGIONAL INDICATOR SYMBOL LETTER U</td></tr>
<tr><td><span class="u">U+1F1FB</span></td><td><span class="c">🇻</span></td><td>REGIONAL INDICATOR SYMBOL LETTER V</td></tr>
<tr><td><span class="u">U+1F1FC</span></td><td><span class="c">🇼</span></td><td>REGIONAL INDICATOR SYMBOL LETTER W</td></tr>
<tr><td><span class="u">U+1F1FD</span></td><td><span class="c">🇽</span></td><td>REGIONAL INDICATOR SYMBOL LETTER X</td></tr>
<tr><td><span class="u">U+1F1FE</span></td><td><span class="c">🇾</span></td><td>REGIONAL INDICATOR SYMBOL LETTER Y</td></tr>
<tr><td><span class="u">U+1F1FF</span></td><td><span class="c">🇿</span></td><td>REGIONAL INDICATOR SYMBOL LETTER Z</td></tr></tbody></table>


## Skin Tone Modifiers

- Used to modifiy base Emoji
- Should have an Emoji presentation when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+1F3FB</span></td><td><span class="c">🏻</span></td><td>EMOJI MODIFIER FITZPATRICK TYPE-1-2</td></tr>
<tr><td><span class="u">U+1F3FC</span></td><td><span class="c">🏼</span></td><td>EMOJI MODIFIER FITZPATRICK TYPE-3</td></tr>
<tr><td><span class="u">U+1F3FD</span></td><td><span class="c">🏽</span></td><td>EMOJI MODIFIER FITZPATRICK TYPE-4</td></tr>
<tr><td><span class="u">U+1F3FE</span></td><td><span class="c">🏾</span></td><td>EMOJI MODIFIER FITZPATRICK TYPE-5</td></tr>
<tr><td><span class="u">U+1F3FF</span></td><td><span class="c">🏿</span></td><td>EMOJI MODIFIER FITZPATRICK TYPE-6</td></tr></tbody></table>


## Hair Components

- Used to modifiy base Emoji
- Should have an Emoji presentation when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+1F9B0</span></td><td><span class="c">🦰</span></td><td>EMOJI COMPONENT RED HAIR</td></tr>
<tr><td><span class="u">U+1F9B1</span></td><td><span class="c">🦱</span></td><td>EMOJI COMPONENT CURLY HAIR</td></tr>
<tr><td><span class="u">U+1F9B2</span></td><td><span class="c">🦲</span></td><td>EMOJI COMPONENT BALD</td></tr>
<tr><td><span class="u">U+1F9B3</span></td><td><span class="c">🦳</span></td><td>EMOJI COMPONENT WHITE HAIR</td></tr></tbody></table>


## Tags

- Used for  Emoji Tag Sequences: Subdivision Flags
- Is [ignorable (no visible glyph)](/ignorables) when used in isolation

<table class="table-20-20-X table-last-left"><thead><tr><th>Codepoint</th><th>Emoji / Character</th><th>Name</th></tr></thead><tbody><tr><td><span class="u">U+E0030</span></td><td><span class="c">󠀰</span></td><td>TAG DIGIT ZERO</td></tr>
<tr><td><span class="u">U+E0031</span></td><td><span class="c">󠀱</span></td><td>TAG DIGIT ONE</td></tr>
<tr><td><span class="u">U+E0032</span></td><td><span class="c">󠀲</span></td><td>TAG DIGIT TWO</td></tr>
<tr><td><span class="u">U+E0033</span></td><td><span class="c">󠀳</span></td><td>TAG DIGIT THREE</td></tr>
<tr><td><span class="u">U+E0034</span></td><td><span class="c">󠀴</span></td><td>TAG DIGIT FOUR</td></tr>
<tr><td><span class="u">U+E0035</span></td><td><span class="c">󠀵</span></td><td>TAG DIGIT FIVE</td></tr>
<tr><td><span class="u">U+E0036</span></td><td><span class="c">󠀶</span></td><td>TAG DIGIT SIX</td></tr>
<tr><td><span class="u">U+E0037</span></td><td><span class="c">󠀷</span></td><td>TAG DIGIT SEVEN</td></tr>
<tr><td><span class="u">U+E0038</span></td><td><span class="c">󠀸</span></td><td>TAG DIGIT EIGHT</td></tr>
<tr><td><span class="u">U+E0039</span></td><td><span class="c">󠀹</span></td><td>TAG DIGIT NINE</td></tr>
<tr><td><span class="u">U+E0061</span></td><td><span class="c">󠁡</span></td><td>TAG LATIN SMALL LETTER A</td></tr>
<tr><td><span class="u">U+E0062</span></td><td><span class="c">󠁢</span></td><td>TAG LATIN SMALL LETTER B</td></tr>
<tr><td><span class="u">U+E0063</span></td><td><span class="c">󠁣</span></td><td>TAG LATIN SMALL LETTER C</td></tr>
<tr><td><span class="u">U+E0064</span></td><td><span class="c">󠁤</span></td><td>TAG LATIN SMALL LETTER D</td></tr>
<tr><td><span class="u">U+E0065</span></td><td><span class="c">󠁥</span></td><td>TAG LATIN SMALL LETTER E</td></tr>
<tr><td><span class="u">U+E0066</span></td><td><span class="c">󠁦</span></td><td>TAG LATIN SMALL LETTER F</td></tr>
<tr><td><span class="u">U+E0067</span></td><td><span class="c">󠁧</span></td><td>TAG LATIN SMALL LETTER G</td></tr>
<tr><td><span class="u">U+E0068</span></td><td><span class="c">󠁨</span></td><td>TAG LATIN SMALL LETTER H</td></tr>
<tr><td><span class="u">U+E0069</span></td><td><span class="c">󠁩</span></td><td>TAG LATIN SMALL LETTER I</td></tr>
<tr><td><span class="u">U+E006A</span></td><td><span class="c">󠁪</span></td><td>TAG LATIN SMALL LETTER J</td></tr>
<tr><td><span class="u">U+E006B</span></td><td><span class="c">󠁫</span></td><td>TAG LATIN SMALL LETTER K</td></tr>
<tr><td><span class="u">U+E006C</span></td><td><span class="c">󠁬</span></td><td>TAG LATIN SMALL LETTER L</td></tr>
<tr><td><span class="u">U+E006D</span></td><td><span class="c">󠁭</span></td><td>TAG LATIN SMALL LETTER M</td></tr>
<tr><td><span class="u">U+E006E</span></td><td><span class="c">󠁮</span></td><td>TAG LATIN SMALL LETTER N</td></tr>
<tr><td><span class="u">U+E006F</span></td><td><span class="c">󠁯</span></td><td>TAG LATIN SMALL LETTER O</td></tr>
<tr><td><span class="u">U+E0070</span></td><td><span class="c">󠁰</span></td><td>TAG LATIN SMALL LETTER P</td></tr>
<tr><td><span class="u">U+E0071</span></td><td><span class="c">󠁱</span></td><td>TAG LATIN SMALL LETTER Q</td></tr>
<tr><td><span class="u">U+E0072</span></td><td><span class="c">󠁲</span></td><td>TAG LATIN SMALL LETTER R</td></tr>
<tr><td><span class="u">U+E0073</span></td><td><span class="c">󠁳</span></td><td>TAG LATIN SMALL LETTER S</td></tr>
<tr><td><span class="u">U+E0074</span></td><td><span class="c">󠁴</span></td><td>TAG LATIN SMALL LETTER T</td></tr>
<tr><td><span class="u">U+E0075</span></td><td><span class="c">󠁵</span></td><td>TAG LATIN SMALL LETTER U</td></tr>
<tr><td><span class="u">U+E0076</span></td><td><span class="c">󠁶</span></td><td>TAG LATIN SMALL LETTER V</td></tr>
<tr><td><span class="u">U+E0077</span></td><td><span class="c">󠁷</span></td><td>TAG LATIN SMALL LETTER W</td></tr>
<tr><td><span class="u">U+E0078</span></td><td><span class="c">󠁸</span></td><td>TAG LATIN SMALL LETTER X</td></tr>
<tr><td><span class="u">U+E0079</span></td><td><span class="c">󠁹</span></td><td>TAG LATIN SMALL LETTER Y</td></tr>
<tr><td><span class="u">U+E007A</span></td><td><span class="c">󠁺</span></td><td>TAG LATIN SMALL LETTER Z</td></tr>
<tr><td><span class="u">U+E007F</span></td><td><span class="c">󠁿</span></td><td>CANCEL TAG</td></tr></tbody></table>


<style>
h2 { margin-bottom: 0.5em; text-align: left;}
</style>
