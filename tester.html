<!DOCTYPE html>
<html>
<head>
<title>Testing client for anicanvas</title>
<script type="text/javascript">
//Developed by Vacation9, Released into the Public Domain
//Testing version, use anicanvas.min.js for production uses

function Anicanvas(canvas) {
    this.canvasObject = document.getElementById(canvas); //actual object (won't need much for our purposes but kept just in case)
    this.context = this.canvasObject.getContext('2d'); //this is what we'll be using most often
    this.carray = []; //make array of shapes + text for easy redrawing
    this.addShape = function (properties) {
        this.carray.push({id:properties.id, shape: properties.shape, props: properties});
        AniHandler.draw({id:properties.id, shape: properties.shape, props: properties}, this.context, this.canvasObject); //Don't need to redraw when adding shape
    }
    this.moveShape = function (id, x, y) {
        var s = AniHandler.findById(this.carray,id);
        if (typeof(x) == "string" && x.charAt(0) == "+") x = parseInt(x.substring(1))+s.props.x;
        if (typeof(x) == "string" && x.charAt(0) == "-") x = parseInt(x.substring(1))-s.props.x;
        if (typeof(y) == "string" && y.charAt(0) == "+") y = parseInt(y.substring(1))+s.props.y;
        if (typeof(y) == "string" && y.charAt(0) == "-") y = parseInt(y.substring(1))-s.props.y;
        s.props.x = x; //Set x and y to new values
        s.props.y = y;
        AniHandler.redraw(this.context, this.carray, this.canvasObject); //then redraw; simple!
    }
    this.animateShape = function (id, x, y, ms) {
        ms = ms/2; //To account for the time it takes to redraw, should implement better fix in the future
        var s = AniHandler.findById(this.carray,id);
        AniHandler.animate(id, x, y, (s.props.x-x)/ms, (s.props.y-y)/ms, s.props.x, s.props.y, this);
    }
}

//Anicanvas handler definition (not intended to be used publicly)
var AniHandler =
{
    animate: function(id, x, y, speedx, speedy, curx, cury, cobject) {
        if (Math.abs(curx-x)<0.5 && Math.abs(cury-y)<0.5) return;
        cobject.moveShape(id, curx, cury);
        setTimeout(function(){AniHandler.animate(id, x, y, speedx, speedy, curx-speedx, cury-speedy, cobject)}, 1);
    },
    findById: function(carray, id) {
        for (var i = 0; i < carray.length; i++) {
            if (carray[i].id === id) {
                return carray[i];
            }
        }
    },
    draw: function(shape, canvas, canvasObject) {
        var sv = function(value, defaultValue) {
            return typeof(value) != 'undefined' ? value : defaultValue; //Bit of hacking around to return x if defined, else a default value
        }
        var defaults = {
            arc: function(sAngle, eAngle){
                    canvas.beginPath();
                    canvas.arc(sv(shape.props.x,canvasObject.width/2), sv(shape.props.y,canvasObject.height/2), sv(shape.props.radius,10), sv(shape.props.sAngle,sAngle), sv(shape.props.eAngle,eAngle), sv(shape.props.counterclockwise,false));
                    var fillStyle = canvas.fillStyle;
                    var strokeStyle = canvas.strokeStyle;
                    var lineWidth = canvas.lineWidth;
                    canvas.fillStyle = shape.props.color || fillStyle;
                    canvas.fill();
                    canvas.lineWidth = sv(shape.props.strokeWidth, lineWidth);
                    canvas.strokeStyle = shape.props.stroke || strokeStyle;
                    canvas.stroke();
                    canvas.fillStyle = fillStyle;
                    canvas.strokeStyle = strokeStyle;
                    canvas.lineWidth = lineWidth;
                },
            rectangle: function(width, height){
                    canvas.beginPath();
                    canvas.rect(sv(shape.props.x,canvasObject.width/2), sv(shape.props.y,canvasObject.height/2), sv(shape.props.width,width), sv(shape.props.height,height));
                    var fillStyle = canvas.fillStyle;
                    var strokeStyle = canvas.strokeStyle;
                    var lineWidth = canvas.lineWidth;
                    canvas.fillStyle = shape.props.color || fillStyle;
                    canvas.fill();
                    canvas.lineWidth = sv(shape.props.strokeWidth, lineWidth);
                    canvas.strokeStyle = shape.props.stroke || strokeStyle;
                    canvas.stroke();
                    canvas.fillStyle = fillStyle;
                    canvas.strokeStyle = strokeStyle;
                    canvas.lineWidth = lineWidth;
                }
        }
        switch (shape["shape"])
        {
            case "circle":
                defaults.arc(0,2 * Math.PI);
                break;
            case "semicircle":
                defaults.arc(0,Math.PI);
                break;
            case "arc":
                defaults.arc(0,Math.PI/2);
                break;
            case "rectangle":
                defaults.rectangle(20, 10);
                break;
        }
    },
    redraw: function(canvas, carray, canvasObject) {
        canvas.clearRect(0, 0, canvasObject.width, canvasObject.height); //clear canvas - so attributes aren't lost, use this method instead of the simpler canvas.width = canvas.width
        for (var i=0; i<carray.length; i++) {
            AniHandler.draw(carray[i], canvas, canvasObject); //for each shape redraw the shape
        }
    }
}
</script>
</head>
<body>
<canvas id="testCanvas" width="200" height="200"></canvas>
<script>
    var c = new Anicanvas('testCanvas');
    c.addShape({id:"circle", shape:"circle", x:50, y:20, radius:30});
    c.animateShape("circle",150,150,1000);
</script>
</body>
</html>
