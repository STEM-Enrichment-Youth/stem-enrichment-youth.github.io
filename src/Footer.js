import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { black } from 'material-ui/styles/colors';
import { Button, Grid, TextField } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import MailchimpSubscribe from 'react-mailchimp-subscribe';



const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: black,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    input: {
        borderRadius: 10,
        backgroundColor: 'white'
    },
}));

const CustomForm = ({ status, message, onValidated }) => {
    const classes = useStyles();
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <form validate>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <TextField variant="outlined"
                        placeholder="First Name"
                        type="text"
                        required
                        inputProps={{ className: classes.input }}
                        ref={node => (name = node)}
                    />
                </Grid>
                <Grid item>
                    <TextField type="email"
                        placeholder="Email"
                        variant="outlined"
                        required
                        validate
                        inputProps={{ className: classes.input }}
                        ref={node => (email = node)}
                    />
                </Grid>
                <Grid item>
                    <Button onClick={submit} size="large" variant="contained">Join</Button>
                </Grid>
                <Grid>
                    {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    {status === "error" && (
                        <div
                            style={{ color: "red" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {status === "success" && (
                        <div
                            style={{ color: "green" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                </Grid>
            </Grid>
        </form>
    );
};

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <h2 justify="center">Join Our Newsletter!</h2>
            <br />
            <MailchimpSubscribe
                url={process.env.REACT_APP_MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
            <br />
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                    <SocialIcon url="youtube.com" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="facebook.com" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="tumblr.com" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="instagram.com" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
            </Grid>
        </footer>
    );
}

