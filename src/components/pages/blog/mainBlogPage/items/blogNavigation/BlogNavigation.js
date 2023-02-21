import React from 'react';
import Link from "next/link";
import style from './blog-navigation.module.scss';

const links =  [
  {
    title: 'seo basic',
    href: '/',
  },
  {
    title: 'internal optimization',
    href: '/',
  },
  {
    title: 'external optimization',
    href: '/',
  },
  {
    title: 'Content',
    href: '/',
  },
  {
    title: 'social signals',
    href: '/',
  },
  {
    title: 'tools for seo',
    href: '/',
  },
  {
    title: 'online store',
    href: '/',
  },
  {
    title: 'web analytics',
    href: '/',
  },
]

const BlogNavigation = () => (
    <div className={style['blog-navigation']}>
      {links.map(({title, href}, index, arr) =>
        <Link
          className={`${style['blog-navigation__item']} text_2`}
          key={index + 'BlogNavigation'}
          href={href}
          style={{
            '--links-count': arr.length,
          }}
        >
          {title}
        </Link>
      )}
    </div>
  );

export default BlogNavigation;