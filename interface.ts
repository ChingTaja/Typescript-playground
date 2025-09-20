interface Book{
    author?: string
    pages:number
}

const missing: Book = {
    pages: 80
}

interface HasBothFunctionType {
    property: () => string
    method(): string
}

type Function = (input: string) => number
interface CallSignature {
    (input: string):number
}

const typeFunction : Function = (input) => input.length
const callSignature: CallSignature = (input) => input.length

interface WordCounts {
    [i:string] :number
}

const count: WordCounts = {}
//count.cherry = true !!Error


// 混合屬性
interface HistoricalNovels {
    Oroonoko: number // is required
    [i: string]: number
}

const novel: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1668
}

interface ChapterStarts {
    perface: 0 // perface's value must be 0
    [i: string]: number
}


interface Test1 {
    [i: string]: string | undefined;  // 字串索引簽名
    [i: number]: string;              // 數字索引簽名
}

// 如果介面同時有數字索引和字串索引，數字索引型別必須是字串索引型別的子集
interface Test2 {
    // [i: number]: string | undefined;  --> !!Error
    [i: string]: string;              
}

// Interface 擴充 (extends)
interface Writing {
    title: string
}
// 必須同時有  Novella 和 Writing 的type
interface Novella extends Writing {
    pages: number
}

// Error !! 缺少 title
// let myNovelaa: Novella = {
//     pages: 2
// }

// Error !! 多了 stragegy
// let myNovelaa: Novella = {
//     pages: 2,
//     title: 'ya'
//     strategy: "baseline"
// }

