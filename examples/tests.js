var o = [], t = [];

t[1] = { "self": "<table>{pnt}</table>",
         "pnt": "<tr><td>{pnt.x}</td><td>{pnt.y}</td></tr>" };
o[1] = { pnt: { x:2, y:3 }};

t[2] = { "self": "<table><tr>{$}</tr></table>",
         "self[*]": "<td>{$}</td>" };
o[2] = [ 1, 2 ];

t[3] = { "self": "<table>\n{$}\n</table>",
          "self[*]": "<tr>{$}</tr>\n",
          "self[*][*]": "<td>{$}</td>" };
o[3] = [[1,2],[3,4]];

t[4] = { "self": "<div>\n{p}\n</div>",
          "p": "<table><tr>{$}</tr></table>\n",
          "p[*]": "<td>{$.x}</td><td>{$.y}</td>" };
o[4] = {a:"hello", p:[{x:1,y:2},{x:3,y:4}]};

t[5] = { "self": "<a href=\"{uri}\" title='{title}'>{$.title}</a>" };
o[5] = { uri:"http://somewhere.org", title:"somewhere homepage" };

t[6] = { "menu": "<menu>\n  <header>{menu.header}</header>\n{menu.items}</menu>",
         "menu.items[*]": function(x){
                            return x ? "  <item action=\""+x.id+" id=\""+x.id+"\">"+(x.label||x.id)+"</li>\n" 
                                     : "  <separator/>\n";} };
o[6] = {"menu": {
          "header": "SVG Viewer",
          "items": [
            {"id": "Open"},
            {"id": "OpenNew", "label": "Open New"},
            null,
            {"id": "ZoomIn", "label": "Zoom In"},
            {"id": "ZoomOut", "label": "Zoom Out"},
            {"id": "OriginalView", "label": "Original View"},
            null,
            {"id": "Quality"},
            {"id": "Pause"},
            {"id": "Mute"},
            null,
            {"id": "Find", "label": "Find..."},
            {"id": "FindAgain", "label": "Find Again"},
            {"id": "Copy"},
            {"id": "CopyAgain", "label": "Copy Again"},
            {"id": "CopySVG", "label": "Copy SVG"},
            {"id": "ViewSVG", "label": "View SVG"},
            {"id": "ViewSource", "label": "View Source"},
            {"id": "SaveAs", "label": "Save As"},
            null,
            {"id": "Help"},
            {"id": "About", "label": "About Adobe CVG Viewer..."}
    ]}};

t[7] = { "self": "<p> {a} {b} {c} {d} </p>" };
o[7] = { a:false, b:null, d:true };

t[8] = { "self": "<p> {a} </p>",
         "a": function(x) {return x ? 'black' : 'white';} };
o[8] = { "a": true };

t[9] = { "A": "<div>{A.a1} and {A.a2}</div>" };
o[9] = { A : { a1: "a1", a2: "a2" },
         B : { b1: "b1", b2: "b2" } };

o[10] = { line: { p1: {x:2, y:3},
                    p2: {x:4, y:5} }};
t[10] = { "self": "<svg>{line}</svg>",
             "line": "<line x1=\"{$.p1.x}\" y1=\"{$.p1.y}\"" +
                           "x2=\"{$.p2.x}\" y2=\"{$.p2.y}\" />" };

o[11] = ["red", "green", "blue"];
t[11] = {"self": "<ul>\n{$}</ul>\n",
            "self[*]": "  <li>{$}</li>\n"};
o[12] = { color: "blue",
          closed: true,
          points: [[10,10],[20,10],[20,20],[10,20]] };
t[12] = { "self": "<svg><{closed} stroke=\"{color}\" points=\"{points}\" /></svg>",
          "closed": function(x){return x ? "polygon" : "polyline";}, 
          "points[*][*]": "{$} " };

o[13] = {"menu": {
  "id": "file",
  "value": "File:",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}};

t[13] = { "menu": "<menu id=\"{$.id}\" value=\"{$.value}\">\n"+
                  "  <popup>\n{$.popup.menuitem}  </popup>\n</menu>",
          "menu.popup.menuitem[*]": "    <menuitem value=\"{$.value}\""+
                                    "onclick=\"{$.onclick}\" />\n" };

o[14] = [{"u":"http://www.ericclapton.com/hello",
            "d":"Eric Clapton",
            "t":["guitarist","blues","rock"]},
           {"u":"http://www.bbking.com/",
            "d":"B.B. King : Official Site",
            "t":["guitarist","blues"]},
           {"u":"http://www.stevieraysbluesbar.com/",
            "d":"Louisville's House of Blues",
            "t":["guitarist","blues","rock"]}];

t[14] = { "self": "<ul>\n{$}</ul>",
          "self[*]": " <li>\n"+
                     "  <img style='position:absolute;display:none;'"+
                     "    width='16' height='16'\n"+
                     "    onload='showImage(this)' src='{@icon($.u)}'/>\n"+
                     "  <a style='margin-left:20px;' href='{$.u}'>{$.d}</a>\n"+
                     " </li>\n",
          "icon": function(x){return x.split('/').splice(0,3).join('/')+'/favicon.ico';}           
           };

t[15] = { "self": "<p> {$.a} </p>",
          "a": function(x){return x ? 'black' : 'white'} }
o[15] = { "a": true };

t[16] = { "self": "<p> {a}, {b}, {b.x} </p>",
          "b": "hello",
          "b.x": "" };
o[16] = { "a": false, "b": null };

t[17] = { "self": function(x){ return x.length; } }
o[17] = [ 1, 2, 1 ];

exports.o = o;
exports.t = t;
