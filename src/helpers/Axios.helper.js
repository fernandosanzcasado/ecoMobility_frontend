import axios from "axios";

import { errorControlLogin } from "../helpers/Login.helper";

import { errorControlRegister } from "../helpers/AccountRegister.helper";

const url = "http://13.38.96.212:3000/api/v2/";

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
const uploadImage = url + "users/me/uploadProfileImage";
const userProfileImage = url + "users/me/getProfileImage";
const googleLogin = "https://www.googleapis.com/userinfo/v2/me";
const rankingURL = url + "users/userRanking";

export async function createPostLogin(userEmail, userPassword, token) {
  return await axios
    .post(loginURL, {
      email: userEmail,
      password: userPassword,
      exponentPushToken: token,
    })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      console.log("Da error");
      console.log("Da error y el error es : " + error.response.data.message);
      errorControlLogin(2);
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
      errorControlRegister(7);
      return true;
    })
    .catch(function (error) {
      console.log("Da error el register");
      console.log(error);
      errorControlRegister(2);
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
      errorControl(2);
      return false;
    });
}

export async function createDeleteUser() {
  return await axios
    .delete(userDeleteURL, {}, { withCredentials: true })
    .then(function (response) {
      console.log(response);
      errorControl(7);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      errorControl(2);
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
      errorControl(2);
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
      errorControl(2);
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
      errorControl(2);
      return userDTO;
    });
}

export async function createGetUserProfileImage() {
  let image;
  return await axios
    .get(userProfileImage, {}, { withCredentials: true })
    .then(function (response) {
      image = response.data;
      return image;
    })
    .catch(function (error) {
      console.log("El error es " + error.response.data.message);
      errorControl(2);
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
      errorControlLogin(2);
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

export async function createGetRanking() {
  console.log("ENTRO A GETRANKING");
  console.log("llamo al endpoint " + rankingURL);
  let rankingDTO = [];
  return await axios
    .get(rankingURL, {}, { withCredentials: true })
    .then(function (response) {
      console.log("ENTRO A THEN RESPONS");
      rankingDTO = [response.data.Items];
      console.log(response.data.Items);
      return rankingDTO;
    })
    .catch(function (error) {
      console.log("El error es " + error.response.data.message);
      return rankingDTO;
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

export async function createPostUploadPicture(image) {
  console.log("ENTRO A LA FUNCION DE UPLOAD Y TRATO DE SUBIR" + image);
  return await axios
    .put(
      uploadImage,
      { withCredentials: true },
      {
        profileImage: image,
      }
    )
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

export async function createPostEnviaNotificacion(token) {
  console.log("ETRO A LA FUNCION DE LA NOTI");
  let axiosheaders = {
    headers: {
      host: "exp.host",
      accept: "application/json",
      "accept-encoding": "gzip, deflate",
      "content-type": "application/json",
    },
  };
  console.log("Entro a createPostEnviaNotificacion");
  console.log(token);
  return await axios
    .post(
      "https://exp.host/--/api/v2/push/send",
      {
        to: token,
        title: "titulo de la noti",
        body: "body de la noti",
      },
      axiosheaders
    )
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
