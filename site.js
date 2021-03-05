var site = (function () { // funny code
  'use strict';

  var iframe = document.createElement('iframe');
  iframe.style = 'width: 100%; border: none; width: 100vw';

  var doLogoCaption = function () {
    var caption = document.createElement('p');
    caption.style = 'position: absolute; top: 145px; left: 50px; text-shadow: -1px 1px 0 #000000, 1px 1px 0 #000000, 1px -1px 0 #000000, -1px -1px 0 #000000; font-weight: bold; color: #FFFFFF';
    document.getElementById('containerY').appendChild(caption);
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

  var doIframe = function () {
    document.body.appendChild(iframe);

    var resize = function () {
      iframe.style.height = window.innerHeight - 180 + 'px';
    };

    window.addEventListener('resize', resize);
    resize();
  }

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
      doIframe();
    },
    urlChange: urlChange
  }
})();

function randInt(max) {
  return Math.floor(Math.random() * max);
}
