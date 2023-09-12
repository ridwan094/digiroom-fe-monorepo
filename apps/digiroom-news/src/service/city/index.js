import DIGIROOM from '@/service/apiDigiroom';
export const getListCity = async ({ isoCode }) => {
  try {
    const response = await DIGIROOM.get(`/parameter-management-service/v1/province/${isoCode}`);
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
