import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export const PHONE = "+1 (604) 417 1593";
export const MAIL = "debora.r.serra@gmail.com";
export const INSTA = "instagram.com/debs.serra/";

const Resume = () => {
  const year = "text-sm";
  const subtitleClass = "text-2xl mb-3 pb-1 border-b-2 border-wine-100";
  const textFlex =
    "flex md:items-center md:gap-4 md:mb-1 flex-col md:flex-row gap-1 mb-3";
  const icon = "flex gap-1";
  const content = "max-w-4xl mx-auto";

  return (
    <div>
      <div className='resume'>
        <h1 className='text-wine-800 text-4xl text-center border-wine-400 border-b-2 pb-4 mb-6'>
          Debora Rodrigues Serra
        </h1>
        <div className={content}>
          <div className='mb-4'>
            <h2 className={subtitleClass}>Contact</h2>
            <p className={textFlex}>
              <span className={icon}>
                <FaWhatsapp size={16} />
                <FiPhone size={16} />
              </span>
              {PHONE}
            </p>
            <p className={textFlex}>
              <FiMail size={16} className={icon} />
              {MAIL}
            </p>
            <p className={textFlex}>
              <FaInstagram size={16} className={icon} />
              {INSTA}
            </p>
          </div>

          <div className='mb-4'>
            <h2 className={subtitleClass}>Academic graduation</h2>

            <div className={textFlex}>
              <p className={year}>2024 - current</p>
              <p>
                Web development with Co-Op - Canadian College of Technology and
                Business
              </p>
            </div>
            <div className={textFlex}>
              <p className={year}>2021 - 2022</p>
              <p>Web development - Trybe</p>
            </div>
            <div className={textFlex}>
              <p className={year}>2018 - 2019</p>
              <p>Specialization in gastronomy and authorial cook - PUCRS</p>
            </div>
          </div>
          <div className='mb-4'>
            <h2 className={subtitleClass}>Certifications</h2>

            <div className={textFlex}>
              <p className={year}>2020</p>
              <p>Confeitaria Incrível - Finesse Doces Finos, Brazil</p>
            </div>
            <div className={textFlex}>
              <p className={year}>2017</p>
              <p>
                The Wilton Method of Cake Decorating - Luciana Sampaio, Brazil
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <h2 className={subtitleClass}>Professional history</h2>
            <div className={textFlex}>
              <p className={year}>09/2023 - current</p>
              <p>Freelancer at Guarde Aqui</p>
            </div>
            <div className={textFlex}>
              <p className={year}>09/2022 - 08/2024</p>
              <p>Web Developer at UOL Host, São Paulo/SP</p>
            </div>
            <div className={textFlex}>
              <p className={year}>09/2022 - 09/2022</p>
              <p>Front End Developer in Scandiweb, Latvia</p>
            </div>
            <div className={textFlex}>
              <p className={year}>05/2022 - 09/2022</p>
              <p>Summer Job Tutor in Trybe, Belo Horizonte/MG</p>
            </div>
            <div className={textFlex}>
              <p className={year}>05/2021 - 10/2021</p>
              <p>Health agent in Andradas/MG</p>
            </div>
            <div className={textFlex}>
              <p className={year}>02/2020 - 12/2020</p>
              <p>Chemistry technician in Andradas/MG</p>
            </div>
            <div className={textFlex}>
              <p className={year}>01/2018 - 08/2018</p>
              <p>
                Sales assistant in Comunhão Espírita de Brasília, Brasília/DF
              </p>
            </div>
            <div className={textFlex}>
              <p className={year}>10/2014 - 10/2016</p>
              <p>Intern in EMBRAPA - Agroenergy, Brasília/DF</p>
            </div>
          </div>

          <div className='mb-4'>
            <h2 className={subtitleClass}>Languages</h2>

            <div className={textFlex}>
              <p className='small resume__languages--item-lang'>English</p>
              <p className={year}>Level: Intermediary</p>
            </div>
            <div className={textFlex}>
              <p className='small resume__languages--item-lang'>Portuguese</p>
              <p className={year}>Level: Native</p>
            </div>
          </div>
        </div>
        <h2 className='text-center'>Vancouver, September, 2024</h2>
      </div>
    </div>
  );
};

export default Resume;
