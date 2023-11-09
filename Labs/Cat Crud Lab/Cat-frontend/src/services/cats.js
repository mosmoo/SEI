import api from "./apiConfig"
// We are doing postman stuff but coding it.
export const getCats = async () => {
    try {
        const cats = await api.get('/cats')
        return cats.data
    } catch (error) {
        console.log('Error:getting all cats: ', error)
    }
}
export const getCat = async (id) => {
    try {
        const response = await api.get(`/cats/${id}`)
        return response.data
    } catch (error) {
        console.log('Error: getting one cat: ', error)
    }
}
export const createCat = async (catData) => {
    try {
        const response = await api.post('/cats', catData)
        return response.data
    } catch (error) {
        console.log('Error: creating one cat: ', error)
    }
}
export const editCat = async (id , catData) => {
    try {
        const cats = await api.put(`/cats/${id}`, catData)
        return cats.data
    } catch (error) {
        console.log('Error:editing one cat: ', error)
    }
}
export const deleteCat = async (id) => {
    try {
      const response = await api.delete(`/cats/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
