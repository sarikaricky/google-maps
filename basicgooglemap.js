import React, { Component } from 'react'; 
import GoogleMapsClassComponentIteratingState from './components/GoogleMapsClassComponentIteratingState.js'

class BasicGoogleMap extends Component {

    function initialize() {
        var mapProp = {
            center:new google.maps.LatLng(25.678988,-100.456789),
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp)
    }
    google.maps.event.addDomListener(window, 'load', initialize)

render() {
    return (
        <div>
            <div id="googleMap" style="width:500px;height:380px;"></div>
            <script src="http://maps.googleapis.com/maps/api/js"></script>

        </div>
    );
}

}
export default BasicGoogleMap;