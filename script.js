const mymap = L.map('mapid').setView([49.589352, 34.551593], 14);



let markerOne = L.marker([49.589602, 34.551206]).bindPopup('<a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%BD%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_(%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0)">Корпусний сад</a>').addTo(mymap);

let markerTwo = L.marker([49.581466, 34.569503]).bindPopup('<a href="https://uk.wikipedia.org/wiki/%D0%91%D1%96%D0%BB%D0%B0_%D0%B0%D0%BB%D1%8C%D1%82%D0%B0%D0%BD%D0%BA%D0%B0">Біла альтанка</a>').addTo(mymap);

let markerThree = L.marker([49.5818, 34.567357]).bindPopup('<a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0)">Свято-Успенський кафедральний собор</a>').addTo(mymap);

let markerFour = L.marker([49.583456, 34.561422]).bindPopup('<a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D1%94%D0%B7%D0%BD%D0%B0%D0%B2%D1%87%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9">Полтавський краєзнавчий музей</a>').addTo(mymap);

let markerFive = L.marker([49.586009, 34.556779]).bindPopup('<a href="https://teatr-gogolya.pl.ua/contacts/prijmalnya">Полтавський академічний музично-драматичний театр імені М.В. Гоголя</a>').addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicG9sdGF2YSIsImEiOiJja21ldWU2dmgwcWo3MnNwNXdreHhiMDZ2In0.l_wxyBWQi0WxMINALB7IWw'
}).addTo(mymap);

