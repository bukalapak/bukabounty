function desc(a, b, orderBy, orderBySecondary) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  if (orderBySecondary) {
    return -desc(a, b, orderBySecondary);
  }
  return 0;
}

export function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order, orderBy, orderBySecondary) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy, orderBySecondary) : (a, b) => -desc(a, b, orderBy, orderBySecondary);
}
