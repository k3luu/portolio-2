import thh from './images/thh.png';
import luusfilm from './images/luusfilm.png';
import portfolio from './images/portfolio.png';
import rpadm from './images/rpadm.png';

export const projects = [
  {
    id: 3,
    name: 'Doctor.com Provider Admin',
    image: rpadm,
    alt_name: 'DDC RPADM Header',
    href: 'https://www.doctor.com/solutions/universal-scheduling',
    description:
      'An administrative dashboard for healthcare providers to manage their listings, reviews, and appointments.'
  },
  {
    id: 1,
    name: 'Luusfilm',
    image: luusfilm,
    alt_name: 'Luusfilm Header',
    href: 'https://luusfilm.tumblr.com',
    description: 'My personal photography blog hosted on Tumblr. Uses a custom theme made my yours truly.'
  },
  {
    id: 0,
    name: 'Two Half-Hitches',
    image: thh,
    alt_name: 'THH Header',
    href: 'https://admiring-yalow-846eea.netlify.com',
    description:
      'Redesigned the website for Two Half-Hitches, an org dedicated to guiding explorers on their outdoor journeys.'
  },
  {
    id: 2,
    name: 'Portfolio',
    image: portfolio,
    alt_name: 'Portfolio Header',
    href: 'http://kathyluu.io',
    description: 'My portfolio, built with React, Webpack, amongst other tools and packages.'
  }
];
