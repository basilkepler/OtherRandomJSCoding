function Processor(inputWord){
    return inputWord[0].toUpperCase() + inputWord.slice(1)
}

console.log('Processor:', Processor("mother"))