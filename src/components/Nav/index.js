import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  return (
    <section>
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li><Link to="/about">About</Link></li>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/lessons"><li>Lessons</li></Link>
                <Link to="/performances"><li>Performances</li></Link>
                <Link to="/recordings"><li>Recordings</li></Link>
            </ul>
      </div>
    </section>
  );
}

export default Nav;