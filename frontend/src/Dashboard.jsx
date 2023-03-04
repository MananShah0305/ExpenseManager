import React, { useState } from 'react'
import Navbar from './Navbar.jsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Collapse from '@mui/material/Collapse';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import axios from './axios.js'

const expense = [
    {
        value: 'Grocery',
        label: 'Grocery',
    },
    {
        value: 'Electronics',
        label: 'Electronics',
    },
    {
        value: 'Fashion',
        label: 'Fashion',
    },
    {
        value: 'Food',
        label: 'Food',
    },
];

export default function Dashboard() {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const [expanded, setExpanded] = useState(false);
    const [expenseModal, setExpenseModal] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        // console.log(expanded)
    };
    const handleExpenseModalOpen = () => {
        setExpenseModal(true);
    };

    const handleExpenseModalClose = () => setExpenseModal(false);

    return (
        <>
            <Navbar></Navbar>
            <div style={{ margin: '40px' }}>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={0}
                >
                    <Button
                        color="warning"
                        disabled={false}
                        size="large"
                        variant="contained"
                        onClick={handleExpenseModalOpen}
                        startIcon={<AddIcon />}
                    >
                        Add Expense
                    </Button>
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        '& > :not(style)': {
                            mx: 0,
                            my: 4
                        },
                    }}
                >
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    {
                                        expanded ?
                                            <Button size="medium" color='error' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>Close</Button>
                                            :
                                            <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                    }
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems='center'
                                    width='90vw'
                                    padding='20px'
                                    spacing={1}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-evenly"
                                        width='56vw'
                                        spacing={2}>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={1}>
                                            <Typography variant='h6'>Rice and grains</Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Button size="medium" color='error'>Delete Expense</Button>
                                                <Button size="medium" color='success'>Undo Delete</Button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <div style={{ height: '400px', width: '400px' }}>
                                        <Doughnut data={data} />;
                                    </div>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    width='90vw'
                                    spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    width='90vw'
                                    spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    width='90vw'
                                    spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    width='90vw'
                                    spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ minWidth: 450, padding: 1 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                spacing={4}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Typography variant="h5" component="div">
                                        Groceries
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='primary' variant='outlined' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    width='90vw'
                                    spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}>
                                        <Typography variant='h6'>Rice and grains</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={1}>
                                            <Button size="medium" color='error'>Delete Expense</Button>
                                            <Button size="medium" color='success'>Undo Delete</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            </div>
            {
                expenseModal &&
                <Modal show={expenseModal} onHide={handleExpenseModalClose} centered>
                    <Modal.Header closeButton style={{padding:'20px'}}>
                        <Modal.Title>Add Expense</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack
                            spacing={5}
                            padding='20px'
                        >
                            <TextField id="outlined-basic" label="Expense Name" variant="outlined" />
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                            <TextField
                                id="outlined-select-expense"
                                select
                                label="Expense Type"
                                defaultValue="Fashion"
                            >
                                {expense.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={3}
                            padding='10px'>
                            <Button variant="contained" color='error' onClick={handleExpenseModalClose}>
                                Close
                            </Button>
                            <Button variant="contained" color='success' onClick={handleExpenseModalClose}>
                                Save Changes
                            </Button>
                        </Stack>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}
