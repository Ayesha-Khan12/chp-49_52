// 1. Create a signup form and display form data in your web
// page on submission.

 // JavaScript to handle form submission
//  const form = document.getElementById("signup-form");
//  const resultDiv = document.getElementById("result");
//  const displayName = document.getElementById("displayName");
//  const displayEmail = document.getElementById("displayEmail");
//  const displayPassword = document.getElementById("displayPassword");
//  const resetButton = document.getElementById("reset-btn");

//  form.addEventListener("submit", function (e) {
//    e.preventDefault(); 

//    const name = document.getElementById("name").value;
//    const email = document.getElementById("email").value;
//    const password = document.getElementById("password").value;

//    displayName.textContent = `Name: ${name}`;
//    displayEmail.textContent = `Email: ${email}`;
//    displayPassword.textContent = `Password: ${password}`;

//    resultDiv.style.display = "block";

//    form.reset();
//  });

//  resetButton.addEventListener("click", function () {
//    location.reload(); 
//  });







// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look.
//  When user clicks on “Read more” button, full detail of that particular item will be displayed. 

//  const button = document.getElementById('readMoreBtn');
//  const extraContent = document.getElementById('extraContent');

//  button.addEventListener('click', function() {
//      if (extraContent.style.display === 'none') {
//          extraContent.style.display = 'inline'; 
//          button.textContent = 'Read less'; 
//      } else {
//          extraContent.style.display = 'none'; 
//          button.textContent = 'Read more'; 
//      }
//  });




// 3. In previous assignment you have created a tabular data using javascript.
//  Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted.
//  On click on edit button, a hidden form will appear with the values of that row. 


const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').querySelector('tbody');
const editForm = document.getElementById('editForm');

let currentRow = null; 

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const classValue = document.getElementById('class').value;

    const row = studentTable.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${classValue}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;

    row.querySelector('.deleteBtn').addEventListener('click', function() {
        row.remove();
    });

    row.querySelector('.editBtn').addEventListener('click', function() {
        currentRow = row; 
        document.getElementById('editName').value = row.cells[0].textContent;
        document.getElementById('editAge').value = row.cells[1].textContent;
        document.getElementById('editClass').value = row.cells[2].textContent;
        editForm.style.display = 'block'; 
    });

    
    studentForm.reset();
});


editForm.addEventListener('submit', function(event) {
    event.preventDefault();
    currentRow.cells[0].textContent = document.getElementById('editName').value;
    currentRow.cells[1].textContent = document.getElementById('editAge').value;
    currentRow.cells[2].textContent = document.getElementById('editClass').value;
    editForm.style.display = 'none'; 
});