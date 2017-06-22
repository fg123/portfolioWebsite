CodeMirror.defineSimpleMode("wendyscript", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
	  {regex: /\/\/.*/, token: "comment"},
    {regex: /\".[^"]*\"/, token: "string"},
    // You can match multiple tokens at once. Note that the captured
    // groups must span the whole string in this case
    // Rules are matched in the order in which they appear, so there is
    // no ambiguity between this one and the one above
    {regex: /\b(if|for|req|let|ret|dec|inc|struct|input|else|time|and|or)\b/,
     token: "keyword"},
//    {regex: /\b(this|base)\b/, token: "property" },
    {regex: /\b(init)\b/, token: "builtin" },
	{regex: /<([a-z]|[A-Z]|_|:)+>/, token: "variable-2"},
    {regex: /true|false|none|String|Bool|Number|Address|List/, token: "atom"},
    {regex: /([a-zA-Z_])[\1|\d]+/, token: "variable"},
    {regex: /\b\d*\.?\d+\b/,
      token: "number"},
    // A next property will cause the mode to move to a different state
    {regex: /[-+\\\/*=<>!~%]+/, token: "operator"},
 
    // You can embed other modes with the mode property. This rule
    // causes all code between << and >> to be highlighted with the XML
    // mode.
  ],
  // The multi-line comment state.
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  comment: [
    {regex: /.*?\*\//, token: "comment", next: "start"},
	{regex: /.*/, token: "comment"}
	],
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "//"
  }
});

