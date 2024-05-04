let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [longitude, latitude],
    zoom: 20
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "top-left"
)





var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.

// Create a  Gateway of India, Mumbai Marker and add it to the map.

// Create a India Gate Marker and add it to the map.


// Create a Lotus Temple, Delhi Marker and add it to the map.


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
