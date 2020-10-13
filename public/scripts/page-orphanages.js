//Create map
const map = L.map("mapid").setView([-16.0085155,-48.0709786], 14); //lat, long, zoom

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", //icone
    iconSize: [58, 68],                         //tamanho [larg Alt]
    iconAnchor: [29, 68], //onde ficará o icone                     
    popupAnchor: [170,2] // onde ficará o popup
})

//Create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//Create and marker
L.marker([-16.0085155,-48.0709786], { icon })
.addTo(map)
.bindPopup(popup)