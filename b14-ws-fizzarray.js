function createArray(N) {

    let newArrayN = [];

    for (let i = 1; i <= N; i++) {

        newArrayN.push(i);
    }

    return newArrayN;
}

let N = 100;
let arr = createArray(N);
console.log(arr);

arr.forEach(element => console.log(element))
