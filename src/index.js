import { Loader } from "@googlemaps/js-api-loader"
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

function initMap() {
  let coords = [];
  let markers =[];
  const pdx= {lat: 45.523064, lng: -122.676483 };
  const nicholas= {lat:45.5133, lng:-122.6545};
  const kongs= {lat: 45.505443194670114, lng:-122.57600986137842};
  coords.push(pdx, nicholas,kongs);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: pdx,
  });
  for (let i = 0; i < coords.length; i++){
    markers[i]= new google.maps.Marker({
      position: coords[i],
      map:map,
      label: (i+1).toString(),
    });
  }
}
window.initMap = initMap;

function getElements(response) {
  console.log(response);
  for (let i = 0; i < response.businesses.length; i++) {  
    if (response) {  
      const grub = [`${response.businesses[i].name}<br>Rating: ${response.businesses[i].rating}<br>${response.businesses[i].location.display_address}<br>${response.businesses[i].display_phone}<br> Link: <a href="${response.businesses[i].url}">business' Yelp webpage</a> <br>`];     
      let grubAsString = grub.join(', ');                                        
      $('.showRestaurants').append(`${grubAsString} <br>`); 
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
    DinnerService.getFood(searchWord, zip, radius, price, resultsTotal)
      .then(function(response) {
        getElements(response);
      });
  });
});


