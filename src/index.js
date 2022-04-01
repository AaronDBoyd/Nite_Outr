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
  // $('#sortBy').val("");
  $('#resultsTotal').val("");
  $('.showRestaurants').text("");
  $('.showErrors').text;
}

function getElements(response) {
  console.log(response);
  for (let i = 0; i < response.businesses.length; i++) {  
    if (response) {  
      const grub = [response.businesses[i].name, response.businesses[i].rating, response.businesses[i].location.display_address];     
      let grubAsString = grub.join(', ');                                        
      $('.showRestaurants').append(`${grubAsString} <br>`); 
  // for (let i = 0; i < response.businesses.length; i++) {  
  //   if (response) {  
  //     const grub = response.businesses[i].name;  
  //     const image = response.businesses[i].image_url; 
  //     const phone = response.businesses[i].display_phone; 
  //     const address = response.businesses[i].location.display_address;                                         
  //     $('.showRestaurants').append(`${grub}<img src="${image}"> <br>`); 
    } else {
      $('.showErrors').text(`There was an error processing your request: ${response.message}`);
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


