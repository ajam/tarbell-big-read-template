/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var BIGREAD = BIGREAD || {}
BIGREAD.PageScrolled = {
  "25": false,
  "50": false,
  "75": false,
  "100": false
}


function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function trackScroll() {
  var scrollTop = $('body').scrollTop();
  var height = $('#content-container').height();
  var percentScrolled = scrollTop / height;

  if (!BIGREAD.PageScrolled['25']) {
    if (percentScrolled >= 0.25 && percentScrolled < 0.5) {
      BigreadAnalytics.completed('25%');
      BIGREAD.PageScrolled['25'] = true;
    }
  }

  if (!BIGREAD.PageScrolled['50']) {
    if (percentScrolled >= 0.5 && percentScrolled < 0.75) {
      BigreadAnalytics.completed('50%');
      BIGREAD.PageScrolled['50'] = true;
    }
  }

  if (!BIGREAD.PageScrolled['75']) {
    if (percentScrolled >= 0.75 && percentScrolled < 1) {
      BigreadAnalytics.completed('75%');
      BIGREAD.PageScrolled['75'] = true;
    }
  }

  if (!BIGREAD.PageScrolled['100']) {
    if (percentScrolled >= 0.95) {
      BigreadAnalytics.completed('100%');
      BIGREAD.PageScrolled['100'] = true;
    }
  }

}

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(window).scroll(debounce(trackScroll, 250));

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// magnific Popup having conflict with bootstrap layout
// $('.expand-image').magnificPopup({
//     type:'image',
//     verticalFit: true,
//     closeOnContentClick: true,
//     closeBtnInside: true
// });

$("img.ajmint-unveil").unveil($(window).height()*2, function() {
    $(this).load(function() {
        this.style.opacity = 1;
    });
});


