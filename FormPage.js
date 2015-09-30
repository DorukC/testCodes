var FormPage_FirstRun = true;
var infoDialog_Form;

var labelError;
var errorCont;

var userName;
var pass;

var latfromService;
var lngfromService;
var count = 0;
var loginButton;

function FormPageCreate() {
    var page = createUIObjects.createPage("ListSinglePage", FormPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    // ERROR MESSAGE CONTAINER
    errorCont = createUIObjects.createContainer("errorCont");
    errorCont.top = "-14%";
    errorCont.left = "0%";
    errorCont.width = "100%";
    errorCont.height = "14%";
    errorCont.borderWidth = 0;
    errorCont.backgroundTransparent = false;
    errorCont.fillColor = "#E77E23";
    errorCont.onTouchEnded = ErrorCont_OnTOuchEnded;

    var imageError = createUIObjects.createImage("imageError");
    errorCont.add(imageError);
    imageError.top = "25%";
    imageError.left = "5%";
    imageError.width = "10%";
    imageError.height = "50%";
    imageError.imageFillType = SMF.UI.ImageFillType.normal;
    imageError.image = "validation.png";

    labelError = createUIObjects.createLabel("labelError");
    errorCont.add(labelError);
    labelError.top = "15%";
    labelError.left = "20%";
    labelError.width = "75%";
    labelError.height = "66%";
    labelError.text = "Error!";
    labelError.font.size = "6 pt";
    labelError.fontColor = "#FFFFFF";

    page.add(errorCont);

    //**************************************

    // USERNAME-PASS CONTAINER
    var userCont = createUIObjects.createContainer("userCont");
    userCont.top = "14%";
    userCont.left = "0%";
    userCont.width = "100%";
    userCont.height = "19%";
    userCont.backgroundTransparent = false;
    userCont.fillColor = "#E2E6E8";
    userCont.borderColor = "#BEC3C7";
    userCont.borderWidth = 1;

    var line = createUIObjects.createLine();
    userCont.add(line);
    line.borderColor = "#000000";
    line.top = "0%";
    line.left = "0%";
    line.width = "100%";
    line.height = "100%";
    line.borderColor = "#999999";

    userName = createUIObjects.createEditBox();
    userCont.add(userName);
    userName.top = "0%";
    userName.left = "0%";
    userName.width = "100%";
    userName.height = "49.13%";
    userName.placeHolder = lang.email;
    userName.placeHolderTextColor = "#7A7A7A";
    userName.borderWidth = 0;
    userName.text = "";
    userName.fontColor = "#000000";
    userName.fillColor = "#E2E6E8";
    userName.keyboardType = SMF.UI.KeyboardType.emailAddress;
    userName.onChange = EditBox_OnChange;

    pass = createUIObjects.createEditBox();
    userCont.add(pass);
    pass.top = "50.87%";
    pass.left = "0%";
    pass.width = "100%";
    pass.height = "49.13%";
    pass.placeHolder = lang.password;
    pass.placeHolderTextColor = "#7A7A7A";
    pass.borderWidth = 0;
    pass.text = "";
    pass.fontColor = "#000000";
    pass.fillColor = "#E2E6E8";
    pass.isPassword = true;
    pass.valueRangeMax = 4;
    pass.lengthRangeMax = 4;
    pass.onChange = EditBox_OnChange;
    
    page.add(userCont);
    //**************************************

    // BUTTON CONTAINER
    var buttonCont = createUIObjects.createContainer("buttonCont");
    buttonCont.top = "35.5%";
    buttonCont.left = "0%";
    buttonCont.width = "100%";
    buttonCont.height = "37%";
    buttonCont.backgroundTransparent = true;
    buttonCont.borderWidth = 0;

    loginButton = createUIObjects.createTextButton();
    buttonCont.add(loginButton);
    loginButton.top = "0%";
    loginButton.left = "8.12%";
    loginButton.width = "83.59%";
    loginButton.height = "23.78%";
    loginButton.fontColor = "#919292";
    loginButton.pressedFontColor = "#FFFFFF";
    loginButton.fillColor = "#E5E6E6";
    loginButton.pressedFillColor = "#27AE61";
    loginButton.text = lang.login;
    loginButton.onPressed = Login_onPressed;

    var lineLeft = createUIObjects.createLine();
    buttonCont.add(lineLeft);
    lineLeft.borderColor = "#BEC3C7";
    lineLeft.top = "33.89%";
    lineLeft.left = "8.12%";
    lineLeft.width = "34.38%";
    lineLeft.height = ".56%";

    var lineRight = createUIObjects.createLine();
    buttonCont.add(lineRight);
    lineRight.borderColor = "#BEC3C7";
    lineRight.top = "33.89%";
    lineRight.left = "57.34%";
    lineRight.width = "34.38%";
    lineRight.height = ".56%";

    var orLabel = createUIObjects.createLabel("orLabel");
    buttonCont.add(orLabel);
    orLabel.top = "29.17%";
    orLabel.left = "0%";
    orLabel.width = "100%";
    orLabel.height = "9.72%";
    orLabel.text = "OR";
    orLabel.textAlignment = SMF.UI.TextAlignment.center;
    orLabel.fontColor = "#666666";

    var registerButton = createUIObjects.createTextButton();
    buttonCont.add(registerButton);
    registerButton.top = "44.44%";
    registerButton.left = "8.12%";
    registerButton.width = "83.59%";
    registerButton.height = "23.78%";
    registerButton.fontColor = "#FFFFFF";
    registerButton.pressedFontColor = "#C15A50";
    registerButton.fillColor = "#C15A50";
    registerButton.pressedFillColor = "#FFFFFF";
    registerButton.text = lang.register;
    registerButton.onPressed = Register_onPressed;

    var faceButton = createUIObjects.createTextButton();
    buttonCont.add(faceButton);
    faceButton.top = "73.89%";
    faceButton.left = "8.12%";
    faceButton.width = "83.59%";
    faceButton.height = "23.78%";
    faceButton.fontColor = "#FFFFFF";
    faceButton.pressedFontColor = "#5D77B5";
    faceButton.fillColor = "#5D77B5";
    faceButton.pressedFillColor = "#FFFFFF";
    faceButton.text = lang.loginwithFacebook;
    faceButton.onPressed = FaceLogin_onPressed;

    page.add(buttonCont);
    //**************************************


    return page;
}

function FormPage_OnShow() {
    header.initWithTitleAndBackground(this, "form_header.png", "#000000", lang.pgLoginTitle);
    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_Form.show();
    });

    header.setLeftItem(
        function () {
        clearFormText();
        Pages.back();
    });

    if (FormPage_FirstRun == true) {
        infoDialog_Form = InfoDialog_FormPage();
        FormPage_FirstRun = false;
    }

}

