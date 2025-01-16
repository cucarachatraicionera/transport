// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// import data
// import {
//   headerData,
//   heroData,
//   navData,
//   faqData,
//   aboutData,
//   howData,
//   testimonialData,
//   footerData,
// } from "../data.json";

const headerData = {
  logoImgV1: "/images/header/projectv1.svg",
  logoImgV2: "/images/header/projectv2.svg",
  btnText: "Contact us",
};

const navData = [
  { name: "About", href: "/" },
  { name: "How to", href: "/" },
  { name: "Faqs", href: "/" },
];

const heroData = {
  title: "Tu aliado confiable en logística y transportes",
  sceneImg: "/images/hero/scene.svg",
  boyImg: "/images/hero/boy.svg",
  girlImg: "/images/hero/girl.svg",
  truckImg: "/images/hero/truck.svg",
  btnText: "Comienza",
};

const aboutData = {
  title: "Sobre nosotros",
  subtitle:
    "En JC Logística y Transportes nos especializamos en ofrecer soluciones integrales de transporte y logística. Con años de experiencia en el sector, nuestro compromiso es brindar un servicio eficiente, seguro y confiable para satisfacer las necesidades de nuestros clientes. Somos tu socio estratégico en el manejo de cargas y transporte de mercancías. ",
  boyImg: "/images/about/boy.svg",
};

const howData = {
  title: "Como contactarnos?",
  subtitle:
    "Estamos aquí para ayudarte con tus necesidades de transporte y logística. Haz clic en el botón de WhatsApp y habla directamente con uno de nuestros expertos.",
  girlImg: "/images/how/girl.svg",
};

const faqData = {
  pretitle: "faq",
  title: "Questions and Answers on Professional Traffic Permits:",
  boyImg: "/images/faq/boy.svg",
  accordions: [
    {
      question: "What is a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How to check the traffic condition?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "What are the requirements for a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question:
        "Are there professional traffic permit training courses at a distance?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "When is a professional traffic permit needed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "Where to look for a traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question:
        "Are there differences between a traffic permit and a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How much does a commercial traffic permit cost for goods?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "How to plug in for the traffic permit test?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How is the sample for a professional traffic permit booked?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "What is a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How to check the traffic condition?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
  ],
};

const testimonialData = {
  pretitle: "testimonials",
  title: "Our Awesome Clients",
  clients: [
    {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/testimonials/avatar1.png",
      name: "Customer",
    },
    {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/testimonials/avatar2.png",
      name: "Customer",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
    {
      message:
        "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
      image: "/images/testimonials/avatar1.png",
      name: "Isak Pettersson",
    },
    {
      message:
        "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
      image: "/images/testimonials/avatar2.png",
      name: "Simon Sandberg",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
  ],
};

const footerData = {
  truckImg: "/images/footer/truck.svg",
  hillImg: "/images/footer/hill.svg",
  text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
  logo: "/images/footer/projectv1.svg",
  links: [
    { name: "about", href: "/" },
    { name: "how to", href: "/" },
    { name: "faqs", href: "/" },
  ],
  form: {
    labelName: "Name",
    placeholderName: "Your name",
    labelEmail: "Email address",
    placeholderEmail: "Your email adddress",
    btnText: "Get Started",
  },
};

const Home = ({
  headerData,
  heroData,
  navData,
  aboutData,
  howData,
  footerData,
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero heroData={heroData} headerData={headerData} 
      navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Footer footerData={footerData} />
      <Copyright />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/1234567890" // Cambia al número de WhatsApp con el código de país.
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.55 4.123 1.513 5.876L0 24l6.375-1.462A11.98 11.98 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.349 17.396c-.262.737-1.52 1.407-2.086 1.465-.544.056-1.077.262-3.621-1.104-3.057-1.623-5.056-5.403-5.212-5.654-.155-.253-1.246-1.628-1.246-3.105s.787-2.186 1.066-2.485c.28-.3.612-.374.818-.374.206 0 .409 0 .588.01.19.01.445-.072.697.531.262.632.887 2.189.965 2.346.078.156.13.338.025.546-.106.209-.155.337-.311.518s-.331.373-.498.558c-.167.185-.341.386-.146.759.194.373.863 1.416 1.845 2.295 1.27 1.145 2.337 1.503 2.707 1.671.37.168.58.14.793-.085.212-.225.962-1.108 1.222-1.492.26-.384.52-.31.878-.186.358.124 2.268 1.073 2.658 1.267.39.193.65.287.747.453.096.166.096.768-.166 1.505z" />
        </svg>
      </a>
    </div>
  );
};


// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      aboutData,
      howData,
      footerData,
    },
  };
};

export default Home;
