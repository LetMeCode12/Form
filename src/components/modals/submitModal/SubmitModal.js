import React from "react";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { compose } from "redux";
import { connectModal } from "redux-modal";


  
  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      whiteSpace:"pre-wrap",
    },
  }));

function SubmitModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
  
    const {data, handleHide,show} = props;
    return (
        <Modal
            open={show}
            onClose={handleHide}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
               {JSON.stringify(data)}
            </div>
          
        </Modal>
    );

}


export default compose(
    connectModal({ name: 'submitModal' })
)(SubmitModal);