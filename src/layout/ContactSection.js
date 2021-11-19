import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='section-bg'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Contact Us</h2>
          <p>Nihil officia ut sint molestiae tenetur.</p>
        </div>
        <div className='row contact-info'>
          <div className='col-md-4'>
            <div className='contact-address'>
              <i className='bi bi-geo-alt' />
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='contact-phone'>
              <i className='bi bi-phone' />
              <h3>Phone Number</h3>
              <p>
                <a href='tel:+155895548855'>+1 5589 55488 55</a>
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='contact-email'>
              <i className='bi bi-envelope' />
              <h3>Email</h3>
              <p>
                <a href='mailto:info@example.com'>info@example.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className='form'>
          <form  className='php-email-form'>
            <div className='row'>
              <div className='form-group col-md-6'>
                <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' required />
              </div>
              <div className='form-group col-md-6 mt-3 mt-md-0'>
                <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' required />
              </div>
            </div>
            <div className='form-group mt-3'>
              <input type='text' className='form-control' name='subject' id='subject' placeholder='Subject' required />
            </div>
            <div className='form-group mt-3'>
              <textarea className='form-control' name='message' rows={5} placeholder='Message' required defaultValue={''} />
            </div>
            <div className='my-3'>
              <div className='loading'>Loading</div>
              <div className='error-message' />
              <div className='sent-message'>Your message has been sent. Thank you!</div>
            </div>
            <div className='text-center'>
              <button type='submit'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
