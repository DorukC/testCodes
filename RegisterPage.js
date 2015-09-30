var imageProfileRegister;
var emailEdit;
var passEdit;
var birthEdit;
var phoneEdit;
var mapLabel;
var map;
var imageLikeFace;
var likeSliderPoint;
var likeSlider;
var rectBackground;
var allowNotifySwitch;
var interestLabel;
var RegisterPage_FirstRun = true;
var infoDialog_Register;

function RegisterPageCreate() {
    var page = createUIObjects.createPage("RegisterPage", RegisterPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    var MainScroll = createUIObjects.createScrollView2("MainScroll");
    MainScroll.top = "0%";
    MainScroll.left = "0%";
    MainScroll.height = "100%";
    MainScroll.width = "100%";
    MainScroll.contentHeight = "170%";
    MainScroll.contentWidth = "100%";
    MainScroll.borderWidth = 0;
    MainScroll.enableVerticalScrolling = true;
    MainScroll.fillColor = "#EFF3EF";
    MainScroll.backgroundTransparent = false;

    // HEADER IMAGE AREA
    var ImageContainer = createUIObjects.createContainer("ImageContainer");
    MainScroll.add(ImageContainer);
    ImageContainer.top = "0%";
    ImageContainer.left = "0%";
    ImageContainer.height = "25%";
    ImageContainer.width = "100%";
    ImageContainer.borderWidth = 0;

    var imageHeader = createUIObjects.createImage("imageHeader");
    ImageContainer.add(imageHeader);
    imageHeader.top = "0%";
    imageHeader.left = "0%";
    imageHeader.height = "85.07%";
    imageHeader.width = "100%";
    imageHeader.image = "back_photo.png";
    imageHeader.imageFillType = SMF.UI.ImageFillType.stretch;

    var profileImageCont = createUIObjects.createContainer("profileImageCont");
    ImageContainer.add(profileImageCont);
    profileImageCont.top = "46.48%";
    profileImageCont.left = "9.06%";
    profileImageCont.height = "52.63%";
    profileImageCont.width = "25.56%";
    profileImageCont.backgroundTransparent = false;
    profileImageCont.fillColor = "#FFFFFF";
    profileImageCont.borderWidth = 0;

    imageProfileRegister = createUIObjects.createImage("imageProfileRegister");
    profileImageCont.add(imageProfileRegister);
    imageProfileRegister.top = "0%";
    imageProfileRegister.left = "0%";
    imageProfileRegister.height = "100%";
    imageProfileRegister.width = "100%";
    imageProfileRegister.image = "empty_photo.png";
    imageProfileRegister.imageFillType = SMF.UI.ImageFillType.stretch;
    imageProfileRegister.touchEnabled = true;
    imageProfileRegister.onTouchEnded = ProfileImage_OnTouchEnded;
    //**************************************************************

    // INPUT AREA EMAIL - PASS - BIRTH - PHONE
    var Cont1 = createUIObjects.createContainer("Container1");
    MainScroll.add(Cont1);
    Cont1.top = "27%";
    Cont1.left = "0%";
    Cont1.height = "39%";
    Cont1.width = "100%";
    Cont1.borderColor = "#BEC3C7";
    Cont1.borderWidth = 1;
    Cont1.fillColor = "#E7EBED";
    Cont1.backgroundTransparent = false;

    emailEdit = createUIObjects.createEditBox();
    Cont1.add(emailEdit);
    emailEdit.top = "0%";
    emailEdit.left = "0%";
    emailEdit.height = "24.35%";
    emailEdit.width = "93.94%";
    emailEdit.text = "";
    emailEdit.placeHolder = lang.email;
    emailEdit.placeHolderTextColor = "#7A7A7A";
    emailEdit.fontColor = "#000000";
    emailEdit.borderWidth = 0;
    emailEdit.backgroundTransparent = true;
    emailEdit.keyboardType = SMF.UI.KeyboardType.emailAddress;
    emailEdit.onEnter = EditBox_OnEnter;

    var line1 = createUIObjects.createLine();
    Cont1.add(line1);
    line1.top = "24.57%";
    line1.left = "4.66%";
    line1.height = ".43%";
    line1.width = "94.72%";
    line1.borderColor = "#BEC3C7";

    passEdit = createUIObjects.createEditBox();
    Cont1.add(passEdit);
    passEdit.top = "25.22%";
    passEdit.left = "0%";
    passEdit.height = "24.35%";
    passEdit.width = "93.94%";
    passEdit.text = "";
    passEdit.placeHolder = lang.password;
    passEdit.placeHolderTextColor = "#7A7A7A";
    passEdit.fontColor = "#000000";
    passEdit.borderWidth = 0;
    passEdit.backgroundTransparent = true;
    passEdit.isPassword = true;
    passEdit.valueRangeMax = 4;
    passEdit.lengthRangeMax = 4;
    passEdit.onEnter = EditBox_OnEnter;

    var line2 = createUIObjects.createLine();
    Cont1.add(line2);
    line2.top = "49.78%";
    line2.left = "4.66%";
    line2.height = ".43%";
    line2.width = "94.72%";
    line2.borderColor = "#BEC3C7";

    birthEdit = createUIObjects.createLabel("birthEdit");
    Cont1.add(birthEdit);
    birthEdit.top = "50.43%";
    birthEdit.left = "0%";
    birthEdit.height = "24.35%";
    birthEdit.width = "93.94%";
    birthEdit.text = lang.birthDate;
    birthEdit.fontColor = "#7A7A7A";
    birthEdit.borderWidth = 0;
    birthEdit.backgroundTransparent = true;
    birthEdit.touchEnabled = true;
    birthEdit.onTouchEnded = BirthDate_OnTouchEnded;

    var line3 = createUIObjects.createLine();
    Cont1.add(line3);
    line3.top = "75%";
    line3.left = "4.66%";
    line3.height = ".43%";
    line3.width = "94.72%";
    line3.borderColor = "#BEC3C7";

    phoneEdit = createUIObjects.createEditBox();

    phoneEdit.placeHolder = lang.phoneNumber;
    phoneEdit.placeHolderTextColor = "#7A7A7A";
    phoneEdit.fontColor = "#000000";
    phoneEdit.borderWidth = 0;
    phoneEdit.backgroundTransparent = true;
    phoneEdit.textFormatType = "phoneNumber";
    phoneEdit.mask = "+## ### ### ## ##";
    phoneEdit.returnKeyType = SMF.UI.ReturnKeyType.done;
    phoneEdit.keyboardType = SMF.UI.KeyboardType.phonePad;
    phoneEdit.inputFiltering = SMF.UI.EditboxInputFiltering.disabled;
    phoneEdit.onEnter = EditBox_OnEnter;

    Cont1.add(phoneEdit);
    phoneEdit.width = "93.94%";
    phoneEdit.height = "24.35%";
    phoneEdit.top = "75.65%";
    phoneEdit.left = "5 dp";

    //******************************************

    // CONTAINER MAP AREA
    var Cont2 = createUIObjects.createContainer("Container2");
    MainScroll.add(Cont2);
    Cont2.top = "67%";
    Cont2.left = "0%";
    Cont2.height = "22%";
    Cont2.width = "100%";
    Cont2.borderColor = "#BEC3C7";
    Cont2.borderWidth = 1;
    Cont2.fillColor = "#EFF3EF";
    Cont2.backgroundTransparent = false;

    map = createUIObjects.createMap();
    Cont2.add(map);
    map.top = "0%";
    map.left = "0%";
    map.height = "100%";
    map.width = "100%";
    map.centerLatitude = myCurrentLat;
    map.centerLongitude = myCurrentLon;
    map.showPins = true;
    map.mapType = SMF.UI.MapType.satellite;
    map.zoomLevel = 20;
    map.showUserLocation = true;
    map.touchEnabled = false;

    mapLabel = createUIObjects.createLabel("mapLabel");
    Cont2.add(mapLabel);
    mapLabel.top = "57%";
    mapLabel.left = "0%";
    mapLabel.height = "40%";
    mapLabel.width = "85%";
    mapLabel.text = address;
    mapLabel.fontColor = "#FFFFFF";
    mapLabel.borderWidth = 0;
    mapLabel.backgroundTransparent = true;
    mapLabel.multipleLine = true;
    mapLabel.font.size = "6 pt";
    mapLabel.touchEnabled = false;

    var mapButton = createUIObjects.createImageButton();
    Cont2.add(mapButton);
    mapButton.top = "29.64%";
    mapButton.left = "80%";
    mapButton.height = "40.71%";
    mapButton.width = "16.09%";
    mapButton.touchEnabled = true;
    mapButton.defaultImage = "mapdetails.png";
    mapButton.highlightedImage = "mapdetails_onpressed.png";
    mapButton.onPressed = MapButton_OnPressed;
    //*************************

    // CONTAINER UNDER AREA
    var Cont3 = createUIObjects.createContainer("Container3");
    MainScroll.add(Cont3);
    Cont3.top = "90%";
    Cont3.left = "0%";
    Cont3.height = "42%";
    Cont3.width = "100%";
    Cont3.borderColor = "#BEC3C7";
    Cont3.borderWidth = 1;
    Cont3.fillColor = "#E7EBED";
    Cont3.backgroundTransparent = false;
    Cont3.touchEnabled = true;

    var allowNotify = createUIObjects.createLabel("allowNotify");
    Cont3.add(allowNotify);
    allowNotify.top = "0%";
    allowNotify.left = "0%";
    allowNotify.height = "22.42%";
    allowNotify.width = "54.35%";
    allowNotify.borderWidth = 0;
    allowNotify.text = lang.allowMsg;
    allowNotify.fontColor = "#000000";

    allowNotifySwitch = createUIObjects.createSwitch();
    Cont3.add(allowNotifySwitch);
    allowNotifySwitch.top = "4.96%";
    allowNotifySwitch.left = "76%";
    allowNotifySwitch.tintColor = "#7FEA00";
    allowNotifySwitch.onChange = SwitchButton_OnChange;

    var line_1 = createUIObjects.createLine();
    Cont3.add(line_1);
    line_1.top = "22.62%";
    line_1.left = "0%";
    line_1.height = ".4%";
    line_1.width = "100%";
    line_1.borderColor = "#BEC3C7";

    var likeAppLabel = createUIObjects.createLabel("likeAppLabel");
    Cont3.add(likeAppLabel);
    likeAppLabel.top = "23.21%";
    likeAppLabel.left = "0%";
    likeAppLabel.height = "22.42%";
    likeAppLabel.width = "54.35%";
    likeAppLabel.borderWidth = 0;
    likeAppLabel.text = lang.likeThisApp;
    likeAppLabel.fontColor = "#000000";

    imageLikeFace = createUIObjects.createImage("imageLikeFace");
    Cont3.add(imageLikeFace);
    imageLikeFace.top = "29.21%";
    imageLikeFace.left = "82.97%";
    imageLikeFace.height = "9.88%";
    imageLikeFace.width = "7.76%";
    imageLikeFace.imageFillType = SMF.UI.ImageFillType.aspectFit;
    imageLikeFace.image = "emotion_cool.png";

    likeSlider = createUIObjects.createSlider();
    Cont3.add(likeSlider);
    likeSlider.top = "46%";
    likeSlider.left = "17%";
    likeSlider.height = "9.09%";
    likeSlider.width = "60%";
    likeSlider.valueRangeMin = 0;
    likeSlider.valueRangeMax = 100;
    likeSlider.value = 70;
    likeSlider.touchEnabled = true;
    likeSlider.onChange = likeSlider_OnChange;
    likeSlider.thumbnailColor = "#FFFFFF";
    likeSlider.continuous = true;

    likeSliderPoint = createUIObjects.createLabel("likeSliderPoint");
    Cont3.add(likeSliderPoint);
    likeSliderPoint.top = "46%";
    likeSliderPoint.left = "78%";
    likeSliderPoint.height = "8.13%";
    likeSliderPoint.width = "17.39%";
    likeSliderPoint.borderWidth = 0;
    likeSliderPoint.text = lang.likeThisApp;
    likeSliderPoint.fontColor = "#659FF8";
    likeSliderPoint.text = "70";

    var line_2 = createUIObjects.createLine();
    Cont3.add(line_2);
    line_2.top = "66%";
    line_2.left = "0%";
    line_2.height = ".4%";
    line_2.width = "100%";
    line_2.borderColor = "#BEC3C7";

    var interestButton = createUIObjects.createTextButton();
    Cont3.add(interestButton);
    interestButton.top = "66.64%";
    interestButton.left = "0%";
    interestButton.height = "30.36%";
    interestButton.width = "93.94%";
    interestButton.fontColor = "#000000";
    interestButton.fillColor = "#E7EBED";
    interestButton.text = lang.chooseInterest;
    interestButton.textAlignment = SMF.UI.TextAlignment.left;
    interestButton.onPressed = InterestButton_OnPressed;
    interestButton.pressedFillColor = "#E7EBED";
    interestButton.pressedFontColor = "#000000";

    interestLabel = createUIObjects.createLabel("interestLabel");
    Cont3.add(interestLabel);
    interestLabel.top = "90.08%";
    interestLabel.left = "5.56%";
    interestLabel.height = "8.22%";
    interestLabel.width = "87%";
    interestLabel.fontColor = "#C1392D";
    interestLabel.backgroundTransparent = true;
    interestLabel.text = "Music,Sport,Films";
    interestLabel.font.italic = true;
    interestLabel.font.size = "5 pt";

    var interestImage = createUIObjects.createImage("interestImage");
    Cont3.add(interestImage);
    interestImage.top = "81.6%";
    interestImage.left = "89.84%";
    interestImage.height = "7.08%";
    interestImage.width = "3.73%";
    interestImage.imageFillType = SMF.UI.ImageFillType.stretch;
    interestImage.image = "hobby_arrow.png";
    //**********************************************

    //SUBMIT BUTTON
    var SubmitButton = createUIObjects.createTextButton();
    MainScroll.add(SubmitButton);
    SubmitButton.top = "134%";
    SubmitButton.left = "5%";
    SubmitButton.height = "10%";
    SubmitButton.width = "90%";
    SubmitButton.fontColor = "#FFFFFF";
    SubmitButton.fillColor = "#2DCC70";
    SubmitButton.pressedFontColor = "#FFFFFF";
    SubmitButton.pressedFillColor = "#008000";
    SubmitButton.text = lang.submit;
    SubmitButton.textAlignment = SMF.UI.TextAlignment.center;
    SubmitButton.onPressed = SubmitButton_OnPressed;

    rectBackground = createUIObjects.createRect_forDialog();
    MainScroll.add(rectBackground);
    rectBackground.top = "0%";
    rectBackground.left = "0%";
    rectBackground.height = "100%";
    rectBackground.width = "100%";
    rectBackground.touchEnabled = false;
    rectBackground.backgroundTransparent = true;
    rectBackground.onTouch = Rect_OnTouch;
    rectBackground.borderWidth = 0;

    page.add(MainScroll);
    return page;
}

function RegisterPage_OnShow() {
    header.initWithTitleAndBackground(this, "form_header.png", "#000000", lang.pgRegisterTitle);
    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_Register.show();
    });

    header.setLeftItem(
        function () {
        clearFormText();
        Pages.back();
    });

    if (RegisterPage_FirstRun == true) {

        infoDialog_Register = InfoDialog_RegisterPage();
        RegisterPage_FirstRun = false;
    }

    interestLabel.text = interestSelectedList();
}

