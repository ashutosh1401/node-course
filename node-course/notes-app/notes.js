const fs = require('fs');
const chalk = require('chalk')
const getNotes = ()  => 'Your Notes ...';
//addNote function
const addNote = (title,body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title );
  const duplicateNote = notes.find((note) => note.title === title);
  if(!duplicateNote){
  notes.push({
    title: title,
    body: body
  });
  saveNotes(notes);
  console.log(chalk.bgGreen.black('New Note Added!!'));
}
else {
  console.log(chalk.bgRed.black('Title Already Taken'));
 }
}
// loadNotes function
const loadNotes = ()=>{
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}
//saveNotes function
const saveNotes = (notes) => {
  const dataFile = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataFile);
}
// removeNotes function
const removeNotes = (title) => {
  const notes = loadNotes();
  const notesRemoved = notes.filter((note) => note.title !== title);
  if(notes.length !== notesRemoved.length)
  {
    console.log(chalk.bgGreen.black('Note Removed!!'));
  }else {
    console.log(chalk.bgRed.black('No note found!!'));
  }
  /*for(var i=0;i<notes.length;i++)
  {
    if(notes[i].title === title)
    {
      for( var j=i;j<notes.length;j++)
      {
        notes[i]=notes[i+1];
      }
    }
  }notes.length--;*/
  saveNotes(notesRemoved);
}

// listNotes function
const listNotes = (title) => {
  console.log(chalk.bgGreen.black('Your Notes...'));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
  /*for(var i=0;i<notes.length;i++)
  {
    console.log((i+1) + '. ' + notes[i].title);
  }*/
}
//readNotes function
const readNotes = (title) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title);
  if(findNotes){
    console.log(chalk.bgBlue.bold(findNotes.title));
    console.log(findNotes.body);
  }
  else {
    console.log(chalk.bgRed.black('No note Found'));
  }
}
// appendNotes function
const appendNotes = (title,addBody) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title);
  if(findNotes){
    console.log(chalk.bgWhite.black('Notes Appended'));
  }
  else{
    console.log(chalk.bgRed.bold('No Notes found'));
  }
  for(var i=0;i<notes.length;i++)
  {
    if(notes[i].title === title)
    {
      //notes[i].body = notes[i].body + '' + addBody;
      notes[i].body = notes[i].body.concat(addBody);

    }
  }
  saveNotes(notes);
}
// editNotes function
const editNotes = (title,body) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title);
  if(findNotes){
    console.log(chalk.bgWhite.black('Notes Appended'));
  }
  else{
    console.log(chalk.bgRed.bold('No Notes found'));
  }
  for(var i=0;i<notes.length;i++)
  {
    if(notes[i].title === title)
    {
      notes[i].body = body;
    }
  }
  saveNotes(notes);

}
//styleNotes function
const styleNotes = (title,color,fontSize,bgColor) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title);
  if(findNotes)
  {console.log("your notes are about to style");
    if(!fontSize && !bgColor && !color)
    {
      console.log(findNotes.body);
    }
    else if(!fontSize && !bgColor)
    {
      console.log(chalk.color(findNotes.body));
    }
    else if(!bgColor)
    {
      console.log(chalk.color.fontSize(findNotes.body));
    }
    else if(!fontSize)
    {
      console.log(chalk.bgColor.color(findNotes.body));
    }
    else {
      console.log(chalk.bgColor.color.fontSize(findNotes.body));
    }
  }
  else {
    console.log(chalk.bgRed.bold("Title not found!!!"));
  }

}

module.exports = {
  getnotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
  appendNotes: appendNotes,
  editNotes: editNotes,
  styleNotes: styleNotes
};
