// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div class="container-contact">
    <h2>Contact Us</h2>
    <p>Please feel free to contact us with any questions or feedback.</p>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
  </div>
  );
};

export default Contact;
