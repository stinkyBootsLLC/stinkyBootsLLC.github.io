
!function(e){e(".simpleslide100").each(function(){var i=e(this).find(".simpleslide100-item"),n=0;e(i).hide(),e(i[n]).show(),++n>=i.length&&(n=0),setInterval(function(){e(i).fadeOut(1e3),e(i[n]).fadeIn(1e3),++n>=i.length&&(n=0)},7e3)})}(jQuery);

