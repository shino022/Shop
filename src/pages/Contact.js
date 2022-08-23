import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="container my-5 p-5">
      <div id="contact-us-wrapper"className="mb-5">
        <h1 id="contact-us" className="display-2">Contact us</h1>
        <p className="p pb-3 lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="contianer d-flex gap-4"  id="contant-cards-wrapper"> 
        <div className="d-flex justify-content-between">
          <div className="contact-card-container">
            <h2 className="support-title">Sales Support</h2>
              <p className="p lead mb-4">
              Sed in erat sem. Quisque pellentesque risus et felis pretium, eget laoreet justo interdum.
              </p>
              <div className="contact-info">
                <p className="m-0">+1 (123) 123 1234</p>
                <p className="">Mon-Fri 8am to 6pm PST</p>
                <p className="m-0">salessupport@example.com</p>
              </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="contact-card-container">
            <h2 className="support-title">Technical Support</h2>
              <p className="p lead mb-4">
              Sed in erat sem. Quisque pellentesque risus et felis pretium, eget laoreet justo interdum.
              </p>
              <div className="contact-info">
                <p className="m-0">+1 (321) 321 4321</p>
                <p className="">Mon-Fri 8am to 6pm PST</p>
                <p className="m-0">techsupport@example.com</p>
              </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Contact;