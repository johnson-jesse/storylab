import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useTransferStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '1rem',
            table: {
                borderSpacing: '0',
                border: '1px solid black',

                tr: {
                    '&:last-child': {
                        td: {
                            borderBottom: '0'
                        }
                    }
                },

                'th td': {
                    margin: 0,
                    padding: '0.5rem',
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',

                    '&:last-child': {
                        borderRight: 0
                    }
                },

                'tr:nth-child(even)': {
                    backgroundColor: '#dddddd'
                }
            }

        }
    }));
