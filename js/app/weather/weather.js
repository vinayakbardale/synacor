(function () {

    APP.Views.Weather = {name:'Weather'};
    var viewContainer = '';

    APP.Views.Weather.initView = function(container) {
        viewContainer = container;
        var request = {
            url : APP.Constant.API_BASE + "/ip",
            method:'GET'
        }
        syn.http(request,onIp);
    }

    function onIp() {
        if (this.readyState == 4 && this.status == 200) {
            var cityInfo = JSON.parse(this.responseText);
            var request = {
                url : APP.Constant.API_BASE + "/weather/" + cityInfo.location.latitude + "," + cityInfo.location.longitude,
                method:'GET'
            }
            syn.http(request).onreadystatechange = function () {
                onWeather.call(this, cityInfo);
            };
        }
    }

    function onWeather(cityInfo) {
        if (this.readyState == 4 && this.status == 200) {
            var wetherInfo = JSON.parse(this.responseText);
            document.getElementById(viewContainer).innerHTML = getTemplate(cityInfo, wetherInfo);
        }
    }

    function getTemplate(cityInfo, wetherInfo) {
        var tmpl = "<div>";
        tmpl += "<div> Current Condition For <span>" + cityInfo.city + " " + wetherInfo.main.temp + " °F</span></div>";
        tmpl += "<div><img src='" + APP.Constant.IMG_BASE + wetherInfo.weather[0].icon + ".png'/></div>";
        tmpl += "<div>" + wetherInfo.weather[0].main + "</div>";
        tmpl += "</div>"
        return tmpl;
    }
})();