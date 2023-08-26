export const getListDashboardPromo = async (token) => {
  const api = 'api/list-dashboard-promo';
  // const api = `${process.env.NEXT_PUBLIC_BASE_LOCAL_PROMO}/promo/getlist`;
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:3004',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};