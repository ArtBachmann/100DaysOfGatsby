import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <div style={{ color: 'purple', fontWeight: 'bold' }}>
    <Link to='/'>Contact</Link>
    <Header contactText='Hello from Contact' />
    <p>Everything is Going to be All Right</p>
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-958513624-1539182029.jpg?crop=0.668xw:1.00xh;0.156xw,0&resize=480:*" alt="Bella" />

  </div>
) 
