const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { demand } = require('yargs')

//customize yargs version

yargs.version('1.1.0')

//add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {notes.addNote(argv.title, argv.body)}
})

//Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of Note to read',
            demand: true,
            type: 'string'
        }

    },
    handler(argv) {notes.readNote(argv.title)}
})


yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler() {notes.listNotes()}
}) 


yargs.parse()
