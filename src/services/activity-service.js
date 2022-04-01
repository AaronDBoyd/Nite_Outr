export default class ActivityService {
  static getPlans(searchWordA, zipA, radiusA, priceA, resultsTotalA) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);
    myHeaders.append(`${process.env.API_KEY}`, "");
    myHeaders.append("Cookie", "hl=en_US; wdi=1|483CBA32CEF4A16D|0x1.8902fd6128db5p+30|4e112f406f58471b");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchWordA}&location=${zipA}&radius=${radiusA}&limit=${resultsTotalA}&sort_by=rating&price=${priceA}`, requestOptions)
      .then(function(response){
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error){
        return error;
      });
  }
    
}