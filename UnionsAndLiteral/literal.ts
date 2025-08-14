let test = 'hi' // string
const person = 'hypatia' // 'hypatia'

// person = 'ya' // Error: Cannot assign to 'person' because it is a constant.
test = person // literal can assign to string type


let nameMaybe = Math.random() > 0.5 ? 'taja' : undefined
// nameMaybe.toLocaleLowerCase() // if strictNullChecks （strict）啟用這行會報錯（嚴格空值檢查）


let test_2: string;
// test_2.length  // Error: 沒有初始值的變數 typesciprt 視為 undefined


