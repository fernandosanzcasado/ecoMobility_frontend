export const searchFilter = (
  text,
  updateFilterFunc,
  updateSearchFunc,
  masterData
) => {
  if (text) {
    const newData = masterData.filter((item) => {
      const itemData = { item } ? item.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    updateFilterFunc(newData);
    updateSearchFunc(text);
  } else {
    updateFilterFunc(masterData);
    updateSearchFunc(text);
  }
};
