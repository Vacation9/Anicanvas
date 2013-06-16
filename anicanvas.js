//Developed by Vacation9, Released into the Public Domain
//Testing version, use anicanvas.min.js for production uses

function Anicanvas(canvas) {
    this.canvasObject = document.getElementById(canvas); //actual object (won't need much for our purposes but kept just in case)
    this.context = this.canvasObject.getContext('2d'); //this is what we'll be using most often
    this.carray = []; //make array of shapes + text for easy redrawing
    this.addShape = function (properties) {
        this.carray.push({id:properties['id'], shape: properties["shape"], props: properties});
        AniHandler.redraw(this.context, this.carray, this.canvasObject);
    }
}

//Anicanvas handler definition (not intended to be used publicly)
var AniHandler =
{
    draw: function(shape, canvas, canvasObject) {
        var sv = function(value, defaultValue) {
            return typeof(value) != 'undefined' ? value : defaultValue; //Bit of hacking around to return x if defined, else a default value
        }
        var defaults = {
            arc: function(sAngle, eAngle){
                    canvas.beginPath();
                    canvas.arc(sv(shape['props']['x'],canvasObject.width/2), sv(shape['props']['y'],canvasObject.height/2), sv(shape['props']['radius'],10), sv(shape['props']['sAngle'],sAngle), sv(shape['props']['eAngle'],eAngle), sv(shape['props']['counterclockwise'],false));
                    var fillStyle = canvas.fillStyle;
                    var strokeStyle = canvas.strokeStyle;
                    var lineWidth = canvas.lineWidth;
                    canvas.fillStyle = shape['fillStyle'] || fillStyle;
                    canvas.fill();
                    canvas.lineWidth = sv(shape['lineWidth'], lineWidth);
                    canvas.strokeStyle = shape['strokeStyle'] || strokeStyle;
                    canvas.stroke();
                    canvas.fillStyle = fillStyle;
                    canvas.strokeStyle = strokeStyle;
                    canvas.lineWidth = lineWidth;
                },
            rectangle: function(width, height){
                    canvas.beginPath();
                    canvas.rect(sv(shape['props']['x'],canvasObject.width/2), sv(shape['props']['y'],canvasObject.height/2), sv(shape['props']['width'],width), sv(shape['props']['height'],height));
                    canvas.fillStyle = shape['props']['fillStyle'] || 'black';
                    canvas.fill();
                    canvas.lineWidth = shape['props']['lineWidth'] || 0;
                    canvas.strokeStyle = shape['strokeStyle'] || 'grey';
                    canvas.stroke();
                }
        }
        switch (shape["shape"])
        {
            case "circle":
                console.log("circle");
                defaults.arc(0,2 * Math.PI);
                break;
            case "semicircle":
                console.log("semicircle");
                defaults.arc(0,Math.PI);
                break;
            case "arc":
                console.log("arc");
                defaults.arc(0,Math.PI/2);
                break;
            case "rectangle":
                console.log("rect");
                defaults.rectangle(20, 10);
                break;
        }
    },
    redraw: function(canvas, carray, canvasObject) {
        canvas.clearRect(0, 0, canvasObject.width, canvasObject.height); //clear canvas - so attributes aren't lost, use this method instead of the simpler canvas.width = canvas.width
        for (var i=0; i<carray.length; i++) {
            console.log(carray[i]);
            AniHandler.draw(carray[i], canvas, canvasObject); //for each shape redraw the shape
        }
    }
}