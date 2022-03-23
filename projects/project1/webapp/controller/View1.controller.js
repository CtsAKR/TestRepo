sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.project1.controller.View1", {
            onInit: function () {

            },
            navBtn1: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View2");
            },
            onPressTable: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View2",{
                     ID : oEvent.getSource().getCells()[0].getText(),
                     Fname : oEvent.getSource().getCells()[1].getText(),
                     Lname : oEvent.getSource().getCells()[2].getText(),
                     Country : oEvent.getSource().getCells()[3].getText(),
                     Pin : oEvent.getSource().getCells()[4].getText(),
                });                
            }
        });
    });