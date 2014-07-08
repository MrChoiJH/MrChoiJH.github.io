/*
 * 修改个人信息
 */
var modifyMyInfo = new Object;

//获取当前登录账户的信息
modifyMyInfo.getStudentInfo = function(){
	$.ajax({
		"type" : 'POST',
		"url" : baseUrl+"/b/m/getStudentById",
		"dataType" : 'json',
		"success" : function(data){
			if(data[MESSAGE]==SUCCESS){
				_renderAddData(data[DATASINGLE]);
			}
		},
	});
};
//时间格式
_datetimeFormat = function(date) {
	return new Date(date).format("yyyy-MM-dd hh:mm:ss");
};
//数据回显
_renderAddData = function(studentInfo){
	$(".studentId").text(studentInfo.id);//学生id
//	$(".studentId").val(studentInfo.id);
	$(".studentName").text(studentInfo.name);//学生姓名
	$(".studentName:last").val(studentInfo.name);
	if(studentInfo.idCard==null){//身份证号
		$(".studentID_Card").text("无");
	}else{
		$(".studentID_Card").text(studentInfo.idCard);
	}
//	$(".studentID_Card").val(studentInfo.idCard);
	if(studentInfo.folk==null){//民族
		$(".studentFolk").text("无");
	}else{
		$(".studentFolk").text(studentInfo.folk);
	}
//	$(".studentFolk").val(studentInfo.folk);
	if(studentInfo.zzmm==null){//政治面貌
		$(".studentZzmm").text("无");
	}else{
		$(".studentZzmm").text(studentInfo.zzmm);
	}
//	$(".studentZzmm").val(studentInfo.zzmm);
	if(studentInfo.hometown==null){//籍贯
		$(".studentHometown").text("无");
	}else{
		$(".studentHometown").text(studentInfo.hometown);
	}
//	$(".studentHometown").val(studentInfo.hometown);
	$(".studentEmail").val(studentInfo.email);//电子邮件
	$(".studentPhone").val(studentInfo.phone);//联系电话
	$(".studentAddress").val(studentInfo.address);//通信地址
	$(".studentZipCode").val(studentInfo.zipCode);//邮政编码
	if(null == studentInfo.workPlace){//工作单位
		$(".studentWorkPlace").text("无");
	}else{
		$(".studentWorkPlace").text(studentInfo.workPlace);
	}
//	$(".studentWorkPlace").val(studentInfo.workPlace);
	if(null == studentInfo.position){//职务
		$(".studentPosition").text("无");
	}else{
		$(".studentPosition").text(studentInfo.position);
	}
//	$(".studentPosition").val(studentInfo.position);
	if(null == studentInfo.title){//职称
		$(".studentTitle").text("无");
	}else{
		$(".studentTitle").text(studentInfo.title);
	}
//	$(".studentTitle").val(studentInfo.title);
	if(null == studentInfo.gender){//性别
		$(".studentGender").text("无");
	}else{
		$(".studentGender").text(studentInfo.gender);
	}
//	$(".studentGender").val(studentInfo.gender);
	if(null == studentInfo.edu){//已有学位
		$(".studentEdu").text("无");
	}else{
		$(".studentEdu").text(studentInfo.edu);
	}
//	$(".studentEdu").val(studentInfo.edu);
	/*$(".studentComfirmDate").val(_datetimeFormat(studentInfo.comfirmDate));//确认日期
	$(".studentBirthday").val(_datetimeFormat(studentInfo.birthday));//出生日期
	$(".studentMajorId").val(studentInfo.majorId);//系所号
	$(".studentGraduatedTime").val(_datetimeFormat(studentInfo.graduatedTime));//毕业时间
	$(".studentGraduatedSch").val(studentInfo.graduatedSch);//毕业学校
	$(".studentGraduatedMajor").val(studentInfo.graduatedMajor);//毕业专业
	$(".studentStudClass").val(studentInfo.studClass);//所属年级
	$(".studentRegSemester").val(_datetimeFormat(studentInfo.regSemester));//入学日期
	$(".studentClassname").val(studentInfo.classname);//班名
*/};

//修改个人信息
modifyMyInfo.modifile = function(){
	modifyMyInfo.getStudentInfo();
	$("#modifyInfo").removeClass('hidden');
	art.dialog({
		id : "modifyMyInfo",
		title : "修改个人信息",
		width : 500,
		content: document.getElementById('modifyInfo'),
		lock: true,
		drag: true,
		cancelValue:'关闭',
		cancel:function(){
			$("#modifyInfo").addClass('hidden');
		}
	});
};
