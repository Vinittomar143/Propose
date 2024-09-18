document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Yay! I am so happy you said yes!';
    document.getElementById('response').style.color = 'green';
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Oh no! I hope you change your mind.';
    document.getElementById('response').style.color = 'red';
});
