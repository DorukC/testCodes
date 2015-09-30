var MyNotesRepeatBox;
var first_run_MyNotes = true;

function MyNotesPageCreate() {
    var page = createUIObjects.createPage("MyNotesPageCreate", MyNotesPageCreate_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    return page;
}

function MyNotesPageCreate_OnShow() {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", lang.comments);

    header.setRightItemText(lang.add,
        function () {
        MySelectedNote = -1;
        MyNewNotePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);
    });

    header.setLeftItem(
        function () {

        Pages.back();
    });

    if (first_run_MyNotes) {
        first_run_MyNotes = false;

        var lbl = new SMF.UI.Label({
                top : "0%",
                left : "2.66%",
                width : "87.34%",
                height : "100%",
                fillColor : "#FFFFFF",
                textAlignment : SMF.UI.Alignment.topLeft
            });
        lbl.touchEnabled = false;

        var img = createUIObjects.createImage("Image");
        img.left = "90%";
        img.top = "0%";
        img.width = "10%";
        img.height = "100%";
        img.enableCache = false;
        img.touchEnabled = false;
        img.imageFillType = SMF.UI.ImageFillType.normal;
        img.image = "arrow.png";

        var line = createUIObjects.createLine();
        line.left = "2.03%";
        line.top = "97%";
        line.width = "96%";
        line.height = "3%";
        line.borderColor = "#CACACA";
        line.borderWidth = 1;

        MyNotesRepeatBox = new SMF.UI.RepeatBox({
                name : "repeatBox1",
                width : "100%",
                height : "100%",
                left : "0%",
                top : "0%",
                dataSource : Data.dynamicDS_notes,
                showScrollbar : true,
                fillColor : "white",
                backgroundTransparent : true,
                onRowRender : function (e) {
                    Data.dynamicDS_notes.seek(e.rowIndex);
                    this.controls[0].text = Data.dynamicDS_notes.text;
                },
                onSelectedItem : function (e) {
                    MySelectedNote = e.rowIndex;
                    MyNewNotePage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100);

                }

            });
        MyNotesRepeatBox.itemTemplate.height = Device.screenHeight / 12 ;
        MyNotesRepeatBox.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
        MyNotesRepeatBox.borderWidth = 0;


        MyNotesRepeatBox.itemTemplate.add(lbl);
        MyNotesRepeatBox.itemTemplate.add(img);
        MyNotesRepeatBox.itemTemplate.add(line);

        MyNotesPage.add(MyNotesRepeatBox);

        MyNotesRepeatBox.refresh();

    }
}