function ErrorCont_OnTOuchEnded(e) {
    hideErrorArea();
}

function Login_onPressed(e) {
    emailorFbLogin = 0;  
    didImageChanged = false;
    ProfileEmail.visible = true;
    ProfileEmailLabel.visible = true;
    ProfilePass.visible = true; 
    ProfilePassLabel.visible = true;
    
    ProfileFacebookNameLabel.visible = false;
    ProfileFacebookLoginImage.visible = false;
    
    
    ProfileMainScroll.scrollY = 0; // before going to pgProfile page , making scroll of scrollview to top
    // controlling email and password
    if (userName.text != "") {
        if (validateEmail(userName.text)) {
            if (pass.text.length == 4) {
                // Dialogs.dlgHomePgLoading.show(); //////////////////////////////////////// LOADING DIALOG YAPILACAKK
                // creating JSON object
                var req = {
                    "Email" : userName.text,
                    "Password" : pass.text
                };

                var loginRequest = JSON.stringify(req);
                var loginWebClient = createWebClient.createWebClient_POST("http://services.smartface.io/SmartfaceInAction/Login", Login_onSyndicationSuccess);
                loginWebClient.requestBody = loginRequest;
                loginWebClient.ignoreSSLErros = true;
                loginWebClient.run(true);
                
                loadingDialog.show();

            } else {
                // showing error
                showErrorArea("Password must be at least 4 characters");
            }
        } else {
            // showing error
            showErrorArea("Please enter valid email");
        }
    } else {
        // showing error
        showErrorArea("Please enter email");
    }

}


