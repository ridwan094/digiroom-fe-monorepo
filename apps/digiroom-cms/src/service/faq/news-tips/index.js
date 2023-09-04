import CMS from '@/service/apiCMS';

export const createFaqNewsTips = async (body) => {
  try {
    await CMS.post('faq/newstips/create', body);
    return true;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getListFaqNewsTips = async () => {
  try {
    const response = await CMS.get('faq/newstips/list');

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

export const updateFaqNewsTips = async (body) => {
  try {
    await CMS.put('faq/newstips/edit', body);
    return true;
  } catch (error) {
    console.error('Error when updating data:', error);
  }
};

export const deleteFaqNewsTips = async (id) => {
  try {
    await CMS.delete(`faq/newstips/delete/${id}`);
    return true;
  } catch (error) {
    console.error('Error when deleting data:', error);
  }
};
