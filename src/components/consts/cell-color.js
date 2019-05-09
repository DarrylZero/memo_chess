

export default class CellColor {


    static RED = 10;
    static ORANGE = 20;
    static YELLOW = 30;
    static GREEN = 40;
    static LIGHT_BLUE = 50;
    static BLUE = 60;
    static INDIGO = 70;

    static COLORS = [
        this.RED,
        this.ORANGE,
        this.YELLOW,
        this.GREEN,
        this.LIGHT_BLUE,
        this.BLUE,
        this.INDIGO
    ];
    static MAX_COLOR_COUNT = this.COLORS.length;

    static _pickColor = (index) => {
        return this.COLORS[index];
    }

    static randomColor = () => {
        var color = this._pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        while(color === undefined) {
            color = this._pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        }
        return color;
    }

};
