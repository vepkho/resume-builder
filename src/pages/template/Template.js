import React, {useState, useEffect, CSSProperties} from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import styles from './Template.module.css'

import colors from '../../assets/data/colors'
import CV from '../../components/cv/CV'

import info from '../../assets/data/info'

const Template = () => {
    const [component, setComponent] = useState(false);
    const [alert, setAlert] = useState(false);

    const alertShowHandler = () => {
        setAlert(true)
    }

    useEffect(() => {
        setTimeout(() => {
          setComponent(true)
        }, 5);
    });

    const name = info.name;
    const profession = info.profession;
    const details = info.details;
    const summary = info.summary;
    const skills = info.skills;
    const experience = info.experience;
    const education = info.education;
    
  return (
    <div>
        <div className={styles.Loader}>
            { !component && <PropagateLoader color="#023642" speedMultiplier={0.25}/> }
        </div>
        {component && 
        
            <div className={styles.Container}>
                <div className={styles.Objective}>
                    <p className={styles.Title}>Akimbo</p>
                    <p className={styles.Description}>Perfectly balanced, confident, eyes forward towards the future, perhaps a red cape flapping in the wind behind you. Project your superhero pose with Akimbo and take to the skies.</p>
                    <div className={styles.Options}>
                        <p className={styles.Text}>COLOR</p>
                        <div className={styles.Colors}>
                            {colors.map(item => {
                                if(item.id === 1){
                                    return <button style={{backgroundColor: `${item.color}`}} key={item.id}></button> 
                                } else return <button style={{backgroundColor: '#525252'}} key={item.id} onClick={alertShowHandler}></button> 
                            })}
                        </div>
                    </div>
                    {
                        alert && <p className={styles.Alert}>Sorry, website is in test mode, only one option is available for now</p>
                    }
                    <button className={styles.Button}>Use this template</button>
                    <p><span>Can’t decide?</span> Don’t sweat it.</p>
                </div>
                <div className={styles.Image}></div>
                <div className={styles.CV}>
                    <CV 
                        name= {name}
                        profession = {profession}
                        details = {details}
                        summary = {summary}
                        skills = {skills}
                        experience = {experience}
                        education = {education}
                    />
                </div>
            </div>
        }
    </div>
  )
}

export default Template