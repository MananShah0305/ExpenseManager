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
                                        Rice and grains
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
                                    <ButtonStyle variant='outlined' size="medium" color='black' onClick={handleExpandClick} aria-expanded={expanded}>View Expenses</ButtonStyle>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
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
