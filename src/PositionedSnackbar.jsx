import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import "./Snackbar.css";

const PositionedSnackbar = () => {
    const [state, setState] = React.useState({
        open: true,
        vertical: 'bottom',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={20000}
        >
            <div className="snackbar-card">
                <h3>Interested in becoming a <strong>STEMEY</strong> Junior Exec?</h3>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScCQjatAwjhWFHIwjgMtujR35ti5A49RK8adGTarbPtRewabA/viewform">Apply Here!</a>
            </div>
        </Snackbar>
    )
}

export default PositionedSnackbar
