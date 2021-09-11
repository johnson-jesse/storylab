import { makeStyles, createStyles } from "@material-ui/core";

export const useTransferStyle = makeStyles(() =>
    createStyles({
        slWrapper: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            padding: '10px',
            rowGap: '5px',

            '& > *': {
                padding: '5px'
            },

            '& label': {
                gridColumn: 'span 1',
                '&.error::after': {
                    color: 'red',
                    content: '"→"',
                    float: 'right'
                }
            },

            '& input': {
                gridColumn: 'span 3'
            },

            '& select': {
                gridColumn: 'span 3'
            }
        },

        slSubmit: {
            gridColumn: 'span 3',
            marginTop: '10px'
        },

        slLoaderWrapper: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '10px'
        },

        slLoader: {
            position: 'unset',
            top: 'unset',
            left: 'unset',
            margin: 'unset',
            width: '15px',
            height: '15px'
        }
    })
);


// export const Style = styled.div`
//   .sl-wrapper {
//     display: grid;
//     grid-template-columns: auto auto auto auto;
//     padding: 10px;
//     row-gap: 5px; 
//   }

//   .sl-wrapper > * {
//       padding: 5px;
//   }

//   label {
//     grid-column: span 1;
//   }

//   label.error::after {
//     color: red;
//     content: "→";
//     float: right;
//   }

//   input {
//     grid-column: span 3;
//   }

//   select {
//     grid-column: span 3;
//   }

//   .sl-submit {
//     grid-column: span 3;
//     margin-top: 10px;
//   }

//   .sl-loader-wrapper {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     margin-top: 10px;
//   }

//   .sl-loader {
//     position: unset;
//     top: unset;
//     left: unset;
//     margin: unset;
//     width: 15px;
//     height: 15px;
//   }
// }
// `;

export const thing = '';