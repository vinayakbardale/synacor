(function(){
    var views = [{name:'Weather'}];
    APP.Config = {
        ViewContainer : 'view-container'
    }

    function setDefaultView(){
        APP.setView(views[0]);
    }
    setDefaultView();

})();