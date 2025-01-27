import imgOne from "../images/project-1-placeholder.webp"
import imgTwo from "../images/project-2-placeholder.webp"
import imgThree from "../images/project-3-placeholder.webp"
import imgFour from "../images/project-4-placeholder.jpeg"

export const projectsData = [
    {
      id: 1,
      title: "Project One",
      image: imgOne || "https://via.placeholder.com/300",
      description:
        "This project showcases a seamless user experience designed for effective business solutions. It leverages modern technologies to address real-world challenges efficiently.",
      linkToCode: "https://github.com/martinvega2003/dentist-site-project-one",
      linkToDeployment: "https://dentist-site-project-one.vercel.app/",
    },
    {
      id: 2,
      title: "Project Two",
      image: imgTwo || "https://via.placeholder.com/300",
      description:
        "A comprehensive project aimed at enhancing online visibility and driving engagement through innovative features tailored to clients' needs.",
      linkToCode: "https://github.com/martinvega2003/dentist-site-project-two",
      linkToDeployment: "https://dentist-site-project-two.vercel.app/",
    },
    {
      id: 3,
      title: "Project Three",
      image: imgThree || "https://via.placeholder.com/300",
      description:
        "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
			linkToCode: "https://github.com/martinvega2003/dentist-site-project-three",
			linkToDeployment: "https://dentist-site-project-three.vercel.app/",
    },
		{
      id: 4,
      title: "Project Four",
      image: imgFour || "https://via.placeholder.com/300",
      description:
        "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
			linkToCode: "https://github.com/martinvega2003/dentist-site-project-four",
			linkToDeployment: "https://dentist-site-project-four.vercel.app/",
    },
  ];