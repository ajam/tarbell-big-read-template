(function(){

  window.BIGREAD = window.BIGREAD || {};

  $('.bigread-social-btn[data-type="twitter"]').click(function(e){
    BIGREAD.sendTweet(e);
    e.stopPropagation()
    return false
  });

  $('.bigread-social-btn[data-type="facebook"]').click(function(e){
    BIGREAD.sendFbShare(e);
  });

  $('.bigread-social-btn[data-type="gplus"]').click(function(e){
    BIGREAD.sendGplusShare(e);
  });

  $('.bigread-social-btn[data-type="reddit"]').click(function(e){
    BIGREAD.sendRedditShare(e);
  });


  BIGREAD.percentEncode = function(string){
    return string.replace(/#/g, '%23').replace(/,/g, '%2c').replace(/ /g, '%20')
  }

  /* Usage: $el.click( function(e) { BIGREAD.sendTweet(e) }) */
  // This function only needs e but if you want to pass in special text or a url hash, you can
  BIGREAD.sendTweet = function(e, text, route){
    var base_url = 'https://twitter.com/intent/tweet?url=' + ((!route) ? window.location.href : ('http://' + window.location.hostname + window.location.pathname + route));
    text = (text) ? text : BIGREAD_GLOBAL.twitterDescription;

    var tweet_text  = "&text=" + text,
        related     = "&related="+BIGREAD_GLOBAL.twitterSiteHandle,
        counter_url = "&counturl=" + window.location.hostname + window.location.pathname;

    var twitter_url = BIGREAD.percentEncode(base_url + tweet_text + related + counter_url);

    var settings = 'width=500,height=300,scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';
    
    window.open(twitter_url, 'Tweet', settings)
  }

  BIGREAD.sendFbShare = function(e){
    if ( BIGREAD_GLOBAL.ogAppId != "") { // if an app_id is available
      var base_url = 'http://www.facebook.com/dialog/feed',
          app_id   = '?app_id='+BIGREAD_GLOBAL.ogAppId,
          page_url = '&link=' + window.location.href;
      
      var description = "&description="+$('meta[property="og:description"]').attr('content'),
          redirect    = '&redirect_uri='+BIGREAD_GLOBAL.twitterDomain, // your Facebook app redirect URL
          image       = '&image='+$('meta[property="og:image"]').attr('content');

      var facebook_url = base_url + app_id + page_url + description + redirect + image;
          facebook_url = BIGREAD.percentEncode(facebook_url);
    } else { // if there is no app_id provided
      var base_url = 'http://www.facebook.com/sharer/sharer.php',
          page_url = '?u=' + encodeURIComponent(window.location.href);

      var facebook_url = base_url + page_url;
          facebook_url = BIGREAD.percentEncode(facebook_url);
    }

    var settings = 'width=900,height=450,scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';
    
    window.open(facebook_url, 'Share', settings);
  }  

  BIGREAD.sendRedditShare = function(e){
    var base_url = 'https://www.reddit.com/submit',
        page_url = '?url=' + window.location.href.replace(/index.html$/g, '').replace(/\/$/g, '').replace(/\?.*$/, '');

    var reddit_url = base_url + page_url;

    var composed_url = BIGREAD.percentEncode(reddit_url);
    var settings = 'width=600,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no';

    window.open(composed_url, 'Share', settings);
  }


}).call(this);