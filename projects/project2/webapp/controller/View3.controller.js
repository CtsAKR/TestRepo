sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
 
    return Controller.extend("sap.com.project2.controller.View3", {
        onInit: function () {

        },
        onBackButton: function() {
            var oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("RouterView2");
        }
    });
 
 });