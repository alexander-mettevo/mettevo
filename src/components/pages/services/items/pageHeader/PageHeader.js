import React from 'react';

const PageHeader = ({url, title}) => {
  return (
    <div className="page-header title-page">
      <div className="page-header__url">
        {url}
      </div>
      <h2 className="page-header__subtitle">mettevo</h2>
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
};

export default PageHeader;