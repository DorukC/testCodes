var page_func_array = [
    function() { ListPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100) },
    function() { FormPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100) },
    function() { CodeReaderPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100) },
    function() { },
    function() { MapPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100) },
    function() { MyNotesPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false, 100) },
    function() { openTwitter() }
]

function DashboardPageCreate() {

    var page = createUIObjects.createPage("Dashboard", Dashboard_OnShow);
    page.imageFillType = SMF.UI.ImageFillType.normal;
    page.backgroundImage = "nd_usbimg.png"; 
    page.fillColor = "#01B0BE";
    page.showStatusBar = false;
    
    page.onKeyPressed = function(e){
        if (e.keyCode === 4) {
            Pages.back();
        }
    }
    
    page.onClose = function(){
         page.clear();
    }
    
    return page;
}

function Dashboard_OnShow(e) {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", lang.pgDashboardTitle);
    header.setRightItemWithImageAndListener("socialpass.png",
        function () {
        //Pages.Page1.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push,false,false,100);
        Pages.back();
    });
    header.setLeftOnlyItemImage("logodash.png");

    var imageSources = ["nd_list.png", "nd_form.png", "nd_codereader.png", "", "nd_map.png", "nd_notes.png", "nd_twitter_open.png"];
    var intervalID = setInterval(function () {
            generateDashBoardImages(imageSources);
            clearInterval(intervalID);
        }, 500);
}

var added = 0;
var topValuesArr = ["7.04%", "25.5%", "45%", "25.5%", "45%", "65%", "85%"];
var totalAnimationCounterDashboard = 0;
function generateDashBoardImages(_imgarr) {
    var objLeft = '12.03%';
    var objTop = '-50%';
    var objAlpha = 100;
    var i;
    for (i = 0; i < _imgarr.length; i++) {
        if (i < 6) {
            objTop = '-20%';
            objAlpha = 100;
            if (i > 2) {
                objleft = '68.06%';
            } else {
                objleft = '12.03%';
            }
        } else {
            objAlpha = 0;
            objTop = '85%';
            objleft = '12.03%';
        }
        var imgBtn = new SMF.UI.ImageButton({
                top : objTop,
                left : objleft,
                defaultImage : _imgarr[i],
                highlightedImage : '',
                alpha : objAlpha,
                imageFillType : SMF.UI.ImageFillType.autoSize,
                text : '',
                onPressed : page_func_array[i]
            });
        added++;
        DashboardPage.add(imgBtn);
    }
   
    startAnimation(topValuesArr);
}
function startAnimation(_valuesarr) {
    totalAnimationCounterDashboard = 0;
    var intervalID = setInterval(function () {
            if (totalAnimationCounterDashboard < _valuesarr.length) {
                runAnimatorInterval(totalAnimationCounterDashboard, _valuesarr);
                /*Pages.pgDashboard.controls[totalAnimationCounterDashboard].animate({
                    property : 'Y',
                    endValue : _valuesarr[totalAnimationCounterDashboard],
                    motionEase : SMF.UI.MotionEase.plain,
                    duration : 300,
                    onFinish : function () {
                        //do action
                    }
                });*/
               
                totalAnimationCounterDashboard++;
            } else {
                clearInterval(intervalID);
                startTwitterAlphaAnimation();
            }
        }, 50);
}
function runAnimatorInterval(_totalAnimationCounterDashboard, _valuearr) {
    var intervalID = setInterval(function () {
           DashboardPage.controls[_totalAnimationCounterDashboard].animate({
                property : 'Y',
                endValue : _valuearr[_totalAnimationCounterDashboard],
                motionEase : SMF.UI.MotionEase.plain,
                duration : 300,
                onFinish : function () {
                    //do action
                }
            });
            clearInterval(intervalID);
        }, 50);
}
function startTwitterAlphaAnimation() {
    var intervalID = setInterval(function () {
            DashboardPage.controls[6].animate({
                property : 'Alpha',
                endValue : 100,
                motionEase : SMF.UI.MotionEase.plain,
                duration : 1000,
                onFinish : function () {
                    //do your action after finishing the animation
                }
            });
            clearInterval(intervalID);
        }, 300);
}

function openTwitter(){

    var canOpen = Device.canOpenUrl("twitter://twitter.com");
    if (canOpen) {
        //first go to service and get the token. In success call the twitter app
        Application.call({
            app : "twitter://user?screen_name=smartface_io",
            data : null
        });
    } else {
        //if device cannot handle the URL, than opens the browser
        SMF.Net.browseOut("https://twitter.com/smartface_io");
    }
    
}