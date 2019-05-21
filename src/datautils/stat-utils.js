import CellStatus from "../consts/cell-status"

const {CELL_STATUS_REVEALED} = CellStatus;

const reducer = (prev, current) => {
    return {
        total: prev.total + current.total,
        open:  prev.open + current.open,
    }
};
const initialState = {total: 0, open: 0};

export function getStatistics(field) {
    const map = new Map(); // key = color
    for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
        const row = field[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const cell = row[colIndex];

            if (!map.get(cell.color)) {
                const initialValue = {
                    total: 0,
                    open: 0
                };

                map.set(cell.color, initialValue)
            }
            const colorItem = map.get(cell.color);
            colorItem.total = colorItem.total + 1;

            if (cell.status === CELL_STATUS_REVEALED) {
                colorItem.open = colorItem.open + 1;
            }
        }
    }

    const statistics = [];
    for (const [key, value] of map) {
        statistics.push({...value, color: key});
    }

    const totals = statistics.reduce((prev, current) => {
        return {
            color: null,
            total: prev.total + current.total,
            open: prev.open + current.open,
        }
    }, {
        color: null,
        total: 0,
        open: 0
    });

    return {
        statistics,
        totals
    };
}

export function isOver(field) {
    const result = field.map(row => row.map(cell => ({
        total: 1,
        open: (cell.status === CELL_STATUS_REVEALED ? 1 : 0)
    })).reduce(reducer, initialState)).reduce(reducer, initialState);
    return  result.total === result.open;
}

