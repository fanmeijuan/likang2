/**
 * Created by Administrator on 2017/10/26.
 */
$(".queren").on("click",function(){//���ύ��ť��һ���¼�

    $.ajax({
        type: "get",    //���ݷ��͵ķ�ʽ��post ���� get��
        url: "http://www.baidu.com" ,   //Ҫ���͵ĺ�̨��ַ,��̨���������ӿ�
            data: {//Ҫ���͵����ݣ���������ʽΪ{'val1':"1","val2":"2"}
        "Name":$("#name").val(),
            "tel":$("#tel").val()
    },
    dataType:'json',//�����ύ��ʽ
        crossDomain: true,
        success:function(result){
        var data = JSON.stringify(result);
        var json = $.parseJSON(data);
        var status = json.status;
        var random = json.random;
        var info = json.info

            ;
        if(status == "Y"){
            alert("�ύ�ɹ�")
        }else{
            alert("ϵͳ����")
        }
    }
});
})
