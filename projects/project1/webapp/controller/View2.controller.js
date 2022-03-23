sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.project1.controller.View2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onMatched,this);
            },
            onMatched: function(oEvent){
                this.getView().byId("input1").setValue(oEvent.getParameter('arguments').ID);
                this.getView().byId("input2").setValue(oEvent.getParameter('arguments').Fname);
                this.getView().byId("input3").setValue(oEvent.getParameter('arguments').Lname);
                this.getView().byId("input4").setValue(oEvent.getParameter('arguments').Country);
                this.getView().byId("input5").setValue(oEvent.getParameter('arguments').Pin);
            },

            onBack: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1","");
            }
        });
    });