function Login_onSyndicationSuccess(e) {

    var responseObjectProfile = JSON.parse(this.responseText);
    
    if (responseObjectProfile.isSuccess == "false") {
        showErrorArea("Email or password is incorrect");

    } else {
        var fId = "";

        // filling data from service to objects
        ProfileEmail.text = responseObjectProfile.Email;
        ProfilePass.text = responseObjectProfile.Password;
        ProfilePhone.text = responseObjectProfile.Phone;
        ProfileBirth.text = responseObjectProfile.BirthDate.toString();
        if (responseObjectProfile.BirthDate == "01.01.0001"){
            ProfileBirth.text = lang.birthDate;
            ProfileBirth.fontColor = "#7A7A7A";
        }
              
        interestCheck(responseObjectProfile.Interests); 
       
        ProfileLikeSlider.value = Number(responseObjectProfile.LikePoint);
        ProfileMapLabel.text = responseObjectProfile.Address;

        
        if (ofsNotCtrl) {
            ProfileAllowNotifySwitch.checked = false;
        } else {
            ProfileAllowNotifySwitch.checked = responseObjectProfile.IsAllowMessage === "true";
        }
        
        if (responseObjectProfile.ImageUrl == "") {
            ProfileImage.image = "empty_photo.png";
        } else {
            count++;
            ProfileImage.image = responseObjectProfile.ImageUrl + "?" + count;
        }

        // setting mapview's map position(not object position)
        SMF.Map.lookupLocation(
            ProfileMapLabel.text,
            function (e) {
            for (var i = 0; i < e.results.length; i++) {
                latfromService = e.results[i].lat;
                lngfromService = e.results[i].lng;
                ProfileMap.centerLatitude = e.results[i].lat;
                ProfileMap.centerLongitude = e.results[i].lng;
            }
        },
            function () {});
                            
        ProfilePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
    }
    
    loadingDialog.close();

}

function Register_onPressed(e) {
    RegisterPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

}


var fbName;
var fbBirthDay;
var fId;
var fbuserName;
var token;
var fbResponseObject;
var latfromFB;
var lngfromFB;
function FaceLogin_onPressed(e) {
    emailorFbLogin = 1;
    Social.Facebook.openSession({
            permissions : ["read_stream", "publish_stream"],
            onSuccess : function (e) {
                token = e.data;
                Social.Facebook.userDetails({
                    onSuccess : function (e) {
                    
                        loadingDialog.show();
                        
                        fbName = e.name;
                        fbBirthDay = e.birthday;
                        fId = e.id;
                        fbuserName = e.username;
                        var req = {
                            "Id" : fId,
                            "Token" : token
                        };
                        req = JSON.stringify(req);
                        
                        var fbLoginWebClient = new SMF.Net.WebClient(); // webClient object for fetching server response
                        fbLoginWebClient.url = "http://services.smartface.io/SmartfaceInAction/FacebookLogin"; // assign url to webclient object
                        fbLoginWebClient.httpMethod = "POST"; // assign method type
                        fbLoginWebClient.requestHeaders = ["Content-Type: application/json"]; // adding requestHeader
                        fbLoginWebClient.ignoreSSLErros = true; //for not breaking the connection on SSL erros
                        fbLoginWebClient.requestBody = req;
                        fbLoginWebClient.onSyndicationSuccess = fbLoginWebClientOnsyndicationSuccess;
                        fbLoginWebClient.run();
                    },
                    onError : function () {
                        var message = "Cannot sign in with Facebook.";
                        if (Device.deviceOS === "Android") {
                            message += "\r\nPlase modify Android manifest with valid Facebook App ID and this can be only tested on pusblished project.";
                        }
                        alert(message);
                    }
                });
            },
            onError : function (e) {
                // alert(e.message);
            }
        });
  
}

