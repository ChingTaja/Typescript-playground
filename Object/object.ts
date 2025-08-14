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