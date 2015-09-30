var MapPage_Map;
var buttonMapType;
var buttonFilter;
var resultNumberLabel;
var filtersButtonsCont;
var BottomCont;

var allPinRect;
var triangleRect;
var squareRect;
var circleRect;

var MapPageCenterLat = 37.3835747;
var MapPageCenterLon = -121.9985353;
var typeOfMap = 0;
var filterPressed = false;
var counterforAll = 0;
var counterPin = 0;
var intervalIdforAll;
var intervalIdforType;
var selectedFilter = 0;
var selected_pin;

var first_run_map = true;
var infoDialog_Map;

function MapPageCreate() {
    var page = createUIObjects.createPage("MapPageCreate", MapPageCreate_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    MapPage_Map = createUIObjects.createMap();
    page.add(MapPage_Map);
    MapPage_Map.top = "0%";
    MapPage_Map.left = "0%";
    MapPage_Map.height = "100%";
    MapPage_Map.width = "100%";
    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;
    MapPage_Map.showPins = true;
    MapPage_Map.mapType = SMF.UI.MapType.standard;
    MapPage_Map.onPINSelected = MapPageCreate_PinSelected;
    MapPage_Map.onLongTouch = MapPageCreate_OnLongTouch;
    MapPage_Map.zoomLevel = 10;

    filtersButtonsCont = createUIObjects.createContainer("filtersButtonsCont");
    page.add(filtersButtonsCont);
    filtersButtonsCont.top = "80%";
    filtersButtonsCont.left = "5%";
    filtersButtonsCont.height = "7.22%";
    filtersButtonsCont.width = "90%";
    filtersButtonsCont.visible = false;
    filtersButtonsCont.borderWidth = 0;

    var filtersBackRec = createUIObjects.createRect_forDialog();
    filtersButtonsCont.add(filtersBackRec);
    filtersBackRec.top = "0%";
    filtersBackRec.left = "0%";
    filtersBackRec.height = "100%";
    filtersBackRec.width = "100%";
    filtersBackRec.fillColor = "#333333";
    filtersBackRec.backgroundTransparent = false;
    filtersBackRec.alpha = "85%";
    filtersBackRec.roundedEdge = 6;

    allPinRect = createUIObjects.createRect_forDialog();
    filtersButtonsCont.add(allPinRect);
    allPinRect.top = "0%";
    allPinRect.left = "8.68%";
    allPinRect.height = "100%";
    allPinRect.width = "14.24%";
    allPinRect.fillColor = "#FFCC00";
    allPinRect.backgroundTransparent = false;
    allPinRect.alpha = "30%";
    allPinRect.visible = true;

    var allPinButton = createUIObjects.createImageButton();
    filtersButtonsCont.add(allPinButton);
    allPinButton.top = "0%";
    allPinButton.left = "8.68%";
    allPinButton.height = "100%";
    allPinButton.width = "14.24%";
    allPinButton.imageFillType = SMF.UI.ImageFillType.normal;
    allPinButton.defaultImage = "all.png";
    allPinButton.highlightedImage = "all.png";
    allPinButton.onPressed = allPinButton_onPressed;

    triangleRect = createUIObjects.createRect_forDialog();
    filtersButtonsCont.add(triangleRect);
    triangleRect.top = "0%";
    triangleRect.left = "31.44%";
    triangleRect.height = "100%";
    triangleRect.width = "14.24%";
    triangleRect.fillColor = "#FFCC00";
    triangleRect.backgroundTransparent = false;
    triangleRect.alpha = "30%";
    triangleRect.visible = false;

    var trianglePinButton = createUIObjects.createImageButton();
    filtersButtonsCont.add(trianglePinButton);
    trianglePinButton.top = "0%";
    trianglePinButton.left = "31.44%";
    trianglePinButton.height = "100%";
    trianglePinButton.width = "14.24%";
    trianglePinButton.imageFillType = SMF.UI.ImageFillType.normal;
    trianglePinButton.defaultImage = "ucgen.png";
    trianglePinButton.highlightedImage = "ucgen.png";
    trianglePinButton.onPressed = trianglePinButton_onPressed;

    squareRect = createUIObjects.createRect_forDialog();
    filtersButtonsCont.add(squareRect);
    squareRect.top = "0%";
    squareRect.left = "54.28%";
    squareRect.height = "100%";
    squareRect.width = "14.24%";
    squareRect.fillColor = "#FFCC00";
    squareRect.backgroundTransparent = false;
    squareRect.alpha = "30%";
    squareRect.visible = false;

    var squarePinButton = createUIObjects.createImageButton();
    filtersButtonsCont.add(squarePinButton);
    squarePinButton.top = "0%";
    squarePinButton.left = "54.28%";
    squarePinButton.height = "100%";
    squarePinButton.width = "14.24%";
    squarePinButton.imageFillType = SMF.UI.ImageFillType.normal;
    squarePinButton.defaultImage = "square.png";
    squarePinButton.highlightedImage = "square.png";
    squarePinButton.onPressed = squarePinButton_onPressed;

    circleRect = createUIObjects.createRect_forDialog();
    filtersButtonsCont.add(circleRect);
    circleRect.top = "0%";
    circleRect.left = "77.12%";
    circleRect.height = "100%";
    circleRect.width = "14.24%";
    circleRect.fillColor = "#FFCC00";
    circleRect.backgroundTransparent = false;
    circleRect.alpha = "30%";
    circleRect.visible = false;

    var circlePinButton = createUIObjects.createImageButton();
    filtersButtonsCont.add(circlePinButton);
    circlePinButton.top = "0%";
    circlePinButton.left = "77.12%";
    circlePinButton.height = "100%";
    circlePinButton.width = "14.24%";
    circlePinButton.imageFillType = SMF.UI.ImageFillType.normal;
    circlePinButton.defaultImage = "circle.png";
    circlePinButton.highlightedImage = "circle.png";
    circlePinButton.onPressed = circlePinButton_onPressed;

    // Bottom AREA **********************
    BottomCont = createUIObjects.createContainer("BottomCont");
    page.add(BottomCont);
    BottomCont.top = "80%";
    BottomCont.left = "5%";
    BottomCont.height = "15%";
    BottomCont.width = "90%";
    BottomCont.fillColor = "#333333";
    BottomCont.borderWidth = 0;

    var BottomRect = createUIObjects.createRect_forDialog();
    BottomCont.add(BottomRect);
    BottomRect.top = "0%";
    BottomRect.left = "0%";
    BottomRect.height = "100%";
    BottomRect.width = "100%";
    BottomRect.fillColor = "#333333";
    BottomRect.backgroundTransparent = false;
    BottomRect.alpha = "85%";
    BottomRect.roundedEdge = 6;

    buttonMapType = createUIObjects.createImageButton();
    BottomCont.add(buttonMapType);
    buttonMapType.top = "20.57%";
    buttonMapType.left = "10%";
    buttonMapType.height = "68.12%";
    buttonMapType.width = "15.54%";
    buttonMapType.imageFillType = SMF.UI.ImageFillType.normal;
    buttonMapType.defaultImage = "world.png";
    buttonMapType.highlightedImage = "world.png";
    buttonMapType.onPressed = mapType_onPressed;

    buttonFilter = createUIObjects.createImageButton();
    BottomCont.add(buttonFilter);
    buttonFilter.top = "21.34%";
    buttonFilter.left = "33.85%";
    buttonFilter.height = "56.71%";
    buttonFilter.width = "32.29%";
    buttonFilter.imageFillType = SMF.UI.ImageFillType.normal;
    buttonFilter.defaultImage = "filter.png";
    buttonFilter.highlightedImage = "filter2.png";
    buttonFilter.onPressed = buttonFilter_onPressed;

    var resultLabel = createUIObjects.createLabel("resultLabel");
    BottomCont.add(resultLabel);
    resultLabel.top = "50%";
    resultLabel.left = "66%";
    resultLabel.height = "29.88%";
    resultLabel.width = "33.86%";
    resultLabel.text = lang.mapResult;
    resultLabel.textAlignment = SMF.UI.TextAlignment.center;
    resultLabel.fontColor = "#FFFFFF";

    resultNumberLabel = createUIObjects.createLabel("resultNumberLabel");
    BottomCont.add(resultNumberLabel);
    resultNumberLabel.top = "9.17%";
    resultNumberLabel.left = "66%";
    resultNumberLabel.height = "50%";
    resultNumberLabel.width = "33.86%";
    resultNumberLabel.text = "6";
    resultNumberLabel.textAlignment = SMF.UI.TextAlignment.center;
    resultNumberLabel.fontColor = "#FFFFFF";
    /************************/

    return page;
}

function MapPageCreate_OnShow() {

    header.initWithTitleAndBackground(this, "map_header.png", "#000000", lang.map);

    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_Map.show();
    });

    header.setLeftItem(
        function () {

        Pages.back();
    });

    if(first_run_map = true){
        
        infoDialog_Map = InfoDialog_MapPage();
        first_run_map = false;
    }

    pinButtonSelected(1);
    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }
    
    selectedFilter = 0;
    counterforAll = 0;
    counterPin = 0;
    addingAll();
}

