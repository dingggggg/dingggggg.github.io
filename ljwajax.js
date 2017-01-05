//示例
// ajax({
//     url: "ng-uiRouter.md",
//     type: 'GET',
//     dataType: "json",
//     success: function (response, xml) {
//         console.log(response)
//     },
//     fail: function (status) {
//         console.log(status)
//     }
// })

function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);
    //创建
    var xhr = new XMLHttpRequest();
    //接受
    if (options.type === 'GET') {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type === "POST") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    //发送
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&");
}