function BirthDate_OnTouchEnded(e) {
    SMF.UI.showDatePicker({
        currentDate : new Date("November 14, 1994 11:13:00"),
        mask : "YYYY-MM-DD",
        minDate : new Date("December 31, 1920 11:13:00"),
        maxDate : new Date("December 31, 2000 11:13:00"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            birthEdit.text = formattedDate(sDate);
            birthEdit.fontColor = "#000000";
        },
        onCancel : function (e) {

            birthEdit.text = lang.birthDate;
            birthEdit.fontColor = "#7A7A7A";
        }
    });
}

function MapButton_OnPressed(e) {

    fromRegisterorProfile = 2;
    SingleMapViewPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

}

function SwitchButton_OnChange(e) {

    if (this.checked) {
        if (Device.deviceOS == 'iOS') {
            notPicker(false);
        } else {
            notPicker(true);
        }
    } else {
        disableNotification();
    }

}

function likeSlider_OnChange(e) {
    if (this.value >= 80) {
        imageLikeFace.image = "emotion_love.png";
    }
    if (this.value >= 60 && this.value < 80) {
        imageLikeFace.image = "emotion_cool.png";
    }
    if (this.value >= 40 && this.value < 60) {
        imageLikeFace.image = "emotion_happy.png";
    }
    if (this.value >= 20 && this.value < 40) {
        imageLikeFace.image = "emotion_eh.png";
    }
    if (this.value < 20) {
        imageLikeFace.image = "emotion_sad.png";
    }

    likeSliderPoint.text = this.value;

}

