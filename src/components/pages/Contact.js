import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="centerTitle">
          <h1>CONTACT</h1>
        </div>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email Address"></input>
          <input type="text" placeholder="Message" id="message"></input>
          <button id="send">Send</button>
        </form>
      </section>
    </div>
  );
}
