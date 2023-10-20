const DataSource = {
	async getRestaurantData() {
		try {
			// Menggunakan import statis untuk mengambil data dari data.json
			const data = require("./data.json");
			return data.restaurants;
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	},
};

export default DataSource;
