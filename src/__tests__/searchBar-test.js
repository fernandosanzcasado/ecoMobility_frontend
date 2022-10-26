import { searchFilter } from "../helpers/SearchBar.helper";

describe("Check Search Bar testing!", () => {
  test("Passarà el test ja que retornarà la llista filtrada com nosaltres esperem", () => {
    const text = "Hola";

    const setSearchData = jest.fn();
    const filterData = jest.fn();
    const masterData = [
      "França",
      "Muntaner",
      "Av.Sarria",
      "Urgell",
      "Borrell",
      "Diagonal",
      "Londres",
      "Paris",
      "Jaume I",
      "Bisbe",
      "Portal de l'Àngel",
      "Pau Claris",
      "Passeig de Gracia",
      "Esculleders",
      "Rambla",
      "ueeeee",
      "sadasdad",
      "dadasdsa",
      "fsegfsad",
      "HolaBuenasTardes",
      "HolaBuenosDias",
    ];
    const output = ["HolaBuenasTardes", "HolaBuenosDias"];

    searchFilter(text, filterData, setSearchData, masterData);

    expect(setSearchData).toHaveBeenCalledWith(text);
    expect(filterData).toHaveBeenCalledWith(output);
  });
});
