import React from 'react'

import styles from './CV.module.css'


const CV = (props) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Contact}>
            <div className={styles.Person}>
                <h2>{props.name}</h2>
                <h4>{props.profession}</h4>
            </div>
            <div className={styles.Info}>
                {/* <p className={styles.Detail}>github.com/vepkhoasfsdfs</p>
                <p className={styles.Detail}>github.com/vepkho</p>
                <p className={styles.Detail}>github.com/vepkho</p>
                <p className={styles.Detail}>github.com/vepkhosdf</p>
                <p className={styles.Detail}>github.com/vepkho</p> */}
                {props.details.map(item => {
                  return  <p className={styles.Detail} key={item.id}>{item.detail}</p>
                })}
            </div>
        </div>
        <div className={styles.Summary}>
            <h3>ABOUT ME</h3>
            <p className={styles.Description}>{props.summary}</p>
            {/* <p className={styles.Description}>Hard-working individual with proficiency in mobile responsive website development, as well as strong ability to communicate and work in a team effectively.</p> */}
        </div>
        <div className={styles.Skills}>
            <h3>SKILLS</h3>
            <ul>
                {props.skills.map(item => {
                    return <li key={item.id}>{item.skill}</li>
                })}
                {/* <li>Lorem ipsum, dolor sit consectetur</li>
                <li>Lorem ipsum, dolor sit consectetur</li>
                <li>Lorem ipsum, dolor sit consectetur</li>
                <li>Lorem ipsum, dolor sit consectetur</li> */}
            </ul>
        </div>
        <div className={styles.Experience}>
            <h3>EXPERIENCE</h3>
            {props.experience.map(item => {
                return <>
                    <div className={styles.Objective}>
                        <h4 className={styles.Title}>{item.title}</h4>
                        <div className={styles.Date}>
                            <p>{item.startDate}</p>
                            <p>{item.endDate}</p>
                        </div>
                    </div>  
                    <ul>
                        {item.details.map(item => {
                            return <li key={item.id}>{item.description}</li>
                        })}
                    </ul>
                </>
            })}
        </div>
        <div className={styles.Education}>
            <h3>EDUCATION</h3>
                {props.education.map(item => {
                    return <>
                        <div className={styles.Degree}>
                            <div className={styles.Place}>
                                <h4>{item.field}</h4>
                                <h5>{item.schoolName}</h5>
                            </div>
                            <div className={styles.Date}>
                                <p>{item.startDate}</p>
                                <p>{item.endDate}</p>
                            </div>
                        </div>
                        <div className={styles.Address}>
                            <p>{item.city}</p>
                        </div>
                    </>
                })}
        </div>
    </div>
  )
}

export default CV