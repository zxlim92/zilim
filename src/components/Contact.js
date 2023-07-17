import emailPic from "../img/email.png";
import "./Contact.css";
import github from "../img/github.png"
import linkedin from "../img/linkin.png"
function Contact() {
  return (
    <div className="contact">
      <h1 className="titles">Contact Me</h1>
      <br />
      <br />
      <div className="container">
  
  <a className="row_link" href="https://www.linkedin.com/in/zi-xue-lim-37629b182/">
    <img className="img" src={linkedin} alt="LinkedIn Icon" href="https://www.linkedin.com/in/zi-xue-lim-37629b182/" />
   <p className="text">Zi Xue Lim</p> 
   </a>

  <a className="row_link" href= "https://github.com/zxlim92">
    <img className="img" src={github} alt="Email Icon" />
  <p className="text">zxlim92</p>
  </a>
  <a className="row">
    <img className="img" src={emailPic} alt="Email Icon" />
  <p className="text">zixue@ualberta.ca</p>
  </a>
</div>
    </div>
  );
}

export default Contact;
