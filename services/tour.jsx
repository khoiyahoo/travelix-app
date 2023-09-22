import axios from "axios";

export const apiGetAllTour = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
