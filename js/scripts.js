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
          }
        };


      var result = outputSentence.join("");
      var answer = "";

      for(var p = 0; p < result.length; p+=5){
        var sub = result.substring(p, p+5);
        answer = answer.concat(sub + " ");
      };

      $("#message").html(answer);
      console.log(answer);
  });
});
