import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinnerService from './services/dinner-service.js';

function clearFields() {
  $('#searchLocation').val("");
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
    const keyword = $('#searchLocation').val();
    clearFields();
    DinnerService.getFood(keyword)
    .then(function(response) {
      getElements(response);
    });
  });
});





