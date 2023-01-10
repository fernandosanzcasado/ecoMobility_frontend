import axios from "axios";

import { errorControlLogin } from "../helpers/Login.helper";

import { errorControlRegister } from "../helpers/AccountRegister.helper";

const loginURL = "http://13.39.20.131:3000/api/v1/users/login";
const registerURL = "http://13.39.20.131:3000/api/v1/users/register";
const editProfileURL = "http://13.39.20.131:3000/api/v1/users/me/updateInfo";
const logoutURL = "http://13.39.20.131:3000/api/v1/users/logout";
const userDeleteURL = "http://13.39.20.131:3000/api/v1/users/me/deleteUser";
const userDataURL = "http://13.39.20.131:3000/api/v1/users/me/getInfo";
const ConfirmPasswordURL =
  "http://13.39.20.131:3000/api/v1/users/me/updatePassword";

export async function createPostLogin(userEmail, userPassword) {
  return await axios
    .post(loginURL, {
      email: userEmail,
      password: userPassword,
    })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      console.log("Da error y el error es : " + error.response.data.message);
      //errorControlLogin(2);
      return false;
    });
}

export async function createPostRegister(
  userEmail,
  userName,
  userSurname,
  password1
) {
  console.log("Entro a createPostRegister");
  return await axios
    .post(registerURL, {
      email: userEmail,
      name: userName,
      surnames: userSurname,
      password: password1,
    })
    .then(function (response) {
      //console.log(response);
      //errorControlRegister(7);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      //errorControlRegister(2);
      return false;
    });
}

export async function createPutUser(userNewName, userNewSurname) {
  return await axios
    .put(
      editProfileURL,
      {
        name: userNewName,
        surnames: userNewSurname,
      },
      { withCredentials: true }
    )
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      console.log(error);
      //errorControl(2);
      return false;
    });
}

export async function createDeleteUser() {
  return await axios
    .delete(userDeleteURL, {}, { withCredentials: true })
    .then(function (response) {
      console.log(response);
      //errorControl(7);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      //errorControl(2);
      return false;
    });
}

export async function createPutPasswordChange(
  userOldPassword,
  userNewPassword
) {
  return await axios
    .put(
      ConfirmPasswordURL,
      {
        checkOldPassword: userOldPassword,
        newPassword: userNewPassword,
      },
      { withCredentials: true }
    )
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      // console.log(error.response.data.message);
      //errorControl(2);
      return false;
    });
}

export async function createPostLogout() {
  return await axios
    .post(logoutURL, {}, { withCredentials: true })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      // console.log("El error es " + error.response.data.message);
      //errorControl(2);
      return false;
    });
}

export async function createGetUserData() {
  let userDTO = [];
  return await axios
    .get(userDataURL, {}, { withCredentials: true })
    .then(function (response) {
      userDTO = [
        response.data.name,
        response.data.surnames,
        response.data.email,
      ];
      return userDTO;
    })
    .catch(function (error) {
      // console.log("El error es " + error.response.data.message);
      //errorControl(2);
      return userDTO;
    });
}
