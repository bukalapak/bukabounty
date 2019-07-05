import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import EnhancedTableHead from './EnhancedTableHead';

import Researchers from '../data/Researchers';
import Points from '../data/Points';

import { stableSort, getSorting } from '../utils/sort';

const headers = [
  { id: 'rank', label: 'Rank', numeric: false, sortable: true },
  { id: 'name', label: 'Name', numeric: false, sortable: true },
  { id: 'bounties_emergency', label: `Emergency`, tooltip: `${Points.emergency} points`, numeric: true, sortable: true, },
  { id: 'bounties_critical', label: `Critical`, tooltip: `${Points.critical} points`, numeric: true, sortable: true, },
  { id: 'bounties_high', label: `High`, tooltip: `${Points.high} points`, numeric: true, sortable: true, },
  { id: 'bounties_medium', label: `Medium`, tooltip: `${Points.medium} points`, numeric: true, sortable: true, },
  { id: 'points', label: 'Points', tooltip: 'Total', numeric: true, sortable: true, },
];

const researchers = Researchers.map((researcher) => {
  for (const severity of Object.keys(Points)) {
    researcher[`bounties_${severity}`] = researcher.bounties[severity];
  }
  researcher.points = Object.keys(researcher.bounties).reduce(
    (total, severity) => total + researcher.bounties[severity] * Points[severity], 0);
  return researcher;
});

let currentRank = 1;
for (const researcher of researchers.sort(getSorting('desc', 'points'))) {
  researcher.rank = currentRank++;
}

const rows = Object.freeze(researchers);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

export default function WallOfFame() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('rank');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  return (
    <>
      <Typography variant="body1" paragraph>
        Berikut adalah periset yang telah berpartisipasi dalam program BukaBounty dan melaporkan celah keamanan yang valid. Terima kasih telah bersama-sama membuat Bukalapak menjadi lebih baik!
      </Typography>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <EnhancedTableHead
                headers={headers}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(rows, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow tabIndex={-1} key={`wall-of-fame-${index}`}>
                        <TableCell>{row.rank}</TableCell>
                        <TableCell>{row.profile
                          ? <MuiLink color="primary" target="_blank" rel="noopener noreferrer" href={row.profile}>{row.name}</MuiLink>
                          : row.name
                        }
                        </TableCell>
                        <TableCell align="right">{row.bounties.emergency}</TableCell>
                        <TableCell align="right">{row.bounties.critical}</TableCell>
                        <TableCell align="right">{row.bounties.high}</TableCell>
                        <TableCell align="right">{row.bounties.medium}</TableCell>
                        <TableCell align="right">{row.points}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

    </>
  );
}
