/* globals cheet: true, $: false */

'use strict';

console.log('==============CM42==============');
console.log('konami code: ↑ ↑ ↓ ↓ ← → ← → b a');
console.log('================================');

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $('body').append('<div class="cheet"></div>');
  setTimeout(function () {
    $('.cheet').toggleClass('cheet--without-gif');
    setTimeout(function () {
      $('.cheet').remove();
    }, 1000);
  }, 4000);
});

$(document).ready(function(){
  $('form').submit(function(e) {
    $(".result").text("deu certo ;)");
  });
});
