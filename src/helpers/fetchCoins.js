const limite = 10;
// const url = "https://api.coincap.io/v2/assets";
// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

export const getCoins = async () => {
  try {
    const resp = await fetch(
      `https://api.coincap.io/v2/assets?limit=${limite}`
    );

    const { data } = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
