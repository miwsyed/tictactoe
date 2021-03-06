import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/icons/PeopleAlt';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { PropTypes } from 'react';
import { notify, notify2 } from './iziNotify.js'
import { bStyle, paperStyle, avatarStyle, gridStyle } from './extraStyling.js'
import { useHistory } from "react-router-dom";
import { validationSchema } from './Validation.js';
import { green } from '@material-ui/core/colors';



const Landing = ({ players, setPlayers }) => {

  const history = useHistory();


  const onSubmit = (values, props) => {

    props.setSubmitting(false);
    if (values.player1 !== values.player2) {
      setPlayers({ player1: values.player1, player2: values.player2 });
      history.push('/game');
    }
    else {
      { notify2(); }
      history.push('/');
    }

  }



  return (

    <div className="Landing">
      <Grid style={gridStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}> <Icon /> </Avatar>
            <h2><span style={{ color: 'green' }}>XARAB</span> <span style={{ color: 'orange' }}>XERO</span></h2>
            <h3 >Add Players</h3>
          </Grid>
          <Formik style initialValues={players} onSubmit={onSubmit} validationSchema={validationSchema}  >
            {(props) => (
              <Form>
                <Field as={TextField} name="player1" label="player1" placeholder='ramesh ' fullWidth helperText={<ErrorMessage name="player1" />} />
                <Field as={TextField} name="player2" label="player2" placeholder='suresh ' fullWidth helperText={<ErrorMessage name="player1" />} />
                <Button className="ghost-round" type="submit" style={bStyle} color="primary" fullWidth variant="contained"> {props.isSubmitting ? "Loading" : "Start"}  </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid >
    </div >



  );

}

export default Landing;