import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const refForm = useRef;

  useEffect(() => {
    let timeoutld = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutld)
    }
  }, [])

  // const sendEmail = (e)=> {
  //     e.preventDefault ()

  //     emailjs
  //         .sendForm(
  //             "gmail",
  //             "template_",
  //              refForm.current,
  //             "   "
  //         )
  //         .then(
  //             () => {
  //                 alert('Message successfully sent!')
  //                 window.location.reload(false)
  //             },
  //             () => {
  //                 alert('Failed to send the message, please try again')
  //             }
  //         )
  // }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx="15"
            />
          </h1>
          <p>
            I am interested in freelance opporunities - especially ambitiuos or
            large projects. However, if you have other request or questions,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Den Denowich,
          <br />
          Ukraine,
          <br />
          Kharkiv, Voenna street 39a
          <br />
          <span>denowich@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[49.987046154742806, 36.25999395411302]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.987046154742806, 36.25999395411302]}>
              <Popup> Den works here :) </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
