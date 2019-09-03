
const journalEntries = [
   {
      dateOfEntry: "August 19th",
      conceptsCovered: "no class-lab day",
      moodOfTheDay: "Sunny",
      entry: "Worked on the daily journal page with css. I also added css to the govtrack page.",
   },
   {
      dateOfEntry: "August 20th",
      conceptsCovered: "C33 Demo Day",
      moodOfTheDay: "peaceful",
      entry: "We watched C33 Demos. That afternoon we were split into group and started on group projects.",
   },
   {
      dateOfEntry: "August 21st",
      conceptsCovered: "Group Project",
      moodOfTheDay: "Pumped",
      entry: "We worked on our group project and decided how to layout our webpage. We picked an artist that we wanted to make a tribute page for."
   }
]

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

const entryContainer = document.querySelector(".entryLog")

 journalEntries.forEach( entries => {
   entryContainer.innerHTML += makeJournalEntryComponent(entries);
});

