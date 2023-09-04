import CMS from '../apiCMS';
import apiConfig from '../apiCMS/api-config';

export const getListDashboardNewsTips = async (payload) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/newstips/pagelist`;
  try {
    const response = await CMS.post(api, payload);
    if (response !== null) {
      const data = response;
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const createNewsTips = async (data) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/newstips/create`;

  try {
    const response = await CMS.post(api, data);
    console.log('isi response', response);
  } catch (error) {}
};

export const getIdListData = async (payload) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/newstips/edit`;
  try {
    const response = await CMS.put(api, payload);
    if (response.status === 'Success') {
      return response.status;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting data: ', error);
    return null;
  }
};

export const deleteDataTable = async (id) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/newstips/delete/${id}`;
  try {
    const response = await CMS.delete(api);
    if (response === 'Success') {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting data: ', error);
    return null;
  }
};
