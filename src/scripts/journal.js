import API from "./data.js"
import addEntriesToDOM from "./entryComponent.js"
import makeJournalEntryComponent from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

/* fetch call that displays the prior entries to the DOM before adding your new one */
API.getJournalEntries().then(res => addEntriesToDOM(res))


/* Factory function */
const makeJournalEntry = (date, concept, mood, entry) => {
    const newJournalEntry = {
        dateOfEntry: date,
        conceptsCovered: concept,
        moodOfTheDay: mood,
        entry: entry
    }
    return newJournalEntry
}


/* Event listener for the 'Record Journal Entry' button */
document.querySelector("#submit-button").addEventListener("click", () => {

    /* Needs to get values of the inputs/dropdowns */
    /* they're stored in variables to use later */
    const journalDate = document.querySelector("#dateId").value
    const journalConcept = document.querySelector("#conceptId").value
    const journalMood = document.querySelector("#moodId").value
    const journalEntry = document.querySelector("#entryId").value

    /* Console logs for functionality verfication */


    /* form validation - checks to see if forms are filled before saving the form. */
    if (journalDate === "" || journalConcept === "" || journalMood === "" || journalEntry === "") {
        alert("Missing an input!")
    }

    /* Makes sure these characters are excluded when filling out each input field. */
    else if (journalConcept.includes("@", "#", "$", "%", "^") || journalEntry.includes("@", "#", "$", "%", "^")) {
        alert("No special characters!");

    } else {
        const newJournalEntryObj = makeJournalEntry(journalDate, journalConcept, journalMood, journalEntry)
        /* The [API] is referencing the object that contains the "POST" fetch call [.postJournalEntry] from data.js. [newJournalEntryObj] is the variable that contains the information that was passed through the factory function [makeJournalEntry].  */
        API.postJournalEntry(newJournalEntryObj)
            .then(() => {
                API.getJournalEntries()
                .then(res => addEntriesToDOM(res))
            })
            .then(() => {
                document.querySelector("#dateId").value = ""
                document.querySelector("#conceptId").value = ""
                document.querySelector("#moodId").value = ""
                document.querySelector("#entryId").value = ""
            }
            )
        /* newJournalEntryObj is the actual object that is formed from the values of the finput fields *- journalDate, journalConcept, journalMood, journalEntry -* */

    }
})
// Delete Event Listener
document.querySelector(".entryLog").addEventListener("click", (event) => {
    if(event.target.id.startsWith("deleteEntry--")){
        document.querySelector(".entryLog").innerHTML = ""
        API.deleteJournalEntry(event.target.id.split("--")[1])
            .then(response => {
                API.getJournalEntries().then((allEntries) => {
                addEntriesToDOM(allEntries)
            })
        })
    }
})

// Edit Event Listener
document.querySelector(".entryLog").addEventListener("click", (event) => {
    if(event.target.id.startsWith("editEntry--")){
        // document.querySelector(".entryLog").innerHTML = ""
        API.getSingleJournalEntry(event.target.id.split("--")[1])
            .then(response => {
                console.log("This is my response:", response)
                makeJournalEntryComponent.editEntries(response)
            })
        }
    })