import Ageonotherplanets from './planets.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#age-form').submit(function(event) {
  event.preventDefault();
  let age = $('#length1').val();
  $('#response').append("<p>" + age + "</p>");
}); 
