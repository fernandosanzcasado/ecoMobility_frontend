import { checkTextInputNotEmpty } from "../helpers/Login.helper";

describe("Check login testing!", () => {
  test("Passarà el test ja que els camps que paso es troben plens", () => {
    const email = "peposnavarro@gmail.com";
    const password = "pepe1234";

    const input = checkTextInputNotEmpty(email, password);
    const output = true;
    expect(input).toEqual(output);
  });
  test("Passarà el test ja que passo un camp buit", () => {
    const email = "peposnavarro@gmail.com";
    const password = "";

    const input = checkTextInputNotEmpty(email, password);
    const output = false;
    expect(input).toEqual(output);
  });
});
