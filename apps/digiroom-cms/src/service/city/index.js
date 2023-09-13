import CMS from '../apiCMS';
export const getListCity = async ({ isoCode }) => {
  try {
    const response = await CMS.get(`/parameter-management-service/v1/province/${isoCode}`);
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
