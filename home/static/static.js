// console.log("Checkin");
// //***********************************Global variables******************************** */
// var data_inc

// //*********************************Api section********************************************** 
// fetch('https://api.covid19india.org/data.json')
//     .then(response => response.json())
//     .then(data => {
//     })

// fetch('https://corona.lmao.ninja/v2/jhucsse')
//     .then(response => response.json())
//     .then(data => {
//         showmap(data)
//     })

// fetch('https://api.covid19india.org/state_district_wise.json')
//     .then(response => response.json())
//     .then(data => {
//         covidUpdate(data)
//     })

// //**********************************Functions******************************************
// var showmap = function op(x) {
//     console.log(x);
// }

// var options = "<option selected>State</option>"
// index = 0;
// var covidUpdate = function covidUpdate(data) {
//     data_inc = data

//     for (var stat in data) {
//         options = options + `<option value="${index}">${stat}</option>`
//         index++;

//     }
//     document.getElementById("state").innerHTML = options;

// }


// var options2 = "<option selected>District</option>"
// var state_selected;
// function myFunction(e) {  // on state selection
//     var selectedValues = [].filter
//         .call(document.getElementById("state").options, option => option.selected)
//         .map(option => option.text);

//     state_selected = selectedValues[0]

//     document.getElementById("dist").removeAttribute("disabled");
//     let districts = data_inc[selectedValues[0]].districtData
//     let index = 0
//     for (district in districts) {
//         options2 = options2 + `<option value="${index}">${district}</option>`
//         index++;
//     }
//     document.getElementById("dist").innerHTML = options2;

// };





// function myFunction1(e) {
//     selectedValuesd = [].filter
//         .call(document.getElementById("dist").options, option => option.selected)
//         .map(option => option.text);
//     covid_data = data_inc[state_selected]["districtData"][selectedValuesd[0]]
//     console.log(covid_data);
// }










































// console.log("ijfiocm");














// mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhdmlzaHlhdDI0IiwiYSI6ImNrcmFlbXV2azRmanAyb3FobWtyYXI2dWwifQ.wfb9sjo6qtn43ZqcEBA9BQ';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-77.038659, 38.931567],
//     zoom: 15
// });
// //*******************************************************************************
// document.getElementById('cl').addEventListener('click', () => {
//     map.flyTo({
//         // These options control the ending camera position: centered at
//         // the target, at zoom level 9, and north up.
//         center: [-77.038659, 0],
//         zoom: 9,
//         bearing: 0,

//         // These options control the flight curve, making it move
//         // slowly and zoom out almost completely before starting
//         // to pan.
//         speed: 2, // make the flying slow
//         curve: 2, // change the speed at which it zooms out

//         // This can be any easing function: it takes a number between
//         // 0 and 1 and returns another number between 0 and 1.
//         easing: function (t) {
//             return t;
//         },

//         // this animation is considered essential with respect to prefers-reduced-motion
//         essential: true
//     });
// })
// //******************************************************************************************************************
// map.on('load', function () {
//     map.addSource('places', {
//         'type': 'geojson',
//         'data': {
//             'type': 'FeatureCollection',
//             'features': [
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.038659, 38.931567]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.003168, 38.894651]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.090372, 38.881189]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Ballston Arts & Crafts Market</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.111561, 38.882342]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>"
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.052477, 38.943951]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Capital Pride Parade</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.043444, 38.909664]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist Muhsinah plays the Black Cat (1811 14th Street NW) tonight with Exit Clov and Gods’illa. 9:00 p.m. $12.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.031706, 38.914581]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             "<strong>A Little Night Music</strong><p>The Arlington Players' production of Stephen Sondheim's <em>A Little Night Music</em> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>"
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.020945, 38.878241]
//                     }
//                 },
//                 {
//                     'type': 'Feature',
//                     'properties': {
//                         'description':
//                             '<strong>Truckeroo</strong><p>Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>'
//                     },
//                     'geometry': {
//                         'type': 'Point',
//                         'coordinates': [-77.007481, 38.876516]
//                     }
//                 }
//             ]
//         }
//     });
//     // Add a layer showing the places.
//     map.addLayer({
//         'id': 'places',
//         'type': 'circle',
//         'source': 'places',
//         'paint': {
//             'circle-color': '#4264fb',
//             'circle-radius': 6,
//             'circle-stroke-width': 2,
//             'circle-stroke-color': '#ffffff'
//         }
//     });

//     // Create a popup, but don't add it to the map yet.
//     var popup = new mapboxgl.Popup({
//         closeButton: false,
//         closeOnClick: false
//     });

//     map.on('mouseenter', 'places', function (e) {
//         // Change the cursor style as a UI indicator.
//         map.getCanvas().style.cursor = 'pointer';

//         var coordinates = e.features[0].geometry.coordinates.slice();
//         var description = e.features[0].properties.description;

//         // Ensure that if the map is zoomed out such that multiple
//         // copies of the feature are visible, the popup appears
//         // over the copy being pointed to.
//         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//             coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//         }

//         // Populate the popup and set its coordinates
//         // based on the feature found.
//         popup.setLngLat(coordinates).setHTML(description).addTo(map);
//     });

//     map.on('mouseleave', 'places', function () {
//         map.getCanvas().style.cursor = '';
//         popup.remove();
//     });
// });





























