document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    addContact(name, phone);


    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
});

document.getElementById("clearBtn").addEventListener("click", function() {
    
    document.getElementById("contacts").innerHTML = "";
});

function addContact(name, phone) {
    var contactsDiv = document.getElementById("contacts");
    var contactHTML = "<div class='contact'><p>Name: " + name + "</p><p>Phone: " + phone + "</p>";
    contactHTML += "<button class='edit'>Edit</button><button class='delete'>Delete</button></div>";
    contactsDiv.innerHTML += contactHTML;

  
    var editButtons = document.querySelectorAll(".edit");
    var deleteButtons = document.querySelectorAll(".delete");

    editButtons.forEach(function(editButton) {
        editButton.addEventListener("click", function() {
            var contactDiv = editButton.parentElement;
            var name = contactDiv.querySelector("p:nth-child(1)").textContent.replace("Name: ", "");
            var phone = contactDiv.querySelector("p:nth-child(2)").textContent.replace("Phone: ", "");
            editContact(name, phone, contactDiv);
        });
    });

    deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener("click", function() {
            deleteContact(deleteButton.parentElement);
        });
    });
}

function editContact(name, phone, contactDiv) {
    var newName = prompt("Enter new name:", name);
    var newPhone = prompt("Enter new phone number:", phone);

    if (newName && newPhone) {
        contactDiv.querySelector("p:nth-child(1)").textContent = "Name: " + newName;
        contactDiv.querySelector("p:nth-child(2)").textContent = "Phone: " + newPhone;
    }
}

function deleteContact(contactDiv) {
    contactDiv.remove();
}
