const { searchFilter } = require("../helpers/AccountRegister.helper");

describe("Check Search Bar testing!", () => {
  test("Passarà el test ja que retornarà la llista filtrada com nosaltres esperem", () => {
    const text = "Hola";

    const input = searchFilter(text);
    const output = ["HolaBuenosdias", "HolaBuenastardes"];
    expect(input).toEqual(output);
  });
});
