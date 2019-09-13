import API from "./data.js"
import addEntriesToDOM from "./entryComponent.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries().then(addEntriesToDOM)

// Event listener for the 'create new entry' button
document.querySelector("#submit-button").addEventListener("click", () => {

    // 1. needs to get values of the inputs/dropdowns
    // they're stored in variables to use later
    const journalDate = document.querySelector("#dateId").value
    const journalConcept = document.querySelector("#conceptId").value
    const journalMood = document.querySelector("#moodId").value
    const journalEntry = document.querySelector("#entryId").value
 
console.log(journalDate);
console.log(journalConcept);
console.log(journalMood);
console.log(journalEntry);

    if (journalDate === "" || journalConcept === "" || journalMood === "" || journalEntry === "") {
        alert("Missing an input!")
    }
    if (journalConcept.includes("@", "#", "$", "%", "^") || journalEntry.includes("@", "#", "$", "%", "^")){
        alert("No special characters!");
    }
})

const makeJournalEntry = (date, concept, mood, entry) => {
    const newJournalEntry = {
        date: date,
        concept: concept,
        mood: mood,
        entry: entry,
    }
    return newJournalEntry
}

