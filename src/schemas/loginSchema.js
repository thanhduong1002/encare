import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .max(11, 'Your phone number must have at maximum 11 digits')
    .min(10, 'Your phone number has at least 10 digits')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Your password has at least 6 characters')
    .required('Required'),
  oldpass: Yup.string()
    .min(6, 'Your password has at least 6 characters')
    .required('Required'),
  newpass: Yup.string()
    .min(6, 'Your password has at least 6 characters')
    .required('Required'),
  confirmNewPass: Yup.string()
    .oneOf([Yup.ref('newpass'), null], 'Passwords must match')
    .required('Required'),
});
