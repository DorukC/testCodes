var NewNoteEditBox;
var NewNoteScrollView;
var MySelectedNote = 0;

function MyNewNotePageCreate() {
    var page = createUIObjects.createPage("MyNewNotePageCreate", MyNewNotePage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;

    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    NewNoteScrollView = createUIObjects.createScrollView2();
    page.add(NewNoteScrollView);
    NewNoteScrollView.left = "0%";
    NewNoteScrollView.top = "0%";
    NewNoteScrollView.width = "100%";
    NewNoteScrollView.height = "100%";
    NewNoteScrollView.contentHeight = "100%";
    NewNoteScrollView.contentWidth = "100%";
    NewNoteScrollView.touchEnabled = true;
    NewNoteScrollView.enableVerticalScrolling = true;

    NewNoteEditBox = createUIObjects.createEditBox();
    NewNoteScrollView.add(NewNoteEditBox);
    NewNoteEditBox.left = "1.41%";
    NewNoteEditBox.top = "2%";
    NewNoteEditBox.width = "97%";
    NewNoteEditBox.height = "54.93%";
    NewNoteEditBox.fontColor = "#7A7A7A";
    NewNoteEditBox.multipleLine = true;
    NewNoteEditBox.textAlignment = SMF.UI.TextAlignment.top | SMF.UI.TextAlignment.left;
    NewNoteEditBox.enableClearButton = false;

    NewNoteEditBox.onExit = function (e) {
        this.height = '96%';
    }

    NewNoteEditBox.onEnter = function (e) {
        this.height = '54.93%';
    }

    return page;
}

function MyNewNotePage_OnShow() {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", lang.comments);

    header.setRightItemText(lang.done,
        function () {
        if (MySelectedNote != -1) {
            Data.dynamicDS_notes.seek(MySelectedNote);
            Data.dynamicDS_notes.text = NewNoteEditBox.text;
        } else {
            Data.dynamicDS_notes.add();
            Data.dynamicDS_notes.text = NewNoteEditBox.text;
        }
        Data.dynamicDS_notes.commit();
        Data.notify("Data.dynamicDS_note");
        MyNotesRepeatBox.refresh();
        Pages.back();
    });

    header.setLeftItem(
        function () {

        Pages.back();
    });

    if (MySelectedNote != -1) {
        Data.dynamicDS_notes.seek(MySelectedNote);
        NewNoteEditBox.text = Data.dynamicDS_notes.text;
    } else {
        NewNoteEditBox.text = "";
    }

    NewNoteEditBox.returnKeyType = SMF.UI.ReturnKeyType.default;
    NewNoteEditBox.focus();

}
