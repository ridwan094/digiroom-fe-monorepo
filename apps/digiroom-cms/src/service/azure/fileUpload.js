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
    const contentType = file.type;
    const fileName = file.name;

    const path = '_=1692846660358&sv=2022-11-02&ss=bqtf&srt=sco&sp=rwdlacuptfxiy&se=2023-08-24T11:10:55Z&sig=SXlgBt9yY2dw89o8%2F7dqGXFvpGDT8eWkznOzCYhMivI%3D'
    const urlApi = `https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/${fileName}?${path}`;

    try {
        const response = await fetch(urlApi, {
          method: 'PUT',
          headers: {
            'Content-Type': contentType,
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