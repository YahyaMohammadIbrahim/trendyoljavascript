import React from 'react'
import Grid from '@material-ui/core/Grid';
import CompanyMenu from './menu';


export default function company() {
  return (
    <div><Grid container spacing={3}>
    <Grid item xs={3}>
      <CompanyMenu/>
    </Grid>
    <Grid item xs={9}>
      DDDD
    </Grid>
  </Grid>
  </div>
  )
}
