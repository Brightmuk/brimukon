//show loader on page load
setTimeout(function(){
  $('.loader-bg').fadeToggle();
},1500);

$(document).bind("contextmenu",function(e) {
  e.preventDefault();
 });
 $(document).keydown(function(e){
     if(e.which === 123){
        return false;
     }
 });

$(document).ready(function(){
  // readTheme();
    $(window).scroll(function(){

      const distance = window.pageYOffset;
      //cog wheel rotation on scroll
      //layer one
      $(".cog-one").css('transform', `rotate(${distance/2 }deg)`);
      $(".cog-two").css('transform', `rotate(${distance }deg)`);
      $(".cog-three").css('transform', `rotate(${-distance/4 }deg)`);
      // layer two
      $(".cog-four").css('transform', `rotate(${distance/6 }deg)`);
      $(".cog-five").css('transform', `rotate(${-distance/12 }deg)`);
      $(".cog-six").css('transform', `rotate(${distance/6 }deg)`);

      //sticky nav
        if(this.scrollY > 20){
            scrollIndication();
  
            $('.navbar').addClass('sticky');
            $('.progress-container').css("display","block");
            $('.progress-bar').css("display","block");
        }else{
            $('.navbar').removeClass('sticky');
            $('.progress-container').css("display","none");
            $('.progress-bar').css("display","none");
        }
    });
    // toggle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    $('.navbar .menu li a').click(function(){
      $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
})

//scroll indicator
function scrollIndication() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
  }




//scroll back to top
var rootElement = document.documentElement
var scrollToTopBtn= document.querySelector(".back-top")
function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


// scrollToTopBtn.addEventListener("click", scrollToTop)


var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;

