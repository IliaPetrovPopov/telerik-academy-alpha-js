let checkbox = document.getElementById("laundry");
let label = document.getElementById("labelinho");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    label.style.color = "green";
  } else {
    label.style.color = ""; // Reset to default color
  }
});