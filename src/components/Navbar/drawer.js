
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles({
    list: {
        width: 300,

    },
    fullList: {
        width: 'auto',
    },




});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({

        left: false,

        right: false,
    });

    //thheme//
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem button key={'Home'}>

                    <ListItemText primary={'IT-1 2023 5TH SEM'} />
                </ListItem>

            </List>
            <Divider />
            <List>
                {['student1', 'student2', 'student3', 'student 4', 'student5', 'student6'].map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    return (
        <div >

            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
                <ThemeProvider theme={theme}>  <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer></ThemeProvider>

            </React.Fragment>

        </div>
    );
}
