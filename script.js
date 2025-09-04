function addAppointment() {
  let patient = document.getElementById("patientName").value.trim();
  let doctor = document.getElementById("doctorName").value.trim();
  let date = document.getElementById("appointmentDate").value;

  if (patient === "" || doctor === "" || date === "") {
    alert("Please fill all fields!");
    return;
  }

  let table = document.getElementById("appointmentTable");
  let row = table.insertRow(-1);

  row.insertCell(0).textContent = patient;
  row.insertCell(1).textContent = doctor;
  row.insertCell(2).textContent = date;
  row.insertCell(3).textContent = "Pending";

  let actionCell = row.insertCell(4);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function() {
    deleteRow(deleteBtn);
  };
  actionCell.appendChild(deleteBtn);

  document.getElementById("patientName").value = "";
  document.getElementById("doctorName").value = "";
  document.getElementById("appointmentDate").value = "";

  // Update appointment count
  let count = document.getElementById("appointmentCount");
  count.textContent = parseInt(count.textContent) + 1;
}

function deleteRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  // Update appointment count
  let count = document.getElementById("appointmentCount");
  count.textContent = parseInt(count.textContent) - 1;
}

// Search functionality
document.getElementById("searchBox").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#appointmentTable tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // skip header
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});
