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
                <Button onClick={submit} size="large" variant="contained" style={{ borderRadius: 15 }}>Join</Button>
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
        <footer className={classes.footer} style={{ paddingTop: "1em" }}>
            <h2 style={{ textAlign: "center" }} >Join Our Mailing List!</h2>
            <p style={{ textAlign: "center" }}>Get updates on STEMEY Opportunities!</p>

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
                spacing={4}
            >
                <Grid item>
                    <SocialIcon target="_blank" url="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w" fgColor="#FFFFFF" style={{ overflow: "none" }}></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon target="_blank" defaultSVG={discordIcon} url="https://discord.com/invite/NWuv89e" fgColor="#FFFFFF" style={{ overflow: "none" }}></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon target="_blank" url="https://www.linkedin.com/company/stem-enrichment-youth" fgColor="#FFFFFF" style={{ overflow: "none" }}></SocialIcon>
                </Grid>
                <Grid item>
                    <SocialIcon target="_blank" url="https://www.instagram.com/stemenrichmentyouth/" fgColor="#FFFFFF" style={{ overflow: "none" }}></SocialIcon>
                </Grid>
            </Grid>
        </footer>
    );
}

const discordIcon = {
    icon:
        'M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z',
    mask:
        'M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z',
    color: '##151515'
}
