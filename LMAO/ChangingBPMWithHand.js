
  var handVelocitySum = 0;
  var OriginalBPMOfSong = 120;
  var velocityToRunSongAtOriginalBPM = 480;
  var bpmToRunSong;
  var hasHandBeenPutIn = false;

  var controller = new Leap.Controller({
                         enableGestures: true,
                         });
  controller.connect();




  function update () {
    var frame = controller.frame(0);

    if (frame.id){
      if (hasHandBeenPutIn == false){
        bpmToRunSong = OriginalBPMOfSong;

      }

      if(frame.hands.length > 0 && frame.hands[0].type == 'right'){
        //obtains the resultant velocity of the palm in each frame
        hasHandBeenPutIn = true;
        function obtainVelocity (hand) {
          var handX = hand.palmVelocity[0];
          var handY = hand.palmVelocity[1];
          handVelocity = Math.sqrt(handX * handX + handY * handY);
          return handVelocity;
        }
          var hand = controller.frame(0).hands[0];

          for (var i = 0; i < 30; i++) {



            //getting the hand object from that specified history frame
            var handFromFrame = controller.frame(i).hand(hand.id);
            var handVelocity = obtainVelocity(handFromFrame);
            handVelocitySum += handVelocity;
          }
          //rounding off to the nearest 10s.
          var handVelocityAvg = Math.round((handVelocitySum / 30) / 10) * 10;
          handVelocitySum = 0;

          //rounding off to the nearest 10s.
          
          bpmToRunSong = Math.round(((OriginalBPMOfSong * handVelocityAvg) / velocityToRunSongAtOriginalBPM) / 10) * 10;
          //console.log("bpm : ", fsbpm);
        }
        else {
          if (hasHandBeenPutIn){
            handVelocityAvg = 0;
            bpmToRunSong = 0;

          }
        }
    }
      if (isleapmotionin){
      fsbpm = bpmToRunSong;
      }
  }

  setInterval(update, 1000/60);

