import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-semibold text-lg">Desenvolvedores</p>
          <ul className="mt-2 flex gap-8">
            <section>
              <li className="mb-1">
                <a
                  href="mailto:dev1@example.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                  dev1@example.com
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/dev1"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub -
                  dev1
                </a>
              </li>
            </section>
            <section>
              <li className="mb-1">
                <a
                  href="mailto:dev1@example.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                  dev1@example.com
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/dev1"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub -
                  dev1
                </a>
              </li>
            </section>
            <section>
              <li className="mb-1">
                <a
                  href="mailto:dev1@example.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                  dev1@example.com
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/dev1"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub -
                  dev1
                </a>
              </li>
            </section>
          </ul>
        </div>

        <div className="text-center">
          <p className="font-semibold text-lg">Siga-nos</p>
          <div className="flex justify-center mt-2">
            <a
              href="https://twitter.com/yourprofile"
              className="text-gray-300 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-gray-300 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/yourprofile"
              className="text-gray-300 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
