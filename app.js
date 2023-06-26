



  //firebase configuration 
  import { app } from './firebase.js'
  import { 
    getDatabase, 
    ref, 
    onValue, 
   } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

    const database = getDatabase(app);
    const dbRef = ref(database, 'items');

    onValue(dbRef, (data) => {
      const allItems = [];
    
      if (data.exists()) {
        data.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          allItems.push(item);
        });
      }
    
      console.log(allItems);
      const filterSelect = document.querySelector("#filter");
      filterSelect.addEventListener("change", () => {
      const selectedValue = filterSelect.value;
      console.log("Selected Value:", selectedValue);

    if (selectedValue === "") {
      console.log("No data found");
    } else {
      const filteredItems = allItems.filter((item) => item.material === selectedValue);
      console.log("Filtered Items:", filteredItems);
      // Update the UI with filtered items
    }
  });
});

// Append to Page
const appendToPage = (furnitureItems) => {
  const furnitureDisplayContainer = document.querySelector('.productContainer');
  furnitureDisplayContainer.innerHTML = '';

  furnitureItems.forEach((item) => {
    const itemName = item.name;
    const itemPrice = item.price;
    const itemImage = item.img;

    const itemHTML = `
      <div>
        <img src="${itemImage}">
        <h3>${itemName}</h3>
        <h2>${itemPrice}</h2>
        <button class="button">Add To Cart</button>
      </div>
    `;

    furnitureDisplayContainer.innerHTML += itemHTML;
  });
};


// Append to Page: 
// const appendToPage = (furnitureItems) => {
//   const furnitureDisplayContainer = document.querySelector('.productContainer');
//   furnitureDisplayContainer.innerHTML = '';
  
//   furnitureItems.forEach((item) => {
//   const itemName = item.name;
//   const itemPrice = item.price;
//   const itemImage = item.img;

//   const itemHTML = `
//   <div>
//       <img src="${itemImage}">
//       <h3>${itemName}</h3>
//       <h2>${itemPrice}</h2>
//       <button class="button">Add To Cart</button>
//   </div>
//   `
  
// })
// }


      