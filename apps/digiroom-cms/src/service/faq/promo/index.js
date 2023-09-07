import CMS from '@/service/apiCMS';

export const createFaqPromo = async (body) => {
  try {
    await CMS.post('faq/promo/create', body);
    return true;
  } catch (error) {
    console.error('Error when creating data:', error);
  }
};

export const getListFaqPromo = async () => {
  try {
    const response = await CMS.get('faq/promo/list');

    if (response !== null) {
      const data = response;
      return data;
    } else {
      return response;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const updateFaqPromo = async (body) => {
  try {
    await CMS.put('faq/promo/edit', body);
    return true;
  } catch (error) {
    console.error('Error when updating data:', error);
  }
};

export const deleteFaqPromo = async (id) => {
  try {
    await CMS.delete(`faq/promo/delete/${id}`);
    return true;
  } catch (error) {
    console.error('Error when removing data:', error);
  }
};
