import React from 'react';
import Link from "next/link";

const FooterDropdown = ({list, title}) => {
  const [showContent, setShowContent] = React.useState(false);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  }

  return (
    <div>
      <div className={`footer-dropdown__title`} onClick={toggleShowContent}>
        {title}
      </div>
      <ul className={`footer-dropdown ${showContent && 'footer-dropdown_show'}`}>
        {list.map((item, index) => (
          <li key={index + item.href}>
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