import React, {useRef, useState} from 'react';
import Link from "next/link";

const FooterDropdown = ({list, title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={'footer-dropdown'}>
      <button
        onClick={handleToggle}
        className={`footer-dropdown__title ${
          isOpen ? 'footer-dropdown__title--open' : ""
        }`}
      >
        {title}
      </button>
      <ul
        // className={`footer-dropdown ${showContent && 'footer-dropdown_show'}`}
        ref={contentRef}
        className={`footer-dropdown__items ${
          isOpen ? 'footer-dropdown__items--open' : ""
        }`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : 0 }}
      >
        {list.map((item, index) => (
          <li className={'footer-dropdown__item'} key={index + item.href}>
            <Link className='footer__link underline-link' href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterDropdown;