import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Bella from '../../static/Bella-Hadid.jpg'

export default () => (
  <div style={{ color: 'purple', fontWeight: 'bold' }}>
    <Link to='/contact/'>Contact</Link>
    <h1>Hello Me!</h1>
    <p>Everything is Going to be All Right</p>
    <img src="https://media.glamour.com/photos/5d93c44135174900080fda44/16:9/w_560,c_limit/bella2.jpg" alt="Bella" />
    <br />
    <img src={Bella} alt='Bella' />

  </div>
) 
