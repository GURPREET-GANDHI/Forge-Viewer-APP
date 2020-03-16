var httpd = null;
function onDeviceReady() {
    httpd = (cordova && cordova.plugins && cordova.plugins.CorHttpd) ? cordova.plugins.CorHttpd : null;
}
function updateStatus() {
    if (httpd) {
        /* use this function to get status of httpd
         * if server is up, it will return http://<server's ip>:port/
         * if server is down, it will return empty string ""
         */
        httpd.getURL(function (url) {
            if (url.length > 0) {
                console.log("server is up: <a href='" + url + "' target='_blank'>" + url + "</a>");
            } else {
                console.log("server is down.");
            }
        });
        // call this function to retrieve the local path of the www root dir
        httpd.getLocalPath(function (path) {
            console.log("<br/> localPath: " + path);
        });
    } else {
        alert('CorHttpd plugin not available/ready.');
    }
}
function startServer(wwwroot) {
    if (httpd) {
        // before start, check whether its up or not
        httpd.getURL(function (url) {
            if (url.length > 0) {
                console.log(url);
            } else {
                /* wwwroot is the root dir of web server, it can be absolute or relative path
                 * if a relative path is given, it will be relative to cordova assets/www/ in APK.
                 * "", by default, it will point to cordova assets/www/, it's good to use 'htdocs' for 'www/htdocs'
                 * if a absolute path is given, it will access file system.
                 * "/", set the root dir as the www root, it maybe a security issue, but very powerful to browse all dir
                 */
                httpd.startServer({
                    'www_root': wwwroot,
                    'port': 8888,
                    'localhost_only': true
                }, function (url) {
                    // if server is up, it will return the url of http://<server ip>:port/
                    // the ip is the active network connection
                    // if no wifi or no cell, "127.0.0.1" will be returned.
                    console.log("Access file from : " + wwwroot);
                    console.log("server is started: " + url);
                }, function (error) {
                    console.error('failed to start server: ' + error);
                });
            }

        });
    } else {
        alert('CorHttpd plugin not available/ready.');
    }
}
function stopServer() {
    if (httpd) {
        // call this API to stop web server
        httpd.stopServer(function () {
            console.log('server is stopped.');
        }, function (error) {
            console.error('failed to stop server' + error);
        });
    } else {
        alert('CorHttpd plugin not available/ready.');
    }
}
document.addEventListener("deviceready", function () {
    if (cordova && cordova.file) {
        onDeviceReady();
        //startServer(cordova.file.dataDirectory.replace( 'file://', '' ));
        startServer(cordova.file.externalDataDirectory.replace('file://', ''));
    }
}, false);
