import Rocket from "@/components/pages/homePage/items/services/items/ServicesSVGImages/Rocket";
import LoudSpeaker from "@/components/pages/homePage/items/services/items/ServicesSVGImages/LoudSpeaker";
import Computer from "@/components/pages/homePage/items/services/items/ServicesSVGImages/Computer";

const renderContent = (propName) => {
  const contentMap = {
   'rocket': <Rocket/>,
    'loud-speaker': <LoudSpeaker/>,
    'computer': <Computer/>,
  };

  return contentMap[propName];
};

export default renderContent;