import axios from "axios";

import { errorControlLogin } from "../helpers/Login.helper";

import { errorControlRegister } from "../helpers/AccountRegister.helper";

const url = "http://15.188.52.76:3000/api/v2/";

const loginURL = url + "users/login";
const registerURL = url + "users/register";
const editProfileURL = url + "users/me/updateInfo";
const logoutURL = url + "users/logout";
const userDeleteURL = url + "users/me/deleteUser";
const userDataURL = url + "users/me/getInfo";
const ConfirmPasswordURL = url + "users/me/updatePassword";
const recoverEmailURL = url + "users/resetForgottenPassword/sendMail";
const recoverPasswordURL = url + "users/resetForgottenPassword/resetPassword";
const userAchievements = url + "users/me/getAchievements/";

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
      console.log("Da error");
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
  return await axios
    .post(registerURL, {
      email: userEmail,
      name: userName,
      surnames: userSurname,
      password: password1,
    })
    .then(function (response) {
      console.log("Funciona el register");
      //console.log(response);
      //errorControlRegister(7);
      return true;
    })
    .catch(function (error) {
      console.log("Da error el register");
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
      console.log(error.response.data.message);
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
      console.log("El error es " + error.response.data.message);
      //errorControl(2);
      return false;
    });
}

export async function createGetUserData() {
  let userDTO = [];
  return await axios
    .get(userDataURL, {})
    .then(function (response) {
      userDTO = [
        response.data.name,
        response.data.surnames,
        response.data.email,
      ];
      return userDTO;
    })
    .catch(function (error) {
      console.log("El error es " + error.response.data.message);
      //errorControl(2);
      return userDTO;
    });
}

export async function createPostRecoverMail(userEmail) {
  return await axios
    .post(recoverEmailURL, {
      email: userEmail,
    })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      console.log("Da error");
      console.log("Da error y el error es : " + error.response.data.message);
      //errorControlLogin(2);
      return false;
    });
}

export async function createPostRecoverPassword(
  confirmationCode,
  userPassword
) {
  console.log("Entro a createPostRecoverPassword");
  console.log(confirmationCode);
  return await axios
    .post(recoverPasswordURL, {
      token: confirmationCode,
      newPassword: userPassword,
    })
    .then(function (response) {
      console.log("Funciona el createPostRecoverPassword");
      return true;
    })
    .catch(function (error) {
      console.log("Da error el createPostRecoverPassword");
      console.log(error.response.data.message);
      return false;
    });
}

export async function createGetUserAchievements() {
  let achievemtsDTO = [];
  return await axios
    .get(userAchievements, {}, { withCredentials: true })
    .then(function (response) {
      achievemtsDTO = [response.data.achievements];
      return achievemtsDTO;
    })
    .catch(function (error) {
      console.log("El error es " + error.response.data.message);
      //errorControl(2);
      return achievemtsDTO;
    });
}