function fbLoginWebClientOnsyndicationSuccess(e) {
    fbResponseObject = JSON.parse(this.responseText);
    if (fbResponseObject.isSuccess == false) {
        alert(lang.applicationError);
    } else {
  
        ProfileEmail.visible = false;
        ProfileEmailLabel.visible = false;
        ProfilePass.visible = false; 
        ProfilePassLabel.visible = false;
        
        ProfileFacebookNameLabel.visible = true;
        ProfileFacebookLoginImage.visible = true;
        ProfileEmailLabel.text = fbName;
        
        if (fbResponseObject.BirthDate == "") {
            ProfileBirth.text = fbBirthDay;
        } else {
            ProfileBirth.text = fbResponseObject.BirthDate;
        }
        if (fbResponseObject.ImageUrl == "") {
            ProfileImage.image = "http://graph.facebook.com/" + fId + "/picture?width=200&height=200";
        } else {
            ProfileImage.image = fbResponseObject.ImageUrl;
        }
        ProfilePhone.text = fbResponseObject.Phone;
        ProfileInterestLabel.text = fbResponseObject.Interests;
        interestCheck(fbResponseObject.Interests);
        ProfileLikeSliderPointLabel.text = fbResponseObject.LikePoint;
        ProfileMapLabel.text = fbResponseObject.Address;
        ProfileLikeSlider.value = Number(fbResponseObject.LikePoint);
        ProfileAllowNotifySwitch.checked = fbResponseObject.IsAllowMessage === "true";

        SMF.Map.lookupLocation(
            ProfileMapLabel.text,
            function (e) {
            for (var i = 0; i < e.results.length; i++) {
                latfromFB = e.results[i].lat;
                lngfromFB = e.results[i].lng;
                ProfileMap.centerLatitude = e.results[i].lat;
                ProfileMap.centerLongitude = e.results[i].lng;
            }
        },
            function () {});
        ProfilePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
    }
    oadingDialog.close();
}


function showErrorArea(_text){
    labelError.text = _text;
    errorCont.animate({
        property : 'Y',
        endValue : 0,
        motionEase : SMF.UI.MotionEase.bounce,
        duration : 300,
        onFinish : function () {
            
        }
    });
}

function hideErrorArea(){
    errorCont.animate({
        property : 'Y',
        endValue : "-16%",
        motionEase : SMF.UI.MotionEase.bounce,
        duration : 300,
        onFinish : function () {
           
        }
    });
}

function clearFormText(){
    userName.text = "";
    pass.text = "";
}


function EditBox_OnChange(e){
    readyToLogin();
}
// to notice that you filled password and email address
function readyToLogin() {
    if (userName.text != "") {
        if (pass.text.length == 4) {
            loginButton.fontColor = "#FFFFFF";
            loginButton.fillColor = "#2DCC70";
        } else {
            loginButton.fillColor = "#E5E6E6";
            loginButton.fontColor = "#919292";
        }
    } else {
        loginButton.fillColor = "#E5E6E6";
        loginButton.fontColor = "#919292";
    }
}

function interestCheck(data) {
    var res = data.split(",");
    Data.dynamicDS.seek(0);
    for (var k = 0; k < Data.dynamicDS.rowCount; k++) {
        Data.dynamicDS.image = "";
        Data.dynamicDS.fontColor = "#999999";
        Data.dynamicDS.moveNext();
    }
    for (var i = 0; i < res.length; i++) {
        Data.dynamicDS.seek(0);
        for (var j = 0; j < Data.dynamicDS.rowCount; j++) {
            if (res[i] == Data.dynamicDS.interestName || Data.dynamicDS.image == "list_check.png") {
                Data.dynamicDS.image = "list_check.png";
                Data.dynamicDS.fontColor = "#057AFB";
            } else {
                Data.dynamicDS.image = "";
                Data.dynamicDS.fontColor = "#999999";
            }
            Data.dynamicDS.moveNext();
        }
    }
}