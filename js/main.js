
const nodeMailer = require("nodemailer")

function hide_show_HTML_index() { 
   const programmingLanguagesButton = document.getElementById('frameworks&languages_programming');
   const frameworksLibrariesButton = document.getElementById('frameworks&languages_frameworks');
   const otherButton = document.getElementById('frameworks&languages_other');

   const cards = {
      programming: [document.getElementById('JS_card'), document.getElementById('C++_card'), document.getElementById('Python_card')],
      frameworks: [document.getElementById('React.js_card'),document.getElementById('Node.js_card') , document.getElementById('Tailwind_card')],
      other: [document.getElementById('Arduino_card')],
      all: [document.getElementById('JS_card'), document.getElementById('C++_card'), document.getElementById('Python_card'), 
            document.getElementById('React.js_card'), document.getElementById('Tailwind_card'), 
            document.getElementById('Node.js_card'), document.getElementById('Arduino_card')]
   };

   let lastClickedButton = null;

   function resetGrid() {
      cards.all.forEach(card => {
         card.style.gridColumn = '';
         card.style.gridRow = '';
         card.classList.remove('full-width'); // Remove full-width class
      });
   }

   function hideAll() {
      cards.all.forEach(card => card.style.visibility = "hidden");
   }

   function showCards(category) {
      hideAll();
      cards[category].forEach(card => card.style.visibility = "visible");
   }

   function expandCards(category) {
      cards[category].forEach((card, index) => {
         card.style.gridColumn = '1 / span 4'; // Take up the whole row
         card.style.gridRow = `${index + 1} / span 1`; // Place each card in its own row
         card.classList.add('full-width'); // Add full-width class
      });
   }

   function handleClick(category, button) {
      if (lastClickedButton === button) {
         resetGrid();  // Reset grid layout to default
         showCards('all'); // Show all cards
         lastClickedButton = null; // Reset to allow for toggling behavior
      } else {
         resetGrid();  // Reset grid layout to default
         showCards(category); // Show selected category
         expandCards(category); // Expand cards to full width
         lastClickedButton = button; // Keep track of the last clicked button
      }
   }

   programmingLanguagesButton.addEventListener("click", () => handleClick('programming', programmingLanguagesButton));
   frameworksLibrariesButton.addEventListener("click", () => handleClick('frameworks', frameworksLibrariesButton));
   otherButton.addEventListener("click", () => handleClick('other', otherButton));
}

function hide_show_HTML_Portfolio() {
   document.getElementById("allProjects_button");
   document.getElementById("app/web_button");
   document.getElementById("arduinoProjects_button");
   document.getElementById("other_button");

}

function sendEmail(){ 

   document.getElementById("homeForm_submit").onclick = function() {
      let homeIndex_name,homeIndex_email,homeIndex_message; 
      
      homeIndex_name = document.getElementById("indexForm_name").value;
      homeIndex_email = document.getElementById("indexForm_email").value;
      homeIndex_name = document.getElementById("indexForm_message").value;


   }

}


function main() { 
   hide_show_HTML_index();
}

main();
