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

    static _COLOR_STYLE_MAP = {
        [this.RED]: 'cell_red',
        [this.ORANGE]: 'cell_orange',
        [this.YELLOW]: 'cell_yellow',
        [this.GREEN]: 'cell_green',
        [this.LIGHT_BLUE]: 'cell_light_blue',
        [this.BLUE]: 'cell_blue',
        [this.INDIGO]: 'cell_indigo',
        [this.BROWN]: 'cell_brown'
    };

    static pickColor = (index) => {
        return this.COLORS[index];
    };

    static colorStyle = (color) => {
        return `cell_${color}`
    };

    static randomColor = () => {
        let color = undefined;
        while (color === undefined) {
            color = this.pickColor(Math.round(Math.random() * this.MAX_COLOR_COUNT));
        }
        return color;
    }

    static pickRandomColor = (colorArray) => {
        let index = Math.floor(Math.random() * colorArray.length);
        console.log("index " + index);
        return colorArray[index];
    }

};
