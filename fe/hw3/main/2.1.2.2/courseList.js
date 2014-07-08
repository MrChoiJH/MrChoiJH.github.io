/*
 * author : pjy
 */

var courseList = new Object;
var newFileNum;
var newNoticeNum;
var allCourse=new Object;
var noReviewHw = 0;
var currentModule = 'listModule';
var currentCourse = 0;
var recordCount; // 总纪录数
var pageSize = 50; //  每页数据条数
var currentPage = 1; //  当前页码
var totalPage; //所有页
var courseListMapTemp = new Object;
//获取course数据
courseList.getlist = function(){
	$("#listCourseBox").empty();
	$("#message").text("");
	$('.other').removeClass("active");
	$('.self').addClass("active");
	currentCourse = 0;
	$('#courseList-loading').show();
	$.get(
		"/b/myCourse/courseList/loadCourse4Student/"+$('#semesterId').val(),
		function(courseListMap){
			if(courseListMap[RESULTLIST]==null||courseListMap[RESULTLIST]=="") Message();
			courseListMapTemp = courseListMap;
			courseList.rendertable(courseListMap,currentCourse);
			$('#courseList-loading').hide();
		}
	);
};
//获得助教课程
courseList.getAssistantList = function(){
	$("#listCourseBox").empty();
	$("#message").text("");
	$('.self').removeClass("active");
	$('.other').addClass("active");
	currentCourse = 1;
	$('#courseList-loading').show();
	$.get(
			"/b/mycourse/Assistant/courseList/"+$('#semesterId').val(),
			function(courseListMap){
			if(courseListMap[RESULTLIST]==null||courseListMap[RESULTLIST]=="") Message();
			    courseListMapTemp = courseListMap;
				courseList.rendertable(courseListMap,currentCourse);
				$('#courseList-loading').hide();
			}
		);
};
//当没有数据时，弹出对话框来提醒
function Message(){
	var message = "暂无课程";
	$("#message").text(message);
}

//将course数据显示在页面上
courseList.rendertable = function(courseListMap,courseType){
	$("#listCourseBox").empty();
	$(".teacher").hide();
	$(".student").hide();
	if(courseType!=1){
		$(".student").show();
	}else{
		$(".teacher").show();
	}
	var courseList = courseListMap[RESULTLIST];
	$.each(courseList, function(i, n) {
		var row;
		if(currentModule == 'gridModule'){
			row = $("#courseList .template").clone().removeClass("template hidden");
			row.find('.course-num').text(i+1);
			row.find('.courseImg').attr("src",baseUrl+'/b/mycourse/courseExtension/downloadFile/'+n.course_id+'/thumbnail');
			row.find('.dwmc').text(n.codeDepartmentInfo.dwmc);
			row.find('.courseName').text(n.course_name+'（'+courseList[i].course_seq+'）');
		}else{
			row = $("#file_list .template").clone().removeClass("template hidden");	
			row.find('.courseNameList').text(n.course_name+'（'+courseList[i].course_seq+'）');
		}
		if(courseType!=1){
			_getNewFileHint(courseList[i].course_id);//新文件提醒
			_getNewNoticeHint(courseList[i].course_id);//新公告提醒
			_getweijiaohomeWorkHint(courseList[i].course_id);//未交作业提醒
			row.find('.courseNameList').attr("href","/f/student/coursehome/"+courseList[i].course_id);
			row.find('.courseHref').attr("href","/f/student/coursehome/"+courseList[i].course_id);
			row.find('.newFile').text(newFileNum).attr('href',"/f/student/courseware/"+courseList[i].course_id);
			row.find('.newNotice').text(newNoticeNum).attr('href',"/f/student/courseinfo/"+courseList[i].course_id);
			row.find('.unhandHw').text(weijiaohomeWorkNum).attr('href',"/f/student/homework/"+courseList[i].course_id);
		}else{
			_getNoReviewHw(courseList[i].course_id);
			row.find('.courseNameList').attr("href","/f/teacher/coursehome/"+courseList[i].course_id);
			row.find('.courseHref').attr("href","/f/teacher/coursehome/"+courseList[i].course_id);
			row.find('.no_Review').text(noReviewHw).attr("href","/f/teacher/homework/"+courseList[i].course_id);
			row.find('.tBrowseNum').text(n.tBrowseNum);
			row.find('.sBrowseNum').text(n.sBrowseNum);
		}
		row.appendTo("#listCourseBox");
	});
};
//新文件提醒
_getNewFileHint = function(getNewFilecourseId){
	$.ajax({
		"type" : 'GET',
		"url" : baseUrl+"/b/courseFileAccess/countUnreadFile/"+getNewFilecourseId,
		"dataType" : "json",
		"success" : function(data) {
			if(data[MESSAGE] == SUCCESS){
				newFileNum = data.result;
			}else {
				alert('获取数据失败');
			}
		},
		async:false
	});
};
//新公告提醒
_getNewNoticeHint = function(getNewNoticeCourseId){
	$.ajax({
		"type" : 'GET',
		"url" : baseUrl+"/b/myCourse/notice/getNewNoticeNum/"+getNewNoticeCourseId,
		"dataType" : "json",
		"success" : function(data) {
			if(data[MESSAGE] == SUCCESS){
				newNoticeNum = data.result;
			}else {
				alert('获取数据失败');
			}
		},
		async:false
	});
};
//未交作业提醒
_getweijiaohomeWorkHint = function(getweijiaoHomeworkCourseId){
	$.ajax({
		"type" : 'GET',
		"url" : baseUrl+"/b/myCourse/homeworkRecord/countStatus/"+getweijiaoHomeworkCourseId ,
		"dataType" : "json",
		"success" : function(data) {
			if(data[MESSAGE] == SUCCESS){
				weijiaohomeWorkNum = data.result;
			}else {
				alert('获取数据失败');
			}
		},
		async:false
	});
};

