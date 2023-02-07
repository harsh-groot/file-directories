import axios from 'axios';
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';

export function fileUpload(file) {
    const url = `${BASE_URL}/upload/`;
    const token = window.localStorage.getItem("token");
    const formData = new FormData();
    formData.append('files', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
      },
    };
    axios.post(url, formData, config)
    .then((response) => {
        Notifications("success", "Success", response.data.message);
    })
    .catch((error) => {
      Notifications("danger", "Error", "Operation Unsuccessful")
    });
}

