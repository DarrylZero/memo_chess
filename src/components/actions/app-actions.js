
export default class AppActions {
    static CELL_CLICKED = "cell clicked";
    static DEBUG_ACTION = "debug action";
    static RESTART = "restart game";
    static AI_LEVEL_CHANGED = "ai level changed";
    static ACTIVE_PANE_CHANGED = "active pane changed";

    static cellClick = (colIndex, rowIndex) => {
        return {action: this.CELL_CLICKED, colIndex, rowIndex}
    };

    static restart = () => {
        return {action: this.RESTART}
    };


    static debugAction = (actionId) => {
        return {action: this.DEBUG_ACTION, actionId}
    };

    static aiLevelChanged = (level) => {
        return {action: this.AI_LEVEL_CHANGED, level}
    };

    static activePaneChanged = (paneId) => {
        return {action: this.ACTIVE_PANE_CHANGED, paneId}
    };


}
