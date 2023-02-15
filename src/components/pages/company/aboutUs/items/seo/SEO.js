import SEOGrid from "@/components/pages/company/aboutUs/items/seo/items/SEOGrid";
import style from './seo.module.scss'

const SEO = ({list}) => {
  return (
    <div className={`block-wrapper ${style['seo']}`}>
      <div className={"block-title"}>SEO expert</div>
      <div className={"block-subtitle"}>success responsibilty</div>
      <SEOGrid list={list}/>
    </div>
  );
};

export default SEO;
