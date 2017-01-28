_KSM = {

    drawOptions = {
      left: 10,
      right: 10,
      width: 100,
      height: 100,
      stroke: 'gold',
      fill: '#f32'
    },

    draw : function (left, right, height, width, stroke, fill) {
        var canvas = document.querySelector('#draw'),
            options = {};

        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            
            if (typeof left === 'object') {
              options = left;
            } else {
              
              options = {
                left: left,
                right: right,
                width: width,
                height: height,
                stroke, stroke,
                fill: fill
              };

            }

            context.strokeStyle = options.stroke;
            context.fillStyle = options.fill;
            context.fillRect(options.left, options.right, options.height, options.width);
            context.strokeRect( options.left, options.right, options.height, options.width);
        }
    }
};

_KSM.draw(20, 20, 200, 200, '#000', 'gold');
_KSM.draw(240, 40, 20, 20, 'red');
_KSM.draw(20, 240, 120, 120, 'teal', 'lime');
_KSM.draw(50, 80, 120, 120, '#f32', '#fe8');
_KSM.draw(300);
_KSM.draw({
  left: 60,
  right: 60,
  width: 120,
  height: 120,
  stroke: '#2e3',
  fill: '#e23'
});
