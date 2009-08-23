#!/bin/sh

curl "http://goessner.net/download/prj/jsont/jsont.js" > lib/jsont.js
echo "\nexports.jsonT = jsonT;\n" >> lib/jsont.js
