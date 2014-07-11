// 添加comment
function addComment() {
    var listCommentDiv = document.getElementById('divCommentList');
    var listChild = listCommentDiv.childNodes;
    var idx = 1;
    if ( listChild.length != 0 ) {
        idx = parseInt(listChild.item(listChild.length-1).comment.id, 10) + 1;
    }
    var comment = {
        name:document.addForm.name.value,
        content:document.addForm.content.value,
        id: idx
    };
    var newCommentDiv = makeCommentView(comment);
    listCommentDiv.appendChild(newCommentDiv);
    document.addForm.reset();
}
// 修改
function updComment() {
    hideCommentView();
    var comment = {
        name:document.updForm.name.value,
        content:document.updForm.content.value,
        id: document.updForm.id.value
    };
    var newCommentDiv = makeCommentView(comment);
    var listCommentDiv = document.getElementById('divCommentList');
    var oldComm = document.getElementById('c' + document.updForm.id.value);
    listCommentDiv.replaceChild(newCommentDiv, oldComm);
}
// 取消
function cnlComment() {
    hideCommentView();
}
// 修改form隐藏
function hideCommentView() {
    var updateCommentDiv = document.getElementById('divCommentUpd');
    updateCommentDiv.style.display = 'none';
    updateCommentDiv.parentNode.removeChild(updateCommentDiv);
    document.documentElement.appendChild(updateCommentDiv);
}
// 画面上添加留言
function makeCommentView(comment) {
    var commentDiv = document.createElement('div');
    commentDiv.setAttribute('id', 'c'+comment.id);
    var html = comment.id + '. <strong>' + comment.name + '</strong><br/>'
            +  comment.content + '<br/>'
            +  '<input type="button" value="修改" onclick="viewModifyComment('+comment.id +')">'
            +  '<input type="button" value="删除" onclick="viewDeleteCommnet('+comment.id +')">';
    commentDiv.innerHTML = html;
    commentDiv.comment = comment;
    return commentDiv;
}
// 画面上删除留言
function viewDeleteCommnet(idx) {
    var commentDiv = document.getElementById('c' + idx);
    commentDiv.parentNode.removeChild(commentDiv);
}
// 画面上修改留言
function viewModifyComment(idx) {
    var commentDiv = document.getElementById('c' + idx);
    var updateCommentDiv = document.getElementById('divCommentUpd');
    if ( updateCommentDiv.parentNode != commentDiv ) {
        updateCommentDiv.parentNode.removeChild(updateCommentDiv);
        commentDiv.appendChild(updateCommentDiv);
    }
    var commnet = commentDiv.comment;
    document.updForm.id.value = commnet.id;
    document.updForm.name.value = commnet.name;
    document.updForm.content.value = commnet.content;
    updateCommentDiv.style.display = '';
}
// 留言初始化
var commList = [
    {   id:1, name:'第一人', content:'样本'   },
    {   id:2, name:'崔正镐', content:'留言板'   },
    {   id:3, name:'NICK', content:'练习'   }
];
//  画面上留言初始化
var listCommentDiv = document.getElementById('divCommentList');
for (var ii=0; ii<commList.length; ii++ ) {
    var comDiv = makeCommentView(commList[ii]);
    listCommentDiv.appendChild(comDiv);
}



function loadData(code){
$.ajax({
url:"/test/api/url?test=" + test,
type:"GET",
cache: false,
dataType: "json",
headers: { "cache-control": "no-cache" },
success:function (data){
var lists = data.result;
var temp = "<thead><tr><td class='listth' style='width:150px;' >등록번호</td>"+
"<td class='listth' style='width:115px;' >이름</td>"+
"<td class='listth' style='width:130px' >단말기명</td>"+
"<td class='listth' style='width:150px' >전화번호</td>"+
"<td class='listth' style='width:100px' >관리</td></tr></thead>";
for (var i=0; i< lists.length; i++) {
temp += '<tr><td class="listtd" >' + lists[i].udid +'</td>' +
'<td class="listtd" >' + lists[i].owner +'</td>' +
'<td class="listtd" >' + lists[i].product_name +'</td>' +
'<td class="listtd" >' + lists[i].tel +'</td>' +
'<td class="listtd" >수정</td></tr>';
}
$("#tbl").html(temp);
page();
}
}); 
}

