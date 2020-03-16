/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * refer https://www.npmjs.com/package/cordova-plugin-file-transfer
 */
async function downloadFile(path, fileName) {
    var tempPath = path.replace(/\\/g, "/");
    var fileURL = cordova.file.externalDataDirectory + 'bim/models/' + tempPath;
    console.log(fileURL);
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(path);
    fileTransfer.download(
            uri,
            fileURL,
            function (entry) {
                console.log("download complete");
            },
            function (error) {
                console.log("download error source ");
                console.log("download error target ");
                syncStatus = false;
            },
            false,
            {
//                headers: {
//                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
//                }
            }
    );
}