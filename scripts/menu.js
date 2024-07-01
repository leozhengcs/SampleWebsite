async function fetchMenu() {
    try {
        const response = await fetch("./data/menu-data.JSON");

        if (!response.ok) {
            throw new Error("Network response is not okay");
        }

        const data = await response.json()
        return data;
    } catch (err) {
        console.log("There was an error running the fetchMenu function " + err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const menus = await fetchMenu();
    const floralTeaSection = document.querySelector("#floral-tea-section");
    const steepedBrewSection = document.querySelector("#steeped-brew-section");
    const sweetTreatSection = document.querySelector("#sweet-treat-section");

    // Appending the floal tea menu
    menus.floralTeaMenu.forEach((item) => {
        const parentContainer = document.createElement("div");
        parentContainer.classList.add("menu-item-container");
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const description = document.createElement("div");
        description.classList.add("description");
        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.innerText = item.name;
        const itemDescription = document.createElement("span");
        itemDescription.classList.add("item-description");
        itemDescription.innerText = item.description;
        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.innerText = item.price;

        description.appendChild(itemName);
        description.appendChild(itemDescription);
        description.appendChild(itemPrice);

        const image = document.createElement("div");
        image.classList.add("item-image");
        const itemImageContainer = document.createElement("div");
        itemImageContainer.classList.add("item-image-container");
        const itemImage = document.createElement('img');
        itemImage.src = `/images/${item['image-src']}`;

        itemImageContainer.appendChild(itemImage);
        image.appendChild(itemImageContainer);

        menuItem.appendChild(description);
        menuItem.appendChild(image);
        parentContainer.appendChild(menuItem);
        floralTeaSection.appendChild(parentContainer);
    });

    // Appending the steeped brew menu
    menus.steepedBrewMenu.forEach((item) => {
        const parentContainer = document.createElement("div");
        parentContainer.classList.add("menu-item-container");
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const description = document.createElement("div");
        description.classList.add("description");
        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.innerText = item.name;
        const itemDescription = document.createElement("span");
        itemDescription.classList.add("item-description");
        itemDescription.innerText = item.description;
        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.innerText = item.price;

        description.appendChild(itemName);
        description.appendChild(itemDescription);
        description.appendChild(itemPrice);

        const image = document.createElement("div");
        image.classList.add("item-image");
        const itemImageContainer = document.createElement("div");
        itemImageContainer.classList.add("item-image-container");
        const itemImage = document.createElement('img');
        itemImage.src = `/images/${item['image-src']}`;

        itemImageContainer.appendChild(itemImage);
        image.appendChild(itemImageContainer);

        menuItem.appendChild(description);
        menuItem.appendChild(image);
        parentContainer.appendChild(menuItem);
        steepedBrewSection.appendChild(parentContainer);
    });

    // Appending the sweet treat menu
    menus.sweetTreatMenu.forEach((item) => {
        const parentContainer = document.createElement("div");
        parentContainer.classList.add("menu-item-container");
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const description = document.createElement("div");
        description.classList.add("description");
        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.innerText = item.name;
        const itemDescription = document.createElement("span");
        itemDescription.classList.add("item-description");
        itemDescription.innerText = item.description;
        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.innerText = item.price;

        description.appendChild(itemName);
        description.appendChild(itemDescription);
        description.appendChild(itemPrice);

        const image = document.createElement("div");
        image.classList.add("item-image");
        const itemImageContainer = document.createElement("div");
        itemImageContainer.classList.add("item-image-container");
        const itemImage = document.createElement('img');
        itemImage.src = `/images/${item['image-src']}`;

        itemImageContainer.appendChild(itemImage);
        image.appendChild(itemImageContainer);

        menuItem.appendChild(description);
        menuItem.appendChild(image);
        parentContainer.appendChild(menuItem);
        sweetTreatSection.appendChild(parentContainer);
    });
});