import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <p className="text-xl mt-20">
            Passionnée de l'informatique, je m'intéresse beaucoup au
            développement web, mobile, système d'information géographique et
            ainsi etudie la modelisation du projet.
          </p>

          <br />

          <p className="text-xl">
            Système d'Information Géographique et Décisionnelle : Cartographie,
            Webmapping. 
            Systèmes de gestion de la Base de données : Microsoft Access, MySQL,
            Firebase, MongoDB, Nodejs. 
            Technologie : HTML5 & CSS3, Flutter , Github, ClickUp, Skype,
            Postman.
            Langage de programmation : PHP, JAVA, Javascript, CSharp, Swift.
            Conception : MERISE, Agile Scrum, UML. 
            Framework : CodeIgniter, Symfony, Reactjs, Vuejs, Spring, Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
