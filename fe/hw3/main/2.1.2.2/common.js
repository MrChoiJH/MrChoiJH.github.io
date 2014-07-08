/**
 * 网络学堂公共功能抽出
 * 2013年10月18日上午10:47:31
 */

var wlxtCommon = new Object;

//系统中表单美化初始化效果
wlxtCommon.uniform = function(){
	$("input, textarea, select").uniform();
};

//tab点击切换效果
wlxtCommon.tabEffect = function(){
	$('.switch-content').children('ul:first').show();
	var $tabBtn = $('ul.switch-toolbar>li');
	$('.switch-content').children('ul:gt(0)').hide();
	$tabBtn.click(function(){
		var tabIndex = $(this).index();
		$('.switch-content').children('ul').hide();
		$('ul.switch-toolbar>li.active').removeClass('active');
		$(this).addClass('active').closest('.tab-wrap').next().children('ul:eq('+tabIndex+')').show();
	});
};

//验证表白单中开始时间和结束时间的方法
wlxtCommon.validateDate = function(){
	jQuery.validator.methods.todayDate = function(value, element, param){
		var startDate = value;
		var currentDate = new Date();
		startDate = new Date(Date.parse(startDate.replace(/\-/g, "/")));
		return startDate > currentDate;
	};
	jQuery.validator.methods.compareDate = function(value, element, param) {
        var startDate = $("input[name='"+param+"']").val() ;
        var beginDate = new Date(Date.parse(startDate.replace(/\-/g, "/")));
        var endDate = new Date(Date.parse(value.replace(/\-/g, "/")));
        return beginDate < endDate;
    };
};
/**
* 时间对象的格式化
* 使用方法:ob.format("yyyy-MM-dd hh:mm:ss");
*/
Date.prototype.format = function(format) {
	/*
	 * format="yyyy-MM-dd hh:mm:ss";
	 */
	var o = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		"S" : this.getMilliseconds()
	};

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}

	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};
/**
 * 时间戳格式化
 */
_dateFormat = function(date) {
	return new Date(date).format("yyyy-MM-dd");
};
/**
 * 时间戳格式化
 */
_datetimeFormat = function(date) {
	return new Date(date).format("yyyy-MM-dd hh:mm:ss");
};

//重新定义alert,confirm,ajax缓存false
wlxtCommon.resetFunction = function(){
	//全局alert
	window.alert=function(msg){
		$.jGrowl(msg,{position:'center'});
	};
	
	//全局confirm
	var winConfirm = window.confirm;
	window.confirm=function(msg,fn){
		
		if(typeof(fn)!='function')
			return winConfirm(msg);
		
		$.messager.confirm('确认信息', msg,
				function(result){
			if(result)fn();	
		});   
	};
	
	//全局ajax设置
	$.ajaxSetup({cache:false});
	
};

//系统中学年学期的获得
wlxtCommon.getSemester = function(){
	$.get(
		"/b/myCourse/courseList/getCurrentTeachingWeek",
		function(courseListMap){
			$('#sidebar_semesterName').text(courseListMap.currentSemester==null?'学期无':courseListMap.currentSemester.semesterName);
			$('#sidebar_weekName').text(courseListMap.currentTeachingWeek==null?'0':courseListMap.currentTeachingWeek.weekName);
			$('#sidebar_currentDate').text(courseListMap.currentDate);
		}
	);
};

//截断函数
function cutStr(str,num){
	if (str.length>num){
		return(str.substr(0,num)+'...');
	}else{
		return(str);
	}
};


_ajaxFnShare = function(type,url,data,successFn,async){//ajax公共方法
	$.ajax({
		type:type,
		url:baseUrl+url,
		data:data,
		dataType:'json',
		success:successFn,
		async:async
	});
};

$(function(){
	wlxtCommon.tabEffect();
	wlxtCommon.getSemester();
//	wlxtCommon.uniform();
	wlxtCommon.validateDate();
	wlxtCommon.resetFunction();
	
});