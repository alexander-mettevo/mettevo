import React, {useEffect, useState} from 'react';
import Image from "next/image";
import BlogItemText from "@/components/pages/blog/reusableBlog/blogItem/BlogItemText";
import style from './blog-item.module.scss'
import {useRouter} from "next/navigation";


const BlogItem = ({post}) => {
  const {image, theme, title, author, date, href} = post
  const [imageSize, setImageSize] = useState({width: 0, height: 0})
  const [aspectRatio, setAspectRatio] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const widthImage = Math.floor((image.size.width  / 1440) * 100)
    const heightImage = Math.floor((image.size.height  / 1440)*  100)

    setAspectRatio(image.size.height / image.size.width)
    setImageSize({width: widthImage, height: heightImage})
  }, [])

  const handleClick = () => {
    router.push(href)
  }


  return (
    <div className={`${style['blog-item']} blog-item`} data-mouse='View' onClick={handleClick}>
      <div className={'blog-image'}>
        <div
          className={style['blog-item__image-wrapper']}
          style={{
            '--image-width': `${image.size.width}px`,
            '--image-height': `${image.size.height}px`,
            '--image-width-adaptive': `${imageSize.width}vw`,
            '--image-height-adaptive': `${imageSize.height}vw`,
            '--image-aspect-ratio': `${aspectRatio}`
          }}>
          <Image fill src={image.src} alt={image.alt}/>
        </div>
      </div>
      <div>
        <BlogItemText
          theme={theme}
          title={title}
          author={author}
          date={date}
        />
      </div>
    </div>
  );
};

export default BlogItem;