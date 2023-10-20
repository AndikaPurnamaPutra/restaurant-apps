import DataSource from "../public/data/data-source";

async function createRestaurantCard(restaurant) {
	const card = document.createElement("div");
	card.classList.add("card");

	const cardImage = document.createElement("div");
	cardImage.classList.add("card-image");

	const citySpan = document.createElement("span");
	citySpan.id = "city";
	citySpan.classList.add("city");
	citySpan.textContent = restaurant.city;
	cardImage.appendChild(citySpan);

	const image = document.createElement("img");
	image.src = restaurant.pictureId;
	image.alt = restaurant.name;
	cardImage.appendChild(image);

	card.appendChild(cardImage);

	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	const subtext = document.createElement("h5");
	subtext.classList.add("subtext");
	subtext.innerHTML = `Rating: <span id="rating">${restaurant.rating}</span>`;
	cardBody.appendChild(subtext);

	const display = document.createElement("h3");
	display.classList.add("display");
	display.textContent = restaurant.name;
	cardBody.appendChild(display);

	const desc = document.createElement("p");
	desc.classList.add("desc");
	desc.textContent = restaurant.description;
	cardBody.appendChild(desc);

	card.appendChild(cardBody);

	return card;
}

async function renderRestaurants() {
	try {
		const restaurants = await DataSource.getRestaurantData();
		const bodyContent = document.querySelector(".body-content");

		restaurants.forEach(async (restaurant, index) => {
			const card = await createRestaurantCard(restaurant);
			bodyContent.appendChild(card);
		});
	} catch (error) {
		console.error("Error:", error);
	}
}

renderRestaurants();
