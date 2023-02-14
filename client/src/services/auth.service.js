import axios from "axios";

const API_URL = "https://bmwphd-be.herokuapp.com/auth/";

class AuthService {
  login = async (user) => {
    console.log("validate");
    return axios
      .post(
        API_URL + "login",
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

  register(user) {
    return axios.post(API_URL + "signup", {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      comfirmPassword: user.comfirmPassword,
    });
  }
}

export default new AuthService();
