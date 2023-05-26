import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";
import img1 from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img1} alt="Founder" />

        <h2>Shivam Baliyan</h2>
        <p>Motivation is temporary,but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            image={"/path/to/image.jpg"}
            href="https://www.linkedin.com/in/shivam-baliyan-ab28a3179/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/shivam-baliyan" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/shivam-baliyan" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
