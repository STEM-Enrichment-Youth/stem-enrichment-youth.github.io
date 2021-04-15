import React from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function VolunteerOfTheMonth({ headshotSrc, announcement, name, month }) {
    return (
        <section className="volunteer-of-the-month">
            <div className="volunteer-content-container">
                <h1 className="volunteer-header">Volunteer of the Month!</h1>
                <div className="volunteer-container">
                    <div className="headshot-container">
                        <img src={headshotSrc} alt="Volunteer of the month photo" />
                    </div>
                    <div className="volunteer-text-content">
                        <h4>We are proud to announce STEMEY’s {month || months[new Date().getMonth()]} Volunteer of the Month: <span>{name}! </span></h4>
                        <p>
                            {announcement}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
