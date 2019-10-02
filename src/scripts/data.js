const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    postJournalEntry(newJournalEntry){
        return fetch ("http://localhost:3000/entries",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
        })
        .then(response => response.json())
    },
    deleteJournalEntry(id){
        return fetch(`http://localhost:3000/entries/${id}`,{
            method: "DELETE"
    })
    .then(response => response.json())
    },
    getSingleJournalEntry(id){
        return fetch(`http://localhost:3000/entries/${id}`,{
    })
    .then(response => response.json())
    }
}


export default API