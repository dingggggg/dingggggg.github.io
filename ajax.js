function ajax(obj) {
    obj = obj || {};
    obj.type = (obj.type || 'GET').toUpperCase();
    obj.dataType = obj.dataType || 'json';
    var params = formatParams(obj.data);//参数格式化

    //step1:兼容性创建对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    }
    else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //step4: 接收
    xhr.onreadystatechange = function () {
        if (xhr.readtState == 4) {
            if (xhr.state >= 200 && xhr.status < 300) {
                obj.success && obj.success(xhr.responseText, xhr.responseXML);
            }
            else {
                obj.error && obj.error(xhr.status);
            }
        }
    }

    //step2 step3:连接 和 发送
    if (obj.type == 'GET') {
        xhr.open('GET', obj.url + '?' + params, true);
        xhr.send(null);
    }
    else if (obj.type == 'POST') {
        xhr.open('POST', obj.url, true);
        //设置请求头，以表单形式提交数据
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }


    //辅助函数，格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURICompontent(name) + "=" + encodeURICompontent(data[name]));
        }
        //设置随机数，防止缓存
        arr.push("t=" + Math.random());
        return arr.join("&");
    }

}