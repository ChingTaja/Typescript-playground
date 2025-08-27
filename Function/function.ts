// 預設參數
function rateSong(song: string, rating = 0) {
 console.log(`${song} gets ${rating}`)   
}
 
rateSong("Happy") // work
rateSong("Happy", 5) 
rateSong("Happy", undefined) //work

// 剩餘參數
function singAllSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song} by ${singer}`)
    }
}
singAllSongs('lady gaga', 'bad romance', 'just dance')

// 函數型別
type StringToNumber = (input: string) => number

let stringToNumber: StringToNumber
stringToNumber = (input) => input.length

// void 不回傳值 (不會終止函式，也就是說雖然沒有回傳值，但函式會繼續執行)
function logSong(song: string): void {
    if (!song) {
        return
    }

    // return true //error!! Type 'boolean' is not assignable to type 'void
}

// never (應該會回傳，但由於函式中斷執行或者是無限迴圈，因而永遠不會回傳或回傳錯誤的函式 --> 要嘛丟錯，要嘛跑不完)
// 如果未來 Shape 多了 triangle，TypeScript 會提醒 default 的 never 無法賦值。這樣能避免漏掉 case。
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      // 如果 Shape 有新增種類，這裡會報錯
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// overload （不同版本的 function) -> 盡量避免使用 
// 編譯時會把重載特徵刪除
// 重載中回傳的每個型別和參數 需可指派給相同索引位置的參數
// 實作時須與所有重載 signature 相容
function createDate(timestamp: number): Date
function createDate(month: number, day: number, year: number): Date
function createDate(monthOrTimestamp: number , day?:number, year?:number) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day)
}

createDate(4444)
createDate(7, 84, 1994)
// createDate(1, 4) // error!