var Koo = {
				name : "koo",
				age : 25,
				hometown: "Beijing"
			}
			var John= {
				name : "john",
				age : 23,
				hometown: "Canada"
			}
			var Amy = {
				name : "koo",
				age : 27,
				hometown: "America"
			}
			var Choi = {
				name : "choi",
				age : 21,
				hometown: "Korea"
			}
			var Danaka = {
				name : "danaka",
				age : 19,
				hometown: "Japan"
			}
			
			function Search(){
				alert("Koo\nname : "+Koo.name+ "\nage : "+Koo.age+"\nhometown : "+Koo.hometown+
					  "\nJohn\nname : "+John.name+ "\nage : "+John.age+"\nhometown : "+John.hometown+
					  "\n Amy\nname : "+Amy.name+ "\nage : "+Amy.age+"\nhometown : "+Amy.hometown+
					  "\nChoi\nname : "+Choi.name+ "\nage : "+Choi.age+"\nhometown : "+Choi.hometown+
					  "\nDanaka\nname : "+Danaka.name+ "\nage : "+Danaka.age+"\nhometown : "+Danaka.hometown				 
					 );
			}
			
			function PartSearch(){
				
				var flag = -1;
				
				//koo : 0   John : 1   Amy : 2   Choi : 3   Danaka : 4      Something string : 5
				
				if(document.Person.NameText.value == Koo.name)			flag=0;		
				else if(document.Person.NameText.value == John.name)	flag=1;
				else if(document.Person.NameText.value == Amy.name)		flag=2;
				else if(document.Person.NameText.value == Choi.name)	flag=3;
				else if(document.Person.NameText.value == Danaka.name)	flag=4;
				else if(document.Person.NameText.value != "")			flag=5;
		
				if(document.Person.HomeText.value == Koo.hometown && (flag==0 || flag==-1))			flag=0;
				else if(document.Person.HomeText.value == John.hometown && (flag==1 || flag==-1))	flag=1;
				else if(document.Person.HomeText.value == Amy.hometown && (flag==2 || flag==-1))	flag=2;
				else if(document.Person.HomeText.value == Choi.hometown && (flag==3 || flag==-1))	flag=3;
				else if(document.Person.HomeText.value == Danaka.hometown && (flag==4 || flag==-1))	flag=4;
				else if(document.Person.HomeText.value != "")										flag=5;						
						
				if(document.Person.AgeText.value == Koo.age && (flag==0 || flag==-1))				flag=0;
				else if(document.Person.AgeText.value == John.age && (flag==1 || flag==-1))			flag=1;
				else if(document.Person.AgeText.value == Amy.age && (flag==2 || flag==-1))			flag=2;
				else if(document.Person.AgeText.value == Choi.age && (flag==3 || flag==-1))			flag=3;
				else if(document.Person.AgeText.value == Danaka.age && (flag==4 || flag==-1))		flag=4;
				else if(document.Person.AgeText.value != "")										flag=5;
				
				if(flag == 0)	
					alert("Koo\nname : "+Koo.name+ "\nage : "+Koo.age+"\nhometown : "+Koo.hometown);
				else if(flag == 1)
					alert("John\nname : "+John.name+ "\nage : "+John.age+"\nhometown : "+John.hometown);
				else if(flag == 2)
					alert("Amy\nname : "+Amy.name+ "\nage : "+Amy.age+"\nhometown : "+Amy.hometown);
				else if(flag == 3)
					alert("Choi\nname : "+Choi.name+ "\nage : "+Choi.age+"\nhometown : "+Choi.hometown);
				else if(flag == 4)
					alert("Danaka\nname : "+Danaka.name+ "\nage : "+Danaka.age+"\nhometown : "+Danaka.hometown);

				else{
					alert("false");
					return false;
				}

			}