var mymap = L.map("map").setView([39.97291612879594, -77.6148867394446], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Vua2VsZ3JhY2UiLCJhIjoiY2t6YzN3cnIxMmp6cTJ2cjFnYjQ0dDd2cyJ9.lHjx8D5MetEuwkl8CQA7Wg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var boston = L.marker([42.35836610129682, -71.0595596889714], {icon: myIcon1}).bindPopup("<b>Boston").addTo(mymap); 
var salem = L.marker([42.52047858446546, -70.89901775894295], {icon: myIcon2}).bindPopup("<b>Salem").addTo(mymap); 
var newyork = L.marker([40.72005150912531, -74.01817098760017], {icon: myIcon3}).bindPopup("<b>New York").addTo(mymap); 
var philly = L.marker([39.95453180489756, -75.16994149273393], {icon: myIcon4}).bindPopup("<b>Philadelphia").addTo(mymap); 
var pittb = L.marker([40.47633700820234, -80.02660080326251], {icon: myIcon5}).bindPopup("<b>Pittsburgh").addTo(mymap); 
var hartford = L.marker([41.765293798239576, -72.65736168420003], {icon: myIcon6}).bindPopup("<b>Hartford").addTo(mymap); 
var washdc = L.marker([38.91352518769837, -77.04185566508725], {icon: myIcon7}).bindPopup("<b>Washington DC").addTo(mymap); 
var rich = L.marker([37.55192365375253, -77.42343356264735], {icon: myIcon8}).bindPopup("<b>Richmond").addTo(mymap); 
var rale = L.marker([35.79145712649847, -78.63935108129226], {icon: myIcon9}).bindPopup("<b>Raleigh").addTo(mymap); 
var faye = L.marker([35.04854454021075, -78.8856837220269], {icon: myIcon10}).bindPopup("<b>Fayetteville").addTo(mymap); 
var emisle = L.marker([34.66380193375544, -77.05051374645939], {icon: myIcon11}).bindPopup("<b>Emerald Isle").addTo(mymap); 
var portland = L.marker([43.655365687947445, -70.27437079657572], {icon: myIcon12}).bindPopup("<b>Portland").addTo(mymap); 