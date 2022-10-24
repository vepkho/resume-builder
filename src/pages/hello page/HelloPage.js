import React from 'react'
import styles from './HelloPage.module.css'

import Forbes from '../../assets/images/forbes.png'
import Google from '../../assets/images/google.png'
import Ibm from '../../assets/images/ibm.png'
import Yahoo from '../../assets/images/yahoo.png'

import Arrow from '../../assets/icons/arrow.png'
import ListStyle from '../../components/listStyle/ListStyle'

const HelloPage = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Resume}>
            <p className={styles.Logo}>ReZooMe</p>
            <div className={styles.Testimonial}>
                <p className={styles.Objective}>Trusted by professionals at top companies</p>
                <div className={styles.Companies}>
                    <img src={Forbes} alt='Company Logo'/>
                    <img src={Google} alt='Company Logo'/>
                    <img src={Ibm} alt='Company Logo'/>
                    <img src={Yahoo} alt='Company Logo'/>
                </div>
            </div>
        </div>
        <div className={styles.Intro}>
            <h1 className={styles.Title}>The easiest way to create a professional resume</h1>
            <li>
                <ListStyle 
                    number = '1'
                    containerColor = '#3D50FF'
                />
                Choose a resume template
            </li>
            <li>
                <ListStyle 
                    number = '2'
                    containerColor = '#FFA409'
                />
                Insert pre-written bullet points
            </li>
            <li>
                <ListStyle 
                    number = '3'
                    containerColor = '#8E33FF'
                />
                Customize the details
            </li>
            <li>
                <ListStyle 
                    number = '4'
                    containerColor = '#F55E3D'
                />
                Download your new resume
            </li>
            <div className={styles.Action}>
                <p>Simple, right?</p>
                <button className={styles.Button}>
                    <p>Let's get started</p>
                    <img src={Arrow} alt='arrow' />
                </button>
            </div>
            <p className={styles.Alert}>By clicking "LET'S GET STARTED", you agree to our <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>.</p>
        </div>
    </div>
  )
}

export default HelloPage