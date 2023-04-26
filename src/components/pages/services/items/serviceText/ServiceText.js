import React, { useEffect, useState } from "react";
import Bounce from "@/components/reusable/bounce/Bounce";
import ServiceTextCard from "./items/ServiceTextCard";
import ServiceTextDescription from "./items/ServiceTextDescription";
import { ServiceTextCircle } from "./items/ServiceTextCircle";
import style from "./service-text.module.scss";

const ServiceText = ({ data }) => {
  const [isFirstBounce, setIsFirstBounce] = useState(false);

  useEffect(() => {
    if (data[0][0].component === "bounce") {
      setIsFirstBounce(true);
    }
  }, []);

  return (
    <div className={"block-wrapper"}>
      <h2 className="block-title block-title_right">
        Changes impact on your sales through 2023
      </h2>
      <div className={style["service-text__wrapper"]}>
        {data.map((row, index, arr) => (
          <div
            key={index + "serviceTextRow"}
            className={`${style["service-text__row"]}
           ${
             index === arr.length - 1 &&
             isFirstBounce &&
             style["service-text__row_r"]
           }`}
          >
            {row.map((item, index) => (
              <>
                {item.component === "text" && 
                  <ServiceTextDescription
                    key={index + "service-text"}
                    text={item.content.text}
                    title={item.content.title}
                  />
                }
                {item.component === "bounce" && (
                  <ServiceTextCircle
                    key={index + "service-text"} 
                    text={item.content.text} />
                )}
                {item.component === "card" && (
                  <ServiceTextCard
                    value={item?.content?.value}
                    text={item?.content?.text}
                  />
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceText;
