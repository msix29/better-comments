# Better Comments

The Better Comments extension will help you create more human-friendly comments in your code.
With this extension, you will be able to categorise your annotations into:

* Alerts
* Queries
* TODOs
* Highlights
* Commented out code can also be styled to make it clear the code shouldn't be there
* Any other comment styles you'd like can be specified in the settings

![Annotated code](images/better-comments.PNG)

## Configuration

This extension can be configured in User Settings or Workspace settings.

`"better-comments-edited.multilineComments": true`
 This setting will control whether multiline comments are styled using the annotation tags.
 When false, multiline comments will be presented without decoration.

`"better-comments-edited.highlightPlainText": false`
This setting will control whether comments in a plain text file are styled using the annotation tags.
When true, the tags (defaults: `! * ? //`) will be detected if they're the first character on a line.

`better-comments-edited.tags`
The tags are the characters or sequences used to mark a comment for decoration.
The default 5 can be modified to change the colors, and more can be added.

```json
"better-comments-edited.tags": [
{
    "tag": "!",
    "darkModeColor": "#FF2D00",
    "lightModeColor": "#FF2D00",
    "strikethrough": false,
    "underline": false,
    "lightModeBackgroundColor": "transparent",
    "darkModeBackgroundColor": "transparent",
    "bold": false,
    "italic": false
},
{
    "tag": "?",
    "darkModeColor": "#3498DB",
    "lightModeColor": "#3498DB",
    "strikethrough": false,
    "underline": false,
    "lightModeBackgroundColor": "transparent",
    "darkModeBackgroundColor": "transparent",
    "bold": false,
    "italic": false
},
{
    "tag": "//",
    "lightModeColor": "#474747",
    "darkModeColor": "#dbdbdb",
    "strikethrough": true,
    "underline": false,
    "lightModeBackgroundColor": "transparent",
    "darkModeBackgroundColor": "transparent",
    "bold": false,
    "italic": false
},
{
    "tag": "todo",
    "darkModeColor": "#FFFFFF",
    "lightModeColor": "#000000",
    "strikethrough": false,
    "underline": false,
    "lightModeBackgroundColor": "transparent",
    "darkModeBackgroundColor": "transparent",
    "bold": true,
    "italic": false
},
{
    "tag": "*",
    "darkModeColor": "#98C379",
    "lightModeColor": "#98C379",
    "strikethrough": false,
    "underline": false,
    "lightModeBackgroundColor": "transparent",
    "darkModeBackgroundColor": "transparent",
    "bold": false,
    "italic": false
}
]
```

## Supported Languages

* Ada
* AL
* Apex
* AsciiDoc
* BrightScript
* C
* C#
* C++
* ColdFusion
* Clojure
* COBOL
* CoffeeScript
* CSS
* Dart
* Dockerfile
* Elixir
* Elm
* Erlang
* F#
* Fortran
* gdscript
* GenStat
* Go
* GraphQL
* Groovy
* Haskell
* Haxe
* HiveQL
* HTML
* Java
* JavaScript
* JavaScript React
* JSON with comments
* Julia
* Kotlin
* LaTex (inlc. Bibtex/Biblatex)
* Less
* Lisp
* Lua
* Makefile
* Markdown
* Nim
* MATLAB
* Objective-C
* Objective-C++
* Pascal
* Perl
* Perl 6
* PHP
* Pig
* PlantUML
* PL/SQL
* PowerShell
* Puppet
* Python
* R
* Racket
* Ruby
* Rust
* SAS
* Sass
* Scala
* SCSS
* ShaderLab
* ShellScript
* SQL
* STATA
* Stylus
* Svelte
* Swift
* Tcl
* Terraform
* Twig
* TypeScript
* TypeScript React
* Verilog
* Visual Basic
* Vue.js
* XML
* YAML
