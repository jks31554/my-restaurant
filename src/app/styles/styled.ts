export const container = {
  display: 'flex',
};
export const section = {
  display: 'block',
  margin: 'auto',
};
export const aside = {
  display: 'flex',
  justifyContent: 'start',
  width: '60vw',
  height: '100vh',
  background: 'skyblue',
  border: '1px solid red',
};
import { palette } from 'src/app/styles/colors';
export const TitleStyle = {
  display: 'flex',
  fontSize: '40px',
  fontWeight: '700',
  justifyContent: 'center',
  color: palette['green-15'],
  marginBottom: '70px',
};

export const InputStyle = {
  width: '277px',
  height: '40px',
  display: 'flex',
  margin: '3px 0px 5px 0px',
};

export const ButtonStyle = {
  width: '285px',
  border: 'none',
  color: '#ffff',
  height: '40px',
  display: 'flex',
  fontSize: '20px',
  margin: '10px 0',
  cursor: 'pointer',
  fontWeight: '700',
  borderRadius: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  background: palette['green-15'],
};
