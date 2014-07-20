$(document).ready(function() {
	if (typeof(localStorage) == 'undefined' ) {
		alert('Your browser does not support HTML5 local storage.');
		} else {
		getPet(); // load the pet details

		
		}
	}
})

function addPetName(this) {
	var newPetName = JSON.stringify(this);
	window.localStorage.setItem("pet_name", newPetName);

}

function clearPet() {
	localStorage.removeItem("pet_name");
	localStorage.removeItem("pet_photo");
	localStorage.removeItem("pet_breed");
	localStorage.removeItem("pet_age");
	localStorage.removeItem("pet_wt");
	localStorage.removeItem("vet_name");
	localStorage.removeItem("vet_number");
	localStorage.removeItem("vet_oohcontact");
	localStorage.removeItem("ins_name");
	localStorage.removeItem("ins_policyNo");
	localStorage.removeItem("ins_contact");
}
		