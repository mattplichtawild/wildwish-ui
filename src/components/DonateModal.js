import React from 'react'
import { Modal, Button, Header, Image } from 'semantic-ui-react'

// import Modal from '@material-ui/core/Modal'
// import { makeStyles } from '@material-ui/core/styles';
// import DonateForm from './DonateForm'
// import { Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//     button: {
//       // backgroundColor: 'blue'
//     }
//   }));

export default function DonateModal(props) {

    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}
// function DonateModal(props) {
//   const [open, setOpen] = React.useState(false);
//   const classes = useStyles();

//   function handleSubmit(e) {
//       alert('clicked');
//     e.preventDefault();
//     // whatever you want to do when user submits a form
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div className={classes.paper}>
//       <h2 id="simple-modal-title">Donate!</h2>
//       <p id="simple-modal-description">
//         Write some bullshit here
//       </p>
//       {/* <DonateModal /> */}
//         <DonateForm amount={props.amount} wish={props.data}/>
//     </div>
//   );

//   return (
//     <div>
//       <Button 
//         variant='contained'
//         color='primary'
//         onClick={handleOpen}
//         // Serializer is returning only active wishes so 'disabled' shouldn't be needed, but just in case
//         disabled={!props.data.active}
//       >
//         Donate ${props.amount}
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }

// export default DonateModal;