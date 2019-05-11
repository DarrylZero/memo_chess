
export default class AppActions {
    static CELL_CLICKED = "cell clicked";
    static DEBUG_ACTION = "debug action";
    static RESTART = "restart game";

    static cellClick = (colIndex, rowIndex) => {
        return {action: this.CELL_CLICKED, colIndex, rowIndex}
    };

    static restart = () => {
        return {action: this.RESTART}
    };


    static debugAction = (actionId) => {
        return {action: this.DEBUG_ACTION, actionId}
    };

}
