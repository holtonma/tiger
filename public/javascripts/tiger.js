var tl;
 function onLoad() {
   var eventSource = new Timeline.DefaultEventSource(0);
   
   var theme = Timeline.ClassicTheme.create();
   theme.event.bubble.width = 350;
   theme.event.bubble.height = 300;
   
   var eventSource = new Timeline.DefaultEventSource();
   //Generate 50 random events up to 20 days in the past or the future
   for(var i=0;i<50;i++) {
       var dateEvent = new Date();
       dateEvent.setTime(dateEvent.getTime() + ((Math.floor(Math.random()*41) - 20) * 24 * 60 * 60 * 1000));
       var evt = new Timeline.DefaultEventSource.Event(
          dateEvent, //start
          dateEvent, //end
          dateEvent, //latestStart
          dateEvent, //earliestEnd
          true, //instant
          "Event " + i, //text
          "Description for Event " + i //description
       );
       eventSource.add(evt);
   }
   
   var bandInfos = [
       Timeline.createBandInfo({
           width:          "80%", 
           intervalUnit:   Timeline.DateTime.DECADE, 
           intervalPixels: 200,
           eventSource:    eventSource,
           date:           d,
           theme:          theme,
           layout:         'original'  // original, overview, detailed
       }),
       Timeline.createBandInfo({
           width:          "20%", 
           intervalUnit:   Timeline.DateTime.CENTURY, 
           intervalPixels: 200,
           eventSource:    eventSource,
           date:           d,
           theme:          theme,
           layout:         'overview'  // original, overview, detailed
       })
   ];
   bandInfos[1].syncWith = 0;
   bandInfos[1].highlight = true;
   //tl = Timeline.create(document.getElementById("tiger-timeline"), bandInfos);
   //Timeline.loadXML("tiger.xml", function(xml, url) { eventSource.loadXML(xml, url); });
   tl = Timeline.create(document.getElementById("tl"), bandInfos, Timeline.HORIZONTAL);
     // Adding the date to the url stops browser caching of data during testing or if
     // the data source is a dynamic query...
     tl.loadJSON("test.js", function(json, url) {
         eventSource.loadJSON(json, url);
     });
 }

 var resizeTimerID = null;
 function onResize() {
     if (resizeTimerID == null) {
         resizeTimerID = window.setTimeout(function() {
             resizeTimerID = null;
             tl.layout();
         }, 500);
     }
 }
 
 
