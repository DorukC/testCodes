var firstRun = true;
var createWebClient;
var createUIObjects;

var DashboardPage;
var ListPage;
var ListSinglePage;
var FormPage;
var RegisterPage;
var ProfilePage;
var InterestListPage;
var SingleMapViewPage;
var CodeReaderPage;
var CodeReaderActionPage;
var MapPage;
var MapDetailPage;
var RoutePage;
var MyNotesPage;
var MyNewNotePage;


var loadingDialog;

var myCurrentLat;
var myCurrentLon;
var address;

var MapPinsArray = [];

//onFirstStart Notification Controller
var ofsNotCtrl = false;
var fromRegisterorProfile = 0;
var emailorFbLogin = 0;


var shareLink;
if (Device.deviceOS == "Android") {
    shareLink = "https://play.google.com/store/apps/details?id=io.smartface.emulator";
} else {
    shareLink = "https://itunes.apple.com/us/app/smartface-in-action/id912410205";

}

function createAdmob(page) {
    var admob = new SMF.UI.AdMob({
            top : "86%",
            animated : true
        });
    admob.adSize = SMF.UI.AdMob.AdSize.banner;
    admob.adUnitId.iOS = "ca-app-pub-5615448064021602/2764524573";
    admob.adUnitId.Android = "ca-app-pub-5615448064021602/1287791372";
    page.add(admob);
    var adRequest = new SMF.UI.AdMob.AdRequest();
    admob.load(adRequest);
}

function formattedDate(date) {
    var d = new Date(date || Date.now()),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}

/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/BC.js"); //included for future BC support. Removing is not advised.
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/CreateBlogUIObjects.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/CreateWebClient.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/DashboardPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/ListPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/ListSinglePage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/InfoDialog.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/FormPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/RegisterPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/ProfilePage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/InterestListPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/CodeReaderPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/CodeReaderActionPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/SingleMapViewPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/MapPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/MapDetailPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/RoutePage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/MyNotesPage.js");
    include("https://raw.githubusercontent.com/DorukC/testCodes/master/MyNewNotePage.js");
    //      Comment following block for navigationbar/actionbar sample. Read the JS code file for usage.
    //      Also there is a part of code block in Page1, which should be copied to every page for HeaderBar usage
    load("https://raw.githubusercontent.com/DorukC/testCodes/master/HeaderBar.js");
    header = new HeaderBar();

    // OBJECTS CREATOR CLASSES
    createUIObjects = new CreateUIObjects();
    createWebClient = new CreateWebClient();
    //***********************
    
    // PAGE CRATE   
    DashboardPage = DashboardPageCreate();
    ListPage = ListPageCreate();
    ListSinglePage = ListSinglePageCreate();
    FormPage = FormPageCreate();
    RegisterPage = RegisterPageCreate();
    ProfilePage = ProfilePageCreate();
    InterestListPage = InterestListPageCreate();
    CodeReaderPage = CodeReaderPageCreate();
    CodeReaderActionPage = CodeReaderActionPageCreate();
    SingleMapViewPage = SingleMapViewPageCreate();
    MapPage = MapPageCreate();
    MapDetailPage = MapDetailPageCreate();
    RoutePage = RoutePageCreate();
    MyNotesPage = MyNotesPageCreate();
    MyNewNotePage = MyNewNotePageCreate();
    //**********************
     
  
    loadingDialog = LoadingDialogCreate();

    // GLOBAL MapPinsArray add all pin 
    getMapPins();
    
    //Uncomment following block for menu sample. Read the JS code file for usage.
    /*
    load("https://raw.githubusercontent.com/DorukC/testCodes/master/Menu.js");
     */

}

Data.execute("DROP TABLE IF EXISTS interesttable;");
Data.execute("Create table interesttable (interestName String, image String, fontColor String)");

Data.execute("insert into interesttable values('Sports','','#999999');");
Data.execute("insert into interesttable values('Photography','','#999999');");
Data.execute("insert into interesttable values('Traveling','','#999999');");
Data.execute("insert into interesttable values('Reading','','#999999');");
Data.execute("insert into interesttable values('Music','list_check.png','#057AFB');");
Data.execute("insert into interesttable values('Dancing','','#999999');");
Data.execute("insert into interesttable values('Internet','','#999999');");
Data.execute("insert into interesttable values('Movies','list_check.png','#057AFB');");
Data.execute("insert into interesttable values('Fitness','','#999999');");
                      
Data.dynamicDS = new Data.Dataset({
        selectQuery : "select * from interesttable"
    });
Data.dynamicDS.refresh();



Data.execute("DROP TABLE IF EXISTS mynotestable;");
Data.execute("Create table mynotestable (text String)");

Data.execute("insert into mynotestable values('Note 1');");
Data.execute("insert into mynotestable values('Note 2');");
Data.execute("insert into mynotestable values('Note 3');");
Data.execute("insert into mynotestable values('Note 4');");
Data.execute("insert into mynotestable values('Note 5');");

