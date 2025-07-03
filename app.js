window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  // Populate the form fields from URL parameters
  document.getElementById("unitId").value = urlParams.get("UnitID") || "";
  document.getElementById("floor").value = urlParams.get("Floor") || "";
  document.getElementById("price").value = urlParams.get("Price") || "";

  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const formData = {
      unitId: document.getElementById("unitId").value,
      floor: document.getElementById("floor").value,
      price: document.getElementById("price").value,
    };

    fetch("https://your-backend.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => {
      alert("Form submitted successfully!");
    })
    .catch((err) => {
      console.error("Submission failed", err);
    });
  });
});
