console.log("Adoption form script loaded!");

const workElement = document.querySelector("#employment_status");
const workInput = document.querySelectorAll(".work_option");
const landLordSelector = document.querySelector("#own_or_rent");
const landlord = document.querySelectorAll(".landlord");
const vetSelector = document.querySelector("#veterinarian");
const vetInputs = document.querySelectorAll(".vet_details");

vetSelector.addEventListener("change", e => {
  let vet_assoc = e.target.value;

  console.log(`Fire change event for Vet Selector`);

  if (vet_assoc == "1") {
    vetInputs.forEach(v => v.removeAttribute('disabled'));
  } else {
    vetInputs.forEach(v => v.setAttribute('disabled', ''));
  }
});

workElement.addEventListener("change", e => {
  let workStatus = e.target.value;

  switch (workStatus) {
    case "1":
      workInput.forEach(w => w.removeAttribute('disabled'));
      break;

    case "2":
      workInput.forEach(w => w.removeAttribute('disabled'));
      break;

    case "3":
      workInput.forEach(w => w.setAttribute('disabled', ''));
      break;

    case "4":
      workInput.forEach(w => w.setAttribute('disabled', ''));
      break;
  
    default:
      break;
  }
});

landLordSelector.addEventListener("change", e => {
  let own = e.target.value;

  if (own == "2") {
    landlord.forEach(l => l.removeAttribute('disabled'));
  } 
});
