
import auth from "../services/auth-header";

const url = "https://bmwphd-be.herokuapp.com/";

// add a new change request from the Result view searchTool component
const postFlaggedHorse = async (data) => {
    var token = JSON.parse(localStorage.getItem("user"));
    // var user = cacheUtils.get("user_info");
    var id = token.userInfo.id;
    var hID = 1;
    console.log(data.select);
    return await fetch(url + "changeRequests", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        attribute: data.select,
        horseId: hID,
        id: data.id,
        ownerId: id,
        status: data.status,
        suggestedChange: data.change,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    });
  };

// gets all change requests from users on ManageRequests view
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

// reject a change request to update a horse on ManageRequests view
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

// reject a change request to update a horse on ManageRequests view
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

// delete a change request to update a horse on ManageRequests view
const deleteRequest = async (data, id) => {
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "changeRequests/" + id, {
      method: "DELETE",
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

// gets a list of all users on ManageUsers view
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

// delete a user from the database on ManageUsers view
const deleteUser = async (data, id) => {
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "changeRequests/" + id, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({
        id: data.id,
        username: data.username,
        password: data.password,
        name: data.name,
        email: data.email
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    });
};


export default {
    postFlaggedHorse,
    getChangeRequests,
    acceptRequest,
    rejectRequest,
    deleteRequest,
    getAllUsers,
    deleteUser
};