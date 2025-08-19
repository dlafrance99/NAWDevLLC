import React, { useState } from 'react';

import Footer from '../Components/Footer';
import HeaderLogo from '../Components/HeaderLogo';
import Header from '../Components/Header';
import ScreenTitle from '../Components/ScreenTitle';

import { BiMailSend, } from 'react-icons/bi'

import '../Styles.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        app: "",
        subject: "",
        message: "",
        // Honeypot (spam trap)
        company: ""
    });
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((d) => ({ ...d, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (formData.company) { // honeypot
            setStatus("success");
            setFormData({ name: "", email: "", app: "", subject: "", message: "", company: "" });
            return;
        }
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setErrorMsg("Please fill out all required fields.");
            return;
        }

        setStatus("submitting");
        try {
            const form = new FormData();
            form.append("access_key", "1172beb9-0555-4e0f-9de3-19a2cb2b9348"); // ← required
            form.append("name", formData.name.trim());
            form.append("email", formData.email.trim());
            form.append("subject", formData.subject.trim());
            form.append("message", formData.message.trim() + (formData.app ? `\n\nApp: ${formData.app.trim()}` : ""));
            // optional spam trap recognized by Web3Forms:
            form.append("botcheck", formData.company || "");

            const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
            const data = await res.json();

            if (!data.success) throw new Error(data.message || "Failed");

            setStatus("success");
            setFormData({ name: "", email: "", app: "", subject: "", message: "", company: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg("Something went wrong sending your message. Please try again or email me directly.");
        }
    };


    return (
        <>
            <ScreenTitle
                Title='Contact'
            />
            <HeaderLogo />
            <Header />

            <div className='ContactContent'>
                <section style={styles.container}>
                    {/* Intro blurb */}
                    <header style={styles.header}>
                        <h1 className='MenuTextStyle' style={{ marginBottom: 0, marginTop: 0 }}>Get in touch</h1>
                        <p className='GenericTextStyle' style={{ marginBottom: 0, marginTop: 0 }}>
                            Have a question, or suggestion, or comment? Hit me up, I usually respond within a couple days.
                        </p>
                    </header>

                    {/* Status messages */}
                    <div aria-live="polite" style={styles.statusRegion}>
                        {status === "success" && (
                            <div style={{ ...styles.alert, ...styles.alertSuccess }}>
                                Thanks! Your message has been sent.
                            </div>
                        )}
                        {status === "error" && (
                            <div style={{ ...styles.alert, ...styles.alertError }}>
                                {errorMsg}
                            </div>
                        )}
                        {errorMsg && status !== "error" && (
                            <div style={{ ...styles.alert, ...styles.alertWarn }}>
                                {errorMsg}
                            </div>
                        )}
                    </div>

                    {/* Contact form */}
                    <form onSubmit={handleSubmit} noValidate className='formContainer'>
                        {/* Honeypot (hidden from humans) */}
                        <label style={styles.honeypotLabel}>
                            Company
                            <input
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                autoComplete="off"
                                tabIndex="-1"
                                style={styles.honeypotInput}
                            />
                        </label>

                        <div style={styles.row}>
                            <div style={styles.col}>
                                <label htmlFor="name" className='GenericTextStyle'>
                                    Name <span style={styles.req}>*</span>
                                </label>
                                <br />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Jane Doe"
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.col}>
                                <label htmlFor="email" className='GenericTextStyle'>
                                    Email <span style={styles.req}>*</span>
                                </label>
                                <br />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="jane@example.com"
                                    style={styles.input}
                                    aria-describedby="email-help"
                                />
                                <br />
                                <small id="email-help" className='GenericTextStyle' style={{ fontSize: '.7em' }}>
                                    I’ll only use this to reply to you.
                                </small>
                            </div>
                        </div>

                        <div style={styles.row}>
                            <div style={styles.col}>
                                <label htmlFor="app" className='GenericTextStyle'>
                                    App (optional)
                                </label>
                                <br />
                                <input
                                    id="app"
                                    name="app"
                                    type="text"
                                    value={formData.app}
                                    onChange={handleChange}
                                    placeholder="e.g., Gluten Free Glutton"
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.col}>
                                <label htmlFor="subject" className='GenericTextStyle'>
                                    Subject <span style={styles.req}>*</span>
                                </label>
                                <br />
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Let’s talk about..."
                                    style={styles.input}
                                />
                            </div>
                        </div>

                        <div style={styles.stack}>
                            <label htmlFor="message" className='GenericTextStyle'>
                                Message <span style={styles.req}>*</span>
                            </label>
                            <br />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Share details about the role, app, or idea..."
                                rows={6}
                                style={styles.textarea}
                            />
                        </div>

                        <div style={styles.actions}>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                style={{ ...styles.button, ...(status === "submitting" ? styles.buttonDisabled : {}) }}
                            >
                                {status === "submitting" ? "Sending…" : "Send message"}
                            </button>
                            <a href="mailto:nawdevelopment@gmail.com" style={styles.secondaryLink}>
                                or email me directly →
                            </a>
                        </div>

                        <div style={styles.termsAction}>
                            {/* Footer note */}
                            <p style={styles.footerNote}>
                                By contacting me, you agree to the{" "}
                                <a href="/privacy" style={styles.link}>Privacy Policy</a>.
                            </p>
                        </div>
                    </form>
                </section>
            </div>

            <Footer />
        </>
    )
}

