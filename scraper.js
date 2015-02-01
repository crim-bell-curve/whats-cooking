var jsdom = require("jsdom");


var moment = require('moment');
console.log(moment().format('dddd'))
/*
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
*/