import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("moqzpdgo");

  if (state.succeeded) {
    return (
      <p style={{ textAlign: "center" }}>
        Thank you for contacting me! I'll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <label htmlFor="name" style={{ fontFamily: "cursive" }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          style={{ color: "black", fontFamily: "cursive" }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <label htmlFor="email" style={{ fontFamily: "cursive" }}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          style={{ color: "black", fontFamily: "cursive" }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <label htmlFor="subject" style={{ fontFamily: "cursive" }}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          style={{ color: "black", fontFamily: "cursive" }}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <label htmlFor="message" style={{ fontFamily: "cursive" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          style={{ color: "black", fontFamily: "cursive" }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        style={{
          backgroundColor: "#0066CC",
          color: "#fff",
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "cursive",
          cursor: "pointer",
          transition: "background-color 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0052a0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0066CC")}
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
