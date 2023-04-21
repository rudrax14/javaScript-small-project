const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p1b = document.querySelector('#p1b')
const p2b = document.querySelector('#p2b')
const resetB = document.querySelector('#res')
const selectNo = document.querySelector('#select')


let p1Score = 0;
let p2Score = 0;
let winningS = 3;
let isOver = false;

p1b.addEventListener('click', function () {
    if (!isOver) {
        p1Score += 1;
        if (p1Score === winningS) {
            isOver = true;
            p1.classList.add('w')
            p2.classList.add('l')
        }

    }
    p1.textContent = p1Score;

})
p2b.addEventListener('click', function () {
    if (!isOver) {
        p2Score += 1;
        if (p2Score === winningS) {
            isOver = true;
            p2.classList.add('w')
            p1.classList.add('l')
        }

    }
    p2.innerText = p2Score;

})


select.addEventListener('change',function(){
    winningS = parseInt(this.value)
    resetList();

})

function resetList(){
    isOver = false;
    p1Score = 0;
    p2Score = 0;
    p1.innerText = 0;
    p2.innerText = 0;
    p1.classList.remove('w','l')
    p2.classList.remove('l','w')
}



resetB.addEventListener('click',resetList)



