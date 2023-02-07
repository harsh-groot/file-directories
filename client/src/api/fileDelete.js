import axios from 'axios';
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';
import { fileList } from './fileList';

function fileDelete(id, setRow) {
    const token = window.localStorage.getItem("token");
    const url = `${BASE_URL}/upload/deleteFile/${id}`
    const config = {
        headers: {
          'Authorization' : `Bearer ${token}`
        },
      };
    axios.delete(url, config)
    .then((res) =>{ 
        Notifications("success", "Success", res.data.message)
        fileList(setRow);
    }
        )
    .catch((error) => Notifications("danger", "Error", "Operation Unsuccessful"))
}

export default fileDelete;