const layout = {
  menuItems: [
    {
      id: 1,
      title: "seo",
      showInFooter: true,
    },
    {
      id: 2,
      title: "smm",
      showInFooter: true,
    },
    {
      id: 3,
      title: "web development"
    },
    {
      id: 4,
      title: "niches"
    },
    {
      id: 5,
      title: "projects"
    },
    {
      id: 6,
      title: "company"
    },
    {
      id: 7,
      title: "blog"
    },
    {
      id: 8,
      title: "contacts",
      link: {
        href: "/contacts"
      }
    }
  ],
  pageLinks: [
    {
      title: "SEO",
      href: "/seo",
      childPage: [
        {
          title: "SEO Services",
          href: "/seo/",
          childPage: [
            {
              title: "SEO for Healthcare Providers",
              href: "/seo/healthcare",
            },
            {
              title: "SEO for SAAS Industry",
              href: "/seo/saas",
            },
            {
              title: "SEO for B2B Companies",
              href: "/seo/b2b",
            },
            {
              title: "SEO for Crypto",
              href: "/seo/crypto",
            },
            {
              title: "SEO for Finanical Services Industry",
              href: "/seo/finances",
            },
            {
              title: "SEO for Real Estate Industry",
              href: "/seo/real-estate",
            },
            {
              title: "SEO for Franchises",
              href: "/seo/franchise",
            }
          ]
        },
        {
          title: "e-commerce seo",
          href: "/seo/e-commerce",
          childPage: [
            {
              title: "WooCommerce SEO",
              href: "/seo/woocommerce-seo",
            },
            {
              title: "Shopify SEO",
              href: "/seo/shopify-seo",
            },
            {
              title: "Magento SEO",
              href: "/seo/magento-seo",
            },
            {
              title: "Amazon SEO",
              href: "/seo/amazon-seo",
            },
          ]
        },
        {
          title: "on-page seo",
          href: "/seo/on-page",
        },
        {
          title: "keywords research",
          href: "/seo/keywords-research",
        },
        {
          title: "content marketing",
          href: "/seo/content-marketing",
        },
        {
          title: "mobile seo",
          href: "/seo/mobile",
        },
        {
          title: "international seo",
          href: "/seo/international",
        },
      ]
    },
    {
      title: "SMM",
      href: "/smm",
      childPage: [
        {
          title: "SMM Services",
          href: "/smm",
        },
        {
          title: "facebook management",
          href: "/smm/facebook-management",
        },
        {
          title: "instagram management",
          href: "/smm/instagram-management",
        },
        {
          title: "linkedin management",
          href: "/smm/linkedin-management",
        },
        {
          title: "twitter management",
          href: "/smm/twitter-management",
        },
        {
          title: "youtube management",
          href: "/smm/youtube-management",
        },
        {
          title: "pinterest management",
          href: "/smm/pinterest-management",
        },
      ]
    },
    {
      title: "WEB Development",
      href: "/web-development",
      childPage: [
        {
          title: "Website Design",
          href: "/web-design",
        },
        {
          title: "Website Development Services",
          href: "/web-development",
          childPage: [
            {
              title: "Developing Website on Wordpress",
              href: "/wordpress-development",
            },
            {
              title: "Woocommerce Development",
              href: "/woocommerce-development",
            }
          ]
        },
        {
          title: "Website Maintenance Services",
          href: "/website-maintenance",
        },
        {
          title: "Website Speed Optimization",
          href: "/website-speed-optimization",
        },
      ]
    },
    {
      title: "niches",
      href: "/niches",
      childPage: [
        {
          title: "E-commerce SEO",
          href: "/seo/e-commerce",
          childPage: [
            {
              title: "WooCommerce SEO",
              href: "/seo/woocommerce-seo",
            },
            {
              title: "Shopify SEO",
              href: "/seo/shopify-seo",
            },
            {
              title: "Magento SEO",
              href: "/seo/magento-seo",
            },
            {
              title: "Amazon SEO",
              href: "/seo/amazon-seo",
            },
          ]
        },
        {
          title: "SEO for Healthcare Providers",
          href: "/seo/healthcare",
        },
        {
          title: "SEO for SAAS Industry",
          href: "/seo/saas",
        },
        {
          title: "SEO for B2B Companies",
          href: "/seo/b2b",
        },
        {
          title: "SEO for Crypto",
          href: "/seo/crypto",
        },
        {
          title: "SEO for Finanical Services Industry",
          href: "/seo/finances",
        },
        {
          title: "SEO for Real Estate Industry",
          href: "/seo/real-estate",
        },
        {
          title: "SEO for Franchises",
          href: "/seo/franchise",
        }
      ]
    },
    {
      title: "projects",
      href: "/projects",
      //TODO projects list
      childPage: []
    },
    {
      title: "Company",
      href: "/company",
      childPage: [
        {
          title: "About Us",
          href: "/company/about-us",
        },
        {
          title: "Career",
          href: "/company/career",
        }
      ]
    },
    {
      title: "Blog",
      href: "/blog",
      childPage: []
    },
    {
      title: "Contacts",
      href: "/contacts",
      childPage: []
    }

  ],
  rightSideData: [
    {
      id: 1,
      type: "actions",
      menuList: [
        {
          id: 1,
          title: "seo services",
          data: {
            title: "OUR SEO SERVICES",
            text: "Customized SEO-optimization solutions that are designed to get your brand noticed in the social media sphere. Each social media platform has its own vibe that you need to respect."
          }
        },
        {
          id: 2,
          title: "e-commerce seo",
          data: {
            title: "OUR E-COMMERCE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 3,
          title: "on-page seo",
          data: {
            title: "OUR ON-PAGE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 4,
          title: "keywords research",
          data: {
            title: "OUR KEYWORDS RESEARCH",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 5,
          title: "content marketing",
          data: {
            title: "OUR CONTENT MARKETING",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 6,
          title: "mobile seo",
          data: {
            title: "OUR MOBILE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 7,
          title: "international seo",
          data: {
            title: "OUR INTERNATIONAL SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        }
      ]
    },
    {
      id: 2,
      type: "actions",
      menuList: [
        {
          id: 1,
          title: "smm services",
          data: {
            title: "OUR SOCIAL MEDIA OPTIMIZATION SERVICES",
            text: "Our Search Engine Optimization (SEO) services will provide your business with everything it will need to get your brand the online presence it deserves on Google’s search results. SEO is the marketing foundation of nearly every successful online business!"
          }
        },
        {
          id: 2,
          title: "facebook management",
          data: {
            title: "OUR FACEBOOK MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 3,
          title: "instagram management",
          data: {
            title: "OUR INSTAGRAM MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 4,
          title: "linkedin management",
          data: {
            title: "OUR LINKEDIN MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 5,
          title: "twitter management",
          data: {
            title: "OUR TWITTER MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 6,
          title: "youtube management",
          data: {
            title: "OUR YOUTUBE MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 7,
          title: "pinterest management",
          data: {
            title: "OUR PINTEREST MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        }
      ]
    },
    {
      id: 3,
      type: "actions",
      menuList: [
        {
          id: 1,
          title: "seo services",
          data: {
            title: "OUR SEO SERVICES",
            text: "Customized SEO-optimization solutions that are designed to get your brand noticed in the social media sphere. Each social media platform has its own vibe that you need to respect."
          }
        },
        {
          id: 2,
          title: "e-commerce seo",
          data: {
            title: "OUR E-COMMERCE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 3,
          title: "on-page seo",
          data: {
            title: "OUR ON-PAGE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 4,
          title: "keywords research",
          data: {
            title: "OUR KEYWORDS RESEARCH",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 5,
          title: "content marketing",
          data: {
            title: "OUR CONTENT MARKETING",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 6,
          title: "mobile seo",
          data: {
            title: "OUR MOBILE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 7,
          title: "international seo",
          data: {
            title: "OUR INTERNATIONAL SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        }
      ]
    },
    {
      id: 4,
      type: "actions",
      menuList: [
        {
          id: 1,
          title: "seo services",
          data: {
            title: "OUR SEO SERVICES",
            text: "Customized SEO-optimization solutions that are designed to get your brand noticed in the social media sphere. Each social media platform has its own vibe that you need to respect."
          }
        },
        {
          id: 2,
          title: "e-commerce seo",
          data: {
            title: "OUR E-COMMERCE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 3,
          title: "on-page seo",
          data: {
            title: "OUR ON-PAGE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 4,
          title: "keywords research",
          data: {
            title: "OUR KEYWORDS RESEARCH",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 5,
          title: "content marketing",
          data: {
            title: "OUR CONTENT MARKETING",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 6,
          title: "mobile seo",
          data: {
            title: "OUR MOBILE SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        },
        {
          id: 7,
          title: "international seo",
          data: {
            title: "OUR INTERNATIONAL SEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi asperiores atque autem beatae commodi consequatur culpa cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores max"
          }
        }
      ]
    },
    {
      id: 5,
      type: "simple",
      list: [
        {
          title: "planet 925",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "yodoggo",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity to give it everything we’ve got as an agency. Our tried and tested approach."
        },
        {
          title: "charter jets",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "surgery",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        }
      ],
      moreLink: {
        href: "/projects",
        title: "more projects"
      }
    },
    {
      id: 6,
      type: "simple",
      list: [
        {
          title: "about",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "certifications",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "Carrer",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
      ]
    },
    {
      id: 7,
      type: "simple",
      list: [
        {
          title: "all",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "seo basic",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "internal optimization",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "external optimization",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "Content",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "social signals",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "tools for seo",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "online store",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
        {
          title: "web analytics",
          description: "Some description of the project. Working with ambitious clients gives us the oppor tu nity."
        },
      ]
    },
    {
      id: 8,
      type: "simple",
    },
  ],
  footerMenu: [
    {
      title: "what we do",
      menuList: [
        {
          type: "dropdown",
          title: "seo",
          links: [
            {
              title: "seo services",
              href: "/seo-services",
            },
            {
              title: "e-commerce seo",
              href: "/e-commerce-seo",
            },
            {
              title: "on-page seo",
              href: "/on-page-seo",
            },
            {
              title: "keywords research",
              href: "/keywords-research",
            },
            {
              title: "content marketing",
              href: "/content-marketing",
            },
            {
              title: "mobile seo",
              href: "/mobile-seo",
            },
            {
              title: "international seo",
              href: "/international-seo",
            },
          ]
        },
        {
          type: "dropdown",
          title: "smm",
          links: [
            {
              id: 1,
              title: "smm services",
              href: "/smm-services"
            },
            {
              id: 2,
              title: "facebook management",
              href: "/facebook-management"
            },
            {
              id: 3,
              title: "instagram management",
              href: "/instagram-management"
            },
            {
              id: 4,
              title: "linkedin management",
              href: "/linkedin-management"
            },
            {
              id: 5,
              title: "twitter management",
              href: "/twitter-management"
            },
            {
              id: 6,
              title: "youtube management",
              href: "/youtube-management"
            },
            {
              id: 7,
              title: "pinterest management",
              href: "/pinterest-management"
            }
          ]
        },
        {
          type: "dropdown",
          title: "web development",
          links: [
            {
              title: "web developments",
              href: "/web-development",
            },
            {
              title: "web design",
              href: "/web-design",
            },
            {
              title: "Website Maintenance",
              href: "/website-maintenance",
            },
            {
              title: "website speed optimization",
              href: "/website-speed-optimization",
            }
          ]
        }
      ]
    },
    {
      title: "Niches",
      menuList: [
        {
          type: "link",
          title: "e-commerce",
          href: "/e-commerce"
        },
        {
          type: "link",
          title: "healthcare",
          href: "/healthcare"
        },
        {
          type: "link",
          title: "saas",
          href: "/saas"
        },
        {
          type: "link",
          title: "b2b",
          href: "/b2b"
        },
        {
          type: "link",
          title: "saas",
          href: "/saas"
        },
        {
          type: "link",
          title: "crypto",
          href: "/crypto"
        },
        {
          type: "link",
          title: "finances",
          href: "/finances"
        },
        {
          type: "link",
          title: "real estate",
          href: "/real-estate"
        },
        {
          type: "link",
          title: "franchise",
          href: "/franchise"
        },
      ]
    },
    {
      title: "PRojects",
      menuList: [
        {
          type: "link",
          title: "all case studies",
          href: "/all-case-studies"
        },
        {
          type: "link",
          title: "planet 925",
          href: "/planet-925"
        },
        {
          type: "link",
          title: "yodoggo",
          href: "/yodoggo"
        },
        {
          type: "link",
          title: "charter jets",
          href: "/charter-jets"
        },
        {
          type: "link",
          title: "surgery",
          href: "/surgery"
        },
        {
          type: "link",
          title: "droneii",
          href: "/droneii"
        }
      ]
    },
    {
      title: "Blog",
      menuList: [
        {
          type: "link",
          title: "all articles",
          href: "/all-articles"
        },
        {
          type: "link",
          title: "seo basic",
          href: "/seo-basic"
        },
        {
          type: "link",
          title: "internal optimization",
          href: "/internal-optimization"
        },
        {
          type: "link",
          title: "external optimization",
          href: "/external-optimization"
        },
        {
          type: "link",
          title: "content",
          href: "/content"
        },
        {
          type: "link",
          title: "social signals",
          href: "/social-signals"
        },
        {
          type: "link",
          title: "tools for seo",
          href: "/tools-for-seo"
        },
        {
          type: "link",
          title: "online store",
          href: "/online-store"
        },
        {
          type: "link",
          title: "web analytics",
          href: "/web-analytics"
        }
      ]
    },
    {
      title: "Company",
      menuList: [
        {
          type: "link",
          title: "about us",
          href: "/about-us"
        },
        {
          type: "link",
          title: "certifications",
          href: "/certifications"
        },
        {
          type: "link",
          title: "career",
          href: "/career"
        }
      ]
    }
  ]
}

export default layout