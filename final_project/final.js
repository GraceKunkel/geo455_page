$(document).ready(function() {
    $("#btn1").click(function(){
        $("#splasher1").show();
    });
    $("#btn2").click(function(){
        $("#splasher1").hide();
    });
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasher2").fadeOut();
    });
});



// popups
var chinatownPopup = "Chinatown <br/><img src='images/chinatown.jpg' alt='Chinatown' width='150px'/>";

var chelseaPopup = "Chelsea Market <br/><img src='images/chelsea.jpg' alt='Chelsea Market' width='150px'/>";

var cementaryPopup = "Trinity Church Cemetery and Mausoleum <br/><img src='images/cementary_first_street.jpg' alt='Trinity Church Cemetery and Mausoleum' width='150px'/>";

var italyPopup = "Italian Markets and Eateries <br/><img src='images/eat_italy.jpg' alt='Eat-aly' width='150px'/>";

var skyPopup = "Sky Scraper <br/><img src='images/near_911_memorial.jpg' alt='Chelsea Market' width='150px'/>";

var bayPopup = "Inside the bay <br/><img src='images/in_the_bay.jpg' alt='Inside the bay' width='150px'/>";

var timessquarePopup = "International Square <br/><img src='images/times_square.jpg' alt='Times Square' width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};



// landmark variables   
               
var landmarks = L.layerGroup();

var chinatown = L.marker([40.71744207225039, -73.99627001020707]).bindPopup(chinatownPopup, customOptions).addTo(landmarks);
var chelsea = L.marker([40.742454391632684, -74.00596054479202]).bindPopup(chelseaPopup, customOptions).addTo(landmarks);
var cementary = L.marker([40.707748339051165, -74.0121695631948]).bindPopup(cementaryPopup, customOptions).addTo(landmarks);
var italy = L.marker([40.74216650344746, -73.99009365978021]).bindPopup(italyPopup, customOptions).addTo(landmarks);
var sky = L.marker([40.712799797162276, -74.00951935022336]).bindPopup(skyPopup, customOptions).addTo(landmarks);
var bay = L.marker([40.67123799558315, -74.03329157560897]).bindPopup(bayPopup, customOptions).addTo(landmarks);
var timessquare = L.marker([40.75817215316672, -73.9802110966538]).bindPopup(timessquarePopup, customOptions).addTo(landmarks);


// baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

// map variable
var mymap = L.map("map", {
    center: [40.73365128822354, -74.01733656041654], 
    zoom: 12,
    layers: [grayscale, landmarks]});


// menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    };

var overlays = {'Landmarks': landmarks};

// the menu
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: true}).addTo(mymap); //collapsed: true - has the menu hidden or falso - menu opened and cannot disappear
