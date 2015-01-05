document.addEventListener('DOMContentLoaded', function () {
        chrome.tabs.getSelected(null, function(tab){
            var tablink = tab.url;
            new QRCode("qrcode", {
            text:tablink,
            width:300,
            height:300,
            colorDark:"#000000",
            colorLight:"#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
            });
        })
});
