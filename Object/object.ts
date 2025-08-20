// object alias
type Poet = {
    born: number,
    name: string
}

// 任何滿足型別的數值 可以用作該型別
type WithFirstName = {
    firstName:string
}
type WithLastName = {
    lastName: string
}
const hasBoth = {
    firistName: 'huang',
    lastName: 'taja'
}
let withFirstName: WithLastName = hasBoth
let withLastName: WithLastName = hasBoth

// extra property
type PoetOne = {
    born: number,
    name: string,
}
const poetMatch: PoetOne = {
    born: 1997,
    name: 'taja'
}
// 多餘屬性檢查 只會觸發在宣告建立物件型別的位置 的文字
const extraPrpperty: PoetOne = {
    // activivty: "walking", // Error: extra property
    born: 1997,
    name: 'taja'
}
// 多餘屬性檢查 在直接提供現有物件 會被繞過
const existingObject = {
    activivty: "walking",
    born: 1997,
    name: 'taja'
}
const extraProperty: PoetOne = existingObject

type Writer = {
    author: string | undefined // 這個值可以是 undefined 但仍然要存在
    editor?: string // ? 可選
}