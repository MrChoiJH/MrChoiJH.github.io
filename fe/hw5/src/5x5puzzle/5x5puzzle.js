var stop_flag=true;
var StopWatch_stopWatches = new Array();
        var StopWatch_count = 0;
        /*var score = 0;*/                //������ɻ���Ұ�� �ٸ�������� �������⿡������
        function StopWatch(form, timeField, buttonA, buttonB, unit) {
            this.start = StopWatch_start; // start() - �����ġ ���� Functiuon
            this.stop = StopWatch_stop; // stop() - �����ġ ���� Functiuon
            this.reset = StopWatch_reset; // reset() - �����ġ �ʱ�ȭ Functiuon
            this.resume = StopWatch_resume; // resume() - �����ġ ����� Functiuon
            this.finish = StopWatch_finish; //�߰��Ⱥκ� �Ǹ�����
            this.exit = StopWatch_exit;
            this.setState = StopWatch_setState; // (bRefresh,buttonA_value,buttonB_value)
            this.run = StopWatch_run; // run(type) : type is any button value, i.e. type = Start|Stop|Snapshot|Reset|Continue
            this.now = StopWatch_now; // now()
            this.refresh = StopWatch_refresh; // refresh()
            this.timeField = form.elements[timeField];
            this.buttonA = form.elements[buttonA];
            this.buttonB = form.elements[buttonB];
            this.index = StopWatch_count++;
            this.unit = unit;
            this.tStarted = 0;
            this.bRefresh = false;
            this.timeField.value = "0";
            this.buttonA.value = "Start"; // ���� ��ư value - ������ ����
            this.buttonB.value = "Reset"; // ����� ��ư value - ������ ����
            this.buttonA.onclick = new Function("", "StopWatch_Static_runA(" + this.index + ")");
            this.buttonB.onclick = new Function("", "StopWatch_Static_runB(" + this.index + ")");
            StopWatch_stopWatches[this.index] = this;
            StopWatch_Static_update(this.index);
        }
        function StopWatch_start()
        { 
            Shuffle();
            var startTime = new Date();
            switch (this.unit) {
                case "s": startTime.setTime(this.now() - this.timeField.value * 1000); break; // seconds ����Ʈ ���� �κ�
            }
            this.tStarted = startTime.getTime();
            this.resume();
        }
        // �� �κ��� value������ �����ϸ� ������..
        function StopWatch_stop() { // �����ġ ���� �κ�
            this.setState(false, "Continue", "Reset");
			stop_flag = false;
        }
        function StopWatch_finish() { //�߰��Ⱥκ�   �ٸ��߸� ����γѾ��  
            this.setState(false, "Reset", "Exit");
        }
        /*function StopWatch_Record() { //������� �κ� Record��ư��������������ϵǰ� �ϴܺ���
            var score = this.timeField.value;
            alert(score);
        }*/
        function StopWatch_exit() {
            window.close();
        }
        function StopWatch_reset() { // �����ġ ����� �κ�
            this.setState(false, "Start", "Reset"); this.timeField.value = "0";
        }
        function StopWatch_resume() { // �����ġ ����� �κ�
            this.setState(true, "Stop", "Reset");
        }
        function StopWatch_Static_update(index) {
            var stopWatch = StopWatch_stopWatches[index];
            setTimeout("StopWatch_Static_update(" + index + ")", 50);
            if (stopWatch.bRefresh)
                stopWatch.refresh();
        }
        function StopWatch_Static_runA(index) {
            var stopWatch = StopWatch_stopWatches[index];
            stopWatch.run(stopWatch.buttonA.value);
        }
        function StopWatch_Static_runB(index) {
            var stopWatch = StopWatch_stopWatches[index];
            stopWatch.run(stopWatch.buttonB.value);
        }
        function StopWatch_setState(bRefresh, buttonA_value, buttonB_value) {
            this.bRefresh = bRefresh;
            this.buttonA.value = buttonA_value;
            this.buttonB.value = buttonB_value;
        }
        function StopWatch_run(type) {
            if (type == "Continue") {             //�����Ⱥκ�
                var startTime = new Date();       //���⼭�����߰��Ⱥκ�
                switch (this.unit) {
                    case "s": startTime.setTime(this.now() - this.timeField.value * 1000); break; //continue������ stop�Ѻκп������ʹٽý���
                }
                this.tStarted = startTime.getTime();       //������� 
                this.resume();
				stop_flag = true;
            }
            else
                eval("this." + type.toLowerCase() + "()");
        }
        function StopWatch_now() {
            var timeNow = new Date();
            return timeNow.getTime();
        }
        function StopWatch_refresh() {
            var tElapsed = this.now() - this.tStarted;
            switch (this.unit) {
                case "s": this.timeField.value = Math.floor(tElapsed / 1000); break; // seconds ī��Ʈ ����� �κ�
            }
        }


		//���� �κ�
