import Ageonotherplanets from './planets.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#age-form').submit(function(event) {
  event.preventDefault();
  let age = parseInt($('#length1').val());
  let user = new Ageonotherplanets(age);
  console.log(user.getMercuryAge());
  $('#response').append("<p>" + user.earthAge + "</p>");
}); 
