import React from 'react'
import "../contacts/contacts.css"

export default function Contacts() {
  return (
    <div className="section4">
      <h2 className="section-title">Contact us</h2>

      <div className="section4--container">
        <div className="section4--container--formContainer">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="section4--container--formContainer-btn">Send</button>
        </div>

        <div className="section4--container--contactsInfoContainer-mainContainer">
          <div
          className="section4--container--contactsInfoContainer"
          >
            <p className="section4--container--contactsInfoContainer">
              Phone
            </p>
            <p className="section4--container--contactsInfoContainer">
              +1 234 5555-55-55
            </p>
          </div>
          <div
          className="section4--container--contactsInfoContainer"
          >
            <p className="section4--container--contactsInfoContainer">
              Email
            </p>
            <p
            className="section4--container--contactsInfoContainer"
            >
              hello@miami.com
            </p>
            </div>
          <div
            className="section4--container--contactsInfoContainer"
            >
            <p
            className="section4--container--contactsInfoContainer"
            >
              Address
            </p>
            <p className="section4--container--contactsInfoContainer section4--container--contactsInfoContainer-address">
              400 first ave.suite 700Minneapolis, MN 55401
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}
