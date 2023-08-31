import CMS from "./apiCMS";

export const getListCategory = async (idCategory) => {
    try {
      const response = await CMS.get(`content-category/list/${idCategory}`);
      if (response !== null) {
        const data = response;
        return data;
      } else {
        return response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
};