//为批作业数量显示
_getNoReviewHw = function(getNoReviewcourseId){
	$.ajax({
		"type" : 'GET',
		"url" : baseUrl+"/b/myCourse/homework/getYijiaoNumByCourseId/"+getNoReviewcourseId,
		"dataType" : "json",
		"success" : function(data) {
			if(data[MESSAGE] == SUCCESS){
				noReviewHw = data.result;
			}else {
				alert('获取数据失败');
			}
		},
		async:false
	});
};
function changeSemester(semesterId){
	mycourseList();
	if(semesterId==""){return;}
	$('#semesterId').val(semesterId);
	courseList.getlist();
}
$('.semester').click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$('#semester_title').text($(this).text());
	$(".nav a:eq(1)").addClass("active");
});

courseList.changeModule = function(currModule){
	currentModule = currModule;
	if(currModule=='gridModule'){
		$('#file-grid').attr('class','icon-file-grid-active');
		$('#file-list').attr('class','icon-file-list');
	}else{
		$('#file-grid').attr('class','icon-file-grid');
		$('#file-list').attr('class','icon-file-list-active');
	}
	courseList.rendertable(courseListMapTemp,currentCourse);
};

/*从所有网络课程转换到我的课程beign*/
function mycourseList(){
	$(".top-bar h1").text("我的课程");
	$(".union-btn").removeClass("hidden");
	$("#courseList").removeClass("hidden");
	$("#title_mycourse").removeClass("hidden");
	$("#semester_title").removeClass("hidden");
	$("#allNetCourse").addClass("hidden");
	$("#title_allcourse").addClass("hidden");
}

/*
 * 全部网络课程及下学期课程容器装载beign*
 * 
 */

//1. 当点击“全部网络课程时” beign
$("#allCourseList").click(function(){
	$(".top-bar h1").text("全部网络课程");
	$(".union-btn").addClass("hidden");
	$("#courseList").addClass("hidden");
	$("#title_mycourse").addClass("hidden");
	$("#allNetCourse").removeClass("hidden");
	$("#title_allcourse").removeClass("hidden");
	$("#message").text("");
    //获得全部网络课程
	allCourse.getDwnm();
	allCourse.getList();
});

