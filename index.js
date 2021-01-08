// https://github.com/WiseKun
// A fortune teller program that outputs a random message every time the user runs the program

const time = ['in some seconds', 'in a few minutes', 'in a few hours', 'tomorrow', 'next week', 'next month', 'after many months', 'in a year', 'in a few years', 'in a decade'] // 10 strings with different times

const verb = ['eat something', 'get a cramp', 'feel sad', 'order takeaway food', 'need to go to the toilet', 'fall over', 'make a social media account', 'play a game', 'have a shower', 'make food'] // 10 strings with different verbs

const who = ['you', 'one of your siblings', 'a stranger', 'a family member', 'your pet', 'an alien', 'a colleague', 'a gorilla', 'a chicken', 'a banana'] // 10 strings with different people / things

const format = Math.floor(Math.random()*2) // Format of output: Subject Object Verb OR Object Subject Verb