function MapPageCreate_PinSelected(e) {

    selected_pin = e.id;
    if(addedPinObject.id != selected_pin){
        addedPinObject.id = -1;
    }
        
    MapDetailPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

}

function mapType_onPressed(e) {

    if (typeOfMap == 0) {
        typeOfMap = 1;
        MapPage_Map.mapType = 1;
        buttonMapType.defaultImage = "road.png";
        buttonMapType.highlightedImage = "road.png";

    } else if (typeOfMap == 1) {
        typeOfMap = 0;
        MapPage_Map.mapType = 0;
        buttonMapType.defaultImage = "world.png";
        buttonMapType.highlightedImage = "world.png";
    }

    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }

    counterforAll = 0;
    counterPin = 0;
    if (selectedFilter == 0) {
        addingAll();
    } else if (selectedFilter == 1) {
        addingAsFilter(0, "triangle_pointer.png");
    } else if (selectedFilter == 2) {
        addingAsFilter(1, "square_pointer.png");
    } else if (selectedFilter == 3) {
        addingAsFilter(2, "circle_pointer.png");
    }

}

function buttonFilter_onPressed(e) {
    if (filterPressed) {
        filterPressed = false;
        buttonFilter.defaultImage = "filter.png";
        buttonFilter.highlightedImage = "filter2.png";

        filtersButtonsCont.animate({
            property : 'Y',
            endValue : '80%',
            motionEase : 0,
            duration : 100,
            onFinish : function () {
                filtersButtonsCont.visible = false;
            }
        });

    } else {
        /* If its closed , We open it */
        filterPressed = true;
        buttonFilter.defaultImage = "filter2.png";
        buttonFilter.highlightedImage = "filter.png";

        filtersButtonsCont.visible = true;

        filtersButtonsCont.animate({
            property : 'Y',
            endValue : '70%',
            motionEase : 0,
            duration : 100,
            onFinish : function () {}
        });

    }
}

