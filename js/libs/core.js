(function(){
    var syn = {};

    syn.http =  function http(request,callback){
        if(!request){
            return ;
        }
        request.method = request.method || 'GET';
        var xhttp = new XMLHttpRequest();
        xhttp.open(request.method, request.url, true);
        xhttp.setRequestHeader("Content-Type", "multipart/form-data");
        if(callback){
            xhttp.onreadystatechange = callback;
        }
        xhttp.send();    
        return xhttp ;
    }
    
    window.syn = syn;
})();