var ListFirstRun = true;
var ListWebClient;
var infoDialog_List;

var ListButton;
var SquareButton;
var BoxedButton;

var repeatbox_Line;
var repeatbox_Square;
var repeatbox_Boxed;

var rowNum = 11; // it is a default value. How many values are setting when pull up repeatbox
var pageNum = 1;
var myUrl = "http://services.smartface.io/SmartfaceInAction/News?page=" + pageNum + "&rowNumber=" + rowNum;

var repeatBoxList_Data = [];
var repeatBoxSquare_Data = [];
function ListPageCreate() {

    var page = createUIObjects.createPage("ListPage", List_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;
    
    page.onKeyPressed = function(e){
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    ListButton = createUIObjects.createImage("Line");
    ListButton.top = "0%";
    ListButton.left = "0%";
    ListButton.width = "33.34%";
    ListButton.height = "8%";
    ListButton.enableCache = false;
    ListButton.touchEnabled = true;
    ListButton.imageFillType = SMF.UI.ImageFillType.stretch;
    ListButton.image = "line3.png";
    ListButton.onTouchEnded = line_OnTouchEnded;

    SquareButton = createUIObjects.createImage("Square");
    SquareButton.top = "0%";
    SquareButton.left = "33.33%";
    SquareButton.width = "33.34%";
    SquareButton.height = "8%";
    SquareButton.enableCache = false;
    SquareButton.touchEnabled = true;
    SquareButton.imageFillType = SMF.UI.ImageFillType.stretch;
    SquareButton.image = "square1.png";
    SquareButton.onTouchEnded = square_OnTouchEnded;

    BoxedButton = createUIObjects.createImage("Boxed");
    BoxedButton.top = "0%";
    BoxedButton.left = "66.66%";
    BoxedButton.width = "33.34%";
    BoxedButton.height = "8%";
    BoxedButton.enableCache = false;
    BoxedButton.touchEnabled = true;
    BoxedButton.imageFillType = SMF.UI.ImageFillType.stretch;
    BoxedButton.image = "boxed1.png";
    BoxedButton.onTouchEnded = boxed_OnTouchEnded;


    page.add(ListButton);
    page.add(SquareButton);
    page.add(BoxedButton);
   
    return page;

}

function List_OnShow() {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", lang.pgListViewTitle);
    header.setRightItemWithImageAndListener("info.png",
    function () {
        infoDialog_List.show();    
    });

    header.setLeftItem(
    function () {
        Pages.back();
    });

    if (ListFirstRun == true) {
        
        loadingDialog.show();
         
        ListWebClient = createWebClient.createWebClient_GET(myUrl, ListWebClient_SyndicationSuccess);
        ListWebClient.run(true);

        
        // LINE REPEAT BOX
        repeatbox_Line = createUIObjects.createRepeatBox("repeatbox_Line", repeatBoxList_Data, repeatBox_onSelectedItem_Line, repeatBox_onRowRender_Line, pullUpListener_Line, "");
        repeatbox_Line.top = "8%";
        repeatbox_Line.left = "0%";
        repeatbox_Line.width = "100%";
        repeatbox_Line.height = "92%";
        repeatbox_Line.visible = true;
        repeatbox_Line.borderWidth = 0;

        var aiPullDown = new SMF.UI.ActivityIndicator({
                top : "0%",
                left : "45%",
                widht : "10%",
                height : "10%",
                style : SMF.UI.ActivityIndicatorStyle.gray,
            });

        var image = createUIObjects.createImage("repeatBoxImage_Line");
        image.left = "0%";
        image.top = "10%";
        image.width = "40%";
        image.height = "85%";
        image.enableCache = false;
        image.touchEnabled = false;
        image.imageFillType = SMF.UI.ImageFillType.aspectFit;

        var lbl = createUIObjects.createLabel("repeatBoxLabel_Line");
        lbl.left = "40%";
        lbl.top = "10%";
        lbl.width = "60%";
        lbl.height = "85%";
        //mylbl.horizontalGap = 5;
        lbl.multipleLine = true;
        lbl.touchEnabled = false;
        lbl.fillColor = "#DEDDDD";
        lbl.fontColor = "#000000";
        lbl.backgroundTransparent = false;
        lbl.textAlignment = SMF.UI.Alignment.topLeft;

        repeatbox_Line.itemTemplate.borderColor = "#ffffff";
        repeatbox_Line.itemTemplate.add(image);
        repeatbox_Line.itemTemplate.add(lbl);
        repeatbox_Line.pullUpItem.add(aiPullDown);

        this.add(repeatbox_Line);
        // LINE REPEAT BOX

        // SQUARE REPEAT BOX
        repeatbox_Square = createUIObjects.createRepeatBox("repeatbox_Square", repeatBoxSquare_Data, repeatBox_onSelectedItem_Square, repeatBox_onRowRender_Square, pullUpListener_Square, "");
        repeatbox_Square.top = "8%";
        repeatbox_Square.left = "0%";
        repeatbox_Square.width = "100%";
        repeatbox_Square.height = "92%";
        repeatbox_Square.visible = false;
        repeatbox_Square.itemTemplate.height = "25%";
        repeatbox_Square.borderWidth = 0;

        var Square_aiPullDown = new SMF.UI.ActivityIndicator({
                top : "0%",
                left : "45%",
                widht : "10%",
                height : "10%",
                style : SMF.UI.ActivityIndicatorStyle.gray,
            });

        var Square_image_left = createUIObjects.createImage("repeatBoxImage_Square");
        Square_image_left.left = "0%";
        Square_image_left.top = "0%";
        Square_image_left.width = "50%";
        Square_image_left.height = "100%";
        Square_image_left.enableCache = false;
        Square_image_left.touchEnabled = false;
        Square_image_left.imageFillType = SMF.UI.ImageFillType.stretch;

        var Square_image_right = createUIObjects.createImage("repeatBoxImage_Square");
        Square_image_right.left = "50%";
        Square_image_right.top = "0%";
        Square_image_right.width = "50%";
        Square_image_right.height = "100%";
        Square_image_right.enableCache = false;
        Square_image_right.touchEnabled = false;
        Square_image_right.imageFillType = SMF.UI.ImageFillType.stretch;

        repeatbox_Square.itemTemplate.add(Square_image_left);
        repeatbox_Square.itemTemplate.add(Square_image_right);
        repeatbox_Square.pullUpItem.add(Square_aiPullDown);

        this.add(repeatbox_Square);
        //

        // BOXED REPEAT BOX
        repeatbox_Boxed = createUIObjects.createRepeatBox("repeatbox_Boxed", repeatBoxList_Data, repeatBox_onSelectedItem_Boxed, repeatBox_onRowRender_Boxed, pullUpListener_Boxed, "");
        repeatbox_Boxed.top = "8%";
        repeatbox_Boxed.left = "0%";
        repeatbox_Boxed.width = "100%";
        repeatbox_Boxed.height = "92%";
        repeatbox_Boxed.visible = false;
        repeatbox_Boxed.itemTemplate.height = "35%";
        repeatbox_Boxed.borderWidth = 0;

        var Boxed_aiPullDown = new SMF.UI.ActivityIndicator({
                top : "0%",
                left : "45%",
                widht : "10%",
                height : "10%",
                style : SMF.UI.ActivityIndicatorStyle.gray,
            });

        var Boxed_image = createUIObjects.createImage("repeatBoxImage_Boxed");
        Boxed_image.left = "0%";
        Boxed_image.top = "0%";
        Boxed_image.width = "100%";
        Boxed_image.height = "100%";
        Boxed_image.enableCache = false;
        Boxed_image.touchEnabled = false;
        Boxed_image.imageFillType = SMF.UI.ImageFillType.stretch;

        var Boxed_lbl = createUIObjects.createLabel("repeatBoxLabel_Boxed");
        Boxed_lbl.left = "0%";
        Boxed_lbl.top = "85%";
        Boxed_lbl.width = "100%";
        Boxed_lbl.height = "20%";
        //mylbl.horizontalGap = 5;
        Boxed_lbl.multipleLine = true;
        Boxed_lbl.touchEnabled = false;
        Boxed_lbl.fillColor = "#000000";
        Boxed_lbl.fontColor = "#FFFFFF";
        Boxed_lbl.backgroundTransparent = false;
        Boxed_lbl.font.size = "8 pt";
        Boxed_lbl.alpha = "70%";
        Boxed_lbl.textAlignment = SMF.UI.Alignment.top;

        repeatbox_Boxed.itemTemplate.add(Boxed_image);
        repeatbox_Boxed.itemTemplate.add(Boxed_lbl);
        repeatbox_Boxed.pullUpItem.add(Boxed_aiPullDown);

        this.add(repeatbox_Boxed);
        // BOXED REPEAT BOX

        
        infoDialog_List = InfoDialog_ListPage();
      
        
        ListFirstRun = false;

    }

}

function line_OnTouchEnded(e) {

    ListButton.image = "line3.png";
    SquareButton.image = "square1.png";
    BoxedButton.image = "boxed1.png";

    repeatbox_Line.visible = true;
    repeatbox_Square.visible = false;
    repeatbox_Boxed.visible = false;
}

function square_OnTouchEnded(e) {

    ListButton.image = "line1.png";
    SquareButton.image = "square2.png";
    BoxedButton.image = "boxed1.png";

    repeatbox_Line.visible = false;
    repeatbox_Square.visible = true;
    repeatbox_Boxed.visible = false;
}

function boxed_OnTouchEnded(e) {

    ListButton.image = "line1.png";
    SquareButton.image = "square1.png";
    BoxedButton.image = "boxed2.png";

    repeatbox_Line.visible = false;
    repeatbox_Square.visible = false;
    repeatbox_Boxed.visible = true;
}

function ListWebClient_SyndicationSuccess(e) {
    var parsedResponse = JSON.parse(this.responseText);

    for (var i = 0; i < parsedResponse.news.length; i++) {
        repeatBoxList_Data.push(parsedResponse.news[i]);
    }
    
    // Content page edit
    createSinglePages();
        
        
    //Square data init
    for (var k = 0; k < parsedResponse.news.length; k = k + 2) {

        if (parsedResponse.news.length % 2 == 0) {
            repeatBoxSquare_Data.push([parsedResponse.news[k], parsedResponse.news[k + 1]]);
        } else {
            if (k + 2 > parsedResponse.news.length) {
                repeatBoxSquare_Data.push([parsedResponse.news[k], ""]);
            } else {
                repeatBoxSquare_Data.push([parsedResponse.news[k], parsedResponse.news[k + 1]]);
            }
        }

    }
    //**********************************


    repeatbox_Line.dataSource = repeatBoxList_Data;
    repeatbox_Line.refresh();
    repeatbox_Line.closePullItems();

    repeatbox_Square.dataSource = repeatBoxSquare_Data;
    repeatbox_Square.refresh();
    repeatbox_Square.closePullItems();

    repeatbox_Boxed.dataSource = repeatBoxList_Data;
    repeatbox_Boxed.refresh();
    repeatbox_Boxed.closePullItems();


    loadingDialog.close();
}

// LINE REPEAT BOX
// Line Repeatbox onrender
function repeatBox_onRowRender_Line(e) {
    this.controls[0].image = repeatBoxList_Data[e.rowIndex].image[0].url;
    this.controls[1].text = htmlReplace(repeatBoxList_Data[e.rowIndex].title);
}

// Line repeatbox onselected
function repeatBox_onSelectedItem_Line(e) {

    openSinglePage(e.rowIndex);

}

// Line Repeatbox pulluplistener
function pullUpListener_Line() {
    pageNum = pageNum + 1;
    myUrl = "http://services.smartface.io/SmartfaceInAction/News?page=" + pageNum + "&rowNumber=" + rowNum;
    ListWebClient = createWebClient.createWebClient_GET(myUrl, ListWebClient_SyndicationSuccess);
    ListWebClient.run(true);
}
//*********************************************************

// SQUARE REPEAT BOX
// SQUARE Repeatbox onrender
function repeatBox_onRowRender_Square(e) {
    /*
    var item = repeatBoxSquare_Data[e.rowIndex];
    this.controls[0].image = item[0].image[0].url;
    this.controls[1].image = item[1].image[0].url;

     */

    this.controls[0].image = "empty_photo.png"; // setting default image
    var index = 2 * e.rowIndex;
    // filling data to objects
    if (repeatBoxList_Data.length > index) {
        var newsObject1 = repeatBoxList_Data[index];
        this.controls[0].image = newsObject1.image[0].url;
        // to divide row 2 part
        if (repeatBoxList_Data.length > index + 1) {
            this.controls[1].image = "empty_photo.png";
            this.controls[1].visible = true;
            var newsObject2 = repeatBoxList_Data[index + 1];
            this.controls[1].image = newsObject2.image[0].url;
        } else {
            this.controls[1].visible = false;
        }
    }

}

// SQUARE repeatbox onselected
function repeatBox_onSelectedItem_Square(e) {

    var _index = e.rowIndex * 2;

    if (Device.touchX < Device.screenWidth / 2) {
        openSinglePage(_index);
    } else {
        _index++;
        if (_index < repeatBoxList_Data.length)
            openSinglePage(_index);
    }

}

// SQUARE Repeatbox pulluplistener
function pullUpListener_Square() {
    pageNum = pageNum + 1;
    myUrl = "http://services.smartface.io/SmartfaceInAction/News?page=" + pageNum + "&rowNumber=" + rowNum;
    ListWebClient = createWebClient.createWebClient_GET(myUrl, ListWebClient_SyndicationSuccess);
    ListWebClient.run(true);
}
//*********************************************************

// BOXED REPEAT BOX
// BOXED Repeatbox onrender
// BOXED repeatbox onselected
function repeatBox_onRowRender_Boxed(e) {
    this.controls[0].image = repeatBoxList_Data[e.rowIndex].image[0].url;
    this.controls[1].text = htmlReplace(repeatBoxList_Data[e.rowIndex].title);
}

function repeatBox_onSelectedItem_Boxed(e) {

    openSinglePage(e.rowIndex);

}

// BOXED Repeatbox pulluplistener
function pullUpListener_Boxed() {
    pageNum = pageNum + 1;
    myUrl = "http://services.smartface.io/SmartfaceInAction/News?page=" + pageNum + "&rowNumber=" + rowNum;
    ListWebClient = createWebClient.createWebClient_GET(myUrl, ListWebClient_SyndicationSuccess);
    ListWebClient.run(true);
}
//*********************************************************


function openSinglePage(_index) {

    selected_Index = _index;
    SP_Scrollview.scrollX = _index * Device.screenWidth;
    //Open Single page
    ListSinglePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
}

function createSinglePages() {


    var contentWidth = parseInt(repeatBoxList_Data.length) * 100;
    var contentWidth_str = contentWidth.toString() + "%";
    SP_Scrollview.contentWidth = contentWidth_str;

    // Page container add
    SP_Scrollview.clear();
    for (var i = 0; i < repeatBoxList_Data.length; i++) {

        var _left_str = (i * Device.screenWidth);

        SP_Scrollview.add( ListPageContainer( Device.screenWidth, _left_str, repeatBoxList_Data[i].image.length) );

    }
    //**************
   
    
    // single pages init
    for (var k = 0; k < repeatBoxList_Data.length; k++) {

        SP_Scrollview.controls[k].controls[1].text = repeatBoxList_Data[k].title + "\n";
        SP_Scrollview.controls[k].controls[3].text = repeatBoxList_Data[k].description + "\n\n\n";
    
        var left_value = 100 / repeatBoxList_Data[k].image.length;
        var width_value_str = left_value + "%";

        SP_Scrollview.controls[k].controls[0].controls[0].clear(); // pagescrollview
        //Add new images in the scrollview
        for (var i = 0; i < repeatBoxList_Data[k].image.length; i++) {
            var _left_str = (i * left_value) + "%";

            SP_Scrollview.controls[k].controls[0].controls[0].add(new SMF.UI.Image({
                    width : width_value_str,
                    left : _left_str,
                    height : "100%",
                    top : "0%",
                    image : repeatBoxList_Data[k].image[i].url,
                    enableCache : false,
                    touchEnabled : false,
                    imageFillType : SMF.UI.ImageFillType.stretch
                }));
        }
    }
    //*******************
    
    //**********************************
    //Edit scrollview page point images
    ItemImageIndexList = [];
    for (var k = 0; k < repeatBoxList_Data.length; k++) {
    
        ItemImageIndexList.push(1);
        
        var left_str = (100 - (repeatBoxList_Data[k].image.length * 10)) / 2;
 
        for (var i = 0; i < repeatBoxList_Data[k].image.length; i++) {
        
            var point_left = (10 * i) + left_str;
            var point_left_str = point_left + "%";
            
            SP_Scrollview.controls[k].controls[0].add(new SMF.UI.Image({
                    left : point_left_str,
                    top : "90%",
                    width : "10%",
                    height : "10%",
                    image : "point.png",
                    enableScroll : false
                }));

        }
    
    }
   
    //*******************************
    
}