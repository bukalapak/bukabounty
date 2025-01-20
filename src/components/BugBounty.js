import React from 'react';

import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Bounty() {
  return (
    <Typography component="div" align="justify">
      <Typography variant="h5" gutterBottom>
        Thank You for Supporting Our Bug Bounty Program
      </Typography>
      <Typography variant="body1" paragraph>
        We want to express our heartfelt gratitude to the security researchers, ethical hackers, and contributors who have helped us enhance the security of our products and services through our Bug Bounty Program.
      </Typography>
      <Typography variant="body1" paragraph>
        After careful consideration, we have decided to suspend the program for the time being, effective immediately. Reports already submitted will still be reviewed, and qualifying bounties will be processed, but no more reports will be accepted.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Commitment to Security
      </Typography>
      <Typography variant="body1" paragraph>
        Although the bug bounty program is suspended, our commitment to security remains as strong as ever. We will continue to actively monitor and improve our systems. If you discover a potential vulnerability, we encourage responsible disclosure by contacting us at <MuiLink color="primary" target="_blank" rel="noopener noreferrer" href="mailto:security@bukalapak.com">security@bukalapak.com</MuiLink>.
      </Typography>

      <Typography variant="body1" paragraph>
        Your contributions have been invaluable in strengthening the security of our products. We deeply appreciate your dedication and the trust you've placed in our program.
      </Typography>

      <Typography variant="body1" paragraph>
        Thank you for your support and collaboration.
      </Typography>
    </Typography>
  )
};
