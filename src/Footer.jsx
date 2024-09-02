import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`${style.footer}`} >
        <div className='container'>
            <h3> 2024 Pizza Store. All rights reserved.</h3>
            <h3> Terms of Service | Privacy Policy</h3>
            <h2> Contact Us : <a href="#">123-456-7890</a></h2>
            <h2> Location : 557 Main St, Shicago, USA, 581SS19</h2>
            <h2> Social Media : <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a></h2>
            

        </div>
      
    </div>
  )
}
