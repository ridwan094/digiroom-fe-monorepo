import CMS from '../apiCMS';
import apiConfig from '../apiCMS/api-config';

export const getListDashboardProductKnowledge = async (payload) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/productknowledge/pagelist`;
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

export const createProductKnowledge = async (data) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/productknowledge/create`;

  try {
    const response = await CMS.post(api, data);
    console.log('isi response', response);
  } catch (error) {}
};

export const getIdListData = async (payload) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/productknowledge/edit`;
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
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/productknowledge/delete/${id}`;
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
