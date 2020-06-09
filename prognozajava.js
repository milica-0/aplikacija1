var searchbox = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
		var alt = position.coords.altitude;
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        showWeather(alt, lat, lon)
      })
    }
       else {
            window.alert("Could not get location");
      }
  }
  
  function showWeather(alt,lat, lon) {
    var url = `https://api.met.no/weatherapi/locationforecast/1.9/?lat=11.43;lon=12.12/${alt},${lat},${lon}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement("script");
    script.type = "text/javascript";
  
 