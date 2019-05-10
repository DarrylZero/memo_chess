

export default class CellColor {


    static RED = "red";
    static ORANGE = "orange";
    static YELLOW = "yellow";
    static GREEN = "green";
    static LIGHT_BLUE = "light_blue";
    static BLUE = "blue";
    static INDIGO = "indigo";

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
        let color = this._pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        while(color === undefined) {
            color = this._pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        }
        return color;
    }

};
