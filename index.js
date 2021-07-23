
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]


function capitalize(sentence) {
  const words = sentence.split(' ').map(e => e[0].toUpperCase()+e.slice(1));
  return words.join(' ')
}


function titleCased() {
  return tutorials.map(capitalize)

}

console.log(titleCased(tutorials))


// function capitalize(sentence) {
//   const words = sentence.split(' ‘).map(e => e[0].toUpperCase()+e.slice(1));
//   const newSentence = words.join(’ ’)
//   return newSentence
// }









// const sentence = 'what does the this keyword mean?'
// const words = sentence.split(' ')
// const result = words.map(e => e[0].toUpperCase()+e.slice(1))
// const newSentence = result.join(' ')
// console.log(words)
// console.log(result)
// console.log(newSentence)



// const sentence = 'what does the this keyword mean?'
// const words = sentence.split(' ')
//   for (let j=0; j < words.length; j++) {
//     words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1)
//   }
//   const newArray = words.join(" ")
//   console.log(words)



// console.log(words)
// let capitalize = words.map(words => words.toUpperCase())
// console.log(capitalize)





// const tutorials = [
//   'first we start with sentence one',
//   'here lies sentence two',
//   'this is sentence three',
// ];
// // const titleCased = () => tutorials.map(tutorials => {
// //   return 
// // } )

// //   return tutorials
// // }


// function capitalizeFirstLetter(array){
//   array.harAt(0).toUpperCase()
// }

// function capitalizeString(tutorials) {
// let sentence;
// for (let i = 0; i < tutorials.length; i++ ) {
//    sentence = tutorials[i].split(" ") 
//         return sentence
//   for (let j=0; j < sentence.length; j++) {
//        let uppercase = sentence[j].charAt(0).toUpperCase()
//        return uppercase
//       }
//     }
//   }

//   console.log(capitalizeString(tutorials))

// //     function capitalize(word){
// // //       return 
// //     }
    
// //     console.log(capitalizeString(tutorials))
  


// // console.log(capitalizeString(tutorials))


// //   for (let i = 0; i < tutorials.length; i++ ) {
// //     for (let j = 0; j < tutorials[i].length; j++) {
// //       console.log(tutorials[i] 
  
// //   }


// // // }

// // // console.log(tutorials[0])
// // // // console.log(tutorials[0].length)
// // // console.log(tutorials[0].charAt(0)