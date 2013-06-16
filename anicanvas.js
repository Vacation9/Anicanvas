//Developed by Vacation9, Released into the Public Domain
//Testing version, use anicanvas.min.js for production uses

function Anicanvas(canvas) {
    this.canvasObject = document.getElementById(canvas); //actual object (won't need much for our purposes but kept just in case)
    this.context = this.canvasObject.getContext('2d'); //this is what we'll be using most often
    this.carray = []; //make array of shapes + text for easy redrawing
    this.addShape = function (properties) {
        this.carray.push({shape: properties["shape"], props: properties});
        console.log(this.carray);
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
                    console.log(sv(shape['props']['x'],canvasObject.width/2));
                    console.log(sv(shape['props']['y'],canvasObject.height/2));
                    console.log(sv(shape['props']['radius'],10));
                    console.log(sv(shape['props']['sAngle'],sAngle));
                    canvas.arc(sv(shape['props']['x'],canvasObject.width/2), sv(shape['props']['y'],canvasObject.height/2), sv(shape['props']['radius'],10), sv(shape['props']['sAngle'],sAngle), sv(shape['props']['eAngle'],eAngle), sv(shape['props']['counterclockwise'],false));
                    canvas.fillStyle = shape['fillStyle'] || 'black';
                    canvas.fill();
                    canvas.lineWidth = sv(shape['lineWidth'], 0);
                    canvas.strokeStyle = shape['strokeStyle'] || 'grey';
                    canvas.stroke();
                },
            rectangle: function(width, height){
                    canvas.beginPath();
                    console.log(shape);
                    canvas.rect(shape['props']['x'] || canvasObject.width/2, shape['props']['y'] || canvasObject.height/2, shape['props']['width'] || width, shape['props']['height'] || height);
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