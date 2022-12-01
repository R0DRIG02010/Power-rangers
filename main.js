
	var canvas = new fabric.Canvas('myCanvas');

	block_Y=1;
	block_X=1;

	block_image_Width = 350;
	block_image_Height = 430;

	var block_image_object= "";

	function new_image(getImage)
	{

		fabric.Image.fromURL(getImage, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_Width);
		block_image_object.scaleToHeight(block_image_Height);
		block_image_object.set({
		top:block_Y,
		left:block_X
		});
		canvas.add(block_image_object);
		});

	}

	window.addEventListener("keydown", myKeyDown);

	function myKeyDown(e)
	{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if(keyPressed == '82') 
		{
			new_image('rr1.png');
			console.log("r");
		}
		if(keyPressed == '86')
		{
			block_X = 200;
			new_image('gr.png');
			
		}
		
		if(keyPressed == '65')
		{
			block_X =350;
			new_image('yr.png');
		}
		if(keyPressed == '82')
		{
			block_X = 600;
			new_image('pr.png');
		}
		if(keyPressed == '73')
		{
			block_X = 700;
			new_image('br.png');
		}
		
	}

