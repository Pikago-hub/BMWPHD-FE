
import auth from "../services/auth-header";

const url = "https://bmwphd-be.herokuapp.com/";

// add a new change request from the Result view searchTool component
const postFlaggedHorse = async (data) => {
    var token = JSON.parse(localStorage.getItem("user"));
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

const getUserByID = async (id) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "users/" + id, {
         method: 'GET',
         mode: 'cors',
            headers: {
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());

}

const getHorseByID = async (id) => {
  console.log("THIS ID =" + id)
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + 'horses/search', {
         method: 'post',
         mode: 'cors',
         body: JSON.stringify({
          id: id
        }),
         headers: {
          "Content-type": "application/json",
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

// edit a change request on ManageRequest view
const updateChangeRequest = async (data) => {
    var token = JSON.parse(localStorage.getItem("user"));
    console.log(data.suggestedChange);
    return await fetch(url + "changeRequests/" + data.changeRequestId, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
            attribute: data.select,
            horseId: data.horseId,
            id: data.changeRequestId,
            ownerId: data.ownerId,
            status: data.status,
            suggestedChange: data.change,
          }),
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
};

// reject a change request to update a horse on ManageRequests view
const rejectRequest = async (data, id) => {
    console.log(data.ownerId)
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

// edit a user on ManageUsers view
const updateUser = async (data) => {
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "users/" + data.id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
            active: data.active,
            email: data.email,
            id: data.id,
            name: data.name,
            username: data.username,
            role: data.select
          }),
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
};

// deactivate a user on ManageUsers view
const deactivateUser = async (data) => {
var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "users/" + data.id, {
      // forms/id
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        active: data.active,
        email: data.email,
        id: data.id,
        name: data.name,
        username: data.username,
        role: data.select
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    });
};

// delete a user from the database on ManageUsers view
const deleteUser = async (data) => {
  console.log(data)
    var token = JSON.parse(localStorage.getItem("user"));
    return await fetch(url + "users/" + data.id, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({
        active: data.active,
        email: data.email,
        id: data.id,
        name: data.name,
        username: data.username,
        role: data.select
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
    getUserByID,
    getHorseByID,
    acceptRequest,
    updateChangeRequest,
    rejectRequest,
    deleteRequest,
    getAllUsers,
    updateUser,
    deactivateUser,
    deleteUser
};