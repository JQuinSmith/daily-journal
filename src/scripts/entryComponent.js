import makeJournalEntryComponent from "./entriesDOM.js"

const entryContainer = document.querySelector(".entryLog");

const addEntriesToDOM = (journalEntries) => {
    journalEntries.forEach(journalObj => {
       entryContainer.innerHTML += makeJournalEntryComponent(journalObj);
       
      });
 }

 export default addEntriesToDOM
 

 