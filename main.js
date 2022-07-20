document.querySelector('button').addEventListener('click', function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomImage1 = './images/dice'+randomNumber1+'.png';
        var image1 = document.querySelectorAll('img')[0];
        image1.setAttribute('src', randomImage1);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImage2 = './images/dice'+randomNumber2+'.png';
        var image1 = document.querySelectorAll('img')[1];
        image1.setAttribute('src', randomImage2);

        if (randomNumber1>randomNumber2) {
            document.querySelector('h2').innerHTML = '🏆 Player 1 wins';
        } else if (randomNumber1<randomNumber2) {
            document.querySelector('h2').innerHTML = 'player 2 wins 🏆';
        } else if (randomNumber1 == randomNumber2) {
            document.querySelector('h2').innerHTML = 'Math 🏆 Draw';
        }
})
