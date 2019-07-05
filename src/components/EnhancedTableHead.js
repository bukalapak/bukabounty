import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  function tooltipWrapper(row) {
    if (row.tooltip) {
      return (
        <Tooltip title={row.tooltip}>
          <span>{row.label}</span>
        </Tooltip>
      )
    }
    return row.label;
  }

  return (
    <TableHead>
      <TableRow>
        {props.headers.map(row => (
          <TableCell
            key={row.id}
            size='small'
            align={row.numeric ? 'right' : 'left'}
            sortDirection={orderBy === row.id ? order : false}
            padding={row.disablePadding ? 'none' : 'default'}
          >
            {row.sortable
              ?
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  {tooltipWrapper(row)}
                </TableSortLabel>
              : tooltipWrapper(row)
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead >
  );
}

EnhancedTableHead.propTypes = {
  headers: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};
