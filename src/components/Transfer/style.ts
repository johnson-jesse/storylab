import { createStyles, makeStyles, Theme } from "@material-ui/core";

export type TransferStye = Record<"root" | "component" | "leaf", string>;
export const useTransferStyle = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '1.5em',
    marginTop: '1.5em',
    '& > *': {
      margin: '3px'
    }
  },

  branch: {
    width: '100%',
    marginTop: '1.5em'
  },

  leaf: {

  }
});

export const useLabelStyle = makeStyles({
  label: {
    color: (props: any) => props.isLive ? 'rgba(120, 120, 120, 1)' : 'rgba(120, 120, 120, 0.45)',
    fontWeight: (props: any) => props.isLive ? 'bold' : 'normal',
  },

  leaf: {
    color: 'white',
    '& > path': {
      color: '#37D5D3',
    }
  },

  branch: {
    color: 'white',
    '& > path': {
      color: '#1EA7FD'
    }
  }
});
