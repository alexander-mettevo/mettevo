import onPageSeoService from "@/mocData/services/onPageSeoService";
import OnPageSeoPage from "@/components/pages/services/seo/onPage/OnPageSeoPage";

export default function OnPage() {
  return <OnPageSeoPage data={onPageSeoService}/>
}