function InterestButton_OnPressed(e) {
    InterestListPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
}

function ProfileImage_OnTouchEnded(e) {
    var item1 = {
        title : "Select from Gallery",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            fromRegisterorProfile = 2;
            takeCropImage(false);
        }
    };
    var item2 = {
        title : "Capture a Photo",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            fromRegisterorProfile = 2;
            takeCropImage(true);
        }
    };
    var item3 = {
        title : "Cancel",
        itemType : SMF.UI.MenuItemType.cancel, //  iOS Only
        onSelected : function (e) {}
    };
    var myItems = [item1, item2, item3]; // assume that items are predefined
    var menu1 = new SMF.UI.Menu({
            menuStyle : SMF.UI.MenuStyle.optionalMenu,
            icon : "menu_icon.png", // Android Context Menu Only
            items : myItems
        });
    menu1.show();
}

function SubmitButton_OnPressed(e) {

    if (validateEmail(emailEdit.text)) {
        var req = {
            "Password" : passEdit.text,
            "Email" : emailEdit.text,
            "Phone" : phoneEdit.text,
            "BirthDate" : birthEdit.text,
            "IsAllowMessage" : allowNotifySwitch.checked,
            "Address" : mapLabel.text,
            "LikePoint" : Number(likeSliderPoint.text),
            "Interests" : interestLabel.text,
            "Base64ProfilePicture" : base64StringDataForRegisterImage
        };
        req = JSON.stringify(req);

        // this webclient is using at new user
        var registerWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
        registerWebClient.url = "http://services.smartface.io/SmartfaceInAction/Register"; // assign url to webclient object
        registerWebClient.httpMethod = "POST"; // assign method type
        registerWebClient.requestHeaders = ["Content-Type: application/json"]; // adding requestHeader
        registerWebClient.ignoreSSLErros = true; //for not breaking the connection on SSL erros
        registerWebClient.requestBody = req;
        registerWebClient.onSyndicationSuccess = registerOnsyndicationSuccess;
        registerWebClient.onServerError = function (e) {
            alert("Hata1");
        }

        registerWebClient.run(true);

        loadingDialog.show();
    }else{
        alert("Please enter valid email");
    }

}

function registerOnsyndicationSuccess(e) {
    var responseObject = JSON.parse(this.responseText);
    if (responseObject.isSuccess == "false") {
        loadingDialog.close();
        alert(lang.registerMailUsed);
    } else {
        var registerProfileImageWebClient = new SMF.Net.WebClient();
        registerProfileImageWebClient.url = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + emailEdit.text;
        registerProfileImageWebClient.httpMethod = "PUT";
        registerProfileImageWebClient.request = imageFileRegister;
        registerProfileImageWebClient.requestHeaders = ["Content-Type: image/png"];
        registerProfileImageWebClient.ignoreSSLErros = true;
        registerProfileImageWebClient.run(true);

        registerProfileImageWebClient.onServerError = function (e) {
            alert("Hata2");
        }

        registerProfileImageWebClient.onSyndicationSuccess = function (e) {

            alert({
                message : lang.registersuccess,
                title : lang.register,
                alpha : 1,
                firstButtonText : "OK",
                OnFirstButtonPressed : function () {

                    imageProfileRegister.image = "empty_photo.png";
                    loadingDialog.close();
                    passEdit.text = "";
                    emailEdit.text = "";
                    phoneEdit.text = "";
                    birthEdit.text = "";
                    allowNotifySwitch.checked = false;
                    mapLabel.text = "";
                    //likeSliderPoint.text = "70";
                    likeSlider.value = 70;

                    FormPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
                },
                OnSecondButtonPressed : function () {},
                OnThirdButtonPressed : function () {}
            });
        }
    }
}

function Rect_OnTouch(e) {
    rectBackground.touchEnabled = false;
    emailEdit.closeKeyboard();

}

function EditBox_OnEnter(e) {
    rectBackground.touchEnabled = true;
}

function interestSelectedList() {
    var result = "";
    var arr = [];

    Data.dynamicDS.seek(0);
    for (var i = 0; i < Data.dynamicDS.rowCount - 1; i++) {

        if (Data.dynamicDS.image != "")
            arr.push(Data.dynamicDS.interestName);
        Data.dynamicDS.moveNext();
    }

    var j;
    for (j = 0; j < arr.length - 1; j++) {
        result = result + arr[j] + ",";
    }
    result = result + arr[j];

    return result;
}