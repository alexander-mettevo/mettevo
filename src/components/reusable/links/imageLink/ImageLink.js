import React, {useEffect, useRef, useState} from 'react';
import useWindowSize from "@/hooks/useWindowSize";
import showFromBottom from "@/components/reusable/animations/showFromBottom";
import Link from "next/link";
import style from "./image-link.module.scss"
import Image from "next/image";
import BlackAndGray from "@/components/reusable/text/textComponents/BlackAndGray";

const ImageLink = ({item}) => {
  const ref = useRef(null);
  const {width} = useWindowSize();
  const [imageSize, setImageSize] = useState({
    width: item.image.size.width + 'px',
    height: item.image.size.height + 'px'
  });

  const handleSize = () => {
    if (width < 900) {
      setImageSize({
        width: '100%',
        height: (item.image.size.height / item.image.size.width) * 90 + 'vw'
      })
    } else if (width < 1440) {
      setImageSize({
        width: (item.image.size.width * 100) / 1440 + 'vw',
        height: (item.image.size.height * 100) / 1440 + 'vw'
      })
    }
  }

  useEffect(() => {
    showFromBottom(ref)
    handleSize()
  }, []);

  useEffect(() => {handleSize()}, [width]);

  return (
    <div ref={ref}>
      <Link className={`${style['image-link']} container-img`} href={item.href} data-mouse={'View'} style={{
        width: imageSize.width,
        height: imageSize.height
      }}>
        <Image fill src={item.image.src} alt={item.title} />
      </Link>
      <BlackAndGray item={item}/>
    </div>
  );
};

export default ImageLink;