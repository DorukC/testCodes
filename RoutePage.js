var RouteMap;

var selected_title;
var selected_lon;
var selected_lat;
var selected_type;
var selected_address;

function RoutePageCreate() {
    var page = createUIObjects.createPage("RoutePageCreate", RoutePage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    RouteMap = createUIObjects.createMap();
    page.add(RouteMap);
    RouteMap.top = "0%";
    RouteMap.left = "0%";
    RouteMap.height = "100%";
    RouteMap.width = "100%";
    RouteMap.showUserLocation = false;

    return page;
}

function RoutePage_OnShow() {

    header.initWithTitleAndBackground(this, "map_header.png", "#000000", lang.showroute);

    header.setRightItemWithImageAndListener("transparent.png",
        function () {});
    
    header.setLeftItem(
        function () {
        Pages.back();
    });

    if(addedPinObject.id == selected_pin){
        selected_title = addedPinObject.title;
        selected_lon = addedPinObject.longitude;
        selected_lat = addedPinObject.latitude;
        selected_type = addedPinObject.type;
        selected_address = addedPinObject.address;
    }else{
        selected_title = MapPinsArray[selected_pin].title;
        selected_lon = MapPinsArray[selected_pin].longitude;
        selected_lat = MapPinsArray[selected_pin].latitude;
        selected_type = MapPinsArray[selected_pin].type;
        selected_address = MapPinsArray[selected_pin].address;
    }






    var distance = getDistanceFromLatLonInKm(37.7, -122.43, parseFloat(selected_lat), parseFloat(selected_lon));

    var imgPath;
    if (selected_type == 0)
        imgPath = "triangle_pointer.png";
    else if (selected_type == 1)
        imgPath = "square_pointer.png";
    else
        imgPath = "circle_pointer.png";

    RouteMap.addPin({
        id : "999",
        title : selected_title,
        subtitle : selected_address,
        latitude : parseFloat(selected_lat),
        longitude : parseFloat(selected_lon),
        selectedImage : imgPath,
        unSelectedImage : imgPath,
        draggable : false,
        animate : false
    });
    RouteMap.addPin({
        id : "998",
        title : distance.toString() + " km",
        subtitle : selected_title,
        latitude : 37.7,
        longitude : -122.43,
        selectedImage : "endway.png",
        unSelectedImage : "endway.png",
        draggable : false,
        animate : false
    });
    RouteMap.showRoute(37.7, -122.43, parseFloat(selected_lat), parseFloat(selected_lon));
    RouteMap.routeLineColor = "black";

}

// calculate distance between 2 location
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var distance;
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = R * c; // Distance in km
    distance = Math.round(distance * 1000) / 1000;
    return distance;
}
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}