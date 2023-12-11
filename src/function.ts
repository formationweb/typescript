type CalculFn = (first: number, second: number) => number

let add: CalculFn
let mul: CalculFn

add = (a: number, b: number): number => {
    return a + b
}

mul = (a: number, b: number): number => {
    return a * b
}

const asyncMul = (callback: (array: number[]) => void): void => {
    setTimeout(() => {
        const array: number[] = [1, 2, 3]
        const newArray = array.map(nb => mul(nb, 2))
        callback(newArray)
    }, 1000)
}

asyncMul((array) => {
    console.log(array)
})


function sub(a: number, b: number): number;
function sub(a: number, b: number, c: number): number | never
function sub(a: number, b: number, c?: number): number | never {
    if (c && c >= 100) {
        throw 'Trop Haut'
    }
    return a - b 
}

try {
    sub(1, 2, 100)
}
catch (err) {
    console.log(err)
}