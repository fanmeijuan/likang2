/**
 * Created by Administrator on 2017/10/25.
 */
$(function() {

    var topElement = $(".top");
    if (topElement) {
        var topTag='';
           topTag+='<div class="con">';
           topTag+='<div class="row">';
           topTag+='<div class="col-xs-6 col-md-6 hidden-xs hidden-md hidden-sm"><div class="logo">';
           topTag+='<h1>';
           topTag+='<a href="#" title="立康脊椎">整脊康复</a>';
           topTag+='</h1>';
           topTag+='</div>';
           topTag+='</div>';
           topTag+='<div class="col-xs-6 col-md-6 tel"><img src="images/top.png" alt=""/></div>';
           topTag+='</div>';
           topTag+='</div>';
        topElement.append(topTag);

    }

    var navElement = $(".daohang>.con");
    if (navElement) {
        var navTag = '';
           navTag+='<div class="navbar-header  ">';
           navTag+='<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
           navTag+='<span class="sr-only">Toggle navigation</span>';
           navTag+='<span class="icon-bar"></span>';
           navTag+='<span class="icon-bar"></span>';
           navTag+='<span class="icon-bar"></span>';
           navTag+='</button>';
           navTag+='<a class="navbar-brand" href="#"  ></a>';
           navTag+='</div>';
           navTag+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
           navTag+='<ul class="nav navbar-nav">';
           navTag+='<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->';
           navTag+='<li><a href="index.html">首页</a></li>';
           navTag+='<li class="dropdown">';
           navTag+='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于立康 <span class="caret"></span></a>';
           navTag+='<ul class="dropdown-menu">';
           navTag+='<li><a href="intro.html">立康简介</a></li>';
           navTag+='<li><a href="rongyuzizhi.html">荣誉资质</a></li>';
           navTag+='<li><a href="likangshiming.html">立康使命</a></li>';
           navTag+='<li><a href="tesefuwu.html">特色服务</a></li>';
           navTag+='</ul>';
           navTag+='</li>';
           navTag+='<li><a href="consult.html">健康咨询</a></li>';
           navTag+='<li><a href="team.html">专家团队</a></li>';
           navTag+='<li><a href="method.html">康复方法</a></li>';
           navTag+='<li><a href="teamwork.html">合作医院</a></li>';
           navTag+='</ul>';
           navTag+='<ul class="nav navbar-nav navbar-right">';
           navTag+='<li class="dropdown">';
           navTag+='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">联系我们 <span class="caret"></span></a>';
           navTag+='<ul class="dropdown-menu">';
           navTag+='<li><a href="tellme.html">在线预约</a></li>';
           navTag+='<li><a href="tellme.html">在线留言</a></li>';
           navTag+='<li><a href="tellme.html">联系电话</a></li>';
           navTag+='<li role="separator" class="divider"></li>';
           navTag+='</ul>';
           navTag+='</li>';
           navTag+='</ul>';
           navTag+='</div>';
        navElement.append(navTag);

    }

    var bannerElement = $("#carousel-example-generic");
    if (bannerElement) {
        var bannerTag='';
           bannerTag+='<ol class="carousel-indicators">';
           bannerTag+='<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>';
           bannerTag+='<li data-target="#carousel-example-generic" data-slide-to="1"></li>';
           bannerTag+='<li data-target="#carousel-example-generic" data-slide-to="2"></li>';
           bannerTag+='</ol>';
           bannerTag+='<div class="carousel-inner" role="listbox">';
           bannerTag+='<div class="item active">';
           bannerTag+='<img src="images/banner_01.png" alt="...">';
           bannerTag+='<div class="carousel-caption">';
           bannerTag+='</div>';
           bannerTag+='</div>';
           bannerTag+='<div class="item ">';
           bannerTag+='<img src="images/banner_01.png" alt="...">';
           bannerTag+='<div class="carousel-caption">';
           bannerTag+='</div>';
           bannerTag+='</div>';
           bannerTag+='</div>';
           bannerTag+='<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">';
           bannerTag+='<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
           bannerTag+='<span class="sr-only">Previous</span>';
           bannerTag+='</a>';
           bannerTag+='<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">';
           bannerTag+='<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
           bannerTag+='<span class="sr-only">Next</span>';
           bannerTag+='</a>';

        bannerElement.append(bannerTag);




    }
    var footerElement=$('.bottom>.con');
    if (footerElement) {

        var footerTag='';
            footerTag+='<div class="row">';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-xs">';
            footerTag+='<a href="index.html">';
            footerTag+='<img src="images/logo.png" alt=""/>';
            footerTag+='</a>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-xs">';
            footerTag+='<p>';
            footerTag+='西安立康整脊康复医疗中心 <br/>';
            footerTag+='联系地址:XXXXXXX <br/>';
            footerTag+='联系电话:1234454 <br/>';
            footerTag+='联系传真:345905刁 <br/>';
            footerTag+='</p>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-xs">';
            footerTag+='<p>';
            footerTag+='版权所有:西安立康整脊康复医疗中心 <br/>';
            footerTag+='陕IPbc:4565650';
            footerTag+='</p>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-sm hidden-xs">';
            footerTag+='<div class="long">';
            footerTag+='</div>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-xs">';
            footerTag+='<img src="images/tupian_07.png" alt=""/>';
            footerTag+='<p>(扫一扫二维码关注)</p>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-6 col-sm-3 col-lg-2 hidden-sm hidden-xs">';
            footerTag+='<img src="images/tupian_08.png" alt=""/>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-4 col-sm-3 col-lg-2 hidden-lg hidden-md hidden-sm">';
            footerTag+='<p>';
            footerTag+='西安立康整脊康复医疗中心 <br/>';
            footerTag+='联系地址:XXXXXXX <br/>';
            footerTag+='联系电话:1234454 <br/>';
            footerTag+='联系传真:345905刁 <br/>';
            footerTag+='</p>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-4 col-sm-3 col-lg-2 hidden-lg hidden-md hidden-sm footer-position">';
            footerTag+='<a href="index.html">';
            footerTag+='<img src="images/slogo.png" alt=""/>';
            footerTag+='</a>';
            footerTag+= ' <div class="gongshang">';
            footerTag+= ' <img src="images/bottom_1.png" alt=""/>';
            footerTag+= ' </div>';
            footerTag+='</div>';
            footerTag+='<div class="col-xs-4 col-sm-3 col-lg-2 hidden-lg hidden-md hidden-sm">';
            footerTag+='<img src="images/tupian_07.png" alt=""/>';
            footerTag+='<p>(扫一扫二维码关注)</p>';
            footerTag+='</div>';
            footerTag+='<div class="banquan hidden-lg hidden-md hidden-sm">';
            footerTag+='<p>';
            footerTag+='版权所有:西安立康整脊康复医疗中心 <br/>';
            footerTag+='陕IPbc:4565650';
            footerTag+='</p>';
            footerTag+='</div>';
            footerTag+='</div>';
        footerElement.append(footerTag);
    }
});

