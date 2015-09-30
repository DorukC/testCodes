var repeatbox_Interest;
var first_run_interest = true;
var infoDialog_Interest;

function InterestListPageCreate() {
    var page = createUIObjects.createPage("InterestListPage", InterestListPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    return page;
}

function InterestListPage_OnShow() {
    header.initWithTitleAndBackground(this, "form_header.png", "#000000", "Interest");
    header.setRightItemWithImageAndListener("info.png",
        function () {
        infoDialog_Interest.show();
    });

    header.setLeftItem(
        function () {
        Pages.back();
    });

    if (first_run_interest) {
        first_run_interest = false;

        var lbl = new SMF.UI.Label({
                top : "0%",
                left : "5%",
                width : "70%",
                height : "100%",
                fillColor : "#FFFFFF",
                textAlignment : SMF.UI.Alignment.topLeft
            });
        lbl.touchEnabled = false;

        var img = createUIObjects.createImage("Image");
        img.left = "87.81%";
        img.top = "35.51%";
        img.width = "4.69%";
        img.height = "28.04%";
        img.enableCache = false;
        img.touchEnabled = false;
        img.imageFillType = SMF.UI.ImageFillType.stretch;

        var repeatBox1 = new SMF.UI.RepeatBox({
                name : "repeatBox1",
                width : "100%",
                height : "100%",
                left : "0%",
                top : "0%",
                dataSource : Data.dynamicDS,
                showScrollbar : true,
                fillColor : "white",
                backgroundTransparent : true,
                onRowRender : function (e) {
                    Data.dynamicDS.seek(e.rowIndex);
                    this.controls[0].text = Data.dynamicDS.interestName;
                    this.controls[0].fontColor = Data.dynamicDS.fontColor;
                    this.controls[1].image = Data.dynamicDS.image;
                },
                onSelectedItem : function (e) {
                    Data.dynamicDS.seek(e.rowIndex);
                    if (Data.dynamicDS.image == "") {
                    
                        Data.dynamicDS.image = "list_check.png";
                        Data.dynamicDS.fontColor = "#057AFB";
                    } else {
                    
                        Data.dynamicDS.fontColor = "#999999";
                        Data.dynamicDS.image = "";
                    }
                
                    Data.notify("Data.dynamicDS");
                    repeatBox1.refresh();
                }
            });
        repeatBox1.itemTemplate.height = Device.screenHeight / 10;
        repeatBox1.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;

        repeatBox1.itemTemplate.add(lbl);
        repeatBox1.itemTemplate.add(img);

        InterestListPage.add(repeatBox1);

        repeatBox1.refresh();

        infoDialog_Interest = InfoDialog_InterestPage();
    }
}