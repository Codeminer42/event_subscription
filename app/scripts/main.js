/* globals cheet: true, $: false */

'use strict';

$(document).ready(function() {
  console.log('@bernardo left an easter egg here 😶');
  console.log('↑ ↑ ↓ ↓ ← → ← → b a');

  cheet('↑ ↑ ↓ ↓ ← → ← → b a', function() {
    $('body').append('<div class="cheet"></div>');
    setTimeout(function() {
      $('.cheet').toggleClass('cheet--without-gif');
      setTimeout(function() {
        $('.cheet').remove();
      }, 1000);
    }, 4000);
  });

  $('form').submit(function() {
    $('.subscribe__success__name').html($('#subscribeName').val());
    $('.subscribe__form, .subscribe__success').toggle();
  });

  $('.subscribe__success a').click(function(e) {
    e.preventDefault();

    $('#subscribeName, #subscribeEmail').val('');
    $('.subscribe__form, .subscribe__success').toggle();
  });
});
