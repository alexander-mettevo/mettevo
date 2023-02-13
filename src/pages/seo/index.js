import SeoService from "@/components/pages/services/seo/index/SeoService";
import seoServices from "@/mocData/services/seoServices";

export default function Seo() {
  return (<SeoService data={seoServices}/>)
}