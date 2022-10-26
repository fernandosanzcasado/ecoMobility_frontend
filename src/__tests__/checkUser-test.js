import { checkUser } from "../helpers/AccountRegister.helper";

describe("Check User testing!", () => {
  test("Passarà el test ja que l'usuari introduït es vàlid", () => {
    const user = "pepenavarro";

    const input = checkUser(user);
    const output = true;
    expect(input).toEqual(output);
  });

  test("Passarà el test ja que l'usuari introduït no es vàlid", () => {
    const user = "pe";

    const input = checkUser(user);
    const output = false;
    expect(input).toEqual(output);
  });
});
