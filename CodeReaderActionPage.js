var CodeReaderType;
var CodeReaderHeaderTitle;

var MyCodeReader;

function CodeReaderActionPageCreate() {
    var page = createUIObjects.createPage("CodeReaderActionPage", CodeReaderActionPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;
    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }

    MyCodeReader = createUIObjects.createCodeReader();
    page.add(MyCodeReader);
    MyCodeReader.top = "0%";
    MyCodeReader.left = "0%";
    MyCodeReader.width = "100%";
    MyCodeReader.height = "100%";

    return page;
}

function CodeReaderActionPage_OnShow() {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", CodeReaderHeaderTitle);

    header.setRightItemWithImageAndListener("transparent.png",
        function () {});

    header.setLeftItem(
        function () {

        Pages.back();
    });

    switch (CodeReaderType) {
    case 0:
        MyCodeReader.readCode(SMF.UI.CodeType.qr, function () {
            alert(MyCodeReader.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    case 1:
        MyCodeReader.readCode(SMF.UI.CodeType.linear, function () {
            alert(MyCodeReader.value);
        }, function () {
            alert("Failed to read code")
        });
        break;
    case 2:
        MyCodeReader.readCode(SMF.UI.CodeType.dataMatrix, function () {
            alert(MyCodeReader.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    default:
        MyCodeReader.readCode(SMF.UI.CodeType.qr, function () {
            alert(MyCodeReader.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    }

}

var urlValidatorRegex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var phoneNumberValidatorRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
var emailValidatorRegex = /^(([^<>()[\]\\.,; :\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function codeHandler(txt) {
    if (urlValidatorRegex.test(txt)) {
        //SMF.Net.browseOut(txt);
        //alert(txt);
    } else if (phoneNumberValidatorRegex.test(txt)) {
        Device.makeCall(txt);
    } else if (emailValidatorRegex.test(txt)) {
        SMF.Net.sendMail({
            to : txt,
            cc : "",
            bcc : "",
            title : "Smartface",
            body : "Smartface In Action",
            attachment : "",
            onSuccess : function () {
                //alert("success");
            },
            onFailure : function () {
                //alert("failure");
            }
        });
    } else {
        //alert(txt);
    }
}