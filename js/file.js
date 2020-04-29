function showMore()
{
    if ($('.threedots').css('display')=='none')
    {
        //already showing, we hide
            $('.threedots').show();
            $('.full_desc').hide();
    }
    else
    {
            //show more
            $('.threedots').hide();
            $('.full_desc').show();

    }


}
function showMore2()
{
    if ($('.threedots1').css('display')=='none')
    {
        //already showing, we hide
            $('.threedots1').show();
            $('.full_desc1').hide();
    }
    else
    {
            //show more
            $('.threedots1').hide();
            $('.full_desc1').show();

    }


}
function showMore3()
{
    if ($('.threedots3').css('display')=='none')
    {
        //already showing, we hide
            $('.threedots3').show();
            $('.full_desc3').hide();
    }
    else
    {
            //show more
            $('.threedots3').hide();
            $('.full_desc3').show();

    }


}
function showMore4()
{
    if ($('.threedots4').css('display')=='none')
    {
        //already showing, we hide
            $('.threedots4').show();
            $('.full_desc4').hide();
    }
    else
    {
            //show more
            $('.threedots4').hide();
            $('.full_desc4').show();

    }


}
function showMoreG()
{
    if ($('.threedotsG').css('display')=='none')
    {
        //already showing, we hide
            $('.threedotsG').show();
            $('.full_descG').hide();
    }
    else
    {
            //show more
            $('.threedotsG').hide();
            $('.full_descG').show();

    }


}
function showMoreL()
{
    if ($('.threedotsL').css('display')=='none')
    {
        //already showing, we hide
            $('.threedotsL').show();
            $('.full_descL').hide();
    }
    else
    {
            //show more
            $('.threedotsL').hide();
            $('.full_descL').show();

    }


}
function showMoreE()
{
    if ($('.threedotsE').css('display')=='none')
    {
        //already showing, we hide
            $('.threedotsE').show();
            $('.full_descE').hide();
    }
    else
    {
            //show more
            $('.threedotsE').hide();
            $('.full_descE').show();

    }


}
function showMoreT()
{
    if ($('.threedotsT').css('display')=='none')
    {
        //already showing, we hide
            $('.threedotsT').show();
            $('.full_descT').hide();
    }
    else
    {
            //show more
            $('.threedotsT').hide();
            $('.full_descT').show();

    }


}
function showMoreU()
{
    if ($('.threedotsU').css('display')=='none')
    {
        //already showing, we hide
            $('.threedotsU').show();
            $('.full_descU').hide();
    }
    else
    {
            //show more
            $('.threedotsU').hide();
            $('.full_descU').show();

    }


}
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 40,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}