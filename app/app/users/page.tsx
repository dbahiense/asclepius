import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


export default function Page() {
  return (
      <Grid container spacing={2}>
        <Grid item sm={12}>
            <TextField fullWidth id="" label="Responsável" size='small' variant="outlined" type='text' />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="CPF" size='small' variant="outlined" type='number'/>
        </Grid>
        
        <Grid item lg={12}>
            <TextField fullWidth id="" label="Identidade" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Celular" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="E-mail" size='small' variant="outlined" type='email'/>
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Gênero" size='small' variant="outlined" type='select'/>
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Nascimento" size='small' variant="outlined" type='date'/>
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Endereço" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Número" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Bairro" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Cidade" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Estado" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="País" size='small' variant="outlined" />
        </Grid>

        <Grid item lg={12}>
            <TextField fullWidth id="" label="Cadastro" size='small' variant="outlined" type='date' />
        </Grid>

      </Grid>
  );
}