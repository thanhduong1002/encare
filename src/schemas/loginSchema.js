import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passRegExp = /^[a-zA-Z0-9]{8,}$/;
export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .max(11, 'Your phone number must have at maximum 11 digits')
    .min(9, 'Your phone number has at least 9 digits')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Your password has at least 8 characters')
    .required('Required'),
  oldpass: Yup.string()
    .matches(passRegExp, 'Password is not valid')
    .min(8, 'Your password has at least 8 characters')
    .required('Required'),
  newpass: Yup.string()
    .matches(passRegExp, 'Password is not valid')
    .min(8, 'Your password has at least 8 characters')
    .required('Required'),
  confirmNewPass: Yup.string()
    .oneOf([Yup.ref('newpass'), null], 'Passwords must match')
    .required('Required'),
});
