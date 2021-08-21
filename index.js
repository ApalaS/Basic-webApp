// create array -> click -> prompt -> value read
// -> store -> row create -> dislay

let n = 1;
let x = 1;
let userArr = [];
let remove = document.createElement("button");
remove.innerHTML = "X";
remove.className = "button is-danger is-outlined";

let entry = document.getElementById("btnToAdd");
entry.addEventListener("click", displayDetails);

function displayDetails(e) {
  e.preventDefault();
  let item = document.getElementById("item").value;
  let brand = document.getElementById("brand").value;
  let price = document.getElementById("price").value;

  if (!item || !brand || !price) {
    alert("Please enter details");
    return;
  }

  let que = confirm("Do you want to add the item?");

  if (que == true) {
    let display = document.getElementById("table1");
    let newRow = display.insertRow(n);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = x++;
    cell2.innerHTML = item;
    cell3.innerHTML = brand;
    cell4.innerHTML = price;
    cell5.appendChild(remove);

    n++;
    let itemsObj = {
      item: item,
      brand: brand,
      price: price,
    };

    userArr.push(itemsObj);
    let stringify = JSON.stringify(userArr);
    // userArr.forEach(console.log(userArr));
    localStorage.setItem("Cart", stringify);
  }
}
window.onload = function () {
  userArr = JSON.parse(localStorage.getItem("Cart"));
  if (userArr == null) {
    userArr = [];
  }
  userArr.forEach((ele) => {
    let display = document.getElementById("table1");
    let newRow = display.insertRow(n);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = x++;
    cell2.innerHTML = ele.item;
    cell3.innerHTML = ele.brand;
    cell4.innerHTML = ele.price;
    cell5.appendChild(remove);
    n++;
  });
};
