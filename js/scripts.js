$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var inputSentence = $("#original-text").val();
    inputSentence = inputSentence.toLowerCase().replace(/[^A-z0-9]/g, "");
    var area = inputSentence.length;
    side = Math.ceil(Math.sqrt(area));
    console.log(side);
  });
});
