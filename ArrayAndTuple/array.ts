// 聯集
let stringArrayOfNumber: string | number[]

// 剩餘參數
function logWarriors(greeting: string, ...name: string[]) {
}

// Tuple
let yearAndWarrior: [number, string]

// 陣列不能指派給 Tuple
const pairLoose = [false, 123]
// const pairTupleLoose: [boolean, number] = pairLoose   --> Error!! Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.

// 指定為 Tuple
// method 1
function test(input: string): [string, number] {
    if(input[0] === undefined ) return ['ee', 2]
    return [input[0], input.length]
}
// method 2 斷言 as const
let unionArray = [1193, 'apple'] // (string | number)[]
unionArray[0] = 222

let readonlytuple = [11194, 'apple'] as const
// readonlytuple[0] = 222　// error !! 唯獨屬性 無法指派