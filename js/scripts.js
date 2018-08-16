$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var inputSentence = $("#original-text").val();
    inputSentence = inputSentence.toLowerCase().replace(/[^A-z0-9]/g, "");
    var sentence = inputSentence.split("");
    var area = inputSentence.length;
    var side = Math.ceil(Math.sqrt(area)); //array length
    var cryptoMatrix = [];
    var outputSentence = [];

    var i = 0;

    for(var r = 0; r < side; r++){
          for(var c = 0; c < side; c++){
            cryptoMatrix[[r,c]] = inputSentence[i];
            i++;
          }
        }

    for(var r = 0; r < side; r++){
          for(var c = 0; c < side; c++){
            outputSentence.push(cryptoMatrix[[c,r]]);
            i++;
          }
        };

      outputSentence.toString();
      // outputSentence.replace(/(.{5})/g," ");

      console.log(outputSentence);





  });
});
