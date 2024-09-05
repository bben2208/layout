let noteCounter = 1; // Initialize the counter

document.getElementById('addNote').addEventListener('click', addNote);

function addNote() {
    const noteText = document.getElementById('longTextArea').value;
    const newRow = document.createElement('tr');

    // Create the new row with the note number
    newRow.innerHTML = `
    <td style="position: relative; vertical-align: top;">
        <strong>Note ${noteCounter}: </strong>
        <div class="noteContent">
            <div class="notePreview">${noteText.length > 100 ? noteText.substring(0, 100) + '...' : noteText}</div>
            <div class="noteFull" style="display: none;">${noteText}</div>
        </div>
        <button class="viewDetailButton">View Detail</button>
    </td>`;

    // Append the new row to the table body
    document.getElementById('noteTableBody').appendChild(newRow);
    document.getElementById('longTextArea').value = ''; // Clear the text area

    // Add event listener for the "View Detail" button
    const viewDetailButton = newRow.querySelector('.viewDetailButton');
    viewDetailButton.addEventListener('click', function() {
        // Get the full note content
        const noteFull = this.previousElementSibling.querySelector('.noteFull').textContent;

        // Display the modal
        const modal = document.getElementById('noteModal');
        const modalContent = document.getElementById('modalNoteContent');
        modalContent.textContent = noteFull;
        modal.style.display = "block";
    });

    // Increment the note counter
    noteCounter++;
}

// Close the modal when the close button is clicked
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('noteModal').style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('noteModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
