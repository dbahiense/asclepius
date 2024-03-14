import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Page() {
  return (
<>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TextField id="outlined-basic" label="Valor" size='small' variant="outlined" />
          <Button variant="contained">OK</Button>
        </Paper>
    </Grid>


</>
  );
}