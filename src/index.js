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
  for (let i = 0; i < response.data.length; i++) {                                           // adjust
  if (response.data[i].images.downsized.url) {                                               // adjust
    $('.showRestaurants').append(`<img src="${response.data[i].images.downsized.url}">`);    // adjust
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.message}`);
  }
}}

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





