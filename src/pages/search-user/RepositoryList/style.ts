import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainAccordion: {
    width: '100%',
    margin: '0.5rem 0px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 600,
  },
  accordionDetails: {
    gap: '0.5rem',
    marginLeft: '1rem',
  },
  accordionContentSummary: {
    '& .MuiAccordionSummary-content ': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
    },
  },
  githubColor: {
    backgroundColor: '#404852 !important',
  },
}));

export { useStyles };
