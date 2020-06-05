function bye() {
    var audio = document.getElementById('audio');
    audio.play();
    document.body.style.backgroundImage = "url('media/winnie.gif')";
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('jajaja').style.display = 'block';
    setTimeout(function(){document.body.style.display = 'none'}, 4500);
}