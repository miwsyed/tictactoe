import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  player1: Yup.string().required("Name is required"), //.string() means it should be a string .string().email() means it shoyld be email format,,So nice isnt it??
  player2: Yup.string().required("Name is required")
})