// 만들어진 테이블에 페이지 처리
function page(){ 
var reSortColors = function($table) {
  $('tbody tr:odd td', $table).removeClass('even').removeClass('listtd').addClass('odd');
  $('tbody tr:even td', $table).removeClass('odd').removeClass('listtd').addClass('even');
 };
 $('table.paginated').each(function() {
  var pagesu = 10;  //페이지 번호 갯수
  var currentPage = 0;
  var numPerPage = 10;  //목록의 수
  var $table = $(this);    
  
  //length로 원래 리스트의 전체길이구함
  var numRows = $table.find('tbody tr').length;
  //Math.ceil를 이용하여 반올림
  var numPages = Math.ceil(numRows / numPerPage);
  //리스트가 없으면 종료
  if (numPages==0) return;
  //pager라는 클래스의 div엘리먼트 작성
  var $pager = $('<td align="center" id="remo" colspan="10"><div class="pager"></div></td>');
  
  var nowp = currentPage;
  var endp = nowp+10;
  
  //페이지를 클릭하면 다시 셋팅
  $table.bind('repaginate', function() {
  //기본적으로 모두 감춘다, 현재페이지+1 곱하기 현재페이지까지 보여준다
  
   $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
   $("#remo").html("");
   
   if (numPages > 1) {     // 한페이지 이상이면
    if (currentPage < 5 && numPages-currentPage >= 5) {   // 현재 5p 이하이면
     nowp = 0;     // 1부터 
     endp = pagesu;    // 10까지
    }else{
     nowp = currentPage -5;  // 6넘어가면 2부터 찍고
     endp = nowp+pagesu;   // 10까지
     pi = 1;
    }
    
    if (numPages < endp) {   // 10페이지가 안되면
     endp = numPages;   // 마지막페이지를 갯수 만큼
     nowp = numPages-pagesu;  // 시작페이지를   갯수 -10
    }
    if (nowp < 1) {     // 시작이 음수 or 0 이면
     nowp = 0;     // 1페이지부터 시작
    }
   }else{       // 한페이지 이하이면
    nowp = 0;      // 한번만 페이징 생성
    endp = numPages;
   }
   // [처음]
   $('<br /><span class="page-number" cursor: "pointer">[처음]</span>').bind('click', {newPage: page},function(event) {
          currentPage = 0;   
          $table.trigger('repaginate');  
          $($(".page-number")[2]).addClass('active').siblings().removeClass('active');
      }).appendTo($pager).addClass('clickable');
    // [이전]
      $('<span class="page-number" cursor: "pointer">&nbsp;&nbsp;&nbsp;[이전]&nbsp;</span>').bind('click', {newPage: page},function(event) {
          if(currentPage == 0) return; 
          currentPage = currentPage-1;
    $table.trigger('repaginate'); 
    $($(".page-number")[(currentPage-nowp)+2]).addClass('active').siblings().removeClass('active');
   }).appendTo($pager).addClass('clickable');
    // [1,2,3,4,5,6,7,8]
   for (var page = nowp ; page < endp; page++) {
    $('<span class="page-number" cursor: "pointer" style="margin-left: 8px;"></span>').text(page + 1).bind('click', {newPage: page}, function(event) {
     currentPage = event.data['newPage'];
     $table.trigger('repaginate');
     $($(".page-number")[(currentPage-nowp)+2]).addClass('active').siblings().removeClass('active');
     }).appendTo($pager).addClass('clickable');
   } 
    // [다음]
      $('<span class="page-number" cursor: "pointer">&nbsp;&nbsp;&nbsp;[다음]&nbsp;</span>').bind('click', {newPage: page},function(event) {
    if(currentPage == numPages-1) return;
        currentPage = currentPage+1;
    $table.trigger('repaginate'); 
     $($(".page-number")[(currentPage-nowp)+2]).addClass('active').siblings().removeClass('active');
   }).appendTo($pager).addClass('clickable');
    // [끝]
   $('<span class="page-number" cursor: "pointer">&nbsp;[끝]</span>').bind('click', {newPage: page},function(event) {
           currentPage = numPages-1;
           $table.trigger('repaginate');
           $($(".page-number")[endp-nowp+1]).addClass('active').siblings().removeClass('active');
   }).appendTo($pager).addClass('clickable');
     
     $($(".page-number")[2]).addClass('active');
reSortColors($table);
  });
   $pager.insertAfter($table).find('span.page-number:first').next().next().addClass('active');   
   $pager.appendTo($table);
   $table.trigger('repaginate');
 });
}

