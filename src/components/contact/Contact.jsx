import "./contact.scss"
const Contact = () => {
    return (
        <div>
           <div className="contact">
           <div className="wrapper">
                <div className="textContainer">
                    <h1>Get in touch</h1>
                    <p>Feel free to contact me for any work or suggestions below</p>

                    <div className="social">
                        <a href="#">
                            <img src="/facebook.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/instagram.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/youtube.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/dribble.png" alt="" />
                        </a>
                    </div>
                </div>

                <div className="formContainer">
                    <form>
                        <input required type="text" placeholder="Name" />
                        <input required type="email" placeholder="Email" />
                        <textarea rows="8"  placeholder="Message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Contact;