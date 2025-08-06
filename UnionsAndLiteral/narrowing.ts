// 🟡  Narrowing
/*
let test: number | string
test = 'taja' // string
test.toFix // Error: Property 'toFix' does not exist on type 'string'
*/


// 條件檢查
let test1 = Math.random() > 0.5 ? 123 : 'ya~'
if (test1 === 'ya') {
    test1.toLowerCase()
}
// test1.toUpperCase() // Error: Property 'toUpperCase' does not exist on type 'number'.


// 型別檢查
let test = Math.random() > 0.5 ? 123 : 'ya~'

if (typeof test === 'string') {
    test.toUpperCase() // string
} else {
    test.toFixed() // number
}
