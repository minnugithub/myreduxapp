import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const DashboardPage = () => (
  <section>
    
    <h1>HELLO EVERYONE!</h1>
    <p> To view the todos ,click on the below icon</p>
    <Link to="/posts" className="click">
      View todos
    </Link>
   
    </section>
    
)

export default DashboardPage