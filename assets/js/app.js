$(() => {
  
  var indexSlide = 1; //dot active

  function imagesNextSlide() {
    var imageActiveShow = $(".image-show");
    var nextImage = imageActiveShow.next();
    var dots = $(".dot");
    
    if(nextImage.length == 0){
        nextImage = $(".carousel-images a").first();
    }

    indexSlide++;

    if (indexSlide > $(".slide").length) {
      indexSlide=1;
    }

    dots.each(function() {//Remove class active dots
    $(this).removeClass("active").addClass("");
    });

    imageActiveShow.removeClass("image-show").addClass("image-hidden").css("z-index", -10);/*remove clase oculto*/
    nextImage.addClass("image-show").removeClass("image-hidden").css("z-index", 20);
    $(".carousel-images a").not([imageActiveShow, nextImage]).css("z-index", 1); 
    
    dots[indexSlide-1].className += " active";
  }
    
  $(".next").on("click",(event) =>{
    imagesNextSlide();
    event.preventDefault();
  });
      
  $(".previous").on("click",(event) =>{
    var imageActiveShow = $(".image-show");
    var nextImage = imageActiveShow.prev();
    
    if(nextImage.length == 0){
      nextImage = $(".carousel-images a").last();
    }
    
    imageActiveShow.removeClass("image-show").addClass("image-hidden").css("z-index", -10);
    nextImage.addClass("image-show").removeClass("image-hidden").css("z-index", 20);
    $(".carousel-images a").not([imageActiveShow, nextImage]).css("z-index", 1);
    e.preventDefault();
  });

  setInterval(imagesNextSlide, 4000);
});