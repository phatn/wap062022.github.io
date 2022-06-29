// Question 1

function makeArmy() {
    let shooters = [];
    let i = 0;
    while(i < 2) {
        (function (i) {
            let shooter = function () {
                console.log(i);
            };
            shooters.push(shooter);
        })(i);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[1]();


// Question 2
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if(current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(1, 10);

// Question 3
/**
 * The scheduled function will after the for loop completed
 *
 */
let i = 0;
setTimeout(() => console.log(i), 100);
for(let j = 0; j < 100000000; j++) {
    i++;
}