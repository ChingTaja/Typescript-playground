type PoemWithPage = {
    name: string,
    pages: number
}

type PoemWithrhymes = {
    name: string,
    rhymes: boolean
}

type Poem = PoemWithPage | PoemWithrhymes


const poem :Poem = Math.random() > 0.5 ? {name: "the Image", pages:7} : {name:"Kid", rhymes: true}

// poem.pages 沒有窄化 會噴錯
if("pages" in poem) {
    poem.pages
} else {
    poem.rhymes
}