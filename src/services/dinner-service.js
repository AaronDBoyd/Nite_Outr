export default class DinnerService {
  static getFood(keyword) {
    // const requestOptions = (
    //   method: 'get',
    //   headers: new Headers({
    //     'Access-Control-Allow-Origin': '*',
    //     'Authorization': Bearer ZYsYAXWuRmMHfqtSkaXkr8WrDcWqLJmv0RfShLLTZvfedv4JBN00G3g8z0uvOCw3RKExze7c_RiCzKq0NJslf9bmaTSv0MFIZQr0wbsVHNJSouxtnML7gO_L2ERCYnYx
    //     'Content-Type': 'application/json'
    // })

  
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${keyword}&limit=3&location=89129`, 
    {
      method: 'GET',
      headers: new Headers ({
        // 'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ZYsYAXWuRmMHfqtSkaXkr8WrDcWqLJmv0RfShLLTZvfedv4JBN00G3g8z0uvOCw3RKExze7c_RiCzKq0NJslf9bmaTSv0MFIZQr0wbsVHNJSouxtnML7gO_L2ERCYnYx',
        'Content-Type': 'application/json',
        'Redirect': 'follow'

      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
        
      })
      .catch(function(error) {
        return error;
      });
  }
}


// const projectHeaders = new Headers();
//     projectHeaders.append( 'Authorization', `Bearer ZYsYAXWuRmMHfqtSkaXkr8WrDcWqLJmv0RfShLLTZvfedv4JBN00G3g8z0uvOCw3RKExze7c_RiCzKq0NJslf9bmaTSv0MFIZQr0wbsVHNJSouxtnML7gO_L2ERCYnYx`);
//     projectHeaders.append (`ZYsYAXWuRmMHfqtSkaXkr8WrDcWqLJmv0RfShLLTZvfedv4JBN00G3g8z0uvOCw3RKExze7c_RiCzKq0NJslf9bmaTSv0MFIZQr0wbsVHNJSouxtnML7gO_L2ERCYnYx`, "");
  
//     const requestOptions = {
//       method: 'GET',
//       headers: this.projectHeaders,
//       redirect: 'follow'
//       }