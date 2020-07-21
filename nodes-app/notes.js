const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => 'you notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) =>  note.title === title)
    
    debugger

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('Note title taken'))
    }

   
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) =>  note.title === title)
    if (!duplicateNotes) {
        console.log(chalk.bgRed("no note with name " + title + " to remove"))
    } else {
        console.log(chalk.bgGreen('removing note ' + title))
    }


}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e) {
        return []
    } 
    
}

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.gray('your notes:'))
    notes.forEach(element => console.log(chalk.yellow(element.title)))
}

const readNote = (title) => {
    notes = loadNotes()
    const anote = notes.find((note) =>  note.title === title)
    if(!anote){
        console.log(chalk.bgRed("No note named " +title+  " found"))
    } else {
        console.log(chalk.bgGray(title))
        console.log(anote.body)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}