//life of game
//韩语是为了我们结对编程时用的。

//编程原理是画出10x10的table；用img来表示生死。
//点击画面就实行Alive_Or_Dead函数，运算下一代的生死状态。然后就画出下一代的状态。

//两个排列 ： 大小为10x10
//绿色 : 生 黑色：死

var arr = []; 	//크기의 제한은 없음. 10x10으로 만들예정
var temp_arr = []; //임시 배열. 다음 상태로 갈 때, 값 임시적으로 저장


//初始化
function init(){	//초기화
	//画图部分
	with(window.document)	// 그림 부분
	{
		open();
		writeln('<table border=1 cellpadding=0 cellspacing=1>');
		//生成随机数来表示生死
		for(var i=0; i<100;i++){
			
			var ran = Math.random();
			if( ran<0.5)
				arr[i] = 0;		//死。죽음
			else if(ran>=0.5)
				arr[i] = 1;		//生。살음
			
			//arr[i] = 0;		//死。전부 죽음
			//arr[i] = 1;		//生。전부 살음
			
			writeln('  <td width=49 height=49>');
			writeln('      <a href=JavaScript:void(0); onclick=Alive_Or_Dead();>');	//点击画面就实行Alive_Or_Dead函数
			if(arr[i] == 0)			writeln('       <img src=die.gif border=0 width=49 height=49 id=img',i,'></a>');
			else if(arr[i] == 1)	writeln('       <img src=alive.gif border=0 width=49 height=49 id=img',i,'></a>');
			writeln('  </td>');
			if((i+1)%10==0)		writeln('<tr>');	//Enter
		}
		writeln('</table>');
		close();
	}
	
	//단위 테스트
	module( "group init" );
	test( "dead or alive", function() {
			
			var result=0;
			for(var i=0; i<100;i++){
				result = result + arr[i];
			}
		
		equal(result , "100", "ALL alive!");
		equal(result , "0", "ALL DIED!");
		equal( result, result , "Alive : "+ result);
	});
	
}
			
