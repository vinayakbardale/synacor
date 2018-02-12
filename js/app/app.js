(function(){

    var APP = {
        Config:{},
        Constant:{},
        Views:{},
        currentView:{}
    };
    
    APP.setView = function(view){
        APP.currentView = view;
    }

    APP.bootstrap = function(){
        APP.loadView();
    }

    APP.loadView = function(){
        if(!APP.currentView){
            console.error("set view to run application");
            return ;
        }
        if(Object.keys(APP.currentView).length === 0){
                console.error("set view to run application");
                return ;           
        }

        if(typeof APP.Views[APP.currentView.name].initView === 'function'){
            APP.Views[APP.currentView.name].initView(APP.Config.ViewContainer);
        }else{
            console.error("View should impliment initView method to proceed");
        }
    }
    window.APP = APP;

})();