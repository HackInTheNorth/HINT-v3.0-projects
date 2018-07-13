neoFaces = [
  "Faces/cool_face.png",
  "Faces/cool2_face.png",
  "Faces/glasses_face.png",
  "Faces/tongue_face.png",
];

var cardImg = $(".card img");

for(var i = 0; i < cardImg.length; i++){
  cardImg[i].setAttribute("src", neoFaces[Math.floor((Math.random() * 4))]);
}




$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    var isShowing = false;
    console.log("Hello");
    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;
      $(this).find(".description").css("height", "120px");

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
      $(this).find(".description").css("height", "auto");
    }
    
  });
});

