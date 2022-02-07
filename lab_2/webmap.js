var mymap = L.map("map").setView([43.610182676891284, 3.8776540842989777], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Vua2VsZ3JhY2UiLCJhIjoiY2t6YzN3cnIxMmp6cTJ2cjFnYjQ0dDd2cyJ9.lHjx8D5MetEuwkl8CQA7Wg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([43.610182676891284, 3.8776540842989777])
    .addTo(mymap)
    .bindPopup("<b>Hello! Bonjour!</b><br>I am the city Montpellier. Je suis la ville Montpellier.")
    .openPopup();