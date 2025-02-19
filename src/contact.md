---
layout: base.njk
title: Contact Me at Skelly Solutions
description: Let's Discuss How I Can Help Your Business
permalink: /contact/
---

<main>
  <!-- Contact Information Section -->
  <section id="contact">
    <h2>Reach Out to Me</h2>
    <p>
      Interested in elevating your business with a personalized touch? I'm
      here to help. Reach out today!
    </p>
  </section>

  <!-- Contact Form Section -->
  <section id="contact-form-section">
    <h2>Drop Me a Line</h2>
    <!-- Form messages will appear here -->
    <div id="form-messages"></div>
    <form
      id="contact-form"
      style="max-width: 600px; margin: 0 auto; text-align: left"
    >
      <input type="hidden" id="contact_number" name="contact_number" />
      <label for="name">Your Name:</label><br />
      <input
        type="text"
        id="name"
        name="from_name"
        required="required"
        style="width: 100%; padding: 0.5em"
      /><br /><br />

      <label for="email">Your Email:</label><br />
      <input
        type="email"
        id="email"
        name="from_email"
        required="required"
        style="width: 100%; padding: 0.5em"
      /><br /><br />

      <label for="message">Your Message:</label><br />
      <textarea
        id="message"
        name="message"
        rows="5"
        required="required"
        style="width: 100%; padding: 0.5em"
      ></textarea><br /><br />

      <input
        type="submit"
        value="Send Message"
        class="cta-button"
      />
    </form>
  </section>
</main>

<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script type="text/javascript" src="/js/script.js"></script>