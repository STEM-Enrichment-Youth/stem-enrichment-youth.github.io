import React from 'react';

export default function Notes() {
    function APClassCard({ classType, name }) {
        return (
            <div className='card mb-3' style={{width: '20rem'}}>
                <h5 className='card-header' style={{ color: 'black' }}>
                    {classType}
                </h5>
                <div className='card-body'>
                    <h5 className='card-title' style={{ color: 'black' }}>
                        AP {name}
                    </h5>
                    <p className='card-text' style={{ color: 'black' }}>
                        
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className='new-team-con'
            style={{ minHeight: '100vh', marginBottom: '50px', width: '80vw', margin: 'auto' }}
        >
            <div className='new-team-join'>
                <h1>Notes</h1>
                <p>
                    We have a notes for a multitude of AP Classes, helping you
                    get that A in your class.
                </p>
                <div className='w-100 mb-5'>
                    <h2>Math</h2>
                    <div className='d-flex w-100 align-items-center justify-content-around flex-wrap'>
                    <APClassCard classType='Math' name='Calculus AB' />
                        <APClassCard classType='Math' name='Calculus BC' />
                        <APClassCard classType='Math' name='Computer Science A' />
                        <APClassCard classType='Math' name='CS Principles' />
                        <APClassCard classType='Math' name='Statistics' />
                    </div>
                </div>
                <div className='w-100'>
                    <h2>Science</h2>
                    <div className='d-flex w-100 align-items-center justify-content-around flex-wrap'>
                        <APClassCard classType='Science' name='Biology' />
                        <APClassCard classType='Science' name='Chemistry' />
                        <APClassCard classType='Science' name='Environment Science' />
                        <APClassCard classType='Science' name='Physics 1' />
                        <APClassCard classType='Science' name='Physics 2' />
                        <APClassCard classType='Science' name='Physics C: E & M' />
                        <APClassCard classType='Science' name='Physics C: Mechanics' />
                    </div>
                </div>
            </div>
        </div>
    );
}
