import React, { useState } from "react";
import Typical from "react-typical";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import emailjs from '@emailjs/browser';
import "./ContactMe.css";
import { AppsConst } from "../../AppsConst";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState(false);
  const [error, setErr] = useState(false);
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {

    e.preventDefault();

    if (email === "" || name === "" | message === "") {
      setErr(true);

      setTimeout(() => {
        setErr(false);
      }, 3000);
    }

    else {

      setBanner(true);
      const data = {
        name: name,
        message: message,
        email: email
      }

      emailjs.send("service_a36edx9", "template_86tikne", data, "TuGzIs0p5ZGibHIk0")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
          setBanner(false);
        });

        setName("");
        setEmail("");
        setMessage("");

      setTimeout(() => {
        setBanner(false);
      }, 3000);


    }



  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://www.facebook.com/dilaksanraj.alexsander/">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://www.linkedin.com/in/dilaksanraj-alexsandar">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/dilaksan_raj/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://github.com/Dilaksanraj">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/dilaksan2">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src="https://cfm-list.s3.eu-west-3.amazonaws.com/mailz.jpeg" alt="image not found" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit" onClick={submitForm}>
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Snackbar open={banner} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Message has been sent successfully
        </Alert>
      </Snackbar>

      <Snackbar open={error} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="warning" sx={{ width: '100%' }}>
          Please fill all the field
        </Alert>
      </Snackbar>

      <Footer />
    </div>
  );
}
