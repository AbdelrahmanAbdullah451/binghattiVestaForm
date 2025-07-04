window.addEventListener("DOMContentLoaded", () => {

  const toastElement = document.getElementById('thankYouToast');
  const toast = new bootstrap.Toast(toastElement, {
    delay: 15000
  });



  const urlParams = new URLSearchParams(window.location.search);

  document.getElementById("projectName").value = urlParams.get("projectName") || "";
  document.getElementById("unitId").value = urlParams.get("UnitID") || "";
  document.getElementById("floor").value = urlParams.get("Floor") || "";
  document.getElementById("price").value = urlParams.get("Price") || "";
  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      projectName: document.getElementById("projectName").value,
      unitId: document.getElementById("unitId").value,
      floor: document.getElementById("floor").value,
      price: document.getElementById("price").value,
      name: document.getElementById("Name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phoneNumber").value,
    };
    console.log("Form Data:", formData);
    toast.show();
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