function allPinButton_onPressed(e) {
    pinButtonSelected(1);
    selectedFilter = 0;

    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }
    counterforAll = 0;
    counterPin = 0;
    addingAll();
}

function trianglePinButton_onPressed(e) {
    pinButtonSelected(2);
    selectedFilter = 1;

    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }
    counterforAll = 0;
    counterPin = 0;
    addingAsFilter(0, "triangle_pointer.png");
}

function squarePinButton_onPressed(e) {
    pinButtonSelected(3);
    selectedFilter = 2;

    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }
    counterforAll = 0;
    counterPin = 0;
    addingAsFilter(1, "square_pointer.png");
}

function circlePinButton_onPressed(e) {
    pinButtonSelected(4);
    selectedFilter = 3;

    MapPage_Map.centerLatitude = MapPageCenterLat;
    MapPage_Map.centerLongitude = MapPageCenterLon;

    for (var i = 0; i < MapPinsArray.length; i++) {
        MapPage_Map.removePin(i.toString());
    }
    counterforAll = 0;
    counterPin = 0;
    addingAsFilter(2, "circle_pointer.png");
}

function pinButtonSelected(_butonID) {
    if (_butonID == 1) {
        allPinRect.visible = true;
        triangleRect.visible = false;
        squareRect.visible = false;
        circleRect.visible = false;
    }
    if (_butonID == 2) {
        allPinRect.visible = false;
        triangleRect.visible = true;
        squareRect.visible = false;
        circleRect.visible = false;
    }
    if (_butonID == 3) {
        allPinRect.visible = false;
        triangleRect.visible = false;
        squareRect.visible = true;
        circleRect.visible = false;
    }
    if (_butonID == 4) {
        allPinRect.visible = false;
        triangleRect.visible = false;
        squareRect.visible = false;
        circleRect.visible = true;
    }

}

