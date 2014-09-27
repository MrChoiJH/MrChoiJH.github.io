//life of game
var arr = []; 	//크기의 제한은 없음. 10x10으로 만들예정
var temp_arr = []; //임시 배열. 다음 상태로 갈 때, 값 임시적으로 저장



function init(){	//초기화
with(window.document)	// 그림 부분
{
	open();
	writeln('<table border=1 cellpadding=0 cellspacing=1>');

	for(var i=0; i<100;i++){
		var ran = Math.random();
		if( ran<0.5)
			arr[i] = 0;		//죽음
		else if(ran>=0.5)
			arr[i] = 1;		//살음
			
			//그림 부분
		writeln('  <td width=49 height=49>');
		writeln('      <a href=JavaScript:void(0); onclick=Alive_Or_Dead();>');
		if(arr[i] == 0){
		writeln('       <img src=die.gif border=0 width=49 height=49 id=img',i,'></a>');
		}
		else if(arr[i] == 1){
		writeln('       <img src=alive.gif border=0 width=49 height=49 id=img',i,'></a>');
		}
		writeln('  </td>');
		if((i+1)%10==0){
		writeln('<tr>');
		}
	}
	writeln('</table>');
	close();
	}
}
			
function Alive_Or_Dead(){


	
	//세포 삶 죽음 연산
	for(var i=0; i<100;i++){
		if(arr[i-1]+arr[i+1]+arr[i+(10-1)]+arr[i+10]+arr[i+(10+1)]+arr[i-(10-1)]+arr[i-10]+arr[i-(10+1)] == 3)	//주위에 살은 세포 3개
			temp_arr[i] = 1;
		else if(arr[i-1]+arr[i+1]+arr[i+(10-1)]+arr[i+10]+arr[i+(10+1)]+arr[i-(10-1)]+arr[i-10]+arr[i-(10+1)] == 2)//주위에 살은 세포 2개
			temp_arr[i] = arr[i];
		else		//기타
			temp_arr[i] = 0;
		}
	
	
	for(var i=0; i<100;i++){
	
		arr[i] = temp_arr[i];
		var img = document.getElementById("img"+i);
		if(arr[i] == 0)	 img.src = "die.gif";
		else if(arr[i] == 1)	 img.src = "alive.gif";
		

	}	
}