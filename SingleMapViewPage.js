var SingleMapViewLabel;
var Map;
var addressNew; // to hold address which adding with mapView longTouch event

var first_run_singlemapform = true;
var infoDialog_SingleMapForm;

function SingleMapViewPageCreate(){
    var page = createUIObjects.createPage("SingleMapViewPage", SingleMapViewPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function(e){
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    Map = createUIObjects.createMap();
    page.add(Map);
    Map.top = "0%";
    Map.left = "0%";
    Map.height = "100%";
    Map.width = "100%";
    Map.centerLatitude = myCurrentLat;
    Map.centerLongitude = myCurrentLon;
    Map.showPins = true;
    Map.mapType = SMF.UI.MapType.standard;
    Map.onPINSelected = SingleMap_PinSelected;
    Map.onLongTouch = SingleMap_OnLongTouch;
    Map.zoomLevel = 15;

    var cont = createUIObjects.createContainer("MyContainer");
    page.add(cont);
    cont.top = "85%";
    cont.left = "0%";
    cont.height = "15%";
    cont.width = "100%";
    cont.borderWidth = 0;
   
    var rect = createUIObjects.createRect_forDialog();
    cont.add(rect);
    rect.top = "0%";
    rect.left = "0%";
    rect.height = "100%";
    rect.width = "100%";
    rect.borderWidth = 1;
    rect.borderColor = "#666666";
    rect.fillColor = "#666666";
    rect.backgroundTransparent = false;
    rect.alpha = "50%";

    SingleMapViewLabel = createUIObjects.createLabel("SingleMapViewLabel");
    cont.add(SingleMapViewLabel);
    SingleMapViewLabel.top = "5%";
    SingleMapViewLabel.left = "0%";
    SingleMapViewLabel.height = "90%";
    SingleMapViewLabel.width = "88%";
    SingleMapViewLabel.multipleLine = true;
    SingleMapViewLabel.fontColor = "#FFFFFF";
    SingleMapViewLabel.text  = "";
  
    return page;
}

function SingleMapViewPage_OnShow() {

    header.initWithTitleAndBackground(this, "form_header.png", "#000000", lang.map);

    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_SingleMapForm.show();
    });

    header.setLeftItem(
        function () {

        Pages.back();
    });
    
    if(first_run_singlemapform = true){
        
        infoDialog_SingleMapForm = InfoDialog_InterestFormSingleMap();
        first_run_singlemapform = false;
    }
    
    
    Map.removePin("1");
    

    // REGISTER BUTON CLICK
    if (fromRegisterorProfile == 2) {
    
        Map.addPin({
            id : "0",
            title : "Current Location",
            subtitle : address,
            latitude : Number(myCurrentLat),
            longitude : Number(myCurrentLon),
            selectedImage : "endway.png",
            unSelectedImage : "endway.png",
            draggable : false,
            animate : false
        });
        
        Map.centerLatitude = Number(myCurrentLat);
        Map.centerLongitude = Number(myCurrentLon);
        SingleMapViewLabel.text = mapLabel.text;
        
    // LOGIN AND FACEBOOK LOGIN BUTTON CLICK    
    } else if (fromRegisterorProfile == 1) {
        
        //FACEBOOK LOGIN
        if (emailorFbLogin == 1) {
        /*
            Map.addPin({
                id : "0",
                title : "Your Address",
                subtitle : fbResponseObject.Address,
                latitude : Number(latfromService),
                longitude : Number(lngfromService),
                selectedImage : "endway.png",
                unSelectedImage : "endway.png",
                draggable : false,
                animate : false
            });
            SingleMapViewLabel.text = fbResponseObject.Address;
        */
        //EMAIL LOGIN   
        } else {
        
            Map.addPin({
                id : "0",
                title : "Your Address",
                subtitle : ProfileMapLabel.text,
                latitude : Number(latfromService),
                longitude : Number(lngfromService),
                selectedImage : "endway.png",
                unSelectedImage : "endway.png",
                draggable : false,
                animate : false
            });
            
            Map.centerLatitude = Number(latfromService);
            Map.centerLongitude = Number(lngfromService);
            SingleMapViewLabel.text = ProfileMapLabel.text;
        }
    }
    
}


function SingleMap_OnLongTouch(e) {
    // to find address
    SMF.Map.lookupAddress(e.latitude, e.longitude,
        function (e) {
        addressNew = e.results[0].addressValue;
    },
        function (e) {
        alert(lang.applicationError);
    });
    if (address == null) {
        address = "address not identify";
    }
    // adding pin to mapview
    Map.addPin({
        id : "1",
        title : "Dropped Pin",
        subtitle : addressNew,
        latitude : e.latitude,
        longitude : e.longitude,
        selectedImage : "triangle_pointer.png",
        unSelectedImage : "triangle_pointer.png",
        draggable : true,
        animate : true
    });
    //Pages.pgMapView.contAddress.lblMapAddress.text = addressNew;
    if (fromRegisterorProfile == 2) {
        mapLabel.text = addressNew;
    } else if (fromRegisterorProfile == 1) {
        ProfileMapLabel.text = addressNew;
    }
}

function SingleMap_PinSelected(e) {

    // REGISTER PAGE
    if (fromRegisterorProfile == 2) {
        if (e.id == 1) {
            SingleMapViewLabel.text = addressNew;
            mapLabel.text = addressNew;
            
            map.centerLatitude = e.latitude;
            map.centerLongitude = e.longitude;             
        } else {
            SingleMapViewLabel.text = address;
            mapLabel.text = address;
            
            map.centerLatitude = e.latitude;
            map.centerLongitude = e.longitude;
        }
    // PROFILE PAGE    
    } else if (fromRegisterorProfile == 1) {
            if (e.id == 1) {
                SingleMapViewLabel.text = addressNew;
                ProfileMapLabel.text = addressNew;
                
                ProfileMap.centerLatitude = e.latitude;
                ProfileMap.centerLongitude = e.longitude;
            } else {
                SingleMapViewLabel.text = address;
                ProfileMapLabel.text = responseObjectProfile.Address;
                
                ProfileMap.centerLatitude = e.latitude;
                ProfileMap.centerLongitude = e.longitude;
            }
        }
}