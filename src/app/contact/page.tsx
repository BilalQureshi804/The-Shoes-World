import React from 'react'

export const contact = () => {
  return (
    <div>
     <section className='contact-form'>
      <h2 className='fade-in'>Contact Us</h2>
      <form>
        <input type="text" placeholder='Full Name'required />
        <input type="email" placeholder='Email Address'required />
        <input type="text" placeholder='Phone Number' />
        <textarea placeholder='Your message' rows={5} required>
          <button type='submit'>send message</button>

        </textarea>

      </form>
     </section>
    </div>
  )
}

export default contact;
