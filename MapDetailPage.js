var Detail_Lat = 37.3835747;
var Detail_Lon = -121.9985353;
var Detail_PinName;
var labelAdres;

var buttonRemove;
var Map_DetailPage;

function MapDetailPageCreate() {
    var page = createUIObjects.createPage("MapDetailPageCreate", MapDetailPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    Map_DetailPage = createUIObjects.createMap();
    page.add(Map_DetailPage);
    Map_DetailPage.top = "0%";
    Map_DetailPage.left = "0%";
    Map_DetailPage.height = "28%";
    Map_DetailPage.width = "100%";
    Map_DetailPage.showPins = true;
    Map_DetailPage.enableZoom = false;
    Map_DetailPage.enableScroll = false;
    Map_DetailPage.mapType = SMF.UI.MapType.satellite;
    Map_DetailPage.zoomLevel = 10;

    var detailContainer = createUIObjects.createContainer("detailContainer");
    page.add(detailContainer);
    detailContainer.top = "30%";
    detailContainer.left = "0%";
    detailContainer.height = "70%";
    detailContainer.width = "100%";
    detailContainer.borderWidth = 0;

    var headerAdres = createUIObjects.createLabel("headerAdres");
    detailContainer.add(headerAdres);
    headerAdres.top = "2.99%";
    headerAdres.left = "0%";
    headerAdres.height = "5.63%";
    headerAdres.width = "100%";
    headerAdres.fontColor = "#F39B13";
    headerAdres.text = lang.mapAddress;

    labelAdres = createUIObjects.createLabel("labelAdres");
    detailContainer.add(labelAdres);
    labelAdres.top = "12.5%";
    labelAdres.left = "0%";
    labelAdres.height = "16.77%";
    labelAdres.width = "63.88%";
    labelAdres.fontColor = "#000000";
    labelAdres.multipleLine = true;
    labelAdres.font.size = "7 pt";
    labelAdres.text = "Reşitbet Sokağı 1-9 34676 Istanbul Burhaniye Turkey";

    var buttonRoute = createUIObjects.createTextButton();
    detailContainer.add(buttonRoute);
    buttonRoute.top = "31.74%";
    buttonRoute.left = "0%";
    buttonRoute.height = "7.72%";
    buttonRoute.width = "100%";
    buttonRoute.fontColor = "#F39B13";
    buttonRoute.pressedFontColor = "#B48C13";
    buttonRoute.multipleLine = true;
    buttonRoute.fillColor = "#FFFFFF";
    buttonRoute.pressedFillColor = "#FFFFFF";
    buttonRoute.text = lang.mapRoute;
    buttonRoute.textAlignment = SMF.UI.TextAlignment.left;
    buttonRoute.onPressed = Route_OnPressed;

    var line1 = createUIObjects.createLine();
    detailContainer.add(line1);
    line1.top = "40%";
    line1.left = "5%";
    line1.height = "1.36%";
    line1.width = "93.44%";
    line1.borderColor = "#BEC3C7";

    var buttonAddContact = createUIObjects.createTextButton();
    detailContainer.add(buttonAddContact);
    buttonAddContact.top = "43%";
    buttonAddContact.left = "0%";
    buttonAddContact.height = "7.72%";
    buttonAddContact.width = "100%";
    buttonAddContact.fontColor = "#F39B13";
    buttonAddContact.pressedFontColor = "#B48C13";
    buttonAddContact.multipleLine = true;
    buttonAddContact.fillColor = "#FFFFFF";
    buttonAddContact.pressedFillColor = "#FFFFFF";
    buttonAddContact.text = lang.mapAddContact;
    buttonAddContact.textAlignment = SMF.UI.TextAlignment.left;
    buttonAddContact.onPressed = AddContact_OnPressed;

    var line2 = createUIObjects.createLine();
    detailContainer.add(line2);
    line2.top = "51%";
    line2.left = "5%";
    line2.height = "1.36%";
    line2.width = "93.44%";
    line2.borderColor = "#BEC3C7";

    var buttonShare = createUIObjects.createTextButton();
    detailContainer.add(buttonShare);
    buttonShare.top = "54.26%";
    buttonShare.left = "0%";
    buttonShare.height = "7.72%";
    buttonShare.width = "100%";
    buttonShare.fontColor = "#F39B13";
    buttonShare.pressedFontColor = "#B48C13";
    buttonShare.multipleLine = true;
    buttonShare.fillColor = "#FFFFFF";
    buttonShare.pressedFillColor = "#FFFFFF";
    buttonShare.text = lang.mapShare;
    buttonShare.textAlignment = SMF.UI.TextAlignment.left;
    buttonShare.onPressed = Share_OnPressed;

    var line3 = createUIObjects.createLine();
    detailContainer.add(line3);
    line3.top = "62%";
    line3.left = "5%";
    line3.height = "1.36%";
    line3.width = "93.44%";
    line3.borderColor = "#BEC3C7";

    buttonRemove = createUIObjects.createTextButton();
    detailContainer.add(buttonRemove);
    buttonRemove.top = "65.52%";
    buttonRemove.left = "0%";
    buttonRemove.height = "7.72%";
    buttonRemove.width = "100%";
    buttonRemove.fontColor = "#F39B13";
    buttonRemove.pressedFontColor = "#B48C13";
    buttonRemove.multipleLine = true;
    buttonRemove.fillColor = "#FFFFFF";
    buttonRemove.pressedFillColor = "#FFFFFF";
    buttonRemove.text = lang.mapRemovePin;
    buttonRemove.textAlignment = SMF.UI.TextAlignment.left;
    buttonRemove.onPressed = Remove_OnPressed;
    buttonRemove.visible = false;

    return page;
}

function MapDetailPage_OnShow() {

    header.initWithTitleAndBackground(this, "map_header.png", "#000000", lang.mapFiltre);

    header.setRightItemWithImageAndListener("transparent.png",
        function () {});

    header.setLeftItem(
        function () {
        Pages.back();
    });

    if (addedPinObject.id == selected_pin) {

        header.setRightItemText("Save", function () {

            MapPinsArray.push(addedPinObject);
            alert({
                title : lang.mapMessage,
                message : lang.mapSaveLoc,
                firstButtonText : lang.mapTextDone,
                onFirstButtonPressed : function () {},
            });
            addedPinObject.id = -1;
            Pages.back();
        });

        Detail_Lat = parseFloat(addedPinObject.latitude);
        Detail_Lon = parseFloat(addedPinObject.longitude);
        Detail_PinName = addedPinObject.title;

        SMF.Map.lookupAddress(Detail_Lat, Detail_Lon,
            function (e) {
            labelAdres.text = e.results[0].addressValue;
        },
            function (e) {
            labelAdres.text = MapPinsArray[selected_pin].subtitle;
        });

        Map_DetailPage.centerLatitude = Detail_Lat;
        Map_DetailPage.centerLongitude = Detail_Lon;

    } else {
        header.setRightItemText("", function () {});

        Detail_Lat = parseFloat(MapPinsArray[selected_pin].latitude);
        Detail_Lon = parseFloat(MapPinsArray[selected_pin].longitude);
        Detail_PinName = MapPinsArray[selected_pin].title;

        SMF.Map.lookupAddress(Detail_Lat, Detail_Lon,
            function (e) {
            labelAdres.text = e.results[0].addressValue;
        },
            function (e) {
            labelAdres.text = MapPinsArray[selected_pin].subtitle;
        });

        Map_DetailPage.centerLatitude = Detail_Lat;
        Map_DetailPage.centerLongitude = Detail_Lon;

        if (selected_pin > 14) {
            buttonRemove.visible = true;
        } else {
            buttonRemove.visible = false;
        }
    }

}

function Route_OnPressed(e) {
    RoutePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
}

function AddContact_OnPressed(e) {
    Device.Contacts.addContact({
        firstName : Detail_PinName,
        lastName : "",
        phoneNumber : "",
        address : labelAdres.text,
        onSuccess : function (e) {
            var alertObj = alert({
                    title : lang.mapMessage,
                    message : lang.mapSave,
                    firstButtonText : lang.mapTextDone,
                    onFirstButtonPressed : function () {},
                });
        }
    });
}

function Share_OnPressed(e) {
    var str = labelAdres.text;
    var addressUrl = str.replace(/\ /g, '');
    if (Device.deviceOS == "Android")
        var messageText = labelAdres.text + "  " + "http://maps.google.com/maps?saddr=" + encodeURIComponent(str);
    else
        var messageText = labelAdres.text + "  " + "http://maps.apple.com/?q=" + encodeURIComponent(str);

    Device.share(Detail_PinName, messageText, function () {}, function () {});
}

function Remove_OnPressed(e) {

    var arr = [];
    for (var i = 0; i < MapPinsArray.length; i++) {
        if (i != selected_pin) {

            arr.push(MapPinsArray[i]);
        } else {}
    }

    MapPage_Map.removePin(selected_pin.toString());
    MapPinsArray = arr;

    alert({
        title : lang.mapMessage,
        message : lang.mapDeleteLoc,
        firstButtonText : lang.mapTextDone,
        onFirstButtonPressed : function () {},
    });

    addedPinObject.id = -1;
    Pages.back();

}
