//结构
function lineChart(option,element){


	var cvs = element.getContext("2d");
	var height = element.height;
	var width = element.width;

	var xStart = [40,40];
	var yEnd = [40,height-40];
	var stepWidth = (width-80) / (option.x.length-1);
	var stepHeight = (height-80) / (option.y.length-1);

	//竖线
	cvs.beginPath();

	for(var i =0;i<option.x.length;i++){

		cvs.moveTo(xStart[0],xStart[1]);
		cvs.lineTo(yEnd[0],yEnd[1]);

		cvs.font = "20px 微软雅黑";
		cvs.fillText(option.x[i],xStart[0]-13,yEnd[1]+20)

		xStart[0] += stepWidth;
		yEnd[0] += stepWidth;

	}
	
	cvs.stroke();
	cvs.closePath();


	//横线

	var xPy = [40,40];
	var yPy = [width-40,40]

	cvs.beginPath();

	for(var i=0;i<option.y.length;i++){
		cvs.moveTo(xPy[0],xPy[1]);
		cvs.lineTo(yPy[0],yPy[1]);

		xPy[1]+=stepHeight;
		yPy[1]+=stepHeight;

		cvs.font = "20px 微软雅黑";
		cvs.fillText(option.y[i],0, height-stepHeight*i-30 )

	}
	cvs.stroke();
	cvs.closePath();


	cvs.font = "16px 微软雅黑";
	cvs.fillText(option.uText,20,20 )



	//折线



	
	for(var i=0;i<option.data.length;i++){

		var item = option.data;
		for(var j=0;j<item[i].da.length;j++){

			cvs.beginPath();
			cvs.strokeStyle=item[i].color;

			cvs.moveTo(40+j*stepWidth, height-(height-80) * (item[i].da[j]/option.y[ option.y.length-1 ]) - 40);
			cvs.lineTo(40+(j+1)*stepWidth , height-(height-80) * (item[i].da[j+1]/option.y[ option.y.length-1 ]) - 40);
			 
			cvs.stroke();	
			cvs.closePath();


			cvs.beginPath();
			cvs.fillStyle="#fff";
			cvs.arc(40+j*stepWidth,height-(height-80) * (item[i].da[j]/option.y[ option.y.length-1 ]) - 40,10,0,2*Math.PI,false);
			cvs.stroke();	
			cvs.fill();
			cvs.closePath();

		}
	}


	



	//item[i].da[j]/option.y[ option.y.length-1 ]  比重
	//-40
	//height(height-80) * (item[i].da[j]/option.y[ option.y.length-1 ]) - 40




}