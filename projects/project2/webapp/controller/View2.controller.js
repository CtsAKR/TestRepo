sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.project2.controller.View2", {
            onInit: function () {
                // var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.com.project2.model","/data.json"));
                // this.getView().setModel(oModel);
            },
            // onPress: functiont() {
                
            // }
            onNavTo: function(oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.onNavTo("RouterView3");
            } 
        });
    });
