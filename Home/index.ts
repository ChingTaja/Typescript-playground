/* 
🟡 
*/


// 🟡 儘管有型別或文法錯誤 編譯器仍會盡最大努力從輸入檔案生成 js ]
/*
console.blub('build')
*/



// 🟡  Unions
/*
let test = Math.random() > 0.5 ? undefined : 'ya~'
console.log(test)
*/

// 🟡  Narrowing
/*
let test: number | string
test = 'taja' // string
test.toFix // Error: Property 'toFix' does not exist on type 'string'
*/

/*
let test = Math.random() > 0.5 ? 123 : 'ya~'
if (test === 'ya') {
    test.toLowerCase()
}
test.toUpperCase() // Error: Property 'toUpperCase' does not exist on type 'number'.
*/