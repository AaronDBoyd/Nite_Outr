
export default class DinnerService {
  static getFood(searchWord, zip, radius, price) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);
    myHeaders.append(`${process.env.API_KEY}`, "");
    myHeaders.append("Cookie", "hl=en_US; wdi=1|483CBA32CEF4A16D|0x1.8902fd6128db5p+30|4e112f406f58471b");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    
    // let zip;
    // let radius;
    // let sort;
    // let price;
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchWord}&location=${zip}&radius=${radius}&limit=15&price=${price}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  // .catch(error => {
  //   return error;
  //  })
}