const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
//Changing Yargs version
yargs.version('1.1.0');


//Creating Add command
yargs.command({
  command: 'add',
  describe: 'Add a Note',
  builder: {
    title: {
      describe: 'Add a Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Add the body to Note',
      damandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title,argv.body);
  }
});

//Creating Remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      describe: 'Remove a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  }
});
//Creating List Command
yargs.command({
  command: 'list',
  describe: 'List items of Note',
  handler: (argv) => {
    notes.listNotes(argv.title);
  }
});

//Creating Read command
yargs.command({
  command: 'read',
  describe: 'Read a Note',
  builder: {
    title: {
      describe: 'Read a Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNotes(argv.title);
  }
});

//Creating append command
yargs.command({
  command: 'append',
  describe: 'Append a Note',
  builder: {
    title: {
      describe: 'Append a Note',
      demandOption: true,
      type: 'String'
    },
    addBody: {
      describe: 'Body to append',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.appendNotes(argv.title,argv.addBody);
  }
})

//Creating Edit Command

yargs.command({
  command: 'edit',
  describe: 'Edit a Note',
  builder: {
    title: {
      describe: 'Edit a Note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Edit a Note',
      demandOption: true,
      type: 'String'
    }
  },
  handler: (argv) => {
    notes.editNotes(argv.title,argv.body);
  }
})
// Creating different style for body

yargs.command({
  command: 'style',
  describe: 'style to the body to read',
  builder: {
    title: {
      describe: 'Add the title to style',
      demandOption: true,
      type: 'string'
    },
    color: {
      describe: 'Add the color',
      demandOption: false,
      type: 'string'
    },
    bgColor: {
      describe: 'Add background color',
      demandOption: false,
      type: 'string'
    },
    fontSize: {
      describe: 'Add fontSize',
      demandOption: false,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.styleNotes(argv.title,argv.color,argv.fontSize,argv.bgColor);
  }
})
yargs.parse();
