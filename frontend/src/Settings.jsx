import React, { useState } from 'react'
import Navbar from './Navbar.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Settings() {

    const [expenseModal, setExpenseModal] = useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleBudgetModalOpen = () => {
        setExpenseModal(true);
    };

    const handleBudgetModalClose = () => setExpenseModal(false);

    const handleSnackOpen = () => {
        handleBudgetModalClose()
        setOpenSnack(true);
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    return (
        <>
            <Navbar></Navbar>
            <div style={{ margin: '40px' }}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                >
                    <Button
                        color="warning"
                        disabled={false}
                        size="large"
                        variant="contained"
                        onClick={handleBudgetModalOpen}
                        startIcon={<AddIcon />}
                    >
                        Add a new category of expense
                    </Button>
                </Stack>
                <Stack
                    spacing={4}
                    margin='40px'
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Paper elevation={3} style={{backgroundColor:'#e8e8e8'}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                                padding='10px 20px'
                                backgroudColor='grey'
                            >
                                <span style={{width:'82vw',fontSize:'20px',fontWeight:'bold'}}>Grocery</span>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Paper elevation={3} style={{backgroundColor:'#e8e8e8'}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                                padding='10px 20px'
                                backgroudColor='grey'
                            >
                                <span style={{width:'82vw',fontSize:'20px',fontWeight:'bold'}}>Electronics</span>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Paper elevation={3} style={{backgroundColor:'#e8e8e8'}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                                padding='10px 20px'
                                backgroudColor='grey'
                            >
                                <span style={{width:'82vw',fontSize:'20px',fontWeight:'bold'}}>Fashion</span>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Paper elevation={3} style={{backgroundColor:'#e8e8e8'}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                                padding='10px 20px'
                                backgroudColor='grey'
                            >
                                <span style={{width:'82vw',fontSize:'20px',fontWeight:'bold'}}>Food</span>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                    >
                        <Paper elevation={3} style={{backgroundColor:'#e8e8e8'}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                                padding='10px 20px'
                                backgroudColor='grey'
                            >
                                <span style={{width:'82vw',fontSize:'20px',fontWeight:'bold'}}>Miscellaneous</span>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                </Stack>
                {
                    expenseModal &&
                    <Modal show={expenseModal} onHide={handleBudgetModalClose} centered>
                        <Modal.Header closeButton style={{ padding: '20px' }}>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Stack
                                spacing={5}
                                padding='20px'
                            >
                                <TextField id="outlined-basic" label="Category Name" variant="outlined" />
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        label="Max Budget"
                                    />
                                </FormControl>
                            </Stack>
                        </Modal.Body>
                        <Modal.Footer>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={3}
                                padding='10px'>
                                <Button variant="contained" color='error' onClick={handleBudgetModalClose}>
                                    Close
                                </Button>
                                <Button variant="contained" color='success' onClick={handleSnackOpen}>
                                    Save Changes
                                </Button>
                            </Stack>
                        </Modal.Footer>
                    </Modal>
                }
                <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                        Category added successfully!
                    </Alert>
                </Snackbar>
            </div >
        </>
    )
}
