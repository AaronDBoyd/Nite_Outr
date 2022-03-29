
export default class DinnerService {
  static getFood() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer YMCYA6ba-GH02gCzC3uVIESgkjKvW6WcewGvEtkWA2IgdJfJA7UPOs2gqNtuVksjVfC331oMCoasrAofQibrDf3Qn8G_DqiTMew1NHJJayE1xX28KDwMtfGoVqxAYnYx");
    myHeaders.append("YMCYA6ba-GH02gCzC3uVIESgkjKvW6WcewGvEtkWA2IgdJfJA7UPOs2gqNtuVksjVfC331oMCoasrAofQibrDf3Qn8G_DqiTMew1NHJJayE1xX28KDwMtfGoVqxAYnYx", "");
    myHeaders.append("Cookie", "hl=en_US; wdi=1|483CBA32CEF4A16D|0x1.8902fd6128db5p+30|4e112f406f58471b");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mexican&location=94588&radius=3200&limit=15&sort_by=rating&price=1,2,3", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  // .catch(error => {
  //   return error;
  //  })
}