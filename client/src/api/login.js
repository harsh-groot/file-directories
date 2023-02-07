import axios from "axios";
import { Notifications } from '../Components/Notifications';
import { BASE_URL } from '../utils/url';

export function login(value) {
  const url = `${BASE_URL}/admin/login`;
  const data = {email : value.username, password : value.password}
    axios.post(url, data)
      .then(function (response) {
        window.localStorage.setItem("token", response.data.token)
        Notifications("success", "Success", "Login Successful");
        // setTimeout(() => {
        //     navigate("/file-directories")
        // }, 3000);
        return response.data
      })
      .catch(function (error) {
        Notifications("danger", "Error", "Login Unsuccessful");
        return error
      });
    
}

