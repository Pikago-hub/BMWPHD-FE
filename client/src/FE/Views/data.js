import axios from "axios";

export const mockClientItems = (itemsNumber) => {
  /*
  let data = [];
  try {
    const res = await axios.get("https://bmwphd-be.herokuapp.com/horses", {});
    data = res;
    //this.$emit("horseSearch", res);
  } catch (error) {
    console.error(error);
  }
  return [{ sdad: "sdsdfsa" }];
  */

  const mockItems = [];
  const sports = ["basketball", "football", "running", "swimming"];
  const fruits = ["banana", "apple", "orange", "peach"];

  for (let i = 1; i < itemsNumber + 1; i += 1) {
    mockItems.push({
      name: `name-${i}`,
      address: `address-${i}`,
      height: i,
      weight: i,
      age: i,
      favouriteSport: sports[i % 4],
      favouriteFruits: fruits[i % 4],
    });
  }
  return mockItems;
};
