import axios from 'axios';
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';
import { fileList } from './fileList';

export function fileEditUpload(id, file, setRow) {
    console.log(id);
    console.log(file);
    const url = `${BASE_URL}/upload/editFile/${id}`;
    const token = window.localStorage.getItem("token");
    const formData = new FormData();
    formData.append('files', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
      },
    };
    axios.put(url, formData, config)
    .then((response) => {
        Notifications("success", "Success", response.data.message);
        fileList(setRow);
    })
    .catch((error) => {
      Notifications("danger", "Error", "Operation Unsuccessful")
    });
}

