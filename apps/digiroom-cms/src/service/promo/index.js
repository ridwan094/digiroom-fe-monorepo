import CMS from '../apiCMS';

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

  try {
    const response = await CMS.get(`promo/list`);
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

export const getPromoBySlug = async (slug) => {
  try {
    const response = await CMS.get(`promo/slug/${slug}`);

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

export const createPromo = async (body) => {
  try {
    await CMS.post('promo/create', body);

    return true;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const updatePromo = async (body) => {
  try {
    await CMS.put(`promo/edit`, body);

    return true;
  } catch (error) {
    console.log(error);
  }
};

export const deletePromo = async (id) => {
  const api = `promo/delete/${id}`;
  try {
    await CMS.delete(api);

    return true;
  } catch (error) {
    console.error('Error deleting data:', error);
    return false;
  }
};