const styles = {
    page: {
        minHeight: "75vh",
        padding: "2rem 1rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "100%",
        margin: 'auto'
    },
    title: { fontSize: "2rem", margin: 0 },
    blurb: { marginTop: ".5rem", opacity: 0.9 },
    statusRegion: { minHeight: 36, marginBottom: 8 },
    alert: {
        padding: "0.75rem 1rem",
        borderRadius: 8,
        fontSize: ".95rem"
    },
    alertSuccess: {
        background: "rgba(0,160,60,.15)",
        border: "1px solid rgba(0,160,60,.35)",
        width: '80%',
        margin: 'auto',
        marginTop: '10px'
    },
    alertError: {
        background: "#dc473d80",
        border: "1px solid #dc473d",
        width: '80%',
        margin: 'auto',
        marginTop: '10px'
    },
    alertWarn: {
        background: "#dc473d80",
        border: "1px solid #dc473d",
        width: '80%',
        margin: 'auto',
        marginTop: '10px'
    },

    honeypotLabel: { position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" },
    honeypotInput: { width: 1, height: 1, opacity: 0 },

    row: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        marginBottom: "1rem"
    },
    col: { margin: 'auto', width: '80%' },
    stack: { marginBottom: "1rem", margin: 'auto', width: '80%' },

    label: { display: "block", fontWeight: 600, marginBottom: 6 },
    req: { color: "#00ADB5" },
    help: { display: "block", marginTop: 4, opacity: 0.8 },

    input: {
        width: "100%",
        padding: "0.75rem 0.9rem",
        borderRadius: 10,
        border: "1px solid rgba(127,127,127,.35)",
        outline: "none",
        fontSize: "1rem"
    },
    textarea: {
        width: "100%",
        padding: "0.75rem 0.9rem",
        borderRadius: 10,
        border: "1px solid rgba(127,127,127,.35)",
        outline: "none",
        fontSize: "1rem",
        resize: "vertical"
    },

    actions: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: ".5rem",
        justifyContent: 'center'
    },

    termsAction: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
        appearance: "none",
        border: "none",
        borderRadius: 999,
        padding: "0.8rem 1.25rem",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
        backgroundColor: 'white',
        // background: "linear-gradient(225deg, #1C1F21, 70%, #00ADB5)",
        color: "black",
        fontFamily: 'Verdana',
        fontWeight: 'bolder',
    },
    buttonDisabled: { opacity: 0.7, cursor: "not-allowed" },
    secondaryLink: {
        textDecoration: "none",
        fontFamily: 'Verdana',
        fontWeight: 'bolder',
        color: '#00ADB5'
    },

    footerNote: { fontSize: ".9rem", marginTop: "1rem", },
    link: { textDecoration: "underline", color: '#00ADB5' },

    // Responsive tweak
    "@media (min-width: 720px)": {}, // (Inline styles can't do queries; if you move to CSS/Tailwind, use a 2-col grid:)
};

export default Contact