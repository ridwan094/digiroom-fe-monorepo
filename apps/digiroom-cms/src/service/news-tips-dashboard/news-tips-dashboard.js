import CMS from '../apiCMS';
import apiConfig from '../apiCMS/api-config';

export const getListDashboardNewsTips = async (
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

  const api = `newstips/list`;
  try {
    const response = await CMS.get(api);
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
