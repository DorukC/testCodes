var animaImages = ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png", "a8.png", "a9.png", "a10.png", "a11.png", "a12.png", "a13.png", "a14.png", "a15.png", "a16.png", "a17.png", "a18.png", "a19.png", "a20.png", "a21.png", "a22.png", "a23.png", "a24.png", "a25.png", "a26.png", "a27.png", "a28.png", "a29.png", "a30.png", "a31.png", "a32.png", "a33.png", "a34.png", "a35.png", "a36.png", "a37.png", "a38.png", "a39.png", "a40.png", "a41.png", "a42.png", "a43.png", "a44.png", "a45.png", "a46.png", "a47.png", "a48.png", "a49.png", "a50.png", "a51.png", "a52.png", "a53.png", "a54.png", "a55.png", "a56.png", "a57.png", "a58.png", "a59.png", "a60.png", "a61.png"];
var PullUpCounter = 1;
var isCategory = 1;
var lastCategory = 1;
var isCategoryReload = false;
var repeatBox_Data = [];
var repeatbox;
var sliderDrawer;
var sliderIsOpen = false;
var BlogWebClient;
var image1;
var image2;
var image3;
var image4;
var image5;
var leng = 1;
var loadingImage;
var intervalID;

// Single Page Vars
var page_BlogSingle_firstRun = true;
var page2;
var scrollMain2;
var imgFeaturedinScroll;
var lblTitleinScroll;
var lblContentinScroll;
var urlSinglePageSelected;

/**
 * Creates action(s) that are run when the user press the key of the devices.
 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
 * @this Pages.Page1
 */
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Pages.Page1
 */
function Page1_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.initWithBackground(this, "headerBlog.png");
    header.setRightItemWithImageAndListener("inactionpass.png", openInAction);
    header.setLeftItemImage("menu.png", OpenCategory);
    this.showStatusBar = true;
    
    if (firstRun == true) {

        //admob for ios should create once for each page
        firstRun = false;
        
        //*********************************************************************************
        // CODE START ------------------
        Pages.Page1.fillColor = "grey";
        var myUrl = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        BlogWebClient = createWebClient.createWebClient_GET(myUrl, BlogWebClient_SyndicationSuccess);
        BlogWebClient.run(true);

        // RepeatBox Create and Item Init
        //---------------------------------------------------------------
        // this.createRepeatBox = function (_name, _dataSource, _onSelectedItem, _onRowRender, _onPullUpBlog)
        repeatbox = createUIObjects.createRepeatBox("blogRepeatBox", repeatBox_Data, repeatBox_onSelectedItem, repeatBox_onRowRender, pullUpListener, "");
        repeatbox.borderWidth = 0;
        repeatbox.visible = false;
        repeatbox.height = "85%";

        var aiPullUp = new SMF.UI.ActivityIndicator({
                top : "0%",
                left : "45%",
                widht : "10%",
                height : "10%",
                style : SMF.UI.ActivityIndicatorStyle.gray,
            });

        var image = createUIObjects.createImage("repeatBoxImage");
        image.left = "3%";
        image.top = "10%";
        image.width = "40%";
        image.height = "80%";
        image.enableCache = false;
        image.touchEnabled = false;
        image.imageFillType = SMF.UI.ImageFillType.aspectFit;

        var lbl = createUIObjects.createLabel("repeatBoxLabel");
        lbl.left = "45%";
        lbl.top = "7%";
        lbl.width = "52%";
        lbl.height = "80%";
        lbl.multipleLine = true;
        lbl.touchEnabled = false;
        lbl.fillColor = "#FFFFFF";
        lbl.font.size = "5 pt";
        lbl.font.bold = true
        lbl.textAlignment = SMF.UI.Alignment.topLeft;

        var lbldate = createUIObjects.createLabel("repeatBoxLabel");
        lbldate.left = "70%";
        lbldate.top = "75%";
        lbldate.width = "27%";
        lbldate.height = "20%";
        lbldate.touchEnabled = false;
        lbldate.fontColor = "#333333";
        lbldate.font.size = "4 pt";
        lbldate.font.italic = true;
        lbldate.textAlignment = SMF.UI.Alignment.topLeft;

        repeatbox.itemTemplate.add(image);
        repeatbox.itemTemplate.add(lbl);
        repeatbox.itemTemplate.add(lbldate);
        repeatbox.pullUpItem.add(aiPullUp);
        //---------------------------------------------------------------

        // SlideDrawer Create and Init
        //---------------------------------------------------------------
        sliderDrawer = createUIObjects.createSliderDrawer("SliderDraver", this, OpenCategory);

        image1 = createUIObjects.createImageForSlider("SliderDraverImage1", "0%", "all2.png",
                function (e) {
                isCategory = 1;
                image1.image = "all2.png";
                CategoryReload();
            });
        image2 = createUIObjects.createImageForSlider("SliderDraverImage2", "17%", "mobil1.png",
                function (e) {
                isCategory = 2;
                image2.image = "mobil2.png";
                CategoryReload();
            });
        image3 = createUIObjects.createImageForSlider("SliderDraverImage3", "34%", "tech1.png",
                function (e) {
                isCategory = 3;
                image3.image = "tech2.png";
                CategoryReload();
            });
        image4 = createUIObjects.createImageForSlider("SliderDraverImage4", "51%", "ux1.png",
                function (e) {
                isCategory = 4;
                image4.image = "ux2.png";
                CategoryReload();
            });
        image5 = createUIObjects.createImageForSlider("SliderDraverImage5", "68%", "smartface1.png",
                function (e) {
                isCategory = 5;
                image5.image = "smartface2.png";
                CategoryReload();
            });

        var labelSlider = createUIObjects.createLabel("SliderLabel");
        labelSlider.left = "0%";
        labelSlider.top = "83%";
        labelSlider.width = "100%";
        labelSlider.height = "15%";
        labelSlider.multipleLine = true;
        labelSlider.touchEnabled = false;
        labelSlider.fillColor = "#FFFFFF";
        labelSlider.textAlignment = SMF.UI.Alignment.center;
        labelSlider.text = "Compatible with\nv4.4.0"
            labelSlider.font.size = "6 pt";

        sliderDrawer.add(image1);
        sliderDrawer.add(image2);
        sliderDrawer.add(image3);
        sliderDrawer.add(image4);
        sliderDrawer.add(image5);
        sliderDrawer.add(labelSlider);
        //**********************************************

        loadingImage = createUIObjects.createImage("loadingImage");
        loadingImage.left = "0%";
        loadingImage.top = "0%";
        loadingImage.width = "100%";
        loadingImage.height = "80%";
        loadingImage.imageFillType = SMF.UI.ImageFillType.normal;
        loadingImage.image = animaImages[0];

        Pages.Page1.add(sliderDrawer);
        Pages.Page1.add(repeatbox);
        Pages.Page1.add(loadingImage);

        Loading();

        if (Device.deviceOS == 'iOS') {
            createAdmob(this);
        }

        // Blog_SinglePage_create
        // Blog_SinglePageCreate();
        createPage2UIObject();
    }

    //admob for android should create everytime for each page shown
    if (Device.deviceOS == 'Android') {
        createAdmob(this);
    }
}

// Loading image animation
function Loading() {
    loadingImage.visible = true;
    clearInterval(intervalID);
    intervalID = setInterval(function () {
            updateTime();
        }, 50);
}

// Loading image changer
function updateTime() {
    if (leng > 61) {
        leng = 0;
    }
    loadingImage.image = animaImages[leng];
    leng++;
}

//
function OpenCategory() {

    if (sliderIsOpen == true) {
        sliderDrawer.hide();
        sliderIsOpen = false;
    } else {
        sliderDrawer.show();
        sliderIsOpen = true;
    }

}

// Open InAction Dashboard
function openInAction() {

    DashboardPage.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.flipFromLeft,
        SMF.UI.TransitionEffectType.push,
        false, //fade effect
        false);


}

// Calling this function than selected category
function CategoryReload() {
    if (lastCategory != isCategory) {
        if (lastCategory == 1) {
            image1.image = "all1.png";
        }
        if (lastCategory == 2) {
            image2.image = "mobil1.png";
        }
        if (lastCategory == 3) {
            image3.image = "tech1.png";
        }
        if (lastCategory == 4) {
            image4.image = "ux1.png";
        }
        if (lastCategory == 5) {
            image5.image = "smartface1.png";
        }
        lastCategory = isCategory;
        PullUpCounter = 1;
        isCategoryReload = true;

        Pages.Page1.fillColor = "grey";
        repeatbox.visible = false;
        Loading();

        pullUpListener();

    }
}

// Repeatbox pulluplistener
function pullUpListener() {

    if (isCategoryReload == false) {
        PullUpCounter = PullUpCounter + 1;
    }
    if (isCategory == 1) {
        BlogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 2) {
        BlogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 3) {
        BlogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 4) {
        BlogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 5) {
        BlogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + PullUpCounter + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    }

    BlogWebClient.run(true);

}

// WebClient SyndicationSuccess
function BlogWebClient_SyndicationSuccess(e) {
    var parsedResponse = JSON.parse(this.responseText);

    if (isCategoryReload == true) {
        repeatBox_Data = [];
        isCategoryReload = false;
    }

    for (var i = 0; i < parsedResponse.posts.length; i++) {
        repeatBox_Data.push(parsedResponse.posts[i]);
    }
    

    repeatbox.dataSource = repeatBox_Data;
    repeatbox.refresh();
    repeatbox.closePullItems();
    
   
    repeatbox.visible = true;
    clearInterval(intervalID);
    loadingImage.visible = false;
    Pages.Page1.fillColor = "white";
    
}

