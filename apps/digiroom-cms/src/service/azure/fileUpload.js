export async function handleUpload(file) {
    await uploadImage(file).then((resp) => {
        if (resp.status === 201) {
            alert("Succses upload file!");
            return true;
          } else {
            alert('Upload failed with status: ' + resp.status);
            return false;
          }
    });
}

async function uploadImage(file) {
    const { type, name } = file;

    const path = 'sp=racwdli&st=2023-08-29T07:30:27Z&se=2026-06-30T15:30:27Z&spr=https&sv=2022-11-02&sr=c&sig=N4eYieESRJHkTZ1PSN2F6W%2Fz7AGJUcLyXOPgBsTehek%3D'
    const urlApi = `https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/${name}?${path}`;

    try {
        const response = await fetch(urlApi, {
          method: 'PUT',
          headers: {
            'Content-Type': type,
            'Origin': 'http://localhost:3004',
            'x-ms-blob-type': 'BlockBlob'
          },
          body: file,
        });
  
        return response;
      } catch (error) {
        console.error('Error logging in:', error);
    }
}