function Alive_Or_Dead(){

	

	// 모서리 부분 예외 처리 필요
	// 첫 줄, 맨 아랫줄 같은 경우, 테두리 바깥으로 나가는건 숫자로 처리가 안되기 때문에 문제 안됨
	// 왼쪽 오른쪽 예외처리 필요
	// 왼쪽줄 같은 경우 0으로 끝나고, 오른쪽 줄 같은 경우 9로 끝남.
	
	// 左右部分需要另一个l例外运算
	
	
	//세포 삶 죽음 연산
	
	//细胞的生死运算
	//如果一个细胞周围有3个细胞为生，则该细胞为生，即该细胞若原先为死则转为生，若原先为生则保持不变；
	for(var i=0; i<100;i++){
		//左排部分
		if(i%10 == 0){	//왼쪽 줄
		if(arr[i+1]+arr[i+10]+arr[i+(10+1)]+arr[i-10]+arr[i-(10-1)] == 3)	//주위에 살은 세포 3개
			temp_arr[i] = 1;
		else if(arr[i+1]+arr[i+10]+arr[i+(10+1)]+arr[i-10]+arr[i-(10-1)] == 2)//주위에 살은 세포 2개
			temp_arr[i] = arr[i];
		else		//기타
			temp_arr[i] = 0;
		}
	
		//右排部分
		else if((i+1)%10 == 0){	//오른쪽 줄
			if(arr[i-1]+arr[i+(10-1)]+arr[i+10]+arr[i-(10+1)]+arr[i-10] == 3)	//주위에 살은 세포 3개
				temp_arr[i] = 1;
			else if(arr[i-1]+arr[i+(10-1)]+arr[i+10]+arr[i-(10+1)]+arr[i-10] == 2)//주위에 살은 세포 2개
				temp_arr[i] = arr[i];
			else		//기타
				temp_arr[i] = 0;
		}	
	
		//其他
		else{
			if(arr[i-1]+arr[i+1]+arr[i+(10-1)]+arr[i+10]+arr[i+(10+1)]+arr[i-(10-1)]+arr[i-10]+arr[i-(10+1)] == 3)	//주위에 살은 세포 3개
				temp_arr[i] = 1;
			else if(arr[i-1]+arr[i+1]+arr[i+(10-1)]+arr[i+10]+arr[i+(10+1)]+arr[i-(10-1)]+arr[i-10]+arr[i-(10+1)] == 2)//주위에 살은 세포 2개
				temp_arr[i] = arr[i];
			else		//기타
				temp_arr[i] = 0;
		
		}
	}
	
	module( "group generation" );
	test( "dead or alive", function() {
		var result=0;
		var alive=0;
	
		for(var i=0; i<100;i++){
			result = result + temp_arr[i];
				
				//左排部分
			if(i%10 == 0){	//왼쪽 줄
				if(	arr[i+1] !=0 || arr[i+1] !=1 )				arr[i+1] =0;
				if(	arr[i+10] !=0 || arr[i+10] !=1 )			arr[i+10] =0;
				if(	arr[i+10+1] !=0 || arr[i+10+1] !=1 )		arr[i+10+1] =0;
				if(	arr[i-10] !=0 || arr[i-10] !=1 )			arr[i-10] =0;
				if(	arr[i-(10-1)] !=0 || arr[i-(10-1)] !=1 )	arr[i-(10-1)] =0;
			
				alive = arr[i+1]+arr[i+10]+arr[i+(10+1)]+arr[i-10]+arr[i-(10-1)];
				
				if(alive == 2)		equal(alive , "2", "next generation : "+(i+1)+"cell same with this generation!");
				else if(alive == 3)	equal(alive , "3", "next generation : "+(i+1)+"cell alive!");
				else				equal(alive , alive, "next generation : "+(i+1)+"cell dead!");
			}
	
			//右排部分
			else if((i+1)%10 == 0){	//오른쪽 줄
		
				if(	arr[i-1] !=0 || arr[i-1] !=1 )				arr[i-1] =0;
				if(	arr[i+10] !=0 || arr[i+10] !=1 )			arr[i+10] =0;
				if(	arr[i+10-1] !=0 || arr[i+10-1] !=1 )		arr[i+10-1] =0;
				if(	arr[i-10] !=0 || arr[i-10] !=1 )			arr[i-10] =0;
				if(	arr[i-(10+1)] !=0 || arr[i-(10+1)] !=1 )	arr[i-(10+1)] =0;
		
				alive = arr[i-1]+arr[i+(10-1)]+arr[i+10]+arr[i-(10+1)]+arr[i-10];
			
				if(alive == 2)		equal(alive , "2", "next generation : "+(i+1)+"cell same with this generation!");
				else if(alive == 3)	equal(alive , "3", "next generation : "+(i+1)+"cell alive!");
				else				equal(alive , alive, "next generation : "+(i+1)+"cell dead!");
			}
	
			//其他
			else{
				if(	arr[i-1] !=0 || arr[i-1] !=1 )				arr[i-1] =0;
				if(	arr[i+1] !=0 || arr[i+1] !=1 )				arr[i+1] =0;
				if(	arr[i+(10-1)] !=0 || arr[i+(10-1)] !=1 )	arr[i+(10-1)] =0;
				if(	arr[i+10] !=0 || arr[i+10] !=1 )			arr[i+10] =0;
				if(	arr[i+(10+1)] !=0 || arr[i+(10+1)] !=1 )	arr[i+(10+1)] =0;
				if(	arr[i-(10-1)] !=0 || arr[i-(10-1)] !=1 )	arr[i-(10-1)] =0;
				if(	arr[i-10] !=0 || arr[i-10] !=1 )			arr[i-10] =0;
				if(	arr[i-(10+1)] !=0 || arr[i-(10+1)] !=1 )	arr[i-(10+1)] =0;
		
				alive = arr[i-1]+arr[i+1]+arr[i+(10-1)]+arr[i+10]+arr[i+(10+1)]+arr[i-(10-1)]+arr[i-10]+arr[i-(10+1)];
				
				if(alive == 2)		equal(alive , "2", "next generation : "+(i+1)+"cell same with this generation!");
				else if(alive == 3)	equal(alive , "3", "next generation : "+(i+1)+"cell alive!");
				else				equal(alive , alive, "next generation : "+(i+1)+"cell dead!");
			}
		}
		
		equal(result , "100", "ALL alive!");
		equal(result , "0", "ALL DIED!");
		equal( result, result , "Alive : "+ result);
	});
	
	
	

	//用id来更新生死的图片。
	for(var i=0; i<100;i++){
		arr[i] = temp_arr[i];
		var img = document.getElementById("img"+i);
		if(arr[i] == 0)	 img.src = "die.gif";
		else if(arr[i] == 1)	 img.src = "alive.gif";
		

	}	
}