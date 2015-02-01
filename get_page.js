var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var htmlparser = require('htmlparser2');
/*
var text = fs.readFileSync('sadler.html');

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "script" && attribs.type === "text/javascript"){
            console.log("JS! Hooray!");
        }
    },
    ontext: function(text){
        console.log("-->", text);
    },
    onclosetag: function(tagname){
        if(tagname === "script"){
            console.log("That's it?!");
        }
    }
}, {decodeEntities: true});

parser.write(text);
parser.end();
*/

var jsdom = require("jsdom");

jsdom.env({
  url: "https://m.dining.wm.edu/images/WeeklyMenu_tcm904-34262.htm",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $(".brk").each(function() {
      console.log($(this).text().trim());
    });
  }
});

jsdom.env({
  url: "https://m.dining.wm.edu/images/WeeklyMenu_tcm904-34262.htm",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $(".lun").each(function() {
      console.log($(this).text().trim());
    });
  }
});

jsdom.env({
  url: "https://m.dining.wm.edu/images/WeeklyMenu_tcm904-34262.htm",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $(".din").each(function() {
      console.log($(this).text().trim());
    });
  }
});


jsdom.env({
  url: "https://m.dining.wm.edu/images/WeeklyMenu_tcm904-34262.htm",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $(".lat").each(function() {
      console.log($(this).text().trim());
    });
  }
});