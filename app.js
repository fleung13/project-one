
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

// onValue(dbRef, (snapshot) => {
//   if (snapshot.exists()) {
//     const data = snapshot.val();
//     console.log(data);
//   } else {
//     console.log('No data found in Firebase.');
//   }
// });

// materialFilter.addEventListener('change', function(event){ 
//   console.log('material button clicked')
//   if(event.target.tagName === 'BUTTON');
  

// })

// colourFilter.addEventListener('change', function(event){ 
//   console.log('colour button clicked')
//   if(event.target.tagName === 'BUTTON');
  

// })

const allItems = []; 

const filterData = () => { 
  onValue(dbRef, (data) => { 
 
  if (data.exists()){ 
    console.log(data.val());

    const payload = data.val().objects;
    for (let item in payload){ 
      allItems.push(payload[objects]);
    }

     // Filter and display the results
     const materialValue = materialFilter.value;
     const colourValue = colourFilter.value;

     const filteredItems = allItems.filter((item) => {
        if (filterType === 'material') {
          return item.material === filterValue;
        } else if (filterType === 'colour') {
          return item.color === filterValue;
        }
        return false;
     });

     console.log(filteredItems);
     
  } 
});
}



materialFilter.addEventListener('change', () => {
  const materialValue = materialFilter.value;
  filterData('material', materialValue);
  console.log(materialValue);
});

colourFilter.addEventListener('change', () => {
  const colourValue = colourFilter.value;
  filterData('colour', colourValue);
  console.log(colourValue);
});

