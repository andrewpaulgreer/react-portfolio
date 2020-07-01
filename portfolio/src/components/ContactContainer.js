import React from "react";
import Contact from "./Contact"

function ContactContainer(){
    return(
        <container >
      <section className="hero is-fullheight" id="contact">
          <div className="hero-body overlay">
              <div className="container">
                <h1 className="title is-centered contact-title">Contact</h1>
                <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <div className="column">
                        < Contact />
                    </div>
                </div>
              </div>
          </div>
      </section>
      </container>
    )
}

export default ContactContainer;