import axios from 'axios';

export const getListDashboardPromo = async (
  token,
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

  const api = `http://localhost:3004/api/list-dashboard-promo?${queryParams.toString()}`;
  try {
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    } else {
      return response.status;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const deleteListDashboardPromo = async (id, token) => {
  const api = `http://localhost:3004/api/list-dashboard-promo?id=${id}`;
  try {
    const response = await axios.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
