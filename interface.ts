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

next:混合屬性