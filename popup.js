document.addEventListener('DOMContentLoaded', function() {
  //document.querySelector('h1').textContent = 'Hello, Chrome Extension!';
});

document.getElementById('checkButton').addEventListener('click', factCheck);

function factCheck() {
    let fact = document.getElementById('statement').value;
    alert(fact);
}

