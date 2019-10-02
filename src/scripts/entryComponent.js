import makeJournalEntryComponent from "./entriesDOM.js"


const clearElement = (domElement) => {
    domElement.innerHTML = ""
}

const addEntriesToDOM = (journalEntries) => {
    let entryContainer = document.querySelector(".entryLog")
    clearElement(entryContainer);
    journalEntries.forEach(journalObj => {
        entryContainer.innerHTML += makeJournalEntryComponent.journalEntries(journalObj);
    });
}



export default addEntriesToDOM