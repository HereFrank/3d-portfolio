import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <section className="flex justify-center pb-5 gap-10">
      <a href="https://www.linkedin.com/in/frankagrazmartinez/">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2xl"
          className="hover:text-blue-500 ease-linear duration-200"
        />
      </a>
      <a href="https://github.com/HereFrank">
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          className="hover:text-gray-500 ease-linear duration-200"
        />
      </a>
    </section>
  );
};
export default Footer;
