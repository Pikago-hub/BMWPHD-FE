
import cacheUtils from "../utils/cacheUtils"; "../utils/cacheUtils";

const url = "https://bmwphd-be.herokuapp.com/";

const getChangeRequests = async () => {
    //console.log("in form data method api")
    var token = cacheUtils.get("login_token");
    return await fetch(url + "forms", {
      //forms
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((response) => response.json());
  };
  
  export default {
    getChangeRequests
  };