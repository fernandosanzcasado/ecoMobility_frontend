// const errorControl = (errorId) => {
//   switch (errorId) {
//     case 1:
//       alert("El correo electrónico introducido no es válido");
//       break;
//     case 2:
//       alert("El correo electrónico introducido ya se encuentra registrado");
//       break;
//     case 3:
//       alert("El nombre de usuario debe contener entre 3 y 15 carácteres");
//       break;
//     case 4:
//       alert("El nombre de usuario ya se encuentra en uso");
//       break;
//     case 5:
//       alert("La contraseña debe tener más de 8 carácteres");
//       break;
//     case 6:
//       alert("No has introducido la misma contraseña");
//       break;
//     case 7:
//       alert("Te has registrado satisfactoriamente");
//       break;
//     case 8:
//       alert("Debes rellenar todos los campos");
//       break;
//     default:
//       break;
//   }
// };

module.exports = {
  //FUNCIONS ACCOUNTREGISTER
  checkTextInputNotEmpty: (email, user, password1, password2) => {
    if (
      email.length == 0 ||
      user.length == 0 ||
      password1.length == 0 ||
      password2.length == 0
    ) {
      //errorControl(8);
      return false;
    } else return true;
  },

  checkEmail: (email) => {
    //console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      //errorControl(1);
      return false;
    } else {
      return true;
    }
  },

  checkUser: (user) => {
    //console.log(user);
    if (user.length <= 3 || user.length >= 15) {
      //errorControl(3);
      //console.log("User is Not Correct");
      return false;
    } else {
      return true;
      //console.log("User is Correct");
    }
  },

  checkPassword: (password1, password2) => {
    if (
      checkPasswordRequeriments(password1) &&
      checkPasswordRequeriments(password2)
    ) {
      if (password1 != password2) {
        //alert("No has introducido la misma contraseña");
        //errorControl(6);
        return false;
      } else {
        //alert("Te has registrado satisfactoriamente");
        //navigation.navigate("Login");
        //errorControl(7);
        return true;
      }
    } else {
      if (password1 != password2)
        //errorControl(6);
        //alert("No has introducido la misma contraseña");
        //else errorControl(5);
        //alert("La contraseña debe tener más de 8 carácteres");
        return false;
    }
  },

  checkPasswordRequeriments: (password1) => {
    if (password1.length < 8) return false;
    else return true;
  },

  //FUNCIO SEARCHBAR
  searchFilter: (text) => {
    const masterData = [
      "HolaBuenosdias",
      "HolaBuenastardes",
      "França",
      "España",
      "Dinamarca",
    ];
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = { item } ? item.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData;
      //setfilterData(newData);
      //setSearch(text);
      // } else {
      //   setfilterData(masterData);
      //   setSearch(text);
    }
  },
};
