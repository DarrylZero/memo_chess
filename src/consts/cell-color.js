

export default class CellColor {


    static RED = "red";
    static ORANGE = "orange";
    static YELLOW = "yellow";
    static GREEN = "green";
    static LIGHT_BLUE = "light_blue";
    static BLUE = "blue";
    static INDIGO = "indigo";
    static BROWN = "brown";

    static COLORS = [
        this.RED,
        this.ORANGE,
        this.YELLOW,
        this.GREEN,
        this.LIGHT_BLUE,
        this.BLUE,
        this.INDIGO,
        this.BROWN
    ];
    static MAX_COLOR_COUNT = this.COLORS.length;

    static pickColor = (index) => {
        return this.COLORS[index];
    }

    static randomColor = () => {
        let color = this.pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        while(color === undefined) {
            color = this.pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        }
        return color;
    }

};
