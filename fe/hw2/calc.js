

var A1 = 100;
			var A2 = 50;
			var B1 = 80;
			var B2 = 70;
			var C1 = 90;
			var C2 = 40;
			var D1 = 60;
			var D2 = 20;
			var E1 = 70;
			var E2 = 50;
			var F1 = 30;
			var F2 = 10;
			var G1 = 80;
			var G2 = 90;
			var H1 = 80;
			var H2 = 60;
			var H2 = 60;
			
			var result;
			
			var temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8;
			var arr = new Array();
			
			
			
			function Calc(a, b) {
				result = a/(a+b)*100;
				return result; 
			}

			function Round_1(){	
				if(document.round1.group1[0].checked == true)
				{	temp1 = Calc(A1,B2);	arr[0] = "1";	}
				else if(document.round1.group1[1].checked == true)
				{	temp1 = Calc(B2,A1);	arr[1] = "1";}
				if(document.round1.group2[0].checked == true)
				{	temp2 = Calc(C1,D2);	arr[2] = 1;}
				else if(document.round1.group2[1].checked == true)
				{	temp2 = Calc(D2,C1);	arr[3] = "1";}
				if(document.round1.group3[0].checked == true)
				{	temp3 =Calc(E1,F2);		arr[4] = "1";}
				else if(document.round1.group3[1].checked == true)
				{	temp3 = Calc(F2,E1);	arr[5] = "1";}
				if(document.round1.group4[0].checked == true)
				{	temp4 = Calc(G1,H2);	arr[6] = "1";}
				else if(document.round1.group4[1].checked == true)
				{	temp4 =  Calc(H2,G1);	arr[7] = "1";}
				if(document.round1.group5[0].checked == true)
				{	temp5 =Calc(A2,B1);		arr[8] = "1";}
				else if(document.round1.group5[1].checked == true)
				{	temp5 = Calc(B1,A2);	arr[9] = "1";}
				if(document.round1.group6[0].checked == true)
				{	temp6 =  Calc(C2,D1);	arr[10] = "1";}
				else if(document.round1.group6[1].checked == true)
				{	temp6 = Calc(D1,C2);	arr[11] = "1";}
				if(document.round1.group7[0].checked == true)
				{	temp7 = Calc(E2,F1); 	arr[12] = "1";}
				else if(document.round1.group7[1].checked == true)
				{	temp7 = Calc(F1,E2);	arr[13] = "1";}
				if(document.round1.group8[0].checked == true)
				{	temp8 = Calc(G2,H1);	arr[14] = "1";}
				else if(document.round1.group8[1].checked == true)
				{	temp8 =Calc(H1,G2);		arr[15] = "1";}
			
				alert("save 1round!");
			}
			function Round_2(){	
				if(document.round2.group1[0].checked == true && arr[0] == "1")
				{	
					if(arr[2] == "1"){		temp1 = 0.0001*temp1*temp2*Calc(A1,C1);	arr[0] = "2";	}
					else if(arr[3] == "1"){	temp1 = 0.0001*temp1*temp2*Calc(A1,D2);	arr[0] = "2";	}
				}
				else if(document.round2.group1[1].checked == true && arr[1] == "1")
				{	
					if(arr[2] == "1"){		temp1 = 0.0001*temp1*temp2*Calc(B2,C1);	arr[1] = "2";	}
					else if(arr[3] == "1"){	temp1 = 0.0001*temp1*temp2*Calc(B2,D2);	arr[1] = "2";	}
				}
				else if(document.round2.group1[2].checked == true && arr[2] == "1")
				{	
					if(arr[0] == "1"){		temp1 = 0.0001*temp1*temp2*Calc(C1,A1);	arr[2] = "2";	}
					else if(arr[1] == "1"){	temp1 = 0.0001*temp1*temp2*Calc(C1,B2);	arr[2] = "2";	}
				}
				else if(document.round2.group1[3].checked == true && arr[3] == "1")
				{	
					if(arr[0] == "1"){		temp1 = 0.0001*temp1*temp2*Calc(D2,A1);	arr[3] = "2";	}
					else if(arr[1] == "1"){	temp1 = 0.0001*temp1*temp2*Calc(D2,B2);	arr[3] = "2";	}
				}
				
				
				
				if(document.round2.group2[0].checked == true && arr[4] == "1")
				{	
					if(arr[2] == "1"){		temp2 = 0.0001*temp3*temp4*Calc(E1,G1);	arr[4] = "2";	}
					else if(arr[3] == "1"){	temp2 = 0.0001*temp3*temp4*Calc(E1,H2);	arr[4] = "2";	}
				}
				else if(document.round2.group2[1].checked == true && arr[5] == "1")
				{	
					if(arr[2] == "1"){		temp2 = 0.0001*temp3*temp4*Calc(F2,G1);	arr[5] = "2";	}
					else if(arr[3] == "1"){	temp2 = 0.0001*temp3*temp4*Calc(F2,H2);	arr[5] = "2";	}
				}
				else if(document.round2.group2[2].checked == true && arr[6] == "1")
				{	
					if(arr[0] == "1"){		temp2 = 0.0001*temp3*temp4*Calc(G1,E1);	arr[6] = "2";	}
					else if(arr[1] == "1"){	temp2 = 0.0001*temp3*temp4*Calc(G1,F2);	arr[6] = "2";	}
				}
				else if(document.round2.group2[3].checked == true && arr[7] == "1")
				{	
					if(arr[0] == "1"){		temp2 = 0.0001*temp3*temp4*Calc(H2,E1);	arr[7] = "2";	}
					else if(arr[1] == "1"){	temp2 = 0.0001*temp3*temp4*Calc(H2,F2);	arr[7] = "2";	}
				}
				
				
				if(document.round2.group3[0].checked == true && arr[8] == "1")
				{	
					if(arr[2] == "1"){		temp3 = 0.0001*temp5*temp6*Calc(B1,D1);	arr[8] = "2";	}
					else if(arr[3] == "1"){	temp3 = 0.0001*temp5*temp6*Calc(B1,C2);	arr[8] = "2";	}
				}
				else if(document.round2.group3[1].checked == true && arr[9] == "1")
				{	
					if(arr[2] == "1"){		temp3 = 0.0001*temp5*temp6*Calc(A2,D1);	arr[9] = "2";	}
					else if(arr[3] == "1"){	temp3 = 0.0001*temp5*temp6*Calc(A2,C2);	arr[9] = "2";	}
				}
				else if(document.round2.group3[2].checked == true && arr[10] == "1")
				{	
					if(arr[0] == "1"){		temp3 = 0.0001*temp5*temp6*Calc(D1,B1);	arr[10] = "2";	}
					else if(arr[1] == "1"){	temp3 = 0.0001*temp5*temp6*Calc(D1,A2);	arr[10] = "2";	}
				}
				else if(document.round2.group3[3].checked == true && arr[11] == "1")
				{	
					if(arr[0] == "1"){		temp3 = 0.0001*temp5*temp6*Calc(C2,B1);	arr[11] = "2";	}
					else if(arr[1] == "1"){	temp3 = 0.0001*temp5*temp6*Calc(C2,A2);	arr[11] = "2";	}
				}
				
				
				if(document.round2.group4[0].checked == true && arr[12] == "1")
				{	
					if(arr[2] == "1"){		temp4 = 0.0001*temp7*temp8*Calc(F1,H1);	arr[12] = "2";	}
					else if(arr[3] == "1"){	temp4 = 0.0001*temp7*temp8*Calc(F1,G2);	arr[12] = "2";	}
				}
				else if(document.round2.group2[1].checked == true && arr[13] == "1")
				{	
					if(arr[2] == "1"){		temp4 = 0.0001*temp7*temp8*Calc(E2,H1);	arr[13] = "2";	}
					else if(arr[3] == "1"){	temp4 = 0.0001*temp7*temp8*Calc(E2,G2);	arr[13] = "2";	}
				}
				else if(document.round2.group2[2].checked == true && arr[14] == "1")
				{	
					if(arr[0] == "1"){		temp4 = 0.0001*temp7*temp8*Calc(H1,F1);	arr[14] = "2";	}
					else if(arr[1] == "1"){	temp4 = 0.0001*temp7*temp8*Calc(H1,E2);	arr[14] = "2";	}
				}
				else if(document.round2.group2[3].checked == true && arr[15] == "1")
				{	
					if(arr[0] == "1"){		temp4 = 0.0001*temp7*temp8*Calc(G2,F1);	arr[15] = "2";	}
					else if(arr[1] == "1"){	temp4 = 0.0001*temp7*temp8*Calc(G2,E2);	arr[15] = "2";	}
				}
			
				alert("save 2round!");

			}
		
			function Round_3(){	
				if(document.round3.group1[0].checked == true && arr[0] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(A1,E1);	arr[0] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(A1,F2);	arr[0] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(A1,G1);	arr[0] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(A1,H2);	arr[0] = "3";	}
				}
				else if(document.round3.group1[1].checked == true && arr[1] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(B2,E1);	arr[1] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(B2,F2);	arr[1] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(B2,G1);	arr[1] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(B2,H2);	arr[1] = "3";	}
				}
				else if(document.round3.group1[2].checked == true && arr[2] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(C1,E1);	arr[2] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(C1,F2);	arr[2] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(C1,G1);	arr[2] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(C1,H2);	arr[2] = "3";	}
				}
				else if(document.round3.group1[3].checked == true && arr[3] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(D2,E1);	arr[3] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(D2,F2);	arr[3] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(D2,G1);	arr[3] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(D2,H2);	arr[3] = "3";	}
				}
				
				
				if(document.round3.group1[4].checked == true && arr[4] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(E1,A1);	arr[4] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(E1,B2);	arr[4] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(E1,C1);	arr[4] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(E1,D2);	arr[4] = "3";	}
				}
				else if(document.round3.group1[5].checked == true && arr[5] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(F2,A1);	arr[5] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(F2,B2);	arr[5] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(F2,C1);	arr[5] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(F2,D2);	arr[5] = "3";	}
				}
				else if(document.round3.group1[6].checked == true && arr[6] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(G1,A1);	arr[6] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(G1,B2);	arr[6] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(G1,G1);	arr[6] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(G1,D2);	arr[6] = "3";	}
				}
				else if(document.round3.group1[7].checked == true && arr[7] == "2")
				{
					if(arr[4] == "2"){		temp1 = 0.0001*temp1*temp2*Calc(H2,A1);	arr[7] = "3";	}
					else if(arr[5] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(H2,B2);	arr[7] = "3";	}
					else if(arr[6] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(H2,C1);	arr[7] = "3";	}
					else if(arr[7] == "2"){	temp1 = 0.0001*temp1*temp2*Calc(H2,D2);	arr[7] = "3";	}
				}
				
		
				
				
				
				
				
				
				if(document.round3.group2[0].checked == true && arr[8] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(B1,F1);	arr[8] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(B1,E2);	arr[8] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(B1,H1);	arr[8] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(B1,G2);	arr[8] = "3";	}
				}
				else if(document.round3.group2[1].checked == true && arr[9] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(A2,F1);	arr[9] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(A2,E2);	arr[9] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(A2,H1);	arr[9] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(A2,G2);	arr[9] = "3";	}
				}
				else if(document.round3.group2[2].checked == true && arr[10] == "2")
				{
					if(arr[4] == "2"){		temp2 =0.0001* temp3*temp4*Calc(D1,F1);	arr[10] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(D1,E2);	arr[10] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(D1,H1);	arr[10] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(D1,G2);	arr[10] = "3";	}
				}
				else if(document.round3.group2[3].checked == true && arr[11] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(E2,F1);	arr[11] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(E2,E2);	arr[11] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(E2,H1);	arr[11] = "3";	}
					else if(arr[7] == "2"){	temp2 =0.0001* temp3*temp4*Calc(E2,G2);	arr[11] = "3";	}
				}
				
				
				if(document.round3.group2[4].checked == true && arr[12] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(F1,B1);	arr[12] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(F1,A2);	arr[12] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(F1,D1);	arr[12] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(F1,C2);	arr[12] = "3";	}
				}
				else if(document.round3.group2[5].checked == true && arr[13] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(G2,B1);	arr[13] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,A2);	arr[13] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,D1);	arr[13] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,C2);	arr[13] = "3";	}
				}
				else if(document.round3.group2[6].checked == true && arr[14] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(H1,B1);	arr[14] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(H1,A2);	arr[14] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(H1,D1);	arr[14] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(H1,C2);	arr[14] = "3";	}
				}
				else if(document.round3.group2[7].checked == true && arr[15] == "2")
				{
					if(arr[4] == "2"){		temp2 = 0.0001*temp3*temp4*Calc(G2,B1);	arr[15] = "3";	}
					else if(arr[5] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,A2);	arr[15] = "3";	}
					else if(arr[6] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,D1);	arr[15] = "3";	}
					else if(arr[7] == "2"){	temp2 = 0.0001*temp3*temp4*Calc(G2,C2);	arr[15] = "3";	}
				}
				
					alert("save 3round!");
			}
			
			function Round_4(){	
				if(document.round4.group1[0].checked == true && arr[0] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(A1,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(A1,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A1,G2);}
				}
				if(document.round4.group1[1].checked == true && arr[1] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(B2,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(B2,A2);}
					else if(arr[10] == "3"){	temp1 =0.0001* temp1*temp2*Calc(B2,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B2,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B2,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B2,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B2,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B2,G2);}
				}
				if(document.round4.group1[2].checked == true && arr[2] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(C1,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(C1,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C1,G2);}
				}
				if(document.round4.group1[2].checked == true && arr[2] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(D2,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(D2,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D2,G2);}
				}
			
				if(document.round4.group1[3].checked == true && arr[3] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(E1,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(E1,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E1,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E1,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E1,F1);}
					else if(arr[13] == "3"){	temp1 =0.0001* temp1*temp2*Calc(E1,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E1,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E1,G2);}
				}
			
				if(document.round4.group1[4].checked == true && arr[4] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(F2,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(F2,A2);}
					else if(arr[10] == "3"){	temp1 =0.0001*temp1*temp2*Calc(F2,D1);}
					else if(arr[11] == "3"){	temp1 =0.0001* temp1*temp2*Calc(F2,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F2,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F2,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F2,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F2,G2);}
				}
			
				if(document.round4.group1[5].checked == true && arr[5] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(G1,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(G1,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G1,G2);}
				}
			
				if(document.round4.group1[6].checked == true && arr[6] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(H2,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(H2,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,G2);}
				}
				
				
				
				
				if(document.round4.group1[7].checked == true && arr[7] == "3")
				{
					if(arr[8] == "3"){			temp1 = 0.0001*temp1*temp2*Calc(H2,B1);}
					else if(arr[9] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(H2,A2);}
					else if(arr[10] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,D1);}
					else if(arr[11] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,C2);}
					else if(arr[12] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,F1);}
					else if(arr[13] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,E2);}
					else if(arr[14] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,H1);}
					else if(arr[15] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H2,G2);}
				}
				
				
				
				
				
				if(document.round4.group1[8].checked == true && arr[8] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(B1,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,B2);}
					else if(arr[2] == "3"){	temp1 =0.0001* temp1*temp2*Calc(B1,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(B1,H2);}
				}
				
				if(document.round4.group1[9].checked == true && arr[9] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(A2,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(A2,H2);}
				}
				if(document.round4.group1[10].checked == true && arr[10] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(D1,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(D1,H2);}
				}
				if(document.round4.group1[11].checked == true && arr[11] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(C2,A1);}
					else if(arr[1] == "3"){	temp1 =0.0001* temp1*temp2*Calc(C2,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C2,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C2,D2);}
					else if(arr[4] == "3"){	temp1 =0.0001*temp1*temp2*Calc(C2,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C2,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C2,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(C2,H2);}
				}
				if(document.round4.group1[12].checked == true && arr[12] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(F1,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F1,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F1,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F1,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F1,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(F1,F2);}
					else if(arr[6] == "3"){	temp1 =0.0001* temp1*temp2*Calc(F1,G1);}
					else if(arr[7] == "3"){	temp1 =0.0001* temp1*temp2*Calc(F1,H2);}
				}
				if(document.round4.group1[13].checked == true && arr[13] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(E2,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(E2,H2);}
				}
				if(document.round4.group1[14].checked == true && arr[14] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(H1,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,C1);}
					else if(arr[3] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,E1);}
					else if(arr[5] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,F2);}
					else if(arr[6] == "3"){	temp1 =0.0001*temp1*temp2*Calc(H1,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(H1,H2);}
				}
				if(document.round4.group1[15].checked == true && arr[15] == "3")
				{
					if(arr[0] == "3"){		temp1 = 0.0001*temp1*temp2*Calc(G2,A1);}
					else if(arr[1] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G2,B2);}
					else if(arr[2] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G2,C1);}
					else if(arr[3] == "3"){	temp1 =0.0001* temp1*temp2*Calc(G2,D2);}
					else if(arr[4] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G2,E1);}
					else if(arr[5] == "3"){	temp1 =0.0001*temp1*temp2*Calc(G2,F2);}
					else if(arr[6] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G2,G1);}
					else if(arr[7] == "3"){	temp1 = 0.0001*temp1*temp2*Calc(G2,H2);}
				}
				alert(temp1+"%");			
			}
			