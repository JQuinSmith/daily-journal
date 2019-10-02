const makeJournalEntryComponent = {
   journalEntries: (journalEntries) => {
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
          <button id="editEntry--${journalEntries.id}" type="button">Edit</button>
          <button id="deleteEntry--${journalEntries.id}" type="button">Delete</button>
       </div>
       `
   },
   editEntries: (response) => {
      const date = response.dateOfEntry
      const concept = response.conceptsCovered
      const mood = response.moodOfTheDay
      const entry = response.entry
      const hiddenId = response.id

      document.querySelector(".entryLog").innerHTML =
       `
         <div class="inner">
         <h1>Edit Entry</h1>
            <form>
            <input type="hidden" id="recipeId" value="${hiddenId}" />

            <fieldset class="date">
               <label for="dateOfEntry">Edit Date of Entry:</label>
               <input type="date" name="" id="dateId" value="${date}">
            </fieldset>
               <hr>
            <fieldset class="concept">
                  <label for="conceptsCovered">Edit Concepts Covered:</label>
                  <input type="text" name="" id="conceptId" value="${concept}">
            </fieldset>
               <hr>
            <fieldset class="mood">
                  <label for="journalMood">Edit Mood for the Day:</label>
                  <select id="moodId" value="${mood}">
                     <option value="sunny">Sunny</option>
                     <option value="cloudy">Cloudy</option>
                     <option value="rainy">Rainy</option>
                     <option value="stormy">Stormy</option>
                     <option value="foggy">Foggy</option>
                     <option value="snowy">Snowy</option>
                     <option value="windy">Windy</option>
                  </select>
            </fieldset>
               <hr>
            <fieldset class="entry">
                     <label for="journalEntry">Edit Journal Entry:</label>
                     <textarea rows="4" cols="50" id="entryId" value="${entry}"></textarea>
            </fieldset>
               <button type="button" id="saveButton">Save Edits</button>
            </form>
         </div>
         `
   }
}

export default makeJournalEntryComponent