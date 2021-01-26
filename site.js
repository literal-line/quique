var site = (function () { // crap code but i was in a hurry
    var iframe = document.createElement('iframe');
    iframe.style = 'width: 100%; border: none; width: 99vw;';
    document.body.appendChild(iframe);
    var jsNotice = document.getElementById('jsNotice');
    jsNotice.remove();

    var doLogoEffect = function () {
        var logo = document.getElementById('logo');
        logo.style.position = 'absolute';
        var offset = 0;
        setInterval(function () {
            iframe.style.height = window.innerHeight - 180 + 'px';
            logo.style.top = Math.sin(offset / 25) * 10 + 'px';
            logo.style.left = Math.cos(offset / 50) * 10 + 'px';
            offset++;
        }, 1000 / 60);
    };

    var urlChange = function () {
        var pathname = iframe.contentWindow.location.pathname.slice(1);
        window.location.hash = pathname === 'home.html' ? '' : pathname;
    };

    iframe.onload = urlChange;

    if (window.location.hash) {
        if (window.location.hash === '#') {
            iframe.src = 'home.html';
        } else {
            iframe.src = window.location.hash.slice(1);
        }
    } else {
        iframe.src = 'home.html';
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
