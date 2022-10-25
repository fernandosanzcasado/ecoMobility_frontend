//import { checkTextInputNotEmpty } from "../screens/AccountRegister";
//import { checkTextInputNotEmpty } from "../functions/AccountRegisterFunctions";
const { checkTextInputNotEmpty } = require("../functions/FunctionsTesting");

describe("Box not empty testing!", () => {
  test("Passarà el test atès que la caixa contenidora té tots els camps plens", () => {
    const email = "josep.navarro@estudiantat.upc.edu";
    const us = "pepe";
    const password1 = "12345";
    const password2 = "12345";

    const input = checkTextInputNotEmpty(email, us, password1, password2);
    const output = true;
    expect(checkTextInputNotEmpty(input)).toEqual(output);
  });
  //   test("No passarà el test atès que passarem un component buit", () => {
  //     const email = "josep.navarro@estudiantat.upc.edu";
  //     const user = "pepe";
  //     const password1 = "12345";
  //     const password2 = "";
  //     const input = checkTextInputNotEmpty(email, user, password1, password2);
  //     const output = true;
  //     expect(input).toEqual(output);
  //   });
});
