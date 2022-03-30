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
  $('#sortBy').val("");
  $('.showRestaurants').text("");
}

function getElements(response) {
  // for (let i = 0; i < response.data.length; i++) {  

  if (response) {  
    const grub = (response.businesses[0].name);                                             
    $('.showRestaurants').append(`${grub}`); 
    console.log(response.json());   
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    const searchWord = $('#keyWordSearch').val();
    const zip = $('#searchLocation').val();
    const radius = $('#searchRadius').val();
    const price = $('#priceRange').val();
    const sort = $('#sortBy').val();
    //let params = (zip, keyword, radius, price, sort);
    clearFields();
    DinnerService.getFood(searchWord, zip, radius, price, sort)
      .then(function(response) {
        getElements(response);
      });
  });
});


