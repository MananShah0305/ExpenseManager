import React from 'react'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Navbar from './Navbar.jsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonStyle from '@mui/material-next/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Collapse from '@mui/material/Collapse';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Dashboard() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    <ButtonStyle
                        color="primary"
                        disabled={false}
                        size="large"
                        variant="elevated"
                    >
                        Add Expense
                    </ButtonStyle>
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
                                        Rice and grains
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='error'>Delete Expense</Button>
                                    <Button size="medium" color='success'>Undo Delete</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        {/* <CardActions>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                <Button variant="filledTonal" size="medium">Delete Expense</Button>
                                <Button variant="filledTonal" size="medium">Undo Delete</Button>
                            </Stack>
                        </CardActions> */}
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
                                        Rice and grains
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='error'>Delete Expense</Button>
                                    <Button size="medium" color='success'>Undo Delete</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        {/* <CardActions>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                <Button variant="filledTonal" size="medium">Delete Expense</Button>
                                <Button variant="filledTonal" size="medium">Undo Delete</Button>
                            </Stack>
                        </CardActions> */}
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
                                        Rice and grains
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='error'>Delete Expense</Button>
                                    <Button size="medium" color='success'>Undo Delete</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        {/* <CardActions>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                <Button variant="filledTonal" size="medium">Delete Expense</Button>
                                <Button variant="filledTonal" size="medium">Undo Delete</Button>
                            </Stack>
                        </CardActions> */}
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
                                        Rice and grains
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='error'>Delete Expense</Button>
                                    <Button size="medium" color='success'>Undo Delete</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        {/* <CardActions>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                <Button variant="filledTonal" size="medium">Delete Expense</Button>
                                <Button variant="filledTonal" size="medium">Undo Delete</Button>
                            </Stack>
                        </CardActions> */}
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
                                        Rice and grains
                                    </Typography>
                                    <Typography color="text.secondary">
                                        20rs/ 200rs
                                    </Typography>
                                </Stack>
                                <ProgressBar animated now={80} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}>
                                    <Button size="medium" color='error'>Delete Expense</Button>
                                    <Button size="medium" color='success'>Undo Delete</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        {/* <CardActions>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                <Button variant="filledTonal" size="medium">Delete Expense</Button>
                                <Button variant="filledTonal" size="medium">Undo Delete</Button>
                            </Stack>
                        </CardActions> */}
                    </Card>
                </Box>
            </div>
        </>
    )
}
