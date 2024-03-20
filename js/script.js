// Descrizione:
// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Inizio a generare la funzione che mi restituisce i numeri casuali tra 1 e 100

// template

/* <nav class="navbar navbar-expand-sm navbar-light bg-warning">
        <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="#">JS Simon</a>
            <a class="btn btn-dark btn-sm " href="#" role="button"> Play </a>

            
        </div>
    </nav>
    <div id="wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <div id="result" class="d-flex justify-content-center align-content-center pb-3">
        <input type="text" class="bg-warning">
    </div> */

    document.addEventListener('DOMContentLoaded', function() {
        const wrapper = document.getElementById('wrapper');
        const resultInput = document.querySelector('#result input');
    
        function generateRandomNumbers() {
            let numbers = [];
            while (numbers.length < 5) {
                let randomNumber = Math.floor(Math.random() * 100) + 1;
                if (!numbers.includes(randomNumber)) {
                    numbers.push(randomNumber);
                }
            }
            return numbers;
        }
    
        function displayNumbers(numbers) {
            wrapper.innerHTML = '';
            numbers.forEach(number => {
                const box = document.createElement('div');
                box.classList.add('box');
                box.textContent = number;
                wrapper.appendChild(box);
            });
        }
    
        function startGame() {
            const numbers = generateRandomNumbers();
            displayNumbers(numbers);
            setTimeout(function() {
                wrapper.innerHTML = '';
                let guessedNumbers = [];
                for (let i = 0; i < 5; i++) {
                    const guess = parseInt(prompt(`Enter number ${i + 1}`));
                    guessedNumbers.push(guess);
                }
                const correctNumbers = numbers.filter(num => guessedNumbers.includes(num));
                resultInput.value = `Correct numbers: ${correctNumbers.length} (${correctNumbers.join(', ')})`;
            }, 30000);
            setTimeout(function() {
                wrapper.innerHTML = '';
            }, 30000);
        }
    
        const playButton = document.getElementById('play-button');
        playButton.addEventListener('click', startGame);
    });

