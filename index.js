// https://github.com/WiseKun
// A fortune teller program that outputs a random message every time the user runs the program

const time = ['in a few seconds', 'in a few minutes', 'in a few hours', 'tomorrow', 'next week', 'next month', 'soon', 'in a year', 'in a few years', 'in a decade'] // 10 strings with different times

const verb = ['eat something', 'buy a house', 'feel sad', 'order takeaway food', 'need to go to the toilet', 'fall over', 'make a social media account', 'play a game', 'have a shower', 'make food'] // 10 strings with different verbs

const who = ['you', 'one of your siblings', 'a stranger', 'a family member', 'your pet', 'an alien', 'a colleague', 'a gorilla', 'a chicken', 'a banana'] // 10 strings with different people / things

let message = []

// Function that will generate the new message using the message components declared
const generateMessage = (time, verb, who) => {
  let newMessage = []
  // Random indexes for message components
  const randIndex1 = Math.floor(Math.random()*10)
  const randIndex2 = Math.floor(Math.random()*10) // Random indexes for message components
  const randIndex3 = Math.floor(Math.random()*10)

  const format = Math.floor(Math.random()*2) // Format of output: Subject Object Verb OR Object Subject Verb

  if (format) { // If format is truthy (1)
    newMessage.push((who[randIndex1].charAt(0).toUpperCase() + who[randIndex1].slice(1)), 'will', verb[randIndex2], time[randIndex3] + '.')
    newMessage = newMessage.join(' ')
  } else { // Else format is falsy (0)
    newMessage.push((time[randIndex1].charAt(0).toUpperCase() + time[randIndex1].slice(1) + ','), who[randIndex2], 'will', verb[randIndex3] + '.')
    newMessage = newMessage.join(' ')
  }
  return newMessage
}

// Saves the new message to message
message = generateMessage(time, verb, who)
// Outputs the generated message
console.log(message)
