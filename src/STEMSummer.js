import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import "./STEMSummer.css";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

const STEMSummer = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div class="new-team-con" style={{ minHeight: "100vh", marginBottom: "50px" }}>
            <div class="new-team-join">
                <h1><strong>STEMPowerment</strong> Summer Program</h1>
                <h2>Ready to start your Summer with <strong>STEM?</strong></h2>
                <p className="summer-desc">From July 12 - August 6, we will be hosting STEMpowerment, an online summer program that aims to build K-6 students' futures in STEM through hands-on exploration, industry-professional and student-led instruction, and academic mentorship/community-building.</p>
                <Tabs className="tabs" style={{ background: 'transparent', boxShadow: 'none', outline: "none", border: "none" }} TabIndicatorProps={{ style: { background: 'white', boxShadow: 'none' } }} variant="fullWidth" centered value={value} onChange={handleChange} aria-label="STEM Summer Tabs for Parents and Students">
                    <Tab label="For Students/Parents" />
                    <Tab label="For Instructors" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div class="responsive-google-slides">
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR3morXofLhNAtkwollkfqsmcJaDLKFVSXvkjYcFF6LO8n-wXwB5dDJTzsE30C1sg0yyJhrRW_71zC6/embed?start=true&loop=true&delayms=5000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                    <iframe className="summer-signup-form" src="https://docs.google.com/forms/d/1MLW-T1BlkIPr5hQhT5ZIKY6Dr56hU8D1i-Rpyxax_YQ/viewform?embedded=true" frameBorder="0">Loading…</iframe>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div class="responsive-google-slides">
                        <iframe className="presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vRohn2yNPPjdY3nc9hh06b3IhY0xoy0oNPgPK75Utrl6lMDMmOZij9H3BhLf-gk8vAZmeqv24Mg9jg0/embed?start=false&amp;loop=true&amp;delayms=5000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                    <iframe class="summer-signup-form" src="https://docs.google.com/forms/d/1WKJlkmf6iT2NPFPHRhOLkeiZqDwp8fNXBXP71nF4tE4/viewform?embedded=true" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </TabPanel>
            </div>
        </div>
    )
}

export default STEMSummer