//2.获取所有系所的列表
allCourse.getDwnm = function(){
$.ajax({
	"type" : 'GET',
	"url" : baseUrl+"/b/myCourse/courseList/getCodeDepartmentViewlist",
	"dataType" : "json",
	"success" :function(data){
		if(data[MESSAGE] == SUCCESS){
			$("#getDwnm").empty();
			$("#getDwnm").append(
					'<option value="">所有系显示</option>'
		    );
			for(var i=0;i<data.resultList.length;i++){
				$("#getDwnm").append(
						'<option value="'+data.resultList[i].dwnm+'">'+data.resultList[i].dwmc+'</option>'
			    );
			};
		}else {
			alert('获取数据失败');
		};
	}
});
};

//3. 分页事件
allCourse.paginationList = function(str){
	if(str=='+'){//next page
		currentPage = Math.min((currentPage+1),totalPage);
	}else if(str=='-'){//previous page
		currentPage = Math.max((currentPage-1),1);
	}else if(str=='end'){//last page
		currentPage = totalPage;
	}else{
		currentPage = parseInt(str);
	}
	allCourse.getList();
};
//4. 每页显示条数的设置
allCourse.pageSize=function(str,el){
	pageSize = str;
	allCourse.getList();
};

//5. 将所有网络课程显示到table中 begin
allCourse.getList = function(){
	$("#listCourseBox").empty();
	$.ajax({
		 /**url后台地址*/
		url : $("#getAllNetCourse").attr("action"),
		data :{
			pageSize:pageSize,
			currentPage:currentPage,
			"dwnm":$("#getDwnm").val(),
			"type":$("#type").val(),
		    "name":$("#name").val(),
			},
		 /**  提交方法是GET */
		type : 'POST',
		 /**  返回json*/
		dataType : 'json',
		success : function(data) {	  /**表单提交成功后的回调函数，用于提示用户及后续逻辑	*/
			if(data[MESSAGE] = SUCCESS){
				recordCount = data.recordCount;
				pageSize = data.pageSize;
				currentPage = data.currentPage;
				totalPage = Math.ceil(recordCount/pageSize);
				$(".totalNum").text(recordCount);
				$(".currentPage").text(currentPage);
				$(".totalPage").text(totalPage);
				if(data.recordList==null||data.recordList==''){
					$("#listCourseBox").append("<tr class='lh30'><td>暂无课程</td></tr>");
				}else{
					$.each(data.recordList,function(i,n){
						var row = $("#allNetCourse .hw-table-title .template").clone(true).removeClass("template hidden");
						row.find(".course_name").text(n.course_name).attr("href",baseUrl + "/f/student/netCourseInfo/"+n.course_id).attr('target','_blank');
						row.find(".course_no").text(n.course_no);
						row.find(".course_seq").text(n.course_seq);
						row.find(".semesterInfo_id").text(n.semesterInfo.semesterName);
						row.find(".teacherInfo_name").text(n.teacherInfo===null?"":n.teacherInfo.name);
						row.find(".codeDepartmentInfo").text(n.codeDepartmentInfo===null?"":n.codeDepartmentInfo.dwmc);
						row.appendTo("#listCourseBox");
					});	
				}
			}else {
				alert('获取数据失败');
			}
		},
	    error : function(){    /** 表单提交失败回调函数，用于处理提交失败后的逻辑 */
	    	alert("获取数据失败");
	    }
	});	
};
/*
 * 全部网络课程及下学期课程容器装载end*
 * 
 */
$(function(){
	$(".nav a:eq(1)").addClass("active");
	courseList.getlist();
	$(".semester").click(function(){//当点击"下学期","本学期","以前学期",“全部网络课程”使"所有课程"显示高亮
	  $('.other').removeClass("active");
	  $('.self').addClass("active");
    });
});
