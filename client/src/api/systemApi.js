
import auth from "../services/auth-header";

const url = "https://bmwphd-be.herokuapp.com/";

// gets all change requests from users 
const getChangeRequests = async () => {
    var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + 'changeRequests', {
         method: 'GET',
         mode: 'cors',
            headers: {
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
};

// reject a user request to update a horse 
const acceptRequest = async (data, id) => {
    console.log("into accept request");
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "changeRequests/" + id, {
      // forms/id
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        attribute: data.attribute,
        horseId: data.horseId,
        id: data.id,
        ownerId: data.ownerId,
        status: data.status,
        suggestedChange: data.suggestedChange,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    });
  };

// reject a user request to update a horse 
const rejectRequest = async (data, id) => {
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "changeRequests/" + id, {
      // forms/id
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        attribute: data.attribute,
        horseId: data.horseId,
        id: data.id,
        ownerId: data.ownerId,
        status: data.status,
        suggestedChange: data.suggestedChange,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    });
  };

// gets a list of all users 
const getAllUsers = async () => {
    var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + 'users', {
         method: 'GET',
         mode: 'cors',
            headers: {
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
};


export default {
    getChangeRequests,
    acceptRequest,
    rejectRequest,
    getAllUsers
};