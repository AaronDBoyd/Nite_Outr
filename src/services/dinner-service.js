export default class DinnerService {  
  static async getFood(searchWord, zip, radius, price) {
  let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchWord}&location=${zip}&radius=${radius}&limit=50&sort_by=rating&price=${price}`;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);
  myHeaders.append(`${process.env.API_KEY}`, "");
  myHeaders.append("Cookie", "hl=en_US; wdi=1|483CBA32CEF4A16D|0x1.8902fd6128db5p+30|4e112f406f58471b");  
    try {
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const response = await fetch (url, requestOptions);
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
  }