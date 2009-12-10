var tl;

var event_data =
{ "dateTimeFormat": "iso8601", 
  "events":[
    { 
      "start": "2009-03-10T06:00:00+00:00",
      "end": "2009-03-31T22:00:00+00:00",
      "instant": false,
      "title": "1", "color": "#7FFFD4",
      "textColor": "#000000",
      "caption": "1",
      "trackNum": 1,
      "classname": "special_event2 aquamarine",
      "description": "bar 1"
    }
  ]
};

 function onLoad() {
    var eventSource = new Timeline.DefaultEventSource();
    var theme = Timeline.ClassicTheme.create();
    theme.event.bubble.width = 350;
    theme.event.bubble.height = 300;
    
    //var eventSource = new Timeline.DefaultEventSource();
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
    
    //create the timeline
    var bandInfos = [
    Timeline.createBandInfo({
        trackGap:       0.2,
        width:          "70%", 
        intervalUnit:   Timeline.DateTime.DAY, 
        intervalPixels: 50,
        eventSource: eventSource
    }),
    Timeline.createBandInfo({
        showEventText:  false,
        trackHeight:    0.5,
        trackGap:       0.2,
        width:          "30%", 
        intervalUnit:   Timeline.DateTime.MONTH, 
        intervalPixels: 150,
        eventSource: eventSource
    })
    ];
    bandInfos[1].syncWith = 0;
    bandInfos[1].highlight = true;

    tl = Timeline.create(document.getElementById("tiger-timeline"), bandInfos);
    eventSource.loadJSON(event_data, document.location.href);
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
 
 
