import axios from "axios";

const options = {
  method: "GET",
  url: "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
  params: {
    url: "https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762",
  },
  headers: {
    "X-RapidAPI-Key": "536c30b475msh43b577d55418735p153dd2jsn3f245da7bec7",
    "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
