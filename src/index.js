import { Ageonotherplanets, checkAge }  from './../src/planets.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#age-form').submit(function(event) {
  event.preventDefault();
  let age = parseInt($('#length1').val());
  if(checkAge){
    let user = new Ageonotherplanets(age);
    $('#response').append("<p>" + user.earthAge + "</p>");
  }else{
    $('#response').append("You can't be negative years old silly");
  }
}); 

