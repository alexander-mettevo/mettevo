import Box from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Box";
import Cloud from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Cloud";
import Crypto from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Crypto";
import Dollar from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Dollar";
import Hand from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Hand";
import Marker from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Marker";
import Sale from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Sale";
import Home from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/Home";

const renderContent = (propName) => {
  const contentMap = {
    'box': <Box/>,
    'cloud': <Cloud/>,
    'crypto': <Crypto/>,
    'dollar': <Dollar/>,
    'hand': <Hand/>,
    'home': <Home/>,
    'marker': <Marker/>,
    'sale': <Sale/>,
  }

  return contentMap[propName]
}

export default renderContent