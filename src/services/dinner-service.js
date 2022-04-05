
export default class DinnerService {
  static getFood(searchWord, zip, radius, price, resultsTotal, category) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);
    myHeaders.append("Cookie", "hl=en_US; wdi=1|483CBA32CEF4A16D|0x1.8902fd6128db5p+30|4e112f406f58471b");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    console.log(fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchWord}&location=${zip}&radius=${radius}&categories=${category}&limit=${resultsTotal}&sort_by=rating&price=${price}`));
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchWord}&location=${zip}&radius=${radius}&categories=${category}&limit=${resultsTotal}&sort_by=rating&price=${price}`, requestOptions)
      .then(function(response){
        if(!response.ok){
          throw Error(`Error Type: ${response.statusText} <br> Error Code: ${response.status}`);
        }
        return response.json();
      })
      .catch(function(error){
        return error;
      });
  }
    
}

