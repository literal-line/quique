var site = (function () { // funny code
    'use strict';


    var iframe = document.createElement('iframe');
    iframe.style = 'width: 100%; border: none; width: 100vw;';
    document.body.appendChild(iframe);

    var doLogoEffect = function () {
        var logo = document.getElementById('logo');
        var banner = document.getElementById('banner');
        var ctx = banner.getContext('2d');
        banner.width = window.innerWidth;
        banner.height = 180;
        var loop = (function() {
            var lastDelta = 0;
            var ms = 0;
            var counter = 0;
            var offsetX;
            var offsetY;
            var circles = [];
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
                'they tryna be carti',
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
            var idiotText;

            var fillCircle = function(x, y, radius, rad1, rad2, color) {
                ctx.beginPath();
                ctx.arc(x, y, radius, rad1, rad2, false);
                ctx.fillStyle = color;
                ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
                ctx.fill();
                ctx.stroke();
            };

            var Circle = function() {
                this.x = 0;
                this.y = randInt(banner.height);
                this.c = [ randInt(Math.PI * 2), randInt(Math.PI * 2) ];
            };

            Circle.prototype.draw = function() {
                fillCircle(this.x - 2, this.y, 3, this.c[0], this.c[1], 'rgba(255, 255, 255, 0.75)');
            };

            return function(delta) {
                ms = delta - lastDelta;
                banner.width = window.innerWidth;
                banner.height = 180;

                iframe.style.height = window.innerHeight - 180 + 'px';
                offsetX = Math.sin(counter / 50) * 10;
                offsetY = Math.sin(counter / 25) * 10;
                logo.style.left = offsetX + 'px';                logo.style.top =  offsetY + 'px';
                
                if (Math.floor(counter) % (randInt(25) + 1) === 0) circles.unshift(new Circle());
                if (Math.floor(counter) % 300 === 0) {
                    var newText = idiotText;
                    while (newText === idiotText) newText = sacred[randInt(sacred.length)];
                    idiotText = newText;
                }
                
                circles.forEach(function(cur) {
                    cur.draw();
                    if (ms < 100) cur.x += ms / 2;
                    if (cur.x > banner.width) circles.pop();
                });

                counter += 1000 / 60 / ms;
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#000000';
                ctx.fillStyle = '#FFFFFF';
                ctx.font = '20px IBM';
                ctx.strokeText(idiotText, offsetX + 50, banner.height - 15 + offsetY);
                ctx.fillText(idiotText, offsetX + 50, banner.height - 15 + offsetY);
                lastDelta = delta;
                requestAnimationFrame(loop);
            }
        })();
        requestAnimationFrame(loop);
    };

    var urlChange = function () {
        var pathname = iframe.contentWindow.location.pathname.slice(1);
        window.location.hash = pathname === 'home' ? '' : pathname;
    };

    iframe.onload = urlChange;

    if (window.location.hash) {
        if (window.location.hash === '#') {
            iframe.src = 'home';
        } else {
            iframe.src = window.location.hash.slice(1);
        }
    } else {
        iframe.src = 'home';
    }

    console.log('%cQuique.gq', 'background: #304888; border: 1px solid #FFFFFF; padding: 10px; border-radius: 3px; font-family: "Data 70 Regular"; font-size: 72px; color: #FFFFFF; -webkit-text-stroke: 2px #000000;');
    console.log('welcome to quique.gq!');

    return {
        go: function () {
            doLogoEffect();
        },
        urlChange: urlChange
    }
})();

function randInt(max) {
    return Math.floor(Math.random() * max);
}
