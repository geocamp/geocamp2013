/*
    Image Grid
*/


      $('#ri-grid').gridrotator({
        columns : 7,
        rows : 3
      });


/*
    Google Analytics Code
*/

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', '']);
      //Set Google analytics code
      _gaq.push(['_setDomainName', '']);
      //Set Google analytics code
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
      })();
    


/*
    Show latest tweets
*/
jQuery(function($) {
    $(".show-tweets").tweet({
        username: "geocamppt",
        page: 1,
        count: 10,
        loading_text: "loading ..."
    }).bind("loaded", function() {
        var ul = $(this).find(".tweet_list");
        var ticker = function() {
            setTimeout(function() {
                ul.find('li:first').animate( {marginTop: '-4em'}, 300, function() {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 7000);
        };
        ticker();
    });
});

/*
    Facebook like box
*/


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }
(document, 'script', 'facebook-jssdk'));

/*
    Tumblr ticker
*/

$(function() {
  
  // Call the plugin
  
  $('#main').tumblrNewsTicker({
    time: 5000,
    title:  '',
    blog: 'http://geocamppt.tumblr.com/'
  }); 
        
});

