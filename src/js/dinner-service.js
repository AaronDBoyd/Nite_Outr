export default class DinnerService {
  static async getFood() {
    try {
      let url = `https://api.yelp.com/v3/businesses/search?location=97206`;
      let req = new Request(url, {
        method:'GET',
        headers: 'Authorization' `'Bearer ${process.env.API_KEY}'`
      });
      console.log(req);
      const response = await fetch (req);
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }

  static async getFood2(){
    try {
      const response = await fetch(
        'https://api.yelp.com/v3/businesses/search?location=97206',
        {
          method: 'GET',
          headers: {
            'Authorization': `'Bearer ${process.env.API_KEY}'`
          }
        });
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}