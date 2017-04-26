// Scroll event : header
$(function(){
	// variables
	var lastScroll,
			scrollTop;
  //Keep track of last scroll
  lastScroll = 0;
  $(window).scroll(function(event){
      //Sets the current scroll position
      scrollTop = $(this).scrollTop();
      //Determines up-or-down scrolling
      if (scrollTop > lastScroll){
        $('.header').css("transform","translateY(-60px)");
      }
      else {
         //Replace this with your function call for upward-scrolling
        $('.header').css("transform","translateY(0px)");
      }
      //Updates scroll position
      lastScroll = scrollTop;
  });
});
