var tl;
function onLoad() {

  var eventSource = new Timeline.DefaultEventSource();
  //Generate 50 random events up to 20 days in the past or the future
  /*
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
  }*/
  var dateEvent = new Date();
  var curdate = "Fri, 27 Nov 2009 2:25:00 EST"
  var dt = Date.parse(curdate)
  console.log("dateEvent.getTime(): ", dateEvent.getTime())
  dateEvent.setTime(dt);
  var evt = new Timeline.DefaultEventSource.Event(
     dateEvent, //start
     dateEvent, //end
     dateEvent, //latestStart
     dateEvent, //earliestEnd
     true, //instant
     "Woody hits hydrant.  uh oh :( ",
     "At 2:25 a.m. Woods backs out of his driveway in a gated community near Orlando, Fla., and his Cadillac" 
     +"SUV strikes a fire hydrant and hits a neighbor's tree. He is taken by ambulance to a local hospital."
     +"It's almost 12 hours before the Florida Highway Patrol issues a report, saying Woods was 'seriously' "
     +"hurt in a car accident. News bulletins spread worldwide. In the afternoon, Woods' website issues a terse" 
     +"statement saying he is in 'good condition,' after being released from the hospital. Later, a local police chief says"
     +"Woods' wife, Elin, used a golf club to smash the back window to get"
     +"Woods out of his SUV and that he had cuts in his lips, blood in his mouth and was in and out of consciousness when"
     +"officers arrived. In the evening troopers come to Woods' home to talk to him, but his wife tells them Woods is" 
     +"resting and asks them to return Saturday. FHP says alcohol was not a factor in the accident. "  //description
     /* */
  );
  eventSource.add(evt);
  var dateEvent = new Date();
  var curdate = "Sat, 28 Nov 2009 12:25:00 EST"
  var dt = Date.parse(curdate)
  console.log("dateEvent.getTime(): ", dateEvent.getTime())
  dateEvent.setTime(dt);
  var evt = new Timeline.DefaultEventSource.Event(
     dateEvent, //start
     dateEvent, //end
     dateEvent, //latestStart
     dateEvent, //earliestEnd
     true, //instant
     "Tiger silent",
     "Woods postpones his interview with police and reschedules it for Sunday. FHP says Woods' SUV sustained up to $8,000 in damage.  There is widespread speculation in the news media and on the Internet on what precipitated the accident, but no complete account emerges. Woods is scheduled to hold a news conference Tuesday at his charity tournament in Thousand Oaks, but officials don't know if he will play in the event."  //description
     /* */
  );
  eventSource.add(evt);
  
  var dateEvent = new Date();
  var curdate = "Sun, 29 Nov 2009 3:32:00 EST"
  var dt = Date.parse(curdate)
  console.log("dateEvent.getTime(): ", dateEvent.getTime())
  dateEvent.setTime(dt);
  var evt = new Timeline.DefaultEventSource.Event(
     dateEvent, //start
     dateEvent, //end
     dateEvent, //latestStart
     dateEvent, //earliestEnd
     true, //instant
     "Leave me alone, media!",
     "Woods' attorney says the golfer is not available to talk to police. On his website Woods calls the accident 'embarrassing to my family and me' and says, 'this is a private matter and I want to keep it that way.' A transcript of a 911 call, made by a neighbor, is released, saying Woods was on the ground after the accident, unconscious but breathing.  A few days before the accident, the National Enquirer publishes a story alleging Woods was seeing a New York club hostess; on Sunday the woman denied having an affair."  //description
     /* */
  );
  eventSource.add(evt);
  
  var dateEvent = new Date();
  var curdate = "Mon, 30 Nov 2009 3:32:00 EST"
  var dt = Date.parse(curdate)
  console.log("dateEvent.getTime(): ", dateEvent.getTime())
  dateEvent.setTime(dt);
  var evt = new Timeline.DefaultEventSource.Event(
     dateEvent, //start
     dateEvent, //end
     dateEvent, //latestStart
     dateEvent, //earliestEnd
     true, //instant
     "Woody WD's",
     "Woods on his website says he's withdrawing from his charity tournament, citing injuries from the accident. He also cancels his Tuesday news conference. Speculation on the Internet and in the media continues about Woods having an affair and arguing with his wife."  //description
     /* */
  );
  eventSource.add(evt);
  
  var dateEvent = new Date();
  var curdate = "Tues, 31 Nov 2009 11:45:00 EST"
  var dt = Date.parse(curdate)
  console.log("dateEvent.getTime(): ", dateEvent.getTime())
  dateEvent.setTime(dt);
  var evt = new Timeline.DefaultEventSource.Event(
     dateEvent, //start
     dateEvent, //end
     dateEvent, //latestStart
     dateEvent, //earliestEnd
     true, //instant
     "$164 fine",
     "Woods is cited for careless driving and given a $164 fine, but the FHP does not file criminal charges and closes its investigation. An attorney for the neighbors who called 911 said Woods did not appear to be driving under the influence and showed no signs of having been in a fight, and that Woods' wife was kneeling beside her husband at the accident scene, upset about his injuries."
     /* */
  );
  eventSource.add(evt);
  
  //create the timeline
  var bandInfos = [
    Timeline.createBandInfo({
        trackGap:       0.8,
        width:          "70%", 
        intervalUnit:   Timeline.DateTime.DAY, 
        intervalPixels: 50,
        eventSource: eventSource
    }),
    Timeline.createBandInfo({
        showEventText:  false,
        trackHeight:    0.9,
        trackGap:       0.2,
        width:          "30%", 
        intervalUnit:   Timeline.DateTime.WEEK, 
        intervalPixels: 100,
        eventSource: eventSource
    })
  ];
  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;
  tl = Timeline.create(document.getElementById("tiger-timeline"), bandInfos);

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