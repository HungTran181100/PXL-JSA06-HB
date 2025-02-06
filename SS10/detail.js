const product = document.querySelector("#product");
const id = new URLSearchParams(window.location.search).get("id");
const url = `https://6777b1f680a79bf919029dfd.mockapi.io/KitchenItems/${id}`;

async function getKitchenItem(url) {
  const response = await fetch(url);
  const data = await response.json();
  product.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${data.nameItem}</h5>
            <p class="card-text">${data.priceItem}</p>
        </div>
    </div>
            `;
}

getKitchenItem(url);
