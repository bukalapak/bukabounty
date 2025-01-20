import React from 'react';

import Typography from '@material-ui/core/Typography';

import Updates from '../data/Updates';

export default function ChangeLog() {
  return (
    <>
      <Typography variant="body1" paragraph>
        Any changes to the bug bounty program will be noted here.
      </Typography>

      {Updates.reverse().map(changelog => {
        return (
          <>
            <Typography variant="h5" gutterBottom>
              {changelog.date}
            </Typography>
            <ul>
              {changelog.changes.map(change => <li>{change}</li>)}
            </ul>
          </>
        )
      })}
    </>
  );
}
