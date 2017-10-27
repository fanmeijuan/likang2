/**
 * Created by Administrator on 2017/10/26.
 */
$(".queren").on("click",function(){//给提交按钮绑定一个事件

    $.ajax({
        type: "get",    //数据发送的方式（post 或者 get）
        url: "http://www.baidu.com" ,   //要发送的后台地址,后台会给你这个接口
            data: {//要发送的数据（参数）格式为{'val1':"1","val2":"2"}
        "Name":$("#name").val(),
            "tel":$("#tel").val()
    },
    dataType:'json',//数据提交格式
        crossDomain: true,
        success:function(result){
        var data = JSON.stringify(result);
        var json = $.parseJSON(data);
        var status = json.status;
        var random = json.random;
        var info = json.info

            ;
        if(status == "Y"){
            alert("提交成功")
        }else{
            alert("系统错误")
        }
    }
});
})
