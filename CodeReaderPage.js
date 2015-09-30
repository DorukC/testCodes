function CodeReaderPageCreate() {
    var page = createUIObjects.createPage("CodeReaderPage", CodeReaderPage_OnShow);
    page.fillColor = "#FFFFFF";
    page.showStatusBar = false;
    page.backgroundImage = "code_reader_bg.png";
    page.onKeyPressed = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }


    var MainContainer = createUIObjects.createContainer("MainContainer");     
    MainContainer.top = "11.67%";
    MainContainer.left = "1%";
    MainContainer.width = "98%";
    MainContainer.height = "30%";
    MainContainer.borderWidth = 0;
    MainContainer.verticalGap = 1;
    MainContainer.horizontalGap = 0;

    // QR BUTTON
    var Qr_Reader_Container = createUIObjects.createContainer("Qr_Reader_Container"); 
    MainContainer.add(Qr_Reader_Container);
    Qr_Reader_Container.top = "0%";
    Qr_Reader_Container.left = "0%";
    Qr_Reader_Container.width = "100%";
    Qr_Reader_Container.height = "33%";
    Qr_Reader_Container.borderWidth = 0;
    Qr_Reader_Container.backgroundTransparent = true;
    Qr_Reader_Container.touchEnabled = true;
    Qr_Reader_Container.onTouchEnded = QRButton_OnTouchEnded;
    
    var Qr_Backgrond_Rect = createUIObjects.createRect_forDialog();
    Qr_Reader_Container.add(Qr_Backgrond_Rect);
    Qr_Backgrond_Rect.top = "0%";
    Qr_Backgrond_Rect.left = "0%";
    Qr_Backgrond_Rect.width = "100%";
    Qr_Backgrond_Rect.height = "100%";
    Qr_Backgrond_Rect.borderWidth = 0;
    Qr_Backgrond_Rect.backgroundTransparent = false;
    Qr_Backgrond_Rect.alpha = "30%";
    Qr_Backgrond_Rect.fillColor = "#000000";
    
    var QrLabel = createUIObjects.createLabel("QrLabel");
    Qr_Reader_Container.add(QrLabel);
    QrLabel.top = "0%";
    QrLabel.left = "0%";
    QrLabel.width = "80%";
    QrLabel.height = "100%";
    QrLabel.borderWidth = 0;
    QrLabel.backgroundTransparent = true;
    QrLabel.text = "Qr Code Reader";
    QrLabel.fontColor = "#FFFFFF";
    
    var QrImage = createUIObjects.createImage("QrImage");
    Qr_Reader_Container.add(QrImage);
    QrImage.top = "0%";
    QrImage.left = "80%";
    QrImage.width = "20%";
    QrImage.height = "100%";
    QrImage.image = "arrow.png";
    QrImage.imageFillType = SMF.UI.ImageFillType.normal;
    //****************************
    
    //LINEAR BUTTON
    var Linear_Reader_Container = createUIObjects.createContainer("Linear_Reader_Container"); 
    MainContainer.add(Linear_Reader_Container);
    Linear_Reader_Container.top = "34%";
    Linear_Reader_Container.left = "0%";
    Linear_Reader_Container.width = "100%";
    Linear_Reader_Container.height = "33%";
    Linear_Reader_Container.borderWidth = 0;
    Linear_Reader_Container.backgroundTransparent = true;
    Linear_Reader_Container.onTouchEnded = Linear_Reader_OnTouchEnded;
    
    var Linear_Backgrond_Rect = createUIObjects.createRect_forDialog();
    Linear_Reader_Container.add(Linear_Backgrond_Rect);
    Linear_Backgrond_Rect.top = "0%";
    Linear_Backgrond_Rect.left = "0%";
    Linear_Backgrond_Rect.width = "100%";
    Linear_Backgrond_Rect.height = "100%";
    Linear_Backgrond_Rect.borderWidth = 0;
    Linear_Backgrond_Rect.backgroundTransparent = false;
    Linear_Backgrond_Rect.alpha = "30%";
    Linear_Backgrond_Rect.fillColor = "#000000";
    
    var LinearLabel = createUIObjects.createLabel("LinearLabel");
    Linear_Reader_Container.add(LinearLabel);
    LinearLabel.top = "0%";
    LinearLabel.left = "0%";
    LinearLabel.width = "80%";
    LinearLabel.height = "100%";
    LinearLabel.borderWidth = 0;
    LinearLabel.backgroundTransparent = true;
    LinearLabel.text = "Linear Code Reader";
    LinearLabel.fontColor = "#FFFFFF";
    
    var LinearImage = createUIObjects.createImage("LinearImage");
    Linear_Reader_Container.add(LinearImage);
    LinearImage.top = "0%";
    LinearImage.left = "80%";
    LinearImage.width = "20%";
    LinearImage.height = "100%";
    LinearImage.image = "arrow.png";
    LinearImage.imageFillType = SMF.UI.ImageFillType.normal;
    //***************************

    //DATAMATRIX BUTTON
    var DataMatrix_Reader_Container = createUIObjects.createContainer("DataMatrix_Reader_Container"); 
    MainContainer.add(DataMatrix_Reader_Container);
    DataMatrix_Reader_Container.top = "68%";
    DataMatrix_Reader_Container.left = "0%";
    DataMatrix_Reader_Container.width = "100%";
    DataMatrix_Reader_Container.height = "33%";
    DataMatrix_Reader_Container.borderWidth = 0;
    DataMatrix_Reader_Container.backgroundTransparent = true;
    DataMatrix_Reader_Container.onTouchEnded = DataMatrix_OnTouchEnded;
    
    var DataMatrix_Backgrond_Rect = createUIObjects.createRect_forDialog();
    DataMatrix_Reader_Container.add(DataMatrix_Backgrond_Rect);
    DataMatrix_Backgrond_Rect.top = "0%";
    DataMatrix_Backgrond_Rect.left = "0%";
    DataMatrix_Backgrond_Rect.width = "100%";
    DataMatrix_Backgrond_Rect.height = "100%";
    DataMatrix_Backgrond_Rect.borderWidth = 0;
    DataMatrix_Backgrond_Rect.backgroundTransparent = false;
    DataMatrix_Backgrond_Rect.alpha = "30%";
    DataMatrix_Backgrond_Rect.fillColor = "#000000";
    
    var DataMatrixLabel = createUIObjects.createLabel("DataMatrixLabel");
    DataMatrix_Reader_Container.add(DataMatrixLabel);
    DataMatrixLabel.top = "0%";
    DataMatrixLabel.left = "0%";
    DataMatrixLabel.width = "80%";
    DataMatrixLabel.height = "100%";
    DataMatrixLabel.borderWidth = 0;
    DataMatrixLabel.backgroundTransparent = true;
    DataMatrixLabel.text = "Data Matrix Reader";
    DataMatrixLabel.fontColor = "#FFFFFF";
    
    var DataMatrixImage = createUIObjects.createImage("DataMatrixImage");
    DataMatrix_Reader_Container.add(DataMatrixImage);
    DataMatrixImage.top = "0%";
    DataMatrixImage.left = "80%";
    DataMatrixImage.width = "20%";
    DataMatrixImage.height = "100%";
    DataMatrixImage.image = "arrow.png";
    DataMatrixImage.imageFillType = SMF.UI.ImageFillType.normal;
    //*******************
    
    page.add(MainContainer);
    return page;
}

function CodeReaderPage_OnShow() {

    header.initWithTitleAndBackground(this, "list_header.png", "#000000", "Code Reader");
    
    header.setRightItemWithImageAndListener("transparent.png",
        function () {
        
    });

    header.setLeftItem(
        function () {
      
        Pages.back();
    });


}

function QRButton_OnTouchEnded(e){
    CodeReaderType = 0;
    CodeReaderHeaderTitle = "QR Code Reader";
    CodeReaderActionPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}

function Linear_Reader_OnTouchEnded(e){
    CodeReaderType = 1;
    CodeReaderHeaderTitle = "Linear Code Reader";
    CodeReaderActionPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}

function DataMatrix_OnTouchEnded(e){
    CodeReaderType = 2;
    CodeReaderHeaderTitle = "Data Matrix Code Reader";
    CodeReaderActionPage.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
