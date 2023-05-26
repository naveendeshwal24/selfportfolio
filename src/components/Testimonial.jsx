import React from "react";
// import img2 from "./assets.logo.jpeg";
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Naveen Kumar "}
          feedback={
            "It's a pleasure to write my association with Shivam, he is well known for his intelligence, work, positive attitude.He plays a vital role in domestic and International process."
          }
        />

        <TestimonialCard
          name={"Shivansh Tyagi"}
          feedback={
            "It was a pleasure to work with Shivam in a same team for a couple of months, Shivam is a smart worker and a person with strong motivation skills and foused  person."
          }
        />

        <TestimonialCard
          name={"Priyanka"}
          feedback={
            "Shivam is an Assest to any organisation and he is a person with strong motivation skills with leadership quality. He is the men of focus and always go an extra mile for his team."
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