// Repeatbox onrender
function repeatBox_onRowRender(e) {

    this.controls[0].image = repeatBox_Data[e.rowIndex].thumbnail_images.medium.url;
    this.controls[1].text = htmlReplace(repeatBox_Data[e.rowIndex].title);
    this.controls[2].text = htmlReplace(repeatBox_Data[e.rowIndex].date);
    
}

function trimChar(raw, first, second) {

    var fi = raw.indexOf(first);
    var si = raw.indexOf(second);
    var ilk = raw.substr(0, fi);
    var son = raw.substr(si + second.length, raw.length);
    var res = ilk + son;
    if (res.indexOf(first) > -1 && res.indexOf(second) > -1) {
        return trimChar(res, first, second);
    } else {
        return res;
    }
    return ilk + son;
}

// repeatbox onselected
function repeatBox_onSelectedItem(e) {

    var textCon = repeatBox_Data[e.rowIndex].content;
    var trimText1 = "<script>";
    var trimText2 = "<\/script>";
    var textCon = trimChar(textCon, trimText1, trimText2);
    textCon = textCon.replace(/<\/?[^>]+(>|$)/g, "");

    imgFeaturedinScroll.image = repeatBox_Data[e.rowIndex].thumbnail_images.large.url;
    lblTitleinScroll.text = htmlReplace(repeatBox_Data[e.rowIndex].title);
    lblContentinScroll.text = htmlReplace(textCon);

    urlSinglePageSelected = repeatBox_Data[e.rowIndex].url;

    page2.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

}

// Share Content
function shareIt() {
    Device.share(lblTitleinScroll.text, urlSinglePageSelected + "\n\n" + lang.dlSmartface + "\n\n" + shareLink);
}

// Blog Single Page Creator
function createPage2UIObject() {
    page2 = new SMF.UI.Page({
            fillColor : "#ecf0f1"
        });

    page2.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    page2.onShow = function (e) {
        header.initWithBackground(page2, "headerBlog.png");
        header.setRightItemWithImageAndListener("share.png", shareIt);
        header.setLeftItem(function () {
            Pages.back();
        });

        page2.showStatusBar = true;

        if (page_BlogSingle_firstRun == true) {
            if (Device.deviceOS == 'iOS') {
                createAdmob(page2);
                page_BlogSingle_firstRun = false;
            }
        }

        if (Device.deviceOS == 'Android') {
            createAdmob(page2);
        }
    }

    scrollMain2 = new SMF.UI.ScrollView({
            name : "scrollMain2",
            width : "94%",
            height : "83%",
            left : "3%",
            top : "2%",
            borderWidth : 0,
            contentWidth : "95%",
            contentHeight : "99%",
            touchEnabled : true,
            roundedEdge : 0,
            verticalGap : 5,
            autoSize : true,
            backgroundTransparent : false,
            fillColor : "#E0E4E5",
            enableVerticalScrolling : true,
            enableVerticalScrollbar : true,
            enableHorizontalScrolling : false,
        });

    imgFeaturedinScroll = new SMF.UI.Image({
            name : "imgFeaturedinScroll",
            width : "100%",
            height : "23%",
            left : 0,
            top : "0%",
            touchEnabled : true,
            visible : true,
            enableCache : false,
            imageFillType : SMF.UI.ImageFillType.stretch
        });

    lblTitleinScroll = new SMF.UI.Label({
            width : "93%",
            left : "0%",
            height : "12%",
            fontSize : "10pt",
            fontColor : "black",
            backgroundTransparent : true,
            multipleLine : true,
            touchEnabled : false,
            top : "24%",
            text : "",
        });

    lblContentinScroll = new SMF.UI.Label({
            name : "lblContentinScroll",
            width : "90%",
            left : "0%",
            height : "46%",
            top : "38%",
            text : "",
            autoSize : true,
            fontColor : "black",
            borderWidth : "0",
            textAlignment : SMF.UI.Alignment.topLeft,
            touchEnabled : false,
            roundedEdge : 0,
            detectURLsInString : true,
            multipleLine : true,
            fontColor : "#222222",
        });

    lblTitleinScroll.font = new SMF.UI.Font({
            name : "Default",
            size : "7pt",
            bold : true,
            italic : false
        });

    lblContentinScroll.font = new SMF.UI.Font({
            name : "Default",
            size : "6pt",
            bold : false,
            italic : false
        });

    page2.add(scrollMain2);
    scrollMain2.add(lblContentinScroll);
    scrollMain2.add(imgFeaturedinScroll);
    scrollMain2.add(lblTitleinScroll);

}

