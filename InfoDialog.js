function InfoDialog_Template() {

    var dialog = createUIObjects.createDialog("InfoDialog");
    
    var closeButton = createUIObjects.createImageButton("dialog_Close", "closer.png", "closer.png", 
    function(e){ // Close button onclick listener       
        dialog.close();            
    });
    
    closeButton.top = "5%";
    closeButton.left = "47%";
    closeButton.width = "7%";
    closeButton.height = "5%";
    
    var rectBackground = createUIObjects.createContainer("rectBackground");
    rectBackground.top = "0%";
    rectBackground.left = "0%";
    rectBackground.width = "100%";
    rectBackground.height = "100%";
    rectBackground.fillColor = "#222222";
    rectBackground.backgroundTransparent = false;
    rectBackground.alpha = "90%";
    rectBackground.borderWidth = 0;
    
    var bottomImage = createUIObjects.createImage("info");
    bottomImage.top = "72%";
    bottomImage.left = "0%";
    bottomImage.width = "100%";
    bottomImage.height = "25%";
    bottomImage.image = "info_logo.png";
    bottomImage.imageFillType = SMF.UI.ImageFillType.normal;
    
    dialog.add(rectBackground);
    dialog.add(closeButton);
    dialog.add(bottomImage);
    
    return dialog;

}

function InfoDialog_ListPage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("listview_info2.png",lang.listView1);
    item1.top = "3%";
    var item2 = createItem("listview_info.png",lang.listView2); 
    item2.top = "23%";
    var item3 = createItem("listline_info2.png",lang.listView3); 
    item3.top = "43%";
    
    itemCont.add(item1);
    itemCont.add(item2);
    itemCont.add(item3);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_ListSinglePage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("listsquare_info1.png",lang.listSquare1);
    item1.top = "3%";
    var item2 = createItem("listline_info1.png",lang.listLine1); 
    item2.top = "23%";
    var item3 = createItem("listline_info2.png",lang.listLine2); 
    item3.top = "43%";
    
    itemCont.add(item1);
    itemCont.add(item2);
    itemCont.add(item3);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_FormPage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("formana_info3.png",lang.formMain1);
    item1.top = "3%";
    var item2 = createItem("formana_info2.png",lang.formMain2); 
    item2.top = "23%";
    var item3 = createItem("formana_info1.png",lang.formMain3); 
    item3.top = "43%";
    
    itemCont.add(item1);
    itemCont.add(item2);
    itemCont.add(item3);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_RegisterPage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("formregister_info1.png",lang.formRegister1);
    item1.top = "3%";
    var item2 = createItem("formregister_info2.png",lang.formRegister2); 
    item2.top = "23%";
    var item3 = createItem("formregister_info3.png",lang.formRegister3); 
    item3.top = "43%";
    var item4 = createItem("formregister_info4.png",lang.formRegister4); 
    item4.top = "63%";
    
    itemCont.add(item1);
    itemCont.add(item2);
    itemCont.add(item3);
    itemCont.add(item4);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_ProfilePage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("formuser_info.png",lang.formProfile3);
    item1.top = "3%";

    
    itemCont.add(item1);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_InterestPage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("form_info4.png",lang.interest);
    item1.top = "3%";

    
    itemCont.add(item1);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_MapPage(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("mapinfo2.png",lang.map1);
    item1.top = "3%";
    var item2= createItem("mapinfo3.png",lang.map2);
    item2.top = "23%";
    var item3= createItem("mapinfo4.png",lang.map3);
    item3.top = "43%";
    var item4= createItem("mapinfo1.png",lang.map4);
    item4.top = "63%";
    
    itemCont.add(item1);
    itemCont.add(item2);
    itemCont.add(item3);
    itemCont.add(item4);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}

function InfoDialog_InterestFormSingleMap(){

    var mainDialog = InfoDialog_Template();
    
    var itemCont = createUIObjects.createContainer("Item_container"); 
    itemCont.top = "10%";
    itemCont.left = "10%";
    itemCont.width = "80%";
    itemCont.height = "70%";
    itemCont.borderWidth = 0;
    
    var item1= createItem("mapinfo3.png",lang.formMap);
    item1.top = "3%";

    
    itemCont.add(item1);
    
    mainDialog.add(itemCont);
    
    return mainDialog;
    
}


function createItem(_image,_text){

    var cont = createUIObjects.createContainer("container");
    cont.top = "0%";
    cont.left = "0%";
    cont.width = "100%";
    cont.height = "23%";
    cont.borderWidth = 0;
    
    var image = createUIObjects.createImage("image");
    image.top = "13.5%";
    image.left = "6.5%";
    image.width = "16%";
    image.height = "44%";
    image.imageFillType = SMF.UI.ImageFillType.aspectFit;
    image.image = _image;
    
    var label = createUIObjects.createLabel("label");
    label.top = "20%";
    label.left = "21%";
    label.width = "73%";
    label.height = "62%";
    label.text = _text;
    label.multipleLine = true;
    label.fontColor = "#FFFFFF";
    label.font.size = "6 pt";
    
    cont.add(image);
    cont.add(label);
    
    return cont;
}


function LoadingDialogCreate(){
     var dialog = createUIObjects.createDialog("LoadingDialog");
     
     var rectBackground = createUIObjects.createContainer("rectBackground");
     rectBackground.top = "0%";
     rectBackground.left = "0%";
     rectBackground.width = "100%";
     rectBackground.height = "100%";
     rectBackground.fillColor = "#222222";
     rectBackground.backgroundTransparent = false;
     rectBackground.alpha = "90%";
     rectBackground.borderWidth = 0;
     

     var ai = new SMF.UI.ActivityIndicator();
     ai.style = SMF.UI.ActivityIndicatorStyle.whiteLarge;   
     var ai_top = Device.screenHeight/2 - ai.height/2;
     var ai_left = Device.screenWidth/2 - ai.width/2;
     ai.left = ai_left;
     ai.top = ai_top;
     
     dialog.add(rectBackground);
     dialog.add(ai);
     
     return dialog;
}