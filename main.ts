/*
* PROJECT: ts-project-14-05-2021
* DESCRIPTION: Given an integer, calculate and return its primorial.
* AUTHOR: Vahin Sharma
*/

const generatePrimeFactors = (x: number): Array<number> => {
    let store: Array<boolean> = [];
    let primes: Array<number> = [];
    for (let i = 2; i <= x; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (let j = i << 1; j <= x; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}

const solution = (n: number) => {
    if (n == 1) return 2
    const primes = generatePrimeFactors(n * n)
    return primes.slice(0, n).reduce((a, b) => a * b, 1)
}

const questions: Array<number> = [3, 4, 5, 8, 9, 14, 2, 12, 1, 15]

const answers: Array<number> = [30, 210, 2310, 9699690, 223092870, 13082761331670030, 6, 7420738134810, 2, 614889782588491400]

let marks: number = 0;

for (let i = 0; i < questions.length; i++) {
    const answer = solution(questions[i]);

    console.log(`Input: ${questions[i]}`)

    if (JSON.stringify(answer) == JSON.stringify(answers[i])) {
        console.log("Passed");
        ++marks;
    } else {
        console.log(`Expected '${answers[i]}', instead got '${answer}'`);
    }

    console.log()
}

console.log(`Score: ${marks} out of ${questions.length}`);
