import axios from 'axios';
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';

export async function folderUpload (files) {
    const url = `${BASE_URL}/upload/uploadMultiple`;
    const token = window.localStorage.getItem("token");
    const formData = new FormData();

    for(let i=0; i<files.length; i++){
        formData.append('files', files[i]);
        console.log(i);
    }
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
      },
    };
    console.log(formData)

    await axios.post(url, formData, config)
    .then((response) => {
        Notifications("success", "Success", response.data.message);
    })
    .catch((error) => {
      Notifications("danger", "Error", "Operation Unsuccessfull")
    });
}

