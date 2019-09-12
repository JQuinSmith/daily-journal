const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
       <div class="segment">
          <h3>Date of Entry:</h3>
          <p>${journalEntries.dateOfEntry}</p>
          <h3>Concepts Covered:</h3>
          <p>${journalEntries.conceptsCovered}</p>
          <h3>Mood of the Day:</h3>
          <p>${journalEntries.moodOfTheDay}</p>
          <h3>Entry:</h3>
          <p>${journalEntries.entry}</p>
       </div>
       `
}

export default makeJournalEntryComponent