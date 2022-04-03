import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/vapor/bootstrap.min.css";
import './css/styles.css';
import DinnerService from './services/dinner-service.js';


function clearFields() {
  $('#keyWordSearch').val("");
  // $('#searchLocation').val("");
  // $('#searchRadius').val("");
  // $('#priceRange').val("");
  // // $('#sortBy').val("");
  // $('#resultsTotal').val("");
  // // $('.showRestaurants').text("");
  $('.showErrors').text;
  //Activities fields \/\/\/
  $('#keyWordSearchA').val("");
  
  // // $('.showActivities').text("");
  $('.showErrorsA').text;
}

function getElements(response) {
  console.log(response);
  for (let i = 0; i < response.businesses.length; i++) {  
    if (response) {  
      const grub = response.businesses[i].name;   
      const phone = response.businesses[i].display_phone; 
      const address = response.businesses[i].location.display_address;                                         
      $('.showRestaurants').append(`${grub},<br>${phone},<br>${address}<br><br>`); 
    } else {
      $('.showErrors').text(`There was an error processing your request: ${response.message}`);
    }
}
}

function getElementsA(response) {
  console.log(response);
  
  for (let i = 0; i < response.businesses.length; i++) {  
    if (response) {  
      const plans = response.businesses[i].name;   
      const phoneA = response.businesses[i].display_phone; 
      const addressA = response.businesses[i].location.display_address;                                         
      $('.showActivities').append(`${plans},<br>${phoneA},<br>${addressA}<br><br>`); 
    } else {
      $('.showErrors').text(`There was an error processing your request: ${response.message}`);
    }
}
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    $(".activities").show();
    $("#forms").hide();
    const searchWord = $('#keyWordSearch').val();
    const zip = $('#searchLocation').val();
    const radius = $('#searchRadius').val();
    const price = $('#priceRange').val();
    const resultsTotal=$('#resultsTotal').val();
    const category = "restaurant";
    // const sortBy = $('#sortBy').val();
    
    // clearFields();
    DinnerService.getFood(searchWord, zip, radius, price, resultsTotal, category)
      .then(function(response) {
        getElements(response);

    });
  });
  $('#enterSearchA').click(function() {
    const searchWordA = $('#keyWordSearchA').val();
    const zip = $('#searchLocation').val();
    const radius = $('#searchRadius').val();
    const price = $('#priceRange').val();
    const resultsTotal=$('#resultsTotal').val();
    const category = "all";
    //could add dropdown with limited choice for catagory (ie, nightlife, bowling, etc).

    // clearFields();
    DinnerService.getFood(searchWordA, zip, radius, price, resultsTotal, category)
      .then(function(response) {
        getElementsA(response);
    });
  });
});


