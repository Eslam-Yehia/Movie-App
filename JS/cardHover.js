      export function cardHoverIn()
    {
      $(this).find($('.card-layer')).css({"opacity":"1","visibility":"visible"});
      $(this).find($('.card-layer h3')).removeClass('animate__slideOutLeft');
      $(this).find($('.card-layer h3')).addClass('animate__fadeInDown animate__delay-0s');
      $(this).find($('.card-layer .card-disc')).removeClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-disc')).addClass('animate__flipInX animate__delay-0s');
      $(this).find($('.card-layer .card-date')).removeClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-date')).addClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.card-layer .card-rate')).removeClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-rate')).addClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.cardImage img')).addClass("animate");
  }
 export function cardHoverOut()
    {
      $(this).find($('.card-layer')).css({"opacity":"0","visibility":"hidden"});
      $(this).find($('.card-layer h3')).removeClass('animate__fadeInDown animate__delay-0s');
      $(this).find($('.card-layer h3')).addClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-disc')).removeClass('animate__flipInX animate__delay-0s');
      $(this).find($('.card-layer .card-disc')).addClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-date')).removeClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.card-layer .card-date')).addClass('animate__slideOutLeft');
      $(this).find($('.card-layer .card-rate')).removeClass('animate__fadeInUp animate__delay-0s');
      $(this).find($('.card-layer .card-rate')).addClass('animate__slideOutLeft');
      
} 

