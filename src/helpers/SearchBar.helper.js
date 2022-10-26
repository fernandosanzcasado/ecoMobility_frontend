export const searchFilter = (text) => {
  if (text) {
    const newData = masterData.filter((item) => {
      const itemData = { item } ? item.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setfilterData(newData);
    setSearch(text);
  } else {
    setfilterData(masterData);
    setSearch(text);
  }
};
