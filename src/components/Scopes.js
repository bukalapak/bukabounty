import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { Domains, Vulnerabilities, OutOfScopeVulnerabilities } from '../data/Scopes';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(2),
  },
  stepperActions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  stepperActionsReset: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function Bounty() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Domain
      </Typography>
      <Typography variant="body1" paragraph>
        Semua konten yang berada pada domain berikut:
      </Typography>
      <Paper className={classes.paper}>
        <List>
          {Domains.map((scope, index) => {
            return (
              <ListItem key={`domains-${index}`} dense={true}>
                {scope.icon &&
                  <ListItemIcon>
                    {scope.icon}
                  </ListItemIcon>
                }
                <ListItemText
                  primary={scope.domain}
                  secondary={scope.description}
                />
              </ListItem>
            )
          })}
        </List>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Jenis celah keamanan
      </Typography>
      <Typography variant="body1" paragraph>
        Kami akan memeriksa semua laporan yang masuk. Akan tetapi, tidak semua laporan celah keamanan akan kami proses dan memperoleh imbalan karena tergantung pada risiko yang ditimbulkan.
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="Akan Diproses" />
        <Tab label="Tidak Diproses" />
      </Tabs>
      <Paper className={classes.paper}>
        <List>
          {(tabValue === 0 ? Vulnerabilities : OutOfScopeVulnerabilities).map((vulnerability, index) => {
            return (
              <ListItem key={`vulnerabilities-${tabValue}-${index}`} dense={true}>
                <ListItemText
                  primary={vulnerability.name}
                  secondary={vulnerability.description ? vulnerability.description : null}
                />
              </ListItem>
            )
          })}
        </List>
      </Paper>
    </>
  );
};