function addingAll() {
    if (counterforAll < MapPinsArray.length) {
        var imgPath2;
        intervalIdforAll = setTimeout(function () {
                if (MapPinsArray[counterforAll].type == 0)
                    imgPath2 = "triangle_pointer.png";
                else if (MapPinsArray[counterforAll].type == 1)
                    imgPath2 = "square_pointer.png";
                else
                    imgPath2 = "circle_pointer.png";

                MapPage_Map.addPin({
                    id : counterforAll.toString(),
                    title : MapPinsArray[counterforAll].title,
                    subtitle : MapPinsArray[counterforAll].subtitle,
                    latitude : parseFloat(MapPinsArray[counterforAll].latitude),
                    longitude : parseFloat(MapPinsArray[counterforAll].longitude),
                    selectedImage : imgPath2,
                    unSelectedImage : imgPath2,
                    draggable : false,
                    animate : true
                });
                counterforAll++;
                addingAll();
            },
                20);
    } else {
        resultNumberLabel.text = MapPinsArray.length.toString();
        clearTimeout(intervalIdforAll);
    }
}

// Function to show selected filter types Pins by a Timer
function addingAsFilter(pinType, imgPath) {
    if (counterforAll < MapPinsArray.length) {
        intervalIdforType = setTimeout(function () {
                if (MapPinsArray[counterforAll].type == pinType) {
                    MapPage_Map.addPin({
                        id : counterforAll.toString(),
                        title : MapPinsArray[counterforAll].title,
                        subtitle : MapPinsArray[counterforAll].subtitle,
                        latitude : parseFloat(MapPinsArray[counterforAll].latitude),
                        longitude : parseFloat(MapPinsArray[counterforAll].longitude),
                        selectedImage : imgPath,
                        unSelectedImage : imgPath,
                        draggable : false,
                        animate : true
                    });
                    counterPin++;
                }
                counterforAll++;
                addingAsFilter(pinType, imgPath);
            }, 40);
    } else {
        clearTimeout(intervalIdforType);
    }
    if (counterforAll < MapPinsArray.length) {}
    else {
        resultNumberLabel.text = counterPin.toString();
    }
}


var idForPin;
var timeoutID;
var lastLat;
var lastLon;

var addedPinObject = new function() {
    this.id = -1;
    this.title = "";
    this.subtitle = "";
    this.latitude = "";
    this.longitude = "";
    this.type = "";
    this.address = "";
}

/* MapView onLongTouch Function to add new Pin manually */
function MapPageCreate_OnLongTouch(e) {
    clearTimeout(timeoutID);
    
    addedPinObject = new function() {
        this.id = -1;
        this.title = "";
        this.subtitle = "";
        this.latitude = "";
        this.longitude = "";
        this.type = "";
        this.address = "";
    }
    
    idForPin = MapPinsArray.length;

    lastLat = e.latitude;
    lastLon = e.longitude;

    var imgPath;
    if (selectedFilter == 0 || selectedFilter == 1)
        imgPath = "triangle_pointer.png";
    else if (selectedFilter == 2)
        imgPath = "square_pointer.png";
    else if (selectedFilter == 3)
        imgPath = "circle_pointer.png";

    MapPage_Map.addPin({
        id : idForPin.toString(),
        title : "Dropped Pin",
        subtitle : "Dropped Address",
        latitude : e.latitude,
        longitude : e.longitude,
        selectedImage : imgPath,
        unSelectedImage : imgPath,
        draggable : true,
        animate : true
    });
    changeAddress();
    pinAdded = true;
    
    addedPinObject.id = idForPin;
    addedPinObject.title = "Dropped Pin"; 
    addedPinObject.latitude = e.latitude;
    addedPinObject.longitude = e.longitude;
    if(selectedFilter == 0)
        addedPinObject.type = selectedFilter;
    else
        addedPinObject.type = selectedFilter-1;

}

function changeAddress() {
    timeoutID = setTimeout(function () {
            SMF.Map.lookupAddress(lastLat, lastLon,
                function (e) {
                
                    MapPage_Map.getPin(idForPin.toString()).subtitle = e.results[0].addressValue;
                
                    addedPinObject.subtitle = e.results[0].addressValue;
                    addedPinObject.address = e.results[0].addressValue;
                    clearTimeout(timeoutID);
                },
                    function (e) {});
            }, 3000);
}