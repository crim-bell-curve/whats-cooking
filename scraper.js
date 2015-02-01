var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var htmlparser = require('htmlparser2');

var jsdom = require("jsdom");

jsdom.env({
  url: "https://m.dining.wm.edu/images/WeeklyMenu_tcm904-29345.htm",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $("table #tuesday").each(function() {
      console.log($(this).text().trim());
    });
  }
});
