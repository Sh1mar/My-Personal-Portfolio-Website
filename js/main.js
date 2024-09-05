// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

   // Function to handle Index Page logic (for languages/frameworks)
   function hide_show_HTML_Index() {
      // Get buttons safely
      const programmingLanguagesButton = document.getElementById('frameworks&languages_programming');
      const frameworksLibrariesButton = document.getElementById('frameworks&languages_frameworks');
      const otherButton = document.getElementById('frameworks&languages_other');
      const allButton = document.getElementById('frameworks&languages_all');

      const cards = {
         programming: [document.getElementById('JS_card'), document.getElementById('C++_card'), document.getElementById('Python_card')],
         frameworks: [document.getElementById('React.js_card'), document.getElementById('Node.js_card'), document.getElementById('Tailwind_card')],
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

      // Safely attach event listeners only if the elements exist
      if (programmingLanguagesButton) {
         programmingLanguagesButton.addEventListener("click", () => handleClick('programming', programmingLanguagesButton));
      }
      if (frameworksLibrariesButton) {
         frameworksLibrariesButton.addEventListener("click", () => handleClick('frameworks', frameworksLibrariesButton));
      }
      if (otherButton) {
         otherButton.addEventListener("click", () => handleClick('other', otherButton));
      }
      if (allButton) {
         allButton.addEventListener("click", () => handleClick('all', allButton));
      }
   }

   // Function to handle Portfolio Page logic (for projects)
   function hide_show_HTML_Portfolio() {
      // Get buttons
      const allProjectsButton = document.getElementById("allProjects_button");
      const appwebProjectsButton = document.getElementById("app/web_button");
      const arduinoProjectsButton = document.getElementById("arduinoProjects_button");
      const otherProjectsButton = document.getElementById("other_button");
   
      // Define projects
      const projects = {
         appweb_projects: [document.getElementById("personalportfolio_project"), document.getElementById("vaccinic_project")],
         arduino_projects: [], // No Arduino projects currently
         other_projects: [],   // No Other projects currently
         all_projects: [document.getElementById("personalportfolio_project"), document.getElementById("vaccinic_project")] // All projects
      };
   
      // Function to hide all projects using visibility instead of display
      function hideAllProjects() {
         for (let projectType in projects) {
            projects[projectType].forEach(project => {
               project.style.visibility = "hidden";  // Hide the project but keep the space
               // project.style.position = "absolute";  // Remove the project from the document flow
               project.style.opacity = "0";          // Ensure the project is invisible
            });
         }
      }
   
      // Function to show projects based on the selected type
      function showProjects(projectType) {
         hideAllProjects(); // Hide all projects first
   
         if (projects[projectType].length === 0) {
            
            console.log("Under construction");
         } else {
            // Show the selected projects
            projects[projectType].forEach(project => {
               project.style.visibility = "visible"; // Make the project visible
               // project.style.position = "relative;  // Reinsert it into the document flow
               project.style.opacity = "1";          // Ensure it is fully visible
            });
         }
      }
   
      // Add event listeners for buttons
      if (allProjectsButton) {
         allProjectsButton.addEventListener("click", () => showProjects("all_projects"));
      }
      if (appwebProjectsButton) {
         appwebProjectsButton.addEventListener("click", () => showProjects("appweb_projects"));
      }
      if (arduinoProjectsButton) {
         arduinoProjectsButton.addEventListener("click", () => showProjects("arduino_projects"));
      }
      if (otherProjectsButton) {
         otherProjectsButton.addEventListener("click", () => showProjects("other_projects"));
      }
   }
   
   // Main function to initialize everything
   function main() {
      hide_show_HTML_Index();
      hide_show_HTML_Portfolio();
   }

   // Call the main function after DOM is loaded
   main();
});
