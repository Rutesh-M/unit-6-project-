// Declare your genre arrays here
let counter=0
let horror = ["https://upload.wikimedia.org/wikipedia/en/d/d7/Until_Dawn_cover_art.jpg", "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png", "https://wp.clutchpoints.com/wp-content/uploads/2022/05/Silent-Hill-titles-currently-under-development-by-Konami.jpg",
]
let actions = [
  "https://m.media-amazon.com/images/M/MV5BYWQ5ZTM1YmMtNjQ2Ny00OGU4LWI5ZGMtOWNkZTY0MjJjNTZjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg", "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png", "https://images.g2a.com/1024x768/1x1x0/call-of-duty-black-ops-ii-steam-key-global-i10000000565013/59847c415bafe3a5d2201fd3"
]

let sports = [
  "https://assets-prd.ignimgs.com/2022/04/17/nba2k16-1650224247365.jpg", "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/09/25/Photos/fifa-kFkF--621x414@LiveMint.jpg", "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-10/madden-nfl-22-ftr_1gsw8g037br6b1ahced24mrt39.png?itok=UCp3YuSa"
]
// Make sure to declare your HTML elements as variables! 
let resultScreen = document.querySelector(".shows");
// Submit Button 
let submitButton = document.querySelector(".submit-button");

let countershow= document.querySelector(".numbercounter");

submitButton.onclick = function() {
  let inputGetSuggest = document.querySelector(".get-suggestions").value;
  if (inputGetSuggest === "horror") {
      resultScreen.innerHTML = "";
    for (let showHorror of horror) {
      resultScreen.insertAdjacentHTML("afterbegin", "<img src='" + showHorror + "'>")
    }

  } else if (inputGetSuggest === "sport") {
    resultScreen.innerHTML = "";
    for (let show2 of sports) {
      resultScreen.insertAdjacentHTML("afterbegin", "<img src='" + show2 + "'>")
    }
  } else if (inputGetSuggest === "action") {
    resultScreen.innerHTML = "";
    for (let show3 of actions) {
      resultScreen.insertAdjacentHTML("afterbegin", "<img src='" + show3 + "'>")
    }

  } else {
    resultScreen.innerHTML = "";
    resultScreen.innerHTML = "Enter a Genre"
    
  };

};



//suggest
let suggestButton = document.querySelector(".suggestion-button");

suggestButton.onclick = function() {
  resultScreen.innerHTML = "";
counter=counter+1
  let inputGiveSuggest = document.querySelector(".give-suggestions").value;
  let inputGenreSuggest = document.querySelector(".genre-suggestions").value;

if (inputGenreSuggest=== "horror"){
  horror.push(inputGiveSuggest);
   resultScreen.append("Thanks for your suggestion!");
} else if (inputGenreSuggest=== "action"){
  actions.push(inputGiveSuggest);
   resultScreen.append("Thanks for your suggestion!");
} else if (inputGenreSuggest=== "sport"){
  sports.push(inputGiveSuggest);
   resultScreen.append("Thanks for your suggestion!");
}else{
   resultScreen.append("Enter genre or suggestion url");
}
  console.log(horror);
  console.log(actions);
  console.log(sports);




countershow.innerHTML= "you have suggested "+ counter +" games";
};


