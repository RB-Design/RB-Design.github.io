---
metaname: "Whether you know exactly what you want or don't have a clue, I'm always happy to have a chat"
layout: "layouts/main.njk"
title: "Feel free to get in touch to discuss your creative requirements"
bgImage: "/assets/images/bgImages/contact_bg.jpg"
pageTitle: "Fancy a chat?"
introParagraph: "I'm always happy to have a chat and help people understand what they need from their website so why not drop me a line?"
photoCredit: "Sergey Zolkin"
photoCreditLink: "https://unsplash.com/@szolkin"
eleventyNavigation:
  key: Contact
  order: 5
---

<form
id="contact-form"
name="Contact Form"
data-netlify="true"
method="POST"
netlify-honeypot="bot-field"
>
<span style="display: none"
><p>
<label
>Don’t fill this out if you're human: <input name="bot-field"
/></label></p
></span>
<label for="name">Name:</label><br />
<input type="text" id="Name" name="Name" /><br />

<label for="email">Email:</label><br />
<input type="email" id="Email" name="Email" /><br />

<label for="Message">Message:</label><br />
<textarea name="message" id="Message" name="Message"></textarea>

<button type="submit" value="Submit" form="contact-form" />
<span>Submit</span>

</form>
