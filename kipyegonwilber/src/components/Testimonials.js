import React from "react";
import wilberPhoto from '../assets/wilber.png';

const TestimonialsPage = () => {
    return (
        <section id="testimonials" class="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p className="comments">Kind Words from my Network</p>
        <div class="testimonials-container">
            <div class="testimonial-card">
            <img src={wilberPhoto} alt="Appointment" className="client-photo" />
            <h3 class="client-name">Kipyegon Kenduiywo Wilberforce</h3>
            <p class="client-role">Software Developer/Actuarial Scientist</p>
            <p class="testimonial-text">I am yet to update this section in not so long!</p>
            </div>
        </div>
        </section>
    );
};

export default TestimonialsPage;