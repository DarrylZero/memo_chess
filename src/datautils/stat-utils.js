import CellStatus from "../consts/cell-status"

const {CELL_STATUS_REVEALED} = CellStatus;

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
  let reduce = field[0].reduce((prev, cell) => {
        return {
          total: prev.total + 1,
          open: prev.open + (cell.status === CELL_STATUS_REVEALED ? 1 : 0)
        }
      },
      {
        total: 0,
        open: 0
      });

  reduce.toString();

}

