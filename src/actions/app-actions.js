
export default class AppActions {
    static CELL_CLICKED = "cell clicked";
    static DEBUG_ACTION = "debug action";
    static RESTART = "restart game";
    static ACTIVE_PANE_CHANGED = "active pane changed";
    static MISCLICKED_TIME_CHANGED = "misclicked time changed";
    static HEIGHT_CHANGED = "height changed";
    static WIDTH_CHANGED = "width changed";


    static cellClick = (colIndex, rowIndex) => {
        return {type: this.CELL_CLICKED, colIndex, rowIndex}
    };

    static restart = () => {
        return {type: this.RESTART}
    };


    static debugAction = (actionId) => {
        return {type: this.DEBUG_ACTION, actionId}
    };

    static misclickedTimeChanged = (misClickedCellsShowTime) => {
        return {type: this.MISCLICKED_TIME_CHANGED, misClickedCellsShowTime}
    };

    static activePaneChanged = (paneId) => {
        return {type: this.ACTIVE_PANE_CHANGED, paneId}
    };

    static heightChanged = (value) => {
        return {type: this.HEIGHT_CHANGED, value: value}
    };

    static widthChanged = (value) => {
        return {type: this.WIDTH_CHANGED, value: value}
    };
}
