var site = (function () { // funny code
  'use strict';

  var logo = document.getElementById('logo');
  var caption = document.getElementById('caption');
  var iframe = document.createElement('iframe');
  iframe.style = 'border: none; width: 100vw; height: calc(100vh - ' + logo.height + 'px)'; // yeah i do this twice
  document.body.appendChild(iframe);

  var doLogoCaption = function () {
    var sacred = [
      'we do a little trolling',
      'grilled cheems sandwich',
      'was that the bite of \'87?',
      'drive thru only',
      'new and improved!',
      'the messenger of allah (may peace be upon him)',
      'when the imposter is delicious 🍗ඞ',
      'cornball /ˈkôrnbôl/ - adjective - trite and sentimental',
      'WHERE IS MARIO JUDAH?',
      'they tryna be cray',
      'she wanna meet carti',
      'hello my name is slim shady',
      'this is the greatest website of all time',
      'left wing destroyed',
      'aw hell naw spunch bob took 40 benadryls',
      'juan',
      'me when the',
      'i may be stupid',
      'bogos binted?',
      'cry about it',
      'a landlocked country between vietnam and thailand',
      'population: 4.7 million',
      'you\'re a nutjob',
      'my fellow americans',
      'bring your own bacillicide',
      'prices lower than low for food fresher than fresh',
      'cheesed to meet you',
      'you have left me quite discheesed',
      'soy_wojak.png'
    ];
    var currentText;

    var newText = function () {
      var newText = currentText;
      while (newText === currentText) newText = sacred[randInt(sacred.length)];
      caption.innerHTML = currentText = newText;
    };
    setInterval(newText, 5000);
    newText();
  };

  var doIframeResize = function () {
    var resizeHeight = function () {
      caption.style.fontSize = (logo.height / 7) + 'px';
      iframe.style.height = 'calc(100vh - ' + logo.height + 'px)';
    };
    window.addEventListener('resize', resizeHeight);
    window.addEventListener('orientationchange', resizeHeight);
    resizeHeight();
  };

  var urlChange = function () {
    var pathname = iframe.contentWindow.location.pathname.slice(1);
    window.history.pushState('', '', pathname === 'home' ? '/' : '/' + pathname);
  };
  iframe.onload = urlChange;

  if (window.location.hash) {
    var pathname = window.location.hash.slice(1);
    iframe.src = pathname;
    window.history.pushState('', '', pathname === 'home' ? '/' : '/' + pathname);
  }

  if (window.location.pathname === '/') {
    iframe.src = 'home';
  } else {
    iframe.src = window.location.pathname.slice(1);
  }

  console.log('%cQuique.gq', 'background: #304888; border: 1px solid #FFFFFF; padding: 10px; border-radius: 3px; font-family: "Data 70 Regular"; font-size: 72px; color: #FFFFFF; -webkit-text-stroke: 2px #000000;');
  console.log('welcome to quique.gq!');

  return {
    go: function () {
      doLogoCaption();
      doIframeResize();
    },
    urlChange: urlChange
  }
})();

function randInt(max) {
  return Math.floor(Math.random() * max);
}
