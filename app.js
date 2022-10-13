
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('minus1')) {
            count --;
        } else if (styles.contains('minus10')) {
            count -= 10;
        } else if (styles.contains('minus100')) {
            count -= 100;
        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('plus1')) {
            count++;
        } else if (styles.contains('plus10')) {
            count += 10;
        } else if (styles.contains('plus100')) {
            count += 100;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});