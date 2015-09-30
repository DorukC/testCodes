function CreateUIObjects() {
    this.createPage = function (_name, _onShow) {
        var page = new SMF.UI.Page({
                name : _name,
                onShow : _onShow,
                onKeyPress : function (e) {
                    if (e.keyCode === 4) {
                        Pages.back();
                    }
                }
            });
        return page;
    }
    this.createSliderDrawer = function (_name, _parent, _listener) {
        var sliderDrawer = new SMF.UI.SliderDrawer({
                width : '28%',
                name : _name,
                visible : true,
                backgroundColor : "#333333",
                position : SMF.UI.SliderDrawerPosition.left
                /*
                onShow : function (e) {
                if (Device.deviceOS == 'iOS') {
                var leftItem = new SMF.UI.iOS.BarButtonItem({
                image : "menuyan.png",
                onSelected : _listener
                });
                _parent.navigationItem.leftBarButtonItems = [leftItem];
                } else {
                _parent.actionBar.displayHomeAsUpEnabled = false;
                _parent.actionBar.displayShowHomeEnabled = true;
                _parent.actionBar.icon = "menuyan.png";
                _parent.actionBar.onHomeIconItemSelected = _listener;
                }
                },
                onHide : function (e) {
                if (Device.deviceOS == 'iOS') {
                var leftItem = new SMF.UI.iOS.BarButtonItem({
                image : "menu.png",
                onSelected : _listener
                });
                _parent.navigationItem.leftBarButtonItems = [leftItem];
                } else {
                _parent.actionBar.displayHomeAsUpEnabled = false;
                _parent.actionBar.displayShowHomeEnabled = true;
                _parent.actionBar.icon = "menu.png";
                _parent.actionBar.onHomeIconItemSelected = _listener;
                }
                }*/
            });
        return sliderDrawer;
    }

    this.createLabel = function (_name) {
        var label = new SMF.UI.Label({
                name : _name,
                width : '10%',
                height : '10%',
                top : '10',
                left : '10',
                backgroundTransparent : true,
                roundedEdge : 0,
                text : ''
            });
        return label;
    }
    this.createContainer = function (_name) {
        var container = new SMF.UI.Container({
                name : _name,
                width : 0,
                height : 0,
                top : 0,
                left : 0,
            });
        return container;
    }

    this.createImageButton = function (_name, _image, _highlighted_image, _onPressed) {
        var imageButton = new SMF.UI.ImageButton({
                width : 0,
                height : 0,
                top : 0,
                left : 0,
                text : "",
                defaultImage : _image,
                highlightedImage : _highlighted_image,
                imageFillType : SMF.UI.ImageFillType.stretch,
                onPressed : _onPressed
            });
        return imageButton;
    }

    this.createImage = function (_name) {
        var image = new SMF.UI.Image({
                name : _name,
                width : "100%",
                left : 0,
                height : 2,
                top : 0,
                image : "cizgi.png",
                enableCache : false
            });
        return image;
    }

    this.createImage = function () {
        var image = new SMF.UI.Image({
                width : "100%",
                left : 0,
                height : 2,
                top : 0,
                image : "cizgi.png",
                enableCache : false
            });
        return image;
    }

    this.createImageForSlider = function (_name, _top, _image, _listener) {
        var image = new SMF.UI.Image({
                name : _name,
                width : "100%",
                left : "0%",
                height : "17%",
                top : _top,
                image : _image,
                imageFillType : SMF.UI.ImageFillType.stretch,
                enableCache : false,
                touchEnabled : true,
                onTouch : _listener
            });
        return image;
    }

    this.createRepeatBox = function (_name, _dataSource, _onSelectedItem, _onRowRender, _onPullUpBlog, _onPullDown) {
        var repeatBox = new SMF.UI.RepeatBox({
                name : _name,
                width : '100%',
                height : '100%',
                left : 0,
                top : 0,
                backgroundTransparent : false,
                borderWidth : 1,
                useActiveItem : false,
                showScrollbar : true,
                autoSize : false,
                touchEnabled : true,
                onSelectedItem : _onSelectedItem,
                enableScroll : true,
                backgroundTransparent : true,
                fillColor : "#3B3B3B",
                enablePullUpToRefresh : true,
                enablePullDownToRefresh : false,
                dataSource : _dataSource,
                onRowRender : _onRowRender,
                onPullUp : _onPullUpBlog,
                onPullDown : _onPullDown
            });
        repeatBox.itemTemplate.height = Device.screenHeight / 7;
        repeatBox.pullUpItem.height = "8%";

        return repeatBox;
    }
    this.createScrollView = function (_name, _width, _height, _left, _top, contentWidth, contentHeight, autosize) {
        var scrollView = new SMF.UI.ScrollView({
                name : _name,
                width : _width,
                height : _height,
                left : _left,
                top : _top,
                borderWidth : 0,
                contentWidth : contentWidth,
                contentHeight : contentHeight,
                touchEnabled : true,
                roundedEdge : 0,
                verticalGap : 5,
                horizontalGap : 0,
                autoSize : autosize
            });
        return scrollView;
    }
    this.createScrollView2 = function (_name) {
        var scrollView = new SMF.UI.ScrollView({
                name : _name,
                width : 0,
                height : 0,
                left : 0,
                top : 0,
                borderWidth : 0,
                contentWidth : 0,
                contentHeight : 0,
                touchEnabled : true,
                roundedEdge : 0,
                verticalGap : 5,
                horizontalGap : 0,
            });
        return scrollView;
    }

    this.createLine = function () {
        var line = new SMF.UI.Line({
                width : '10%',
                height : '10%',
                top : '10',
                left : '10',
            });
        return line;
    }

    this.createActivityIndicator = function (_name, _left, _top, style) {
        var activityIndicator = new SMF.UI.ActivityIndicator({
                name : _name,
                left : _left,
                top : _top,
                style : style
            });
        return activityIndicator;
    }

    this.createDialog = function (_name) {
        var dialog = new SMF.UI.Dialog({
                name : _name,
                width : '100%',
                height : '100%',
                top : 0,
                left : 0,
                fillColor : '#BBBBBB',
                backgroundTransparent : true,

                onShow : function (e) {}
            });
        return dialog;
    }

    this.createRect_forDialog = function () {
        var rect = new SMF.UI.Rectangle({
                width : '100%',
                height : '100%',
                top : 0,
                left : 0,
                fillColor : '#222222',
                backgroundTransparent : true
            });
        return rect;
    }

    this.createEditBox = function () {
        var edtBox = new SMF.UI.EditBox({
                width : '100%',
                height : '100%',
                top : 0,
                left : 0
            });
        return edtBox;
    }

    this.createTextButton = function () {

        var textButton = new SMF.UI.TextButton({
                width : '100%',
                height : '100%',
                top : 0,
                left : 0
            });
        return textButton;

    }

    this.createMap = function () {
        var map = new SMF.UI.MapView({
                top : "10%",
                left : "10%",
                showUserLocation : false,
                routeLineColor : "blue",
                routeLineWidth : 10
            });
        return map;
    }

    this.createSwitch = function () {
        var Switch = new SMF.UI.SwitchButton({
                top : 0,
                left : 0
            });
        return Switch;
    }

    this.createSlider = function () {
        var slider = new SMF.UI.Slider({
                width : '100%',
                height : '100%',
                top : 0,
                left : 0
            });
        return slider;
    }

    this.createCodeReader = function () {
        var reader = new SMF.UI.CodeReader({
                width : '100%',
                height : '100%',
                top : 0,
                left : 0
            });
        return reader;
    }

}