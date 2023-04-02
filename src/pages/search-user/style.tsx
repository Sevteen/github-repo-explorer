import styled from '@emotion/styled';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      // backgroundColor: 'red',
      color: 'white',
      margin: '5rem auto',
      display: 'flex !important',
      flexDirection: 'column',
      padding: '2rem 0px',
    },
    headWrap: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.6rem',
    },
    mainText: {
      fontSize: '70px',
      fontWeight: '700',
      color: '#22272E',
    },
    secondaryText: {
      marginTop: '1.3rem',
      fontSize: '24px',
      fontWeight: '400',
      color: '#22272E',
      width: '100%',
    },
    smallText: {
      marginTop: '1rem',
      fontSize: '16px',
      fontWeight: '400',
      color: '#22272E',
    },

    formWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '10px',
    },
    textInput: {
      '& .MuiInputBase-root': {
        borderRadius: '10px 0px 0px 10px',
        background: '#22272E',
        border: 'none',
        width: '100%',
        color: '#adbac7',
        '& ::placeholder': {
          color: '#f0f0f0',
        },
        '& :focus::placeholder': {
          color: '#adbac7',
        },
      },
    },
    buttonSubmit: {
      border: 'none !important',
      borderRadius: '0px 10px 10px 0px !important',
      height: '1.6rem !important',
      padding: '20px !important',
      // font: '400 1rem Poppins !important',
      width: '13rem !important',
      display: 'flex !important',
      alignItems: 'center !important',
      justifyContent: 'center !important',
      cursor: 'pointer !important',
      background: '#373E47 !important',
      color: 'rgb(245, 245, 245) !important',
    },
  });
});

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  color: #111111;
`;

export { useStyles, WrapperForm };
