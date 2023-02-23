import axios from "axios";

const API_URL = "https://bmwphd-be.herokuapp.com/";
let isLoggedin = false; 


class AuthService {
  login = async (user) => {
    isLoggedin = true;
    console.log("auth service " + isLoggedin);
    return axios
      .post(
        API_URL + "auth/login",
        JSON.stringify({
          email: user.username,
          password: user.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(user.username + ":" + user.password),
          },
        }
      )
      .then((response) => {
        if (response.data.accessToken) {
          console.log("response.data", response.data);
        }

        return response.data;
      });
  };

  logout() {
    localStorage.removeItem("user");
  }

  register = async (user) => {
    console.log("in register");
    return axios
      .post(
        API_URL + "users",
        JSON.stringify({
          email: user.email,
          name: user.name,
          password: user.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.accessToken) {
          // isLoggedin = false;
          console.log("response.data", response.data);
        }

        return response.data;
      });
  };
}

export default new AuthService();
