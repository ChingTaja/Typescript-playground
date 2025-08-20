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