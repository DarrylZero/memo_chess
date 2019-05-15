
export default class AppActions {
    static CELL_CLICKED = "cell clicked";
    static DEBUG_ACTION = "debug action";
    static RESTART = "restart game";
    static AI_LEVEL_CHANGED = "ai level changed";
    static MISCLICKED_TIME_CHANGED = "misclicked time changed";
    static ACTIVE_PANE_CHANGED = "active pane changed";

    static cellClick = (colIndex, rowIndex) => {
        return {type: this.CELL_CLICKED, colIndex, rowIndex}
    };

    static restart = () => {
        return {type: this.RESTART}
    };


    static debugAction = (actionId) => {
        return {type: this.DEBUG_ACTION, actionId}
    };

    static aiLevelChanged = (level) => {
        return {type: this.AI_LEVEL_CHANGED, level}
    };

    static misclickedTimeChanged = (misClickedCellsShowTime) => {
        return {type: this.MISCLICKED_TIME_CHANGED, misClickedCellsShowTime}
    };

    static activePaneChanged = (paneId) => {
        return {type: this.ACTIVE_PANE_CHANGED, paneId}
    };


}
