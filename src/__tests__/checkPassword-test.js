const {
  checkPassword,
  checkPasswordRequeriments,
} = require("../functions/FunctionsTesting");

describe("Check Password !", () => {
  test("Passarà el test ja que les dues contrassenyes son idèntiques i per tant es pot realitzar correctament el registre", () => {
    const pass1 = "pepe1234";
    const pass2 = "pepe1234";

    const input = checkPassword(pass1, pass2);
    const output = true;
    expect(input).toEqual(output);
  });

  test("Passarà el test ja que les dues contrassenyes son diferents i per tant no es pot realitzar el registre", () => {
    const pass1 = "pepe1234";
    const pass2 = "pepe4321";

    const input = checkPassword(pass1, pass2);
    const output = false;
    expect(input).toEqual(output);
  });

  test("Passarà el test ja que una de les dues contrassenyes introduïdes té menys de 8 caracters", () => {
    const pass1 = "pe";
    const pass2 = "pepe12345";

    const input = checkPassword(pass1, pass2);
    const output = false;
    expect(input).toEqual(output);
  });
});
