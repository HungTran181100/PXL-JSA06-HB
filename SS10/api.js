const url = "https://6777b1f680a79bf919029dfd.mockapi.io/KitchenItems";

async function getKitchenItems() {
  const response = await fetch(url);
  const data = await response.json();
  addKitchenItem(data);
}
getKitchenItems();

function addKitchenItem(items) {
  const showItems = document.getElementById("showItems");
  for (let i = 0; i < items.length; i++) {
    showItems.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${items[i].image}" alt="">
        <div class="card-body">
             <h5 class="card-title">${items[i].nameItem}</h5>
            <p class="card-text">${items[i].priceItem}</p>
            <a href="./detail.html?id=${items[i].id}" class="btn btn-primary">Detail</a>
        </div>
    </div>
    `;
  }
}
