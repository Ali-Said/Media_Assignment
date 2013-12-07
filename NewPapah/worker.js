function emulateMessage (vVal) {
    return eval("(" + JSON.stringify(vVal) + ")");
}
 
  self.postMessage("ho!"); 
  importScripts('http://www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.js');
  self.postMessage("hi!");
  importScripts('https://www.google.com/jsapi');
  self.postMessage("he!");
  // Create a feed instance that will grab Digg's feed.
  var feed = new google.feeds.Feed("http://rss.cnn.com/rss/edition.rss");

  // Calling load sends the request off.  It requires a callback function.

  feed.setNumEntries(7);
  feed.load(feedLoaded);

//google.load("feeds", "1");

// Our callback function, for when a feed is loaded.
function feedLoaded(result) {
  if (!result.error) {
  // Grab the container we will put the results into
  //var links = document.getElementById("links");  
  //alert(result.feed.entries.length);
  for (var i = 0; i < result.feed.entries.length; i++) {
      
      var toIndex = {
          "title": entry.title,
          "link": entry.link,
          "content":entry.content
      };
      alert(typeof toIndex); // object
      alert(typeof emulateMessage(toIndex)); // object
      postMessage("I\'m working before postMessage(\'ali\').");

      onmessage = function (oEvent) {
        postMessage("Hi " + oEvent.data);
    };

    }
    // Loop through the feeds, putting the titles onto the page.
    // Check out the result object for a list of properties returned in each entry.
    // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON
  
  }
}
/*
function OnLoad() {
  self.postMessage("ho!");
  importScripts('https://www.google.com/jsapi');
  importScripts('http://www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.js');
   self.postMessage("hi!");
  // Create a feed instance that will grab Digg's feed.
  var feed = new google.feeds.Feed("http://rss.cnn.com/rss/edition.rss");

  // Calling load sends the request off.  It requires a callback function.

  feed.setNumEntries(7);
  feed.load(feedLoaded);
}

//google.setOnLoadCallback(OnLoad);

self.addEventListener("message", function(e){
    var a = 5;
    importScripts("script2.js");
    self.postMessage(self.a);
})*/