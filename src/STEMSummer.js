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
                <p className="summer-desc">From From July 12 - August 6, we will be hosting STEMpowerment, an online summer program that aims to build K-6 students' futures in STEM through hands-on exploration, industry-professional and student-led instruction, and academic mentorship/community-building.</p>
                <Tabs className="tabs" style={{ background: 'transparent', boxShadow: 'none', outline: "none", border: "none" }} TabIndicatorProps={{ style: { background: 'white', boxShadow: 'none' } }} variant="fullWidth" centered value={value} onChange={handleChange} aria-label="STEM Summer Tabs for Parents and Students">
                    <Tab label="For Students/Parents" />
                    <Tab label="For Instructors" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <button class="btn-summer btn btn-fb" style={{
                        backgroundColor: "black",
                        opacity: ".7"
                    }}>
                        <a target="_blank" href="https://docs.google.com/document/d/1No1veibhoFP6RdRFL-FCJTqXvpOOHc4cznFCuQt9s9s/edit" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Click Here to Learn More
                        </a>
                    </button>
                    <iframe className="summer-signup-form" src="https://docs.google.com/forms/d/1MLW-T1BlkIPr5hQhT5ZIKY6Dr56hU8D1i-Rpyxax_YQ/viewform?embedded=true" frameBorder="0">Loading…</iframe>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <button class="btn-summer btn btn-fb" style={{
                        backgroundColor: "black",
                        opacity: ".7"
                    }}>
                        <a target="_blank" href="https://docs.google.com/document/d/1rFZuAYquBklWB3mRNU0qLMlyo5OCbRLsUEK-QUr0D2M/edit" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Click Here to Learn More
                        </a>
                    </button>
                    <iframe class="summer-signup-form" src="https://docs.google.com/forms/d/1WKJlkmf6iT2NPFPHRhOLkeiZqDwp8fNXBXP71nF4tE4/viewform?embedded=true" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </TabPanel>
            </div>
        </div>
    )
}

export default STEMSummer
