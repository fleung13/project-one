
  //firebase configuration 
  import { app } from './firebase.js'
  import { 
    getDatabase, 
    ref, 
    onValue, 
   } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

    const database = getDatabase(app);
    const dbRef = ref(database, 'items');

// Append to Page Function 
//selects the furniture items container and resets inner HTML
const appendToPage = (furnitureItems) => {
  const furnitureDisplayContainer = document.querySelector('.productContainer');
  furnitureDisplayContainer.innerHTML = '';

  //for each furniture item it saves each items attribute in a variable 
  furnitureItems.forEach((item) => {
    const itemName = item.name;
    const itemPrice = item.price;
    const itemImage = item.img;

    //create HTML elements for data to append to
    const itemHTML = `
      <div class = "itemContainer">
        <img class ="itemImg" src="${itemImage}">
        <h3 class ="itemName">${itemName}</h3>
        <h2 class ="itemPrice">${itemPrice}</h2>
        <button class="button">Add To Cart</button>
      </div>
    `;

    furnitureDisplayContainer.innerHTML += itemHTML;
  });
};

// Fetch all items 
onValue(dbRef, (data) => {
  const allItems = [];
  //Clear Filter button to append all items when clicked
  const clearFilterButton = document.querySelector("#clearFilterButton");
  clearFilterButton.addEventListener('click', () => { 
    appendToPage(allItems);
  })

  //checks if data exists in child item
  if (data.exists()) {
    data.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      allItems.push(item);
    });
  }

  // console.log(allItems);
  
  // Call appendToPage to display all items on the page before filtering
  appendToPage(allItems);

  //targets filter selection and listens for change and gathers selected value
  const filterSelection = document.querySelector("#filter");
  filterSelection.addEventListener("change", () => {
    const selectedValue = filterSelection.value;
    console.log(selectedValue);

    //if selected value is found in array, append those items to the page
    if (selectedValue === "") {
      console.log("No data found");
    } else {
      const filteredItems = allItems.filter((item) => item.material === selectedValue);
      // console.log(filteredItems);
      appendToPage(filteredItems);
    }
  });
});


