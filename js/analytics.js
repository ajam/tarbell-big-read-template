/*
 * Basic Google analytics wrapper
 *
 * If Google analytics is not configured, core trackEvent method acts as a noop.
 */

var BigreadAnalytics = (function () {
  // Allow GA methods to be called without sending anything
  var GAEnabled = false;

  // Global time tracking variables
  var slideStartTime =  new Date();
  var timeOnLastSlide = null;

  /*
   * Google Analytics
   */
  var setupGoogle = function(trackerID) {
    (function(i,s,o,g,r,a,m) {
      i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', trackerID, 'auto');
    ga('send', 'pageview');
  }

  var setupChartbeat = function(uid, domain) {
    window._sf_async_config = window._sf_async_config || {};
    /** CONFIGURATION START **/
    _sf_async_config.uid = uid;
    _sf_async_config.domain = domain;
    /** CONFIGURATION END **/
    (function(){
      function loadChartbeat() {
        window._sf_endpt=(new Date()).getTime();
        var e = document.createElement("script");
        e.setAttribute("language", "javascript");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src",
          (("https:" == document.location.protocol) ?
           "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" :
           "http://static.chartbeat.com/") +
          "js/chartbeat.js");
        document.body.appendChild(e);
      }
      var oldonload = window.onload;
      window.onload = (typeof window.onload != "function") ?
        loadChartbeat : function() { oldonload(); loadChartbeat(); };
    })();
  }

  /*
   * Event tracking.
   */
  var trackEvent = function(category, name, label, value) {
    if (!GAEnabled) return;

    var eventData = {
      'hitType': 'event',
      'eventCategory': String(category),
      'eventAction': String(name)
    }

    if (label) {
      eventData['eventLabel'] = String(label);
    }

    if (value) {
      eventData['eventValue'] = value
    }

    ga('send', eventData);
  }

  var completed = function(value) {
    trackEvent('scroll', 'completed', value);
  }

  /*
   * Initialize
   */
  var init = function(options) {
    var options = options || {};
    if (options.GATrackerID) {
      setupGoogle(options.GATrackerID);
      GAEnabled = true;
    }
    if (options.ChartbeatUID && options.ChartbeatDomain) {
      setupChartbeat(options.ChartbeatUID, options.ChartbeatDomain);
    }
  }

  return {
    'init': init,
    'completed': completed,
    'trackEvent': trackEvent
  };
}());