var wnd,Shuffled=false;

function ssplit(dc,istr)
{
  slist = new Array();
  
  inx=0;
  pix=0;
  tstr=istr;
  ac=0;

  while(1)
  {
     inx=tstr.indexOf(dc,1);
     if(inx == -1)
       {
          if(tstr.length>0)
            {
              slist[ac]=tstr;
            } 
          break;
       }
     slist[ac++]=tstr.substring(0,inx);
     tstr=tstr.substr(inx+1);
  }
  return slist;
}

function GetX(num)
{
  var rest=num-Math.floor(num/5)*5; 
  return (rest==0)?5:rest;
}

function GetY(num)
 {
    return Math.floor((num-1)/5)+1;
 }

function GetIndex(x,y)
 {
   return x+(y-1)*5;
 }

function IsComplete()
{
  var i=25, t=1;
  while (i>0)
  {
    str=document.images["i"+i].src;
    if(i>9)//�ǹ̴�?
       str=str.substring(str.length-6, str.length-4);
    else
       str=str.substring(str.length-5, str.length-4);
    t=t&&(i==Math.round(str));
    i--; 
  }
  return t&&Shuffled;
}

function NewDir(p)
{
  var dir;

  if ((p==2)||(p==3) || (p==4) ) dir=(Math.floor(Math.random()+0.5)==0)?-1:1;
  else dir=(p==1)?1:-1;
  return (p+dir);
}

function NewMove (num)
{
  var x,y;

  x=GetX(num);
  y=GetY(num);
  if (Math.floor(Math.random()+0.5)==0) x=NewDir(x);
     else y=NewDir(y);
  return GetIndex(x,y);
}

function Shuffle()
 {
  var A=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25);
  var iter,i,str,num,numnew,numold;

  iter=Math.floor(Math.random()*200+0.5)+100;
  numold=25;

  for (i=1;i<iter;i++)
  {
    numnew=NewMove(numold);
    A[numold-1]=A[numnew-1];
    A[numnew-1]=25;
    numold=numnew;
  }

  for (i=1;i<26;i++)
  {
    num=A[i-1];
    str="";
    document.images["i"+i].src=str+num+".gif";
  }
  Shuffled=true;
}

function ActiveImage(num)
{
 var x,y,i,j,flag,str,str0,num1,num0;
 
 if(stop_flag == false)	return;
  str0=document.images["i"+num].src;
  ss=new ssplit("/",str0);
  str0=ss[ss.length-1];
  if (str0=="25.gif") return;

  x=GetX(num);
  y=GetY(num);
  flag=0;
  num0=0;

  for (i=-1;i<2;i++)
  for (j=-1;j<2;j++)
  {
    num1=GetIndex(i+x,j+y);
    if (num1!=num)
      if (((x+i)>0)&&((x+i)<6)&&((y+j)>0)&&((y+j)<6))
        if (Math.abs(i*j)!=1)
        {
          str=document.images["i"+num1].src;
          ss=new ssplit("/",str);
          str=ss[ss.length-1];
          if (str=="25.gif") {flag=1;num0=num1;}
        }
  }
  if (flag==1)
   {
    document.images["i"+num0].src=str0;
    document.images["i"+num].src="25.gif";
   }
  if (IsComplete())
  {
    alert("                   Congratulations!");
	stopWatch.finish(); 
    Shuffled=false;
  }
}