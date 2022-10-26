import { checkTextInputNotEmpty } from "../helpers/AccountRegister.helper";

describe("Box not empty testing!", () => {
  test("Passarà el test atès que la caixa contenidora té tots els camps plens", () => {
    const email = "josep.navarro@estudiantat.upc.edu";
    const us = "pepe";
    const password1 = "12345";
    const password2 = "12345";

    const input = checkTextInputNotEmpty(email, us, password1, password2);
    const output = true;
    expect(input).toEqual(output);
  });
  test("Passarà el test atès que passarem un password buit", () => {
    const email = "josep.navarro@estudiantat.upc.edu";
    const user = "pepe";
    const password1 = "12345";
    const password2 = "";
    const input = checkTextInputNotEmpty(email, user, password1, password2);
    const output = false;
    expect(input).toEqual(output);
  });
  test("Passarà el text atès que passarem un password buit", () => {
    const email = "josep.navarro@estudiantat.upc.edu";
    const user = "pepe";
    const password1 = "";
    const password2 = "12345";
    const input = checkTextInputNotEmpty(email, user, password1, password2);
    const output = false;
    expect(input).toEqual(output);
  });
  test("Passarà el text atès que passarem un user buit", () => {
    const email = "josep.navarro@estudiantat.upc.edu";
    const user = "";
    const password1 = "12345";
    const password2 = "12345";
    const input = checkTextInputNotEmpty(email, user, password1, password2);
    const output = false;
    expect(input).toEqual(output);
  });
  test("Passarà el text atès que passarem un emailbuit", () => {
    const email = "";
    const user = "pepe";
    const password1 = "";
    const password2 = "12345";
    const input = checkTextInputNotEmpty(email, user, password1, password2);
    const output = false;
    expect(input).toEqual(output);
  });
});
