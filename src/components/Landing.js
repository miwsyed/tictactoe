import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/icons/PeopleAlt';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { PropTypes } from 'react';
import { notify, notify2 } from './iziNotify.js'
import { bStyle, paperStyle, avatarStyle } from './extraStyling.js'
import { useHistory } from "react-router-dom";
import { validationSchema } from './Validation.js';



const Landing = ({ players, setPlayers }) => {

  const history = useHistory();


  const onSubmit = (values, props) => {

    props.setSubmitting(false);
    console.log(values.player1);
    setPlayers({ player1: values.player1, player2: values.player2 });
    history.push('/game');
  }



  return (

    <div className="Landing">
      <Grid >

        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}> <Icon /> </Avatar>
            <h3 >Add Players</h3>
          </Grid>
          <Formik initialValues={players} onSubmit={onSubmit} validationSchema={validationSchema}  >
            {(props) => (
              <Form>
                <Field as={TextField} name="player1" label="player1" placeholder='ramesh ' fullWidth helperText={<ErrorMessage name="player1" />} />
                <Field as={TextField} name="player2" label="player2" placeholder='suresh ' fullWidth helperText={<ErrorMessage name="player1" />} />
                <Button type="submit" style={bStyle} color="primary" fullWidth variant="contained"> {props.isSubmitting ? "Loading" : "Start"}  </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid >
    </div>



  );

}

export default Landing;