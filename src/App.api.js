import axios from 'axios'

export default {
    async getPageData(token) {
        try {
            const response = await axios.get('item-data.json');

            return response.data.CatalogEntryView[0]; //TODO: Do this dynamically, please
        } catch (error) {
            throw new Error("getPageData failed.")
        }
    }
}