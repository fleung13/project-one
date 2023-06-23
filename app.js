
// Filtering Function: 
//create necessary HTML elements ✅
//update/add classes to HTML container holding the furniture images✅
//add CSS styling to the filter buttons✅
// use query select to gather relevant HTML elements such as filter button and furniture images - save in variable✅

//add an event listener to the container of filters to listen for when a button is pressed {
    //ensure event listener target is a button using event.target === button{
        //target furniture's various filters and save them in a variable (ex. material, price, product category)


// use onValue function to listen to changes in database {
    // use forEach method to create a function { 
        //retrieve data from database and store in array
        //filter array based on filter criteria
        //display filter data to the page

        //resetting array to go back to original when clear button 

import { app } from './firebase.js'
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const database = getDatabase(app);
const dbRef = ref(database);

const materialFilter = document.getElementById('materialFilter');
const colourFilter = document.getElementById('colourFilter');
const itemContainer = document.getElementById('itemContainer');

materialFilter.addEventListener('change', handleFilterSelection);
colourFilter.addEventListener('change', handleFilterSelection);

function handleFilterSelection() {
    const materialValue = materialFilter.value;
    const colourValue = colourFilter.value;
    
    filterItems(materialValue, colourValue);
  }
  
  function filterItems(material, colour) {
    onValue(dbRef, (data) => {
      const allItems = [];
      if (data.exists()) {
        const items = data.items();
        for (let itemKey in items) {
          const item = items[itemKey];
      }
    }
    
    })
}
  



