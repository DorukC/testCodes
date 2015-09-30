var ListSinglePage_FirstRun = true;
var selected_Index = 0;
var infoDialog_ListSingle;

var SP_Scrollview;
var ItemImageIndexList = [];

function ListSinglePageCreate() {

    var page = createUIObjects.createPage("ListSinglePage", SinglePage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function(e){
        if (e.keyCode === 4) {
            Pages.back();
        }
    }
    
    SP_Scrollview = createUIObjects.createScrollView2("ListSinglePageScroolView");
    SP_Scrollview.left = "0%";
    SP_Scrollview.top = "0%";
    SP_Scrollview.width = "100%";
    SP_Scrollview.height = "100%";
    SP_Scrollview.orientation = SMF.UI.Orientation.horizontal;
    SP_Scrollview.enableHorizontalPaging = true;
    SP_Scrollview.enableHorizontalScrolling = true;
    SP_Scrollview.onPageChanged = function (e) {

        selected_Index = e.pageIndex;

        for (var i = 1; i < SP_Scrollview.controls[selected_Index].controls[0].controls.length; i++)
            SP_Scrollview.controls[selected_Index].controls[0].controls[i].image = "point.png";

        SP_Scrollview.controls[selected_Index].controls[0].controls[ItemImageIndexList[selected_Index]].image = "point_selected.png";

    }

    page.add(SP_Scrollview);

    return page;

}

function SinglePage_OnShow() {
    header.initWithTitleAndBackground(this, "list_header.png", "#000000", lang.pgContent);
    header.setRightItemWithImageAndListener("info.png",
    function () {
        infoDialog_ListSingle.show();
    });

    header.setLeftItem(
    function () {
        Pages.back();
    });

    //UNUTMAAAAAAAA ----------------------------------------------------------------------------------------------
    //********************************************************************************************************
    //ListSinglePageContainer.controls[lastPageIndex].image = "point_selected.png";

    for (var i = 0; i < SP_Scrollview.controls.length; i++){
        SP_Scrollview.controls[i].controls[0].controls[ItemImageIndexList[i]].image = "point_selected.png";
    }
        


    



    if (ListSinglePage_FirstRun == true) {

        infoDialog_ListSingle = InfoDialog_ListSinglePage();
        ListSinglePage_FirstRun = false;
    }

}

function ListPageContainer(_width, _left, _imageSize) {

    var MainContainer = createUIObjects.createContainer("Default");
    MainContainer.left = _left;
    MainContainer.top = "0%";
    MainContainer.width = _width;
    MainContainer.height = "100%";
    MainContainer.borderWidth = 0;

    var ListSinglePageContainer = createUIObjects.createContainer("Default");
    ListSinglePageContainer.left = "0%";
    ListSinglePageContainer.top = "0%";
    ListSinglePageContainer.width = "100%";
    ListSinglePageContainer.height = "30%";
    ListSinglePageContainer.borderWidth = 0;

    var ListSinglePageScroolView = createUIObjects.createScrollView2("Default");
    ListSinglePageScroolView.left = "0%";
    ListSinglePageScroolView.top = "0%";
    ListSinglePageScroolView.width = "100%";
    ListSinglePageScroolView.height = "100%";
    ListSinglePageScroolView.touchEnabled = true;
    ListSinglePageScroolView.orientation = SMF.UI.Orientation.horizontal;
    ListSinglePageScroolView.enableHorizontalPaging = true;
    ListSinglePageScroolView.enableHorizontalScrolling = true;
    ListSinglePageScroolView.onPageChanged = function (e) {

        ItemImageIndexList[selected_Index] = e.pageIndex + 1;

        for (var i = 1; i < SP_Scrollview.controls[selected_Index].controls[0].controls.length; i++)
            SP_Scrollview.controls[selected_Index].controls[0].controls[i].image = "point.png";

        SP_Scrollview.controls[selected_Index].controls[0].controls[ItemImageIndexList[selected_Index]].image = "point_selected.png";

    }

    // Scrollview contentWidth edit
    var contentWidth = parseInt(_imageSize) * 100;
    var contentWidth_str = contentWidth.toString() + "%";
    ListSinglePageScroolView.contentWidth = contentWidth_str;

    var ListSinglePageTitle = createUIObjects.createLabel("Default");
    ListSinglePageTitle.left = "0%";
    ListSinglePageTitle.top = "32%";
    ListSinglePageTitle.width = "95%";
    ListSinglePageTitle.height = "10%";
    ListSinglePageTitle.multipleLine = true;
    ListSinglePageTitle.touchEnabled = false;
    ListSinglePageTitle.font.bold = true;
    ListSinglePageTitle.textAlignment = SMF.UI.Alignment.left;

    var ListSinglePageLine = createUIObjects.createLine("Default");
    ListSinglePageLine.left = "5%";
    ListSinglePageLine.top = "34%";
    ListSinglePageLine.width = "90%";
    ListSinglePageLine.height = "5%";

    var ListSinglePageContent = createUIObjects.createLabel("Default");
    ListSinglePageContent.left = "0%";
    ListSinglePageContent.top = "38%";
    ListSinglePageContent.width = "95%";
    ListSinglePageContent.height = "53%";
    ListSinglePageContent.multipleLine = true;
    ListSinglePageContent.touchEnabled = true;
    ListSinglePageContent.textAlignment = SMF.UI.Alignment.topLeft;

    ListSinglePageContainer.add(ListSinglePageScroolView);
    MainContainer.add(ListSinglePageContainer);
    MainContainer.add(ListSinglePageTitle);
    MainContainer.add(ListSinglePageLine);
    MainContainer.add(ListSinglePageContent);

    return MainContainer;
}