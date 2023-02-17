import React, { useState, useRef } from "react";
import styles from "./DropdownMenu.module.scss";

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownMenu}>
      <button className={styles.dropdownMenuButton} onClick={handleToggle}>
        {title}
      </button>
      <div
        ref={contentRef}
        className={`${styles.dropdownMenuItems} ${
          isOpen ? styles["dropdownMenuItems--open"] : ""
        }`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : 0 }}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.dropdownMenuItem}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
