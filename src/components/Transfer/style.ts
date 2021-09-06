import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useTransferStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '1.5em',
      marginTop: '1.5em',
      '& > *': {
        margin: '3px'
      }
    },

    component: {
      width: '100%',
      marginTop: '1.5em',
    },

    leaf: {

    },

    avatarComponent: {
      '& > path': {
        color: '#1EA7FD'
      }
    },

    avatarLeaf: {
      '& > path': {
        color: '#37D5D3',
      }
    }
  }),
);

export const useChipStyle = makeStyles(() =>
  createStyles({
    colorPrimary: {
      backgroundColor: '#36454f',
    }
  }),
);