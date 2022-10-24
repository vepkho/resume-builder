import React, { useState, useRef } from 'react'
import NextButton from '../../components/nextButton/NextButton'
import PrevButton from '../../components/prevButton/PrevButton'
// import { useDispatch } from "react-redux";
// import { resumeActions } from '../../resume/resume-slice';

import styles from './Contact.module.css'

const Contact = () => {
    // const dispatch = useDispatch();
    // const sendData = (e) => {
    //     dispatch(resumeActions.removeFromResume({
            
    //     }))

    // }
  return (
    <div className={styles.Container}>
        <div className={styles.Contact}>
            <h4>Let's start with</h4>
            <h2>Contact Information</h2>
            <p>It's best to share at least your name, email and phone</p>
            <form>
                <div className={styles.Person}>
                    <label>
                        Name
                        <input type='text' placeholder='e.g. Michael Williams' required/>
                    </label>
                    <label>
                        Profession
                        <input type='text' placeholder='e.g. Software Engineer'/>
                    </label>
                </div>
                <div className={styles.Details}>
                    <label>
                        Number
                        <input type='number' placeholder='e.g. 415-123-1200' required/>
                    </label>
                    <label>
                        Email
                        <input type='email' placeholder='e.g. mwilliams@adress.com' required/>
                    </label>
                    <label>
                        Address
                        <input type='text' placeholder='e.g. 123 Main Street.'/>
                    </label>
                    <label>
                        Website
                        <input type='text' placeholder='e.g. michaelwilliams.com'/>
                    </label>
                </div>
                <div className={styles.Controls}>
                    <PrevButton />
                    <NextButton />
                </div>
            </form>
        </div>
        <div className={styles.Resume}>
        </div>
    </div>
  )
}

export default Contact