var mars = null;
var orbit = null;
var ox, oy = 0;


var plotFirst90Degs = function() {
	window.setTimeout( console.log("inside plotFirst90Degs"), 4000);
		
	mars = $(".mars");
	orbit = $(".orbit");
	var ellipseHeight = (266 / 2);// - 13;
	var ellipseWidth = (474 / 2);// -13;
	var rad90deg = parseFloat((Math.PI / 2).toFixed(6));
	var springSummerStepIncr = parseFloat(((Math.PI / 2) / 199).toFixed(6));
	//var a = 0;
	mars.css({fontSize : 0}).animate({ fontSize: 90 }, {
		duration: 2500,
		easing: "linear",
		step: function(now, fx) {
			var a = now /  57.296;
			//a += springSummerStepIncr
			var x = ellipseWidth * Math.cos(a);
			var y = ellipseHeight * Math.sin(a);
			if(now < 1)
			{
				console.log("x: " + x + ", y: " + y);
			}
			$(this).css({left : x+ellipseWidth, top : y - ellipseHeight});
		}
	} )
	
	mars.css({fontSize : 90}).animate({ fontSize: 180 }, {
		duration: 2500,
		easing: "linear",
		step: function(now, fx) {
			var a = now /  57.296;
			//a += springSummerStepIncr
			var x = ellipseWidth * Math.cos(a);
			var y = ellipseHeight * Math.sin(a);
			$(this).css({left : x+ellipseWidth, top : y - ellipseHeight});
		}
	} )
	
	mars.css({fontSize : 180}).animate({ fontSize: 270 }, {
		duration: 2500,
		easing: "linear",
		step: function(now, fx) {
			var a = now /  57.296;
			//a += springSummerStepIncr
			var x = ellipseWidth * Math.cos(a);
			var y = ellipseHeight * Math.sin(a);
			$(this).css({left : x+ellipseWidth, top : y - ellipseHeight});
		}
	} )
	
	mars.css({fontSize : 270}).animate({ fontSize: 360 }, {
		duration: 2500,
		easing: "linear",
		step: function(now, fx) {
			var a = now /  57.296;
			//a += springSummerStepIncr
			var x = ellipseWidth * Math.cos(a);
			var y = ellipseHeight * Math.sin(a);
			$(this).css({left : x+ellipseWidth, top : y - ellipseHeight});
		}
	} )

	
};




