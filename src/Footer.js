import React, { Fragment } from 'react';
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
        borderRadius: 15,
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

    let form;
    if (status === "sending") {
        form = <Grid item><div>Sending...</div></Grid>
    } else if (status === "error") {
        form = <Grid item><div dangerouslySetInnerHTML={{ __html: message }} /></Grid>
    } else if (status === "success") {
        form = <Grid item><div dangerouslySetInnerHTML={{ __html: message }} /></Grid>
    } else {
        form = <Fragment>
                        <Grid item>
                            <TextField variant="outlined"
                                placeholder="First Name"
                                type="text"
                                required
                                inputProps={{ className: classes.input }}
                                inputRef={node => (name = node)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField type="email"
                                placeholder="Email"
                                variant="outlined"
                                required
                                validate
                                inputProps={{ className: classes.input }}
                                inputRef={node => (email = node)}
                            />
                        </Grid>
                        <Grid item>
                            <Button onClick={submit} size="large" variant="contained" style={{borderRadius: 15}}>Join</Button>
                        </Grid>
                    </Fragment>
    }

    return (
        <form>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                    {form}
            </Grid>
        </form>
    );
};

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <h2 justify="center" paddingTop="8px" >Join Our Newsletter!</h2>
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
                    <SocialIcon url="https://www.youtube.com/channel/UClH63PzuvNWKH9U_8Li0R_Q/featured" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="https://www.facebook.com/faith.han.9828" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="https://www.linkedin.com/company/stem-enrichment-youth" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon url="https://www.instagram.com/stemenrichmentyouth/" fgColor="#FFFFFF"></SocialIcon>
                </Grid>
            </Grid>
        </footer>
    );
}

