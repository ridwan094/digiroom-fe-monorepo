export async function handleUpload(file) {
  try {
    const response = await uploadImage(file);
    if (response.status === 201) {
      alert('Success upload file!');
      const url = response; // Extract URL from the response
      return url;
    } else {
      alert('Upload failed with status: ' + response.status);
      return null;
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

async function uploadImage(file) {
  const contentType = file.type;
  const fileName = file.name;

  const path =
    'sp=racwdli&st=2023-08-29T07:30:27Z&se=2026-06-30T15:30:27Z&spr=https&sv=2022-11-02&sr=c&sig=N4eYieESRJHkTZ1PSN2F6W%2Fz7AGJUcLyXOPgBsTehek%3D';
  const urlApi = `https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/${fileName}?${path}`;

  try {
    const response = await fetch(urlApi, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType,
        Origin: 'http://localhost:3004',
        'x-ms-blob-type': 'BlockBlob',
      },
      body: file,
    });
    return response; // Return the response
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}
