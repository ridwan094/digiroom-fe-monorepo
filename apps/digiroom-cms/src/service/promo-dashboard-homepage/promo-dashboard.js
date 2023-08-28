import CMS from '../apiCMS';
import apiConfig from '../apiCMS/api-config';

export const getListDashboardPromo = async (
  search,
  sorting,
  page,
  startIndex,
  endIndex,
  filter = []
) => {
  const queryParams = new URLSearchParams({
    search,
    sortDirection: sorting,
    currentPage: page,
    startIndex,
    endIndex,
    filter: JSON.stringify(filter),
  });

  const api = `${apiConfig.local}/list-dashboard-promo?${queryParams.toString()}`;
  try {
    const response = await CMS.get(api);
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

export const deleteListDashboardPromo = async (id, token) => {
  const api = `${apiConfig.local}/list-dashboard-promo?id=${id}`;
  try {
    const response = await CMS.delete(api);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    return false;
  }
};
