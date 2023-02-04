import React from 'react';
import {FooterLink} from "@/components/layout/footer/styles";
import {FooterDropdownContent, FooterDropdownTitle} from "@/components/layout/footer/footerDropdown/styles";

const FooterDropdown = ({list, title}) => {
  const [showContent, setShowContent] = React.useState(false);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  }

  return (
    <div>
      <FooterDropdownTitle showContent={showContent} onClick={toggleShowContent}>
        {title}
      </FooterDropdownTitle>
      <FooterDropdownContent showContent={showContent}>
        {list.map((item, index) => (
          <li key={index + item.href}>
            <FooterLink className='underline-link' href={item.href}>
              {item.title}
            </FooterLink>
          </li>
        ))}
      </FooterDropdownContent>
    </div>
  );
};

export default FooterDropdown;