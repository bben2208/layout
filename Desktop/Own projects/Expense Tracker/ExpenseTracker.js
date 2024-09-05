document.getElementById('addExpense').addEventListener('click',function(){

    const expenseName = document.getElementById('expenseLocation').value;
    const expenseDate = document.getElementById('expenseDate').value;
    const expenseAmount = document.getElementById('expenseAmount').value;



    //  Check if all fields are filled
     if (expenseName && expenseDate && expenseAmount) {
        // Create a new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${expenseName}</td>
            <td>${expenseDate}</td>
            <td>${expenseAmount}</td>
            <td><button>X</button></td>
        `;

        // Add delete functionality to the button
        newRow.querySelector('button').addEventListener('click', function() {
            newRow.remove();
        });

          // Append the new row to the table
          document.getElementById('expenseTableBody').appendChild(newRow);

          // Clear input fields
          document.getElementById('expenseLocation').value = '';
          document.getElementById('expenseDate').value = '';
          document.getElementById('expenseAmount').value = '';
      } else {
          alert("Please fill in all fields.");
      }
  });

