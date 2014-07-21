// Global variables


	var tbPets = localStorage.getItem("tbPets");  // create tbPets variable and attempt to retrieve any data from it
	tbPets = JSON.parse(tbPets); // convert data to object

// if tbPets does not exist create an array to populate
	if (tbPets == null) {
		tbPets = [];
	}



// +++++++++++++++   This function collects data from the text +++++++++++++++
// +++++++++++++++   entry when adding a new pet and save it locally +++++++++

//  THIS WONT BE NECESSARY IF createPet() is used.

function addPetName(val) 
    {
        var newPetName = JSON.stringify(val);
        localStorage.setItem("pet_name", newPetName);
    }

// +++++++++++++++   This function deletes a pet from localStorage - +++++++++++++++
// !!!!!!!!   it will need to be changed to reflect key pair values !!!!!!!!
function clearPet() 
	{
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


// ++++++++++++++ A way of collecting data for a specific pet.  ++++++++++++++++++
// !!!!!! Need to pull the infor from tbPets array !!!!!!!
function getPet() 
	{
		console.log("getPet called.");

	}

// Adds a pet to the JSON array, creates array if no array exists (first time it is clicked)
function createPet() {

	// create array and add selected pet

	var pets = JSON.stringify({
		//ID : $("#petID").val(),
		Name : $("#textinput1").val(),
		Breed : $("#textinput3").val()
	});

	tbPets.push(pets);
	localStorage.setItem("tbPets", JSON.stringify(tbPets));
	console.log("the data was sarved");



	// else add new pet to existing array (push?)

	// add the pet to the array

}	