var ProfileImage;

var ProfileEmail;
var ProfileFacebookLoginImage;
var ProfileFacebookNameLabel;
var ProfileEmailLabel;

var ProfilePass;
var ProfilePassLabel;
var ProfileBirth;
var ProfilePhone;
var ProfileInterestLabel;
var ProfileMapLabel;
var ProfileMap;
var ProfileLikeFaceImage;
var ProfileLikeSliderPointLabel;
var ProfileLikeSlider;
var ProfileRectBackground;
var ProfileAllowNotifySwitch;
var ProfileMainScroll;

var ProfilePage_FirstRun = true;
var infoDialog_Profile;

var ImageUpdateURL;

function ProfilePageCreate() {

    var page = createUIObjects.createPage("ProfilePage", ProfilePage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    ProfileMainScroll = createUIObjects.createScrollView2("ProfileMainScroll");
    ProfileMainScroll.top = "0%";
    ProfileMainScroll.left = "0%";
    ProfileMainScroll.height = "100%";
    ProfileMainScroll.width = "100%";
    ProfileMainScroll.contentHeight = "170%";
    ProfileMainScroll.contentWidth = "100%";
    ProfileMainScroll.borderWidth = 0;
    ProfileMainScroll.enableVerticalScrolling = true;
    ProfileMainScroll.fillColor = "#EFF3EF";
    ProfileMainScroll.backgroundTransparent = false;

    // HEADER IMAGE AREA
    var ImageContainer = createUIObjects.createContainer("ImageContainer2");
    ProfileMainScroll.add(ImageContainer);
    ImageContainer.top = "0%";
    ImageContainer.left = "0%";
    ImageContainer.height = "25%";
    ImageContainer.width = "100%";
    ImageContainer.borderWidth = 0;

    var imageHeader = createUIObjects.createImage("imageHeader2");
    ImageContainer.add(imageHeader);
    imageHeader.top = "0%";
    imageHeader.left = "0%";
    imageHeader.height = "85.07%";
    imageHeader.width = "100%";
    imageHeader.image = "back_photo.png";
    imageHeader.imageFillType = SMF.UI.ImageFillType.stretch;

    var profileImageCont = createUIObjects.createContainer("profileImageCont2");
    ImageContainer.add(profileImageCont);
    profileImageCont.top = "46.48%";
    profileImageCont.left = "9.06%";
    profileImageCont.height = "52.63%";
    profileImageCont.width = "25.56%";
    profileImageCont.backgroundTransparent = false;
    profileImageCont.fillColor = "#FFFFFF";
    profileImageCont.borderWidth = 0;

    ProfileImage = createUIObjects.createImage("ProfileImage");
    profileImageCont.add(ProfileImage);
    ProfileImage.top = "0%";
    ProfileImage.left = "0%";
    ProfileImage.height = "100%";
    ProfileImage.width = "100%";
    ProfileImage.image = "empty_photo.png";
    ProfileImage.imageFillType = SMF.UI.ImageFillType.stretch;
    ProfileImage.touchEnabled = true;
    ProfileImage.onTouchEnded = ProfilePageImage_OnTouchEnded;
    //**************************************************************

    // INPUT AREA EMAIL - PASS - BIRTH - PHONE
    var Cont1 = createUIObjects.createContainer("Container1_1");
    ProfileMainScroll.add(Cont1);
    Cont1.top = "27%";
    Cont1.left = "0%";
    Cont1.height = "39%";
    Cont1.width = "100%";
    Cont1.borderColor = "#BEC3C7";
    Cont1.borderWidth = 1;
    Cont1.fillColor = "#E7EBED";
    Cont1.backgroundTransparent = false;

    ProfileEmail = createUIObjects.createEditBox();
    Cont1.add(ProfileEmail);
    ProfileEmail.top = "0%";
    ProfileEmail.left = "44.22%";
    ProfileEmail.height = "24.35%";
    ProfileEmail.width = "55.16%";
    ProfileEmail.text = "";
    ProfileEmail.placeHolder = lang.email;
    ProfileEmail.placeHolderTextColor = "#7A7A7A";
    ProfileEmail.fontColor = "#000000";
    ProfileEmail.borderWidth = 0;
    ProfileEmail.backgroundTransparent = true;
    ProfileEmail.keyboardType = SMF.UI.KeyboardType.emailAddress;
    ProfileEmail.onEnter = ProfileEditBox_OnEnter;

    ProfileEmailLabel = createUIObjects.createLabel("ProfileEmailLabel");
    Cont1.add(ProfileEmailLabel);
    ProfileEmailLabel.top = "0%";
    ProfileEmailLabel.left = "0%";
    ProfileEmailLabel.height = "24.35%";
    ProfileEmailLabel.width = "41.27%";
    ProfileEmailLabel.text = lang.email;
    ProfileEmailLabel.fontColor = "#B4B8BF";
    ProfileEmailLabel.borderWidth = 0;
    ProfileEmailLabel.backgroundTransparent = true;

    ProfileFacebookLoginImage = createUIObjects.createImage("ProfileFacebookLoginImage");
    Cont1.add(ProfileFacebookLoginImage);
    ProfileFacebookLoginImage.top = "0%";
    ProfileFacebookLoginImage.left = "5%";
    ProfileFacebookLoginImage.height = "24.35%";
    ProfileFacebookLoginImage.width = "95%";
    ProfileFacebookLoginImage.image = "facebook_logged.png";
    ProfileFacebookLoginImage.imageFillType = SMF.UI.ImageFillType.normal;
    ProfileFacebookLoginImage.visible = false;

    ProfileFacebookNameLabel = createUIObjects.createLabel("ProfileFacebookNameLabel");
    Cont1.add(ProfileFacebookNameLabel);
    ProfileFacebookNameLabel.top = "25.22%";
    ProfileFacebookNameLabel.left = "0%";
    ProfileFacebookNameLabel.height = "24.35%";
    ProfileFacebookNameLabel.width = "94%";
    ProfileFacebookNameLabel.fontColor = "#B4B8BF";
    ProfileFacebookNameLabel.text = "";
    ProfileFacebookNameLabel.borderWidth = 0;
    ProfileFacebookNameLabel.backgroundTransparent = true;
    ProfileFacebookNameLabel.visible = false;

    var line1 = createUIObjects.createLine();
    Cont1.add(line1);
    line1.top = "24.57%";
    line1.left = "4.66%";
    line1.height = ".43%";
    line1.width = "94.72%";
    line1.borderColor = "#BEC3C7";

    ProfilePass = createUIObjects.createEditBox();
    Cont1.add(ProfilePass);
    ProfilePass.top = "25.22%";
    ProfilePass.left = "44.22%";
    ProfilePass.height = "24.35%";
    ProfilePass.width = "55.16%";
    ProfilePass.text = "";
    ProfilePass.placeHolder = lang.password;
    ProfilePass.placeHolderTextColor = "#7A7A7A";
    ProfilePass.fontColor = "#000000";
    ProfilePass.borderWidth = 0;
    ProfilePass.backgroundTransparent = true;
    ProfilePass.isPassword = true;
    ProfilePass.valueRangeMax = 4;
    ProfilePass.lengthRangeMax = 4;
    ProfilePass.onEnter = ProfileEditBox_OnEnter;

    ProfilePassLabel = createUIObjects.createLabel("ProfilePassLabel");
    Cont1.add(ProfilePassLabel);
    ProfilePassLabel.top = "25.22%";
    ProfilePassLabel.left = "0%";
    ProfilePassLabel.height = "24.35%";
    ProfilePassLabel.width = "41.27%";
    ProfilePassLabel.text = lang.password;
    ProfilePassLabel.fontColor = "#B4B8BF";
    ProfilePassLabel.borderWidth = 0;
    ProfilePassLabel.backgroundTransparent = true;

    var line2 = createUIObjects.createLine();
    Cont1.add(line2);
    line2.top = "49.78%";
    line2.left = "4.66%";
    line2.height = ".43%";
    line2.width = "94.72%";
    line2.borderColor = "#BEC3C7";

    ProfileBirth = createUIObjects.createLabel("ProfileBirth");
    Cont1.add(ProfileBirth);
    ProfileBirth.top = "50.43%";
    ProfileBirth.left = "44.22%";
    ProfileBirth.height = "24.35%";
    ProfileBirth.width = "55.16%";
    ProfileBirth.text = lang.birthDate;
    ProfileBirth.fontColor = "#000000";
    ProfileBirth.borderWidth = 0;
    ProfileBirth.backgroundTransparent = true;
    ProfileBirth.touchEnabled = true;
    ProfileBirth.onTouchEnded = ProfileBirth_OnTouchEnded;

    var ProfileBirthLabel = createUIObjects.createLabel("ProfileBirthLabel");
    Cont1.add(ProfileBirthLabel);
    ProfileBirthLabel.top = "50.43%";
    ProfileBirthLabel.left = "0%";
    ProfileBirthLabel.height = "24.35%";
    ProfileBirthLabel.width = "41.27%";
    ProfileBirthLabel.text = lang.birthDate;
    ProfileBirthLabel.fontColor = "#B4B8BF";
    ProfileBirthLabel.borderWidth = 0;
    ProfileBirthLabel.backgroundTransparent = true;

    var line3 = createUIObjects.createLine();
    Cont1.add(line3);
    line3.top = "75%";
    line3.left = "4.66%";
    line3.height = ".43%";
    line3.width = "94.72%";
    line3.borderColor = "#BEC3C7";

    ProfilePhone = createUIObjects.createEditBox();
    ProfilePhone.placeHolder = lang.phoneNumber;
    ProfilePhone.placeHolderTextColor = "#7A7A7A";
    ProfilePhone.fontColor = "#000000";
    ProfilePhone.borderWidth = 0;
    ProfilePhone.backgroundTransparent = true;
    ProfilePhone.textFormatType = "phoneNumber";
    ProfilePhone.mask = "+## ### ### ## ##";
    ProfilePhone.returnKeyType = SMF.UI.ReturnKeyType.done;
    ProfilePhone.keyboardType = SMF.UI.KeyboardType.phonePad;
    ProfilePhone.inputFiltering = SMF.UI.EditboxInputFiltering.disabled;
    ProfilePhone.onEnter = ProfileEditBox_OnEnter;

    Cont1.add(ProfilePhone);
    ProfilePhone.width = "93.94%";
    ProfilePhone.height = "24.35%";
    ProfilePhone.top = "75.65%";
    ProfilePhone.left = "45%";

    var ProfilePhoneLabel = createUIObjects.createLabel("ProfilePhoneLabel");
    Cont1.add(ProfilePhoneLabel);
    ProfilePhoneLabel.top = "75.65%";
    ProfilePhoneLabel.left = "0%";
    ProfilePhoneLabel.height = "24.35%";
    ProfilePhoneLabel.width = "41.27%";
    ProfilePhoneLabel.text = lang.phoneNumber;
    ProfilePhoneLabel.fontColor = "#B4B8BF";
    ProfilePhoneLabel.borderWidth = 0;
    ProfilePhoneLabel.backgroundTransparent = true;

    //******************************************

    // CONTAINER ProfileMap AREA
    var Cont2 = createUIObjects.createContainer("Container2_1");
    ProfileMainScroll.add(Cont2);
    Cont2.top = "67%";
    Cont2.left = "0%";
    Cont2.height = "22%";
    Cont2.width = "100%";
    Cont2.borderColor = "#BEC3C7";
    Cont2.borderWidth = 1;
    Cont2.fillColor = "#EFF3EF";
    Cont2.backgroundTransparent = false;

    ProfileMap = createUIObjects.createMap();
    Cont2.add(ProfileMap);
    ProfileMap.top = "0%";
    ProfileMap.left = "0%";
    ProfileMap.height = "100%";
    ProfileMap.width = "100%";
    ProfileMap.showPins = true;
    ProfileMap.mapType = SMF.UI.MapType.satellite;
    ProfileMap.zoomLevel = 20;
    ProfileMap.touchEnabled = false;

    ProfileMapLabel = createUIObjects.createLabel("ProfileMapLabel");
    Cont2.add(ProfileMapLabel);
    ProfileMapLabel.top = "57%";
    ProfileMapLabel.left = "0%";
    ProfileMapLabel.height = "40%";
    ProfileMapLabel.width = "85%";
    ProfileMapLabel.text = address;
    ProfileMapLabel.fontColor = "#FFFFFF";
    ProfileMapLabel.borderWidth = 0;
    ProfileMapLabel.backgroundTransparent = true;
    ProfileMapLabel.multipleLine = true;
    ProfileMapLabel.font.size = "6 pt";
    ProfileMapLabel.touchEnabled = false;

    var ProfileMapButton = createUIObjects.createImageButton();
    Cont2.add(ProfileMapButton);
    ProfileMapButton.top = "29.64%";
    ProfileMapButton.left = "80%";
    ProfileMapButton.height = "40.71%";
    ProfileMapButton.width = "16.09%";
    ProfileMapButton.touchEnabled = true;
    ProfileMapButton.defaultImage = "mapdetails.png";
    ProfileMapButton.highlightedImage = "mapdetails_onpressed.png";
    ProfileMapButton.onPressed = ProfileMapButton_OnPressed;
    //*************************

    // CONTAINER UNDER AREA
    var Cont3 = createUIObjects.createContainer("Container3_1");
    ProfileMainScroll.add(Cont3);
    Cont3.top = "90%";
    Cont3.left = "0%";
    Cont3.height = "42%";
    Cont3.width = "100%";
    Cont3.borderColor = "#BEC3C7";
    Cont3.borderWidth = 1;
    Cont3.fillColor = "#E7EBED";
    Cont3.backgroundTransparent = false;
    Cont3.touchEnabled = true;

    var allowNotify = createUIObjects.createLabel("allowNotify2");
    Cont3.add(allowNotify);
    allowNotify.top = "0%";
    allowNotify.left = "0%";
    allowNotify.height = "22.42%";
    allowNotify.width = "54.35%";
    allowNotify.borderWidth = 0;
    allowNotify.text = lang.allowMsg;
    allowNotify.fontColor = "#000000";

    ProfileAllowNotifySwitch = createUIObjects.createSwitch();
    Cont3.add(ProfileAllowNotifySwitch);
    ProfileAllowNotifySwitch.top = "4.96%";
    ProfileAllowNotifySwitch.left = "76%";
    ProfileAllowNotifySwitch.tintColor = "#7FEA00";
    ProfileAllowNotifySwitch.onChange = ProfileAllowNotifySwitch_OnChange;

    var line_1 = createUIObjects.createLine();
    Cont3.add(line_1);
    line_1.top = "22.62%";
    line_1.left = "0%";
    line_1.height = ".4%";
    line_1.width = "100%";
    line_1.borderColor = "#BEC3C7";

    var likeAppLabel = createUIObjects.createLabel("likeAppLabel2");
    Cont3.add(likeAppLabel);
    likeAppLabel.top = "23.21%";
    likeAppLabel.left = "0%";
    likeAppLabel.height = "22.42%";
    likeAppLabel.width = "54.35%";
    likeAppLabel.borderWidth = 0;
    likeAppLabel.text = lang.likeThisApp;
    likeAppLabel.fontColor = "#000000";

    ProfileLikeFaceImage = createUIObjects.createImage("ProfileLikeFaceImage");
    Cont3.add(ProfileLikeFaceImage);
    ProfileLikeFaceImage.top = "29.21%";
    ProfileLikeFaceImage.left = "82.97%";
    ProfileLikeFaceImage.height = "9.88%";
    ProfileLikeFaceImage.width = "7.76%";
    ProfileLikeFaceImage.imageFillType = SMF.UI.ImageFillType.aspectFit;
    ProfileLikeFaceImage.image = "emotion_cool.png";

    ProfileLikeSlider = createUIObjects.createSlider();
    Cont3.add(ProfileLikeSlider);
    ProfileLikeSlider.top = "46%";
    ProfileLikeSlider.left = "17%";
    ProfileLikeSlider.height = "9.09%";
    ProfileLikeSlider.width = "60%";
    ProfileLikeSlider.valueRangeMin = 0;
    ProfileLikeSlider.valueRangeMax = 100;
    ProfileLikeSlider.value = 70;
    ProfileLikeSlider.touchEnabled = true;
    ProfileLikeSlider.onChange = ProfileLikeSlider_OnChange;
    ProfileLikeSlider.thumbnailColor = "#FFFFFF";
    ProfileLikeSlider.continuous = true;

    ProfileLikeSliderPointLabel = createUIObjects.createLabel("ProfileLikeSliderPointLabel");
    Cont3.add(ProfileLikeSliderPointLabel);
    ProfileLikeSliderPointLabel.top = "48%";
    ProfileLikeSliderPointLabel.left = "78%";
    ProfileLikeSliderPointLabel.height = "8.13%";
    ProfileLikeSliderPointLabel.width = "17.39%";
    ProfileLikeSliderPointLabel.borderWidth = 0;
    ProfileLikeSliderPointLabel.text = lang.likeThisApp;
    ProfileLikeSliderPointLabel.fontColor = "#659FF8";
    ProfileLikeSliderPointLabel.text = "70";

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
    interestButton.onPressed = ProfileInterestButton_OnPressed;
    interestButton.pressedFillColor = "#E7EBED";
    interestButton.pressedFontColor = "#000000";

    ProfileInterestLabel = createUIObjects.createLabel("ProfileInterestLabel");
    Cont3.add(ProfileInterestLabel);
    ProfileInterestLabel.top = "90.08%";
    ProfileInterestLabel.left = "5.56%";
    ProfileInterestLabel.height = "8.22%";
    ProfileInterestLabel.width = "87%";
    ProfileInterestLabel.fontColor = "#C1392D";
    ProfileInterestLabel.backgroundTransparent = true;
    ProfileInterestLabel.text = "Music,Sport,Films";
    ProfileInterestLabel.font.italic = true;
    ProfileInterestLabel.font.size = "5 pt";

    var interestImage = createUIObjects.createImage("interestImage2");
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
    ProfileMainScroll.add(SubmitButton);
    SubmitButton.top = "134%";
    SubmitButton.left = "5%";
    SubmitButton.height = "10%";
    SubmitButton.width = "90%";
    SubmitButton.fontColor = "#FFFFFF";
    SubmitButton.fillColor = "#2DCC70";
    SubmitButton.pressedFontColor = "#FFFFFF";
    SubmitButton.pressedFillColor = "#008000";
    SubmitButton.text = lang.update;
    SubmitButton.textAlignment = SMF.UI.TextAlignment.center;
    SubmitButton.onPressed = ProfileSubmitButton_OnPressed;

    ProfileRectBackground = createUIObjects.createRect_forDialog();
    ProfileMainScroll.add(ProfileRectBackground);
    ProfileRectBackground.top = "0%";
    ProfileRectBackground.left = "0%";
    ProfileRectBackground.height = "100%";
    ProfileRectBackground.width = "100%";
    ProfileRectBackground.touchEnabled = false;
    ProfileRectBackground.backgroundTransparent = true;
    ProfileRectBackground.onTouch = ProfileRectBackground_OnTouch;
    ProfileRectBackground.borderWidth = 0;

    page.add(ProfileMainScroll);

    return page;
}

function ProfilePage_OnShow() {
    header.initWithTitleAndBackground(this, "form_header.png", "#000000", lang.pgProfileTitle);
    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_Profile.show();
    });

    header.setLeftItem(
        function () {
        clearFormText();
        Pages.back();
    });

    if (ProfilePage_FirstRun == true) {

        infoDialog_Profile = InfoDialog_ProfilePage();
        ProfilePage_FirstRun = false;
    }

    ProfileInterestLabel.text = interestSelectedList();
    
    //alert(ProfileBirth.text);
}

function ProfilePageImage_OnTouchEnded(e) {
    var item1 = {
        title : "Select from Gallery",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            fromRegisterorProfile = 1;
            takeCropImage(false);
        }
    };
    var item2 = {
        title : "Capture a Photo",
        icon : "icon.png", // Andrid 3.0- only
        onSelected : function (e) {
            fromRegisterorProfile = 1;
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

function ProfileBirth_OnTouchEnded(e) {
    SMF.UI.showDatePicker({
        currentDate : new Date("November 14, 1994 11:13:00"),
        mask : "YYYY-MM-DD",
        minDate : new Date("December 31, 1920 11:13:00"),
        maxDate : new Date("December 31, 2000 11:13:00"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            ProfileBirth.text = formattedDate(sDate);
            ProfileBirth.fontColor = "#000000";
        },
        onCancel : function (e) {

            ProfileBirth.text = lang.birthDate;
            ProfileBirth.fontColor = "#7A7A7A";
        }
    });
}

function ProfileMapButton_OnPressed(e) {

    fromRegisterorProfile = 1;
    SingleMapViewPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

}

function ProfileAllowNotifySwitch_OnChange(e) {
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

function ProfileLikeSlider_OnChange(e) {
    if (this.value >= 80) {
        ProfileLikeFaceImage.image = "emotion_love.png";
    }
    if (this.value >= 60 && this.value < 80) {
        ProfileLikeFaceImage.image = "emotion_cool.png";
    }
    if (this.value >= 40 && this.value < 60) {
        ProfileLikeFaceImage.image = "emotion_happy.png";
    }
    if (this.value >= 20 && this.value < 40) {
        ProfileLikeFaceImage.image = "emotion_eh.png";
    }
    if (this.value < 20) {
        ProfileLikeFaceImage.image = "emotion_sad.png";
    }

    ProfileLikeSliderPointLabel.text = this.value;
}

function ProfileInterestButton_OnPressed(e) {
    InterestListPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
}

function ProfileSubmitButton_OnPressed(e) {

    if (validateEmail(ProfileEmail.text)) {
        if (emailorFbLogin == 0) {
            if (ProfileEmail.text != "") {
                if (ProfilePass.text.length == 4) {
                    loadingDialog.show();
                    // to create JSON Object
                    var req = {
                        "Password" : ProfilePass.text,
                        "Email" : ProfileEmail.text,
                        "Phone" : ProfilePhone.text,
                        "BirthDate" : ProfileBirth.text,
                        "IsAllowMessage" : ProfileAllowNotifySwitch.checked,
                        "Address" : ProfileMapLabel.text,
                        "LikePoint" : Number(ProfileLikeSlider.value),
                        "Interests" : ProfileInterestLabel.text,
                    };
                    req = JSON.stringify(req);

                    var updateWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
                    updateWebClient.url = "http://services.smartface.io/SmartfaceInAction/UpdateProfile"; // assign url to webclient object
                    updateWebClient.httpMethod = "PUT"; // assign method type
                    updateWebClient.requestHeaders = ["Content-Type: application/json"]; // adding requestHeader
                    updateWebClient.ignoreSSLErros = true; //for not breaking the connection on SSL erros
                    updateWebClient.requestBody = req;
                    updateWebClient.onSyndicationSuccess = updateOnsyndicationSuccess;
                    updateWebClient.run(true);

                    //IMG Update URL
                    ImageUpdateURL = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + ProfileEmail.text;

                } else {
                    alert(lang.limitPassword);
                }
            } else {
                alert(lang.validateMail);
            }
        } else if (emailorFbLogin == 1) {
            loadingDialog.show();
            // to create JSON Object
            var req = {
                "Phone" : ProfilePhone.text,
                "BirthDate" : ProfileBirth.text,
                "IsAllowMessage" : ProfileAllowNotifySwitch.checked,
                "Address" : ProfileMapLabel.text,
                "LikePoint" : Number(ProfileLikeSlider.value),
                "Interests" : ProfileInterestLabel.text,
                "FacebookId" : fId
            };
            req = JSON.stringify(req);

            var updateWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
            updateWebClient.url = "http://services.smartface.io/SmartfaceInAction/UpdateProfile"; // assign url to webclient object
            updateWebClient.httpMethod = "PUT"; // assign method type
            updateWebClient.requestHeaders = ["Content-Type: application/json"]; // adding requestHeader
            updateWebClient.ignoreSSLErros = true; //for not breaking the connection on SSL erros
            updateWebClient.requestBody = req;
            updateWebClient.onSyndicationSuccess = updateOnsyndicationSuccess;
            updateWebClient.run(true);

            //IMG Update URL
            ImageUpdateURL = "http://services.smartface.io/SmartfaceInAction/UploadProfileLogo?email=" + fId;

        }

    } else {
        alert("Please enter valid email");
    }

}

function updateOnsyndicationSuccess(e) {
    var responseObjct = JSON.parse(this.responseText);
    if (responseObjct.isSuccess == "false") {
        alert("An error is occured");
        loadingDialog.close();
    } else {
        if (didImageChanged == true) {
            var updateProfileImageWebClient = new SMF.Net.WebClient();
            updateProfileImageWebClient.url = ImageUpdateURL;
            updateProfileImageWebClient.httpMethod = "PUT";
            updateProfileImageWebClient.request = imageFileProfile;
            updateProfileImageWebClient.requestHeaders = ["Content-Type: image/png"];
            updateProfileImageWebClient.ignoreSSLErros = true;
            updateProfileImageWebClient.run(true);

            updateProfileImageWebClient.onSyndicationSuccess = function (e) {
                var response = JSON.parse(this.responseText);
                if (response.isSuccess == "false") {
                    //if there is an error while uploading image and/or user is not add any photo
                    alert("Image can't be uploaded or you didn't select any image");
                } else {
                    alert(lang.updateProfile);
                }
                loadingDialog.close();
            }

        } else {
            alert(lang.updateProfile);
            loadingDialog.close();
        }
    }
}

function ProfileRectBackground_OnTouch(e) {
    ProfileRectBackground.touchEnabled = false;
    ProfileEmail.closeKeyboard();
}

function ProfileEditBox_OnEnter(e) {
    ProfileRectBackground.touchEnabled = true;
}