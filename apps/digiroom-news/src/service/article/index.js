import DIGIROOM from '@/service/apiDigiroom';
export const getListNews = async ({ category = '', page = 0, size = 15 }) => {
  try {
    const response = await DIGIROOM.get(
      `/content/v1/news?content-category=${category}&page=${page}&size=${size}`
    );
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

export const getNewsDetail = async ({ slugCode }) => {
  console.log('slugCode =>', slugCode);
  try {
    const response = await DIGIROOM.get(`/content/v1/news?slug/${slugCode}`);
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
