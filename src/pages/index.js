import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';

import BugBounty from '../components/BugBounty';
import Scopes from '../components/Scopes';
import Updates from '../components/Updates';
import WallOfFame from '../components/WallOfFame';

const mainTabs = [
  {
    label: 'Bug Bounty',
    component: <BugBounty />,
  },
  {
    label: 'Cakupan',
    component: <Scopes />,
  },
  {
    label: 'Wall of Fame',
    component: <WallOfFame />,
  },
  {
    label: 'Pembaruan',
    component: <Updates />,
  }
];

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
  },
  component: {
    padding: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  function handleChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Helmet>

      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h5" noWrap>
              BukaBounty
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md">
        <Box my={4}>
          <Paper className={classes.paper}>
            <Tabs
              variant="scrollable"
              value={tabValue}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              {mainTabs.map((tab, index) => <Tab key={`main-tab-${index}`} label={tab.label} />)}
            </Tabs>
            <Typography component="div" className={classes.component}>
              {mainTabs[tabValue].component}
            </Typography>
          </Paper>
        </Box>
      </Container>

      <footer className={classes.footer}>
        <Box color="text.secondary" textAlign="center">
          <Typography variant="body2">
            &copy;{` 2020 `}
            <Link href="https://www.bukalapak.com" target="_blank" rel="noopener noreferrer">Bukalapak</Link>
            {` </> Red Team`}
          </Typography>
        </Box>
      </footer>
    </>
  );
}
