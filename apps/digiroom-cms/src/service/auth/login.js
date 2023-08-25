const urlApi = 'api/login';
// const urlApi = `${process.env.NEXT_PUBLIC_BASE_LOCAL_PROMO}/login/authenticate`;

export const logInAuth = async (body) => {
  try {
    const response = await fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:3004',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = response;
    return data;
  } catch (error) {
    console.error('API error:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
