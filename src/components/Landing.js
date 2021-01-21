import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/icons/PeopleAlt';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import 'izitoast/dist/css/iziToast.min.css';
const iziToast = require('izitoast');






const Landing = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 250, margin: "100px auto " }

  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const initialValues = {
    player1: '',
    player2: ''
  }


  const notify = () => iziToast.success({
    message: 'Players Added Successfully! ',
    position: 'topRight'

  });

  const notify2 = () => iziToast.info({
    message: 'redirecting you to game',
    position: 'bottomRight'

  });


  const onSubmit = (values, props) => {

    setTimeout(() => {
      { notify(); }
    }, 1000);
    setTimeout(() => {
      { notify2(); }

      props.setSubmitting(false);

    }, 4000);

    const P1 = values.player1;
    const P2 = values.player1;
    <Redirect to='/game' />






  }
  const validationSchema = Yup.object().shape({
    player1: Yup.string().required("Name is required"), //.string() means it should be a string .string().email() means it shoyld be email format,,So nice isnt it??
    player2: Yup.string().required("Name is required")
  })


  const bStyle = { marginTop: "40px" }

  return (

    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <Icon /> </Avatar>
          <h3 >Add Players</h3>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
          {(props) => (

            <Form>
              <Field as={TextField} name="player1" label="player1" placeholder='ramesh ' fullWidth
                helperText={<ErrorMessage name="player1" />} />
              <Field as={TextField} name="player2" label="player2" placeholder='suresh ' fullWidth
                helperText={<ErrorMessage name="player1" />} />
              <Button type="submit" style={bStyle} color="primary" fullWidth variant="contained"> {props.isSubmitting ? "Loading" : "Start"}  </Button>

            </Form>

          )}

        </Formik>
      </Paper>
    </Grid >


  );

}

export default Landing;