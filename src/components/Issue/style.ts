import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useIssueStyle = makeStyles(() =>
    createStyles({
        root: {
            padding: '1em'
        },

        table: {
            width: '100%',
            borderCollapse: 'collapse',

            '& td': {
                marginBottom: '1em',
                padding: '0.5em'
            },

            '& td:not(:last-child)': {
                borderRight: '1px solid black'
            },

            '& tr:nth-child(even)': {
                backgroundColor: '#f0f0f0'
            },
            
            '& tr:not(thead tr):hover': {
                backgroundColor: '#d9f4fc'
            }
        }
    }));
