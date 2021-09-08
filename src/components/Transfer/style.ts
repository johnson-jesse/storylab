import { createStyles, makeStyles, Theme } from "@material-ui/core";

export type TransferStye = Record<"root" | "component" | "leaf" | "avatarComponent" | "avatarLeaf", string>;

export const useTransferStyle = makeStyles(() =>
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
      // border: '1px solid orange',
      color: 'white',
      '& > path': {
        color: '#1EA7FD'
      }
    },

    avatarLeaf: {
      color: 'white',
      '& > path': {
        color: '#37D5D3',
      }
    }
  }),
);

export const useChipStyle = makeStyles(() =>
  createStyles({
    root: {
      // backgroundColor: ({ isLive }: { isLive: boolean }) => isLive ? '#36454f' : 'grey',
      // color: 'white'
    }
  }),
);