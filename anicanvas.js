//Developed by Vacation9, Released into the Public Domain
//Testing version, use anicanvas.min.js for production uses

function Anicanvas(canvas)
{
    var canvasObject = canvas; //actual object (won't need much for our purposes but kept just in case)
    var context = canvas.getContext('2d'); //this is what we'll be using most often
    var carray = new Array(); //make array of shapes + text for easy redrawing
    function addShape(properties) {
        carray.push(shape(properties));
        AniHandler.redraw(canvas, carray);
    }
}

//Anicanvas handler definition (not intended to be used publicly)
var AniHandler =
{
    draw: function(shape, canvas) {
        switch (shape["shape"])
        {
            case "circle":
                canvas.beginPath();
                canvas.arc(shape['x'], shape['y'], shape['radius'], shape['sAngle'], shape['eAngle'], shape['counterclockwise']);
                canvas.fillStyle = shape['fillStyle'];
                canvas.fill();
                canvas.lineWidth = shape['lineWidth'];
                canvas.strokeStyle = shape['strokeStyle'];
                canvas.stroke();
        }
    }
    redraw: function(canvas, carray) {
        canvas.clearRect(0, 0, canvas.width, canvas.height); //clear canvas - so attributes aren't lost, use this method instead of the simpler canvas.width = canvas.width
        for (s in this.sarray) {
            this.draw(s); //for each shape redraw the shape
        }
    }
}

function shape(props)
{
    this.type = props["type"];
    this.props = props;
}