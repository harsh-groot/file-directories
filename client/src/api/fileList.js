import axios from 'axios';
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';

export function fileList(setRow) {
  const token = window.localStorage.getItem("token");
  const url = `${BASE_URL}/upload/getFiles`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(url, config)
    .then((res) => {
      const response =
        res.data.data &&
        res.data.data.map((item) => {
          return {
            id: item._id,
            fileName: item.fileName,
            creationDate: item.creationDate,
            extension: item.extension,
          };
        });
      setRow(response);
    })
    .catch(error => {
        Notifications("danger", "Error", "Operation Unsuccessful");
      })
}

