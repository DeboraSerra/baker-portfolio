import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { INSTA, MAIL, PHONE } from "../resume";

export const WHATS_LINK =
  "https://wa.me/" + PHONE.replace("+", "").replace(/\s/g, "");

const Contact = () => {
  const linkClass =
    "flex md:flex-row md:gap-4 md:items-center hover:underline md:mb-4 md:text-xl flex-col gap-2 mb-4 text-lg";
  return (
    <div className='max-w-[500px] mx-auto'>
      <h1 className='text-3xl border-b-2 border-wine-100 pb-2 mb-4'>
        Contact me!
      </h1>
      <a href={WHATS_LINK} className={linkClass}>
        <span className='flex gap-2'>
          <FaWhatsapp size={20} />
          <FiPhone size={20} />
        </span>
        {PHONE}
      </a>
      <a href='mailto:debora.r.serra@gmail.com' className={linkClass}>
        <FiMail size={20} />
        {MAIL}
      </a>
      <a href={INSTA} className={linkClass}>
        <FaInstagram size={20} />
        {INSTA}
      </a>
    </div>
  );
};

export default Contact;
