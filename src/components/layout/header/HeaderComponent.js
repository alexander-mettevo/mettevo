import React, {useRef} from 'react';
import Logo from "@/components/reusable/logo/Logo";

const HeaderComponent = ({active, setActive}) => {
  const ref = useRef(null);
  const handleMenu = () => {
    ref.current.classList.toggle('open');
    setActive(!active)
  };

  return (
      <header className={'header'}>
        <div className={'header__container'}>
          <div>
            <Logo/>
          </div>
          <div className={'header__burger-btn'} ref={ref} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
  );
};

export default HeaderComponent;