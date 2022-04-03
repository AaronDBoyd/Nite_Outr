import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinnerService from './services/dinner-service.js';

function clearFields() {
  $('#keyWordSearch').val("");
  $('#searchLocation').val("");
  $('#searchRadius').val("");
  $('#priceRange').val("");
  $('#resultsTotal').val("");
  $('.showRestaurants').text("");
  $('.showErrors').text("");
}

function getElements(response) {
  console.log(response);
  console.log(response.total);
  for (let i = 0; i < response.businesses.length; i++) {  

    if (response) {  
      const grub = [response.businesses[i].name, response.businesses[i].rating, response.businesses[i].location.display_address, response.businesses[i].display_phone];     
      let grubAsString = grub.join(', ');
      const url = response.businesses[i].url;
      const urlAsDisplay = (`Click <a  id="link" href =${url}/a> here to learn more`)
      ;                                        
      $('.showRestaurants').append(`${grubAsString}<br>${urlAsDisplay}<br><br>`); 
    } else {
      $('.showErrors').text(`There was an error processing your request: ${response}`);
      console.log(response);
    }
  }
}
$(document).ready(function() {
  $('#enterSearch').click(function() {
    const searchWord = $('#keyWordSearch').val();
    const zip = $('#searchLocation').val();
    const radius = $('#searchRadius').val();
    const price = $('#priceRange').val();
    const resultsTotal=$('#resultsTotal').val();
    // const sortBy = $('#sortBy').val();
  
    clearFields();
    DinnerService.getFood(searchWord, zip, radius, price, resultsTotal)
      .then(function(response) {
        getElements(response);
      });
  });
});


