import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/vapor/bootstrap.min.css";
import './css/styles.css';
//import 'bootswatch/dist/sketchy/bootstrap.min.css';
import DinnerService from './services/dinner-service.js';

let alpha = ["A","B","C","D","E","F","G","H","I","J"];
let mapUrl= `https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap&key=${process.env.API_KEY2}`;

function clearFields(){
  $('.showErrors').text("");
}
function getElements(response) {
  console.log(response);
  console.log(response.total);
  if (response.businesses) {  
    for (let i = 0; i < response.businesses.length; i++) {  
      const grub = [alpha[i]+') '+ response.businesses[i].name, `Rating: ${response.businesses[i].rating}`, response.businesses[i].location.display_address, response.businesses[i].display_phone];     
      let grubAsString = grub.join('<br>');
      const url = response.businesses[i].url;
      mapUrl=mapUrl+`&markers=color:red%7C${response.businesses[i].coordinates.longitude},${response.businesses[i].coordinates.latitude}%7Clabel:${alpha[i]}`;
      const urlAsDisplay = (`Click <a  id="link" href =${url}/a> here to learn more`);                                       
      $('.showRestaurants').append(`${grubAsString}<br>${urlAsDisplay}<br><br>`); 
    } if (response.total == 0){
      $('.showBadNews').append(`We're sorry, but nothing matched your search!`);
    }
    $('.map').append(`<img src= "${mapUrl}>`);
    console.log(mapUrl);
  }else {
    $('.showErrors').append(`There was an error processing your request: <br>${response}`);
    console.log(response);
  }

}
function getElementsA(response) {
  console.log(response);
  
  if (response.businesses) {  
    for (let i = 0; i < response.businesses.length; i++) {  
      const afterDinner = [alpha[i]+') '+ response.businesses[i].name, `Rating: ${response.businesses[i].rating}`, response.businesses[i].location.display_address, response.businesses[i].display_phone];
      let afterDinnerAsString = afterDinner.join('<br>');   
      const urlPlans = response.businesses[i].url;
      const urlAsDisplayPlans = (`Click <a  id="link" href =${urlPlans}/a> to see what this place is all about!`);                                   
      $('.showActivities').append(`${afterDinnerAsString}<br>${urlAsDisplayPlans}<br><br>`); 
    } if (response.total == 0){
      $('.showBadNewsA').append(`We're sorry, but nothing matched your search!`);
    }
  } else {
    $('.showErrorsA').text(`There was an error processing your request: ${response.message}`);
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

    clearFields();
    DinnerService.getFood(searchWord, zip, radius, price, resultsTotal, category)
      .then(function(response) {
        getElements(response);
      });
  });
  $('#enterSearchA').click(function() {
    const searchWordA =''; 
    const zip = $('#searchLocation').val();
    const radius = $('#searchRadius').val();
    const price = $('#priceRange').val();
    const resultsTotal=$('#resultsTotal').val();
    const category=$('#soManyActivities').val();
    //could add dropdown with limited choice for catagory (ie, nightlife, bowling, etc).

    clearFields();
    DinnerService.getFood(searchWordA, zip, radius, price, resultsTotal, category)
      .then(function(response) {
        getElementsA(response);
      });
  });
});


