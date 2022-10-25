const { checkEmail } = require("../functions/FunctionsTesting");

describe("Check email testing!", () => {
  test("Passarà el test ja que el email introduït es vàlid", () => {
    const email = "peposnavarro@gmail.com";

    const input = checkEmail(email);
    const output = true;
    expect(input).toEqual(output);
  });

  test("Passarà el test ja que el email introduït no es vàlid", () => {
    const email = "peposnavarrogmail.com";

    const input = checkEmail(email);
    const output = false;
    expect(input).toEqual(output);
  });
});
