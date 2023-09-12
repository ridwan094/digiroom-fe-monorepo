import DIGIROOM from '@/service/apiDigiroom';
export const getListProvince = async () => {
  try {
    const response = await DIGIROOM.get('/parameter-management-service/v1/province');
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
