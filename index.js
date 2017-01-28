_KSM = {

    draw : function (left, right, height, width) {
        var canvas = document.querySelector('#draw');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');

            context.strokeStyle = 'gold';
            context.fillStyle = 'pink';
            context.fillRect(left, right, height, width);
            context.strokeRect(left, right, height, width);
        }
    }
};

_KSM.draw();