Data.dynamicDS_notes = new Data.Dataset({
        selectQuery : "select * from mynotestable"
    });
Data.dynamicDS_notes.refresh();
    
    



var findLocate = true;
Device.setGPSStatus(1);
//take user's location while changing
function Global_Events_OnLocationChanged(e) {

    if (findLocate) {
        myCurrentLat = e.lat;
        myCurrentLon = e.lng;
        SMF.Map.lookupAddress(Number(myCurrentLat), Number(myCurrentLon),
            function (e) {
                address = e.results[0].addressValue;
                findLocate = false;      
                mapLabel.text = address;
                map.centerLatitude = myCurrentLat;
                map.centerLongitude = myCurrentLon;
            },
            
            function (e) {}
        );
    }
    if(findLocate == false){
        //After taking longitude, latitude Close gps to save battery
        Device.setGPSStatus(0);
    }
    
    
}




function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        //change the following code for desired generic error messsage
        alert({
            title : lang.applicationError,
            message : e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
        });
        break;
    }
}

(function () {
    var replacer = /\x26((\x23(\d+))|(\w+))\x3B/gm;
    var hex = ["0022", "0026", "003C", "003E", "00A0", "00A1", "00A2", "00A3", "00A4", "00A5", "00A6", "00A7", "00A8", "00A9", "00AA", "00AB", "00AC", "00AD", "00AE", "00AF", "00B0", "00B1", "00B2", "00B3", "00B4", "00B5", "00B6", "00B7", "00B8", "00B9", "00BA", "00BB", "00BC", "00BD", "00BE", "00BF", "00C0", "00C1", "00C2", "00C3", "00C4", "00C5", "00C6", "00C7", "00C8", "00C9", "00CA", "00CB", "00CC", "00CD", "00CE", "00CF", "00D0", "00D1", "00D2", "00D3", "00D4", "00D5", "00D6", "00D7", "00D8", "00D9", "00DA", "00DB", "00DC", "00DD", "00DE", "00DF", "00E0", "00E1", "00E2", "00E3", "00E4", "00E5", "00E6", "00E7", "00E8", "00E9", "00EA", "00EB", "00EC", "00ED", "00EE", "00EF", "00F0", "00F1", "00F2", "00F3", "00F4", "00F5", "00F6", "00F7", "00F8", "00F9", "00FA", "00FB", "00FC", "00FD", "00FE", "00FF", "20AC"];
    var name = ["&quot;", "&amp;", "&lt;", "&gt;", "&nbsp;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&not;", "&shy;", "&reg;", "&macr;", "&deg;", "&plusmn;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&raquo;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&euro;"];
    var pad = function (num, size) {
        var s = String(num);
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    };
    htmlReplace = function (originalText) {
        return originalText.replace(replacer, function () {
            var numCode = Number(arguments[3]);
            if (!isNaN(numCode)) {
                return eval("'\\u" + pad(numCode.toString(16), 4) + "'");
            } else {
                var match = hex[name.indexOf(arguments[0])];
                if (match) {
                    return eval("'\\u" + pad(match, 4) + "'");
                } else {
                    return " ";
                }
            }
        });
    };
})()

/// NOTIFICATION
//local notification
var localNotification1;
var localNotification2;
//since android and ios required different parameters for local notification
var isAndroid = false;
function localNotification() {
    if (Device.deviceOS == 'iOS') {
        isAndroid = false;
        localNotification1 = new Notifications.LocalNotification({
                fireDate : new Date(),
                alertBody : lang.notificationMsg,
                launchImage : "icon.png",
                userInfo : {
                    "key" : "value"
                },
                applicationIconBadgeNumber : Application.applicationIconBadgeNumber + 1,
                hasAction : true,
                repeatInterval : notTime,
                onReceivedNotification : function (e) {
                    //alert(lang.notificationMsg);
                }
            });
    } else {
        isAndroid = true;
        localNotification2 = new Notifications.LocalNotification({
                fireDate : new Date(),
                alertTitle : "Smartface", // Android only
                alertBody : lang.notificationMsg,
                userInfo : {
                    "key" : "value"
                },
                launchImage : "icon.png",
                //sound:"notifsound.mp3",
                smallIcon : "icon.png", // Android only
                autoCancel : true, // Android only
                number : 1, // Android only
                when : new Date(),
                usesChronometer : false,
                subText : lang.notificationSubtext,
                priority : 1,
                id : 001,
                repeatInterval : notTime
            });
    }
}
//disable local notification
function disableNotification() {
    if (Device.deviceOS == 'iOS') {
        Notifications.local.cancelNotification(localNotification1);
        Notifications.local.applicationIconBadgeNumber = 0;
        /* var not = Notifications.local.scheduledNotifications();
        var i;
        for (i = 0; i < not.length; i++)
        Notifications.local.cancelNotification(not[i]);*/
    } else {
        Notifications.local.cancelNotification(localNotification2);
    }
    //alert(lang.notificationCancel);

}

//if you want to give alert inApp as notification
function Global_Events_OnReceivedNotification(e) {
    //alert(lang.notificationMsg);
}

var myNot = [];
var selectedIndex = 0;

function notPicker(_isAndroid) {
    //local notifications picker items
    myNot = [lang.notificationDay, lang.notificationWeek, lang.notificationMonth];
    pick(
        myNot,
        selectedIndex,
        function (e) {
        selectedIndex = e.index;
        //OnceADay
        if (selectedIndex == 0) {
            notTime = Notifications.CalendarUnit.day;
        }
        //OnceAWeek
        else if (selectedIndex == 1) {
            notTime = Notifications.CalendarUnit.weekday;
        }
        //OnceAMonth
        else if (selectedIndex == 2) {
            notTime = Notifications.CalendarUnit.month;
        }
        localNotification();
        if (_isAndroid) {
            Notifications.local.scheduleNotification(localNotification2);
        } else {
            Notifications.local.scheduleNotification(localNotification1);
        }

    },
        function () {
        //Cancel
        allowNotifySwitch.checked = false;
        ProfileAllowNotifySwitch.checked = false;
    },
        0,
        0);
}
/**
* Triggered after application is started first time.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.Net.Events
*/
function Global_Events_OnFirstStart(e){
    ofsNotCtrl = true; 
}

//validating given mail is proper or not
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


//******************* IMAGE *************************
var imageFileProfile;
var imageFileRegister;
var base64StringDataForRegisterImage = '';
var didImageChanged = false;

function takeCropImage(isFromCapture) {
    if (isFromCapture) {
        SMF.Multimedia.startCamera({
            cameraType : 0,
            resolution : 2,
            autoFocus : true,
            onStart : function () {},
            onCapture : function (e) {
                SMF.UI.cropImage({
                    imageUri : e.photoUri,
                    options : {
                        aspectX : 1,
                        aspectY : 1,
                        outputX : 500,
                        outputY : 500,
                    },
                    onSuccess : function (e) {
                        var ph_width = e.width;
                        var ph_height = e.height;
                        var im = new SMF.Image({
                                imageUri : e.imageUri,
                                onSuccess : function (e) {
                                    im.resize({
                                        width : ph_width,
                                        height : ph_height,
                                        format : SMF.ImageFormat.PNG,
                                        onSuccess : function (e) {
                                            didImageChanged = true;
                                            if (fromRegisterorProfile == 1) {
                                               ProfileImage.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileProfile = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileProfile = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            } else {
                                                imageProfileRegister.image = e.image;
                                                var blob = new Blob(e.image);
                                                base64StringDataForRegisterImage = blob.toBase64String();
                                                
                                                if (Device.deviceOS == "Android") {
                                                    imageFileRegister = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileRegister = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            }
                                        },
                                        onError : function (e) {
                                            //alert("Error: " + e.message);
                                        }
                                    });
                                },
                                onError : function (e) {
                                    //alert("Error: " + e.message);
                                }
                            });
                    },
                    onError : function (e) {
                        //alert("Error: " + e.message);
                    },
                    onCancel : function (e) {}
                });
            },
            onCancel : function () {},
            onFailure : function () {}
        });
    } else {
        Device.Media.pickFromGallery({
            type : [SMF.MediaType.image],
            onSuccess : function (e) {
                SMF.UI.cropImage({
                    imageUri : e.file,
                    options : {
                        aspectX : 1,
                        aspectY : 1,
                        outputX : 500,
                        outputY : 500,
                    },
                    onSuccess : function (e) {
                        var ph_width = e.width;
                        var ph_height = e.height;
                        var img = new SMF.Image({
                                imageUri : e.imageUri,
                                onSuccess : function (e) {
                                    img.resize({
                                        width : ph_width,
                                        height : ph_height,
                                        format : SMF.ImageFormat.PNG,
                                        onSuccess : function (e) {
                                            didImageChanged = true;
                                            if (fromRegisterorProfile == 1) {
                                                ProfileImage.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileProfile = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileProfile = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            } else {
                                                imageProfileRegister.image = e.image;
                                                if (Device.deviceOS == "Android") {
                                                    imageFileRegister = new SMF.IO.File(e.image);
                                                } else {
                                                    imageFileRegister = new SMF.IO.File(SMF.IO.applicationDataDirectory, e.image);
                                                }
                                            }
                                        },
                                        onError : function (e) {
                                            //alert("Error: " + e.message);
                                        }
                                    });
                                },
                                onError : function (e) {
                                    //alert("Error: " + e.message);
                                }
                            });
                    },
                    onError : function (e) {
                        //alert("Error: " + e.message);
                    },
                    onCancel : function (e) {}
                });
            },
            onCancel : function (e) {},
            onError : function (e) {
                //alert(lang.applicationError);
            }
        });
    }
}


function getMapPins(){

    var mapClient = createWebClient.createWebClient_GET("http://services.smartface.io/SmartfaceInAction/Maps",function(e){
        var parsedResponse = JSON.parse(this.responseText);
        MapPinsArray = parsedResponse.pins;
    }); 
    mapClient.run(true);

}