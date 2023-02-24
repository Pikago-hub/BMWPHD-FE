const url = "https://bmwphd-be.herokuapp.com/";

// get the horse's id from its name from the Result view searchTool component
const getFalggedHorseId = async (data) => {
var token = JSON.parse(localStorage.getItem("user"));
return await fetch(url + 'horses/search', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      name: data,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token.token,
   },
  }).then((response) => response.json());
};

// add a new change request from the Result view searchTool component
const postFlaggedHorse = async (data, horseId) => {
    var token = JSON.parse(localStorage.getItem("user"));
    var id = token.userInfo.id;
    console.log(data.select);
    return await fetch(url + "changeRequests", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        attribute: data.select,
        horseId: horseId,
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

// get a user by id to display their email on ManageRequests view
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

// get a horse by id to display their name on ManageRequests view
const getHorseByID = async (id) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'GET',
         mode: 'cors',
            headers: {
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseDam = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: request.suggestedChange,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseSire = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: request.suggestedChange,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseName = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: request.suggestedChange,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseDamSire = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: request.suggestedChange,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseSecondDam = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: request.suggestedChange,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseManeuverScores = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: request.suggestedChange,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseLTE = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: request.suggestedChange,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe, 
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorsePE = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: request.suggestedChange,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseShow = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: request.suggestedChange,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseClass = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: request.suggestedChange,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseLevel = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: request.suggestedChange,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseFoalDate = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: request.suggestedChange,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseEuropeanOpt = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: request.suggestedChange,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseYear = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: horse.nominator,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: request.suggestedChange,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// update a horse's inforamtion based on a change request on ManageRequests view
const updateHorseNominator = async (id, horse, request) => {
  var token = JSON.parse(localStorage.getItem("user"));
     return await fetch(url + "horses/" + id, {
         method: 'PUT',
         mode: 'cors',
         body: JSON.stringify({
          dam1: horse.dam1,
          dam2: horse.dam2,
          european_opt: horse.european_opt,
          foal_date: horse.foal_date,
          horse_class: horse.horse_class,
          id: id,
          level: horse.level,
          lte: horse.lte,        
          maneuver_score: horse.maneuver_score,
          name: horse.name,
          nominator: request.suggestedChange,
          pe: horse.pe,
          show: horse.show,
          sire1: horse.sire1,
          sire2: horse.sire2,
          year: horse.year,
        }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
      },
       }).then((response) => response.json());
}

// reject a change request to update a horse on ManageRequests view
const acceptRequest = async (data, id) => {
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
    getFalggedHorseId,
    postFlaggedHorse,
    getChangeRequests,
    getUserByID,
    getHorseByID,
    updateHorseDam,
    updateHorseSire,
    updateHorseName,
    updateHorseDamSire,
    updateHorseSecondDam,
    updateHorseManeuverScores,
    updateHorseLTE,
    updateHorsePE,
    updateHorseShow,
    updateHorseClass,
    updateHorseLevel,
    updateHorseFoalDate,
    updateHorseEuropeanOpt,
    updateHorseYear,
    updateHorseNominator,
    acceptRequest,
    updateChangeRequest,
    rejectRequest,
    deleteRequest,
    getAllUsers,
    updateUser,
    deactivateUser,
    deleteUser
};