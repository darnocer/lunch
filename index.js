document.addEventListener("DOMContentLoaded", (event) => {
  let fruitItemSelect = document.querySelector("#fruit-item");
  let meatItemSelect = document.querySelector("#meat-item");
  let veggieItemSelect = document.querySelector("#veggie-item");
  let grainItemSelect = document.querySelector("#grain-item");
  let cheeseItemSelect = document.querySelector("#cheese-item");
  let treatItemSelect = document.querySelector("#treat-item");
  let spreadItemSelect = document.querySelector("#spread-item");

  function init() {
    fruitItemSelect.innerHTML = "";
    meatItemSelect.innerHTML = "";
    veggieItemSelect.innerHTML = "";
    grainItemSelect.innerHTML = "";
    cheeseItemSelect.innerHTML = "";
    treatItemSelect.innerHTML = "";
    spreadItemSelect.innerHTML = "";
  }

  init();

  // Fetch JSON data
  function getData() {
    // fetch("data.json")
    fetch("https://darnocer.github.io/lunch/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        let data = response.json();
        return data;
      })
      .then((data) => {
        makeLunch(data);
      })
      .catch(function () {
        console.log("An error occurred while fetching the JSON data.");
      });
  }

  function getRandomItem(items) {
    const i = Math.floor(Math.random() * items.length);
    return items[i];
  }

  function makeLunch(data) {
    console.log("data: ", data);

    const lunchFruit = getRandomItem(data.fruit.items);
    if (!document.querySelector("#fruit-lock").checked) {
      fruitItemSelect.innerHTML = lunchFruit;
    }

    const lunchMeat = getRandomItem(data.meat.items);
    if (!document.querySelector("#meat-lock").checked) {
      meatItemSelect.innerHTML = lunchMeat;
    }

    const lunchVeggie = getRandomItem(data.veggie.items);
    if (!document.querySelector("#veggie-lock").checked) {
      veggieItemSelect.innerHTML = lunchVeggie;
    }

    const lunchGrain = getRandomItem(data.grain.items);
    if (!document.querySelector("#grain-lock").checked) {
      grainItemSelect.innerHTML = lunchGrain;
    }

    const lunchCheese = getRandomItem(data.cheese.items);
    if (!document.querySelector("#cheese-lock").checked) {
      cheeseItemSelect.innerHTML = lunchCheese;
    }

    const lunchTreat = getRandomItem(data.treat.items);
    if (!document.querySelector("#treat-lock").checked) {
      treatItemSelect.innerHTML = lunchTreat;
    }

    const lunchSpread = getRandomItem(data.spread.items);
    if (!document.querySelector("#spread-lock").checked) {
      spreadItemSelect.innerHTML = lunchSpread;
    }
  }

  // EVENT LISTENERS
  document.querySelector("#generate-btn").addEventListener("click", getData);
});
