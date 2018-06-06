import thh from './images/thh.png';
import luusfilm from './images/luusfilm.png';
import portfolio from './images/portfolio.png';
import rpadm from './images/rpadm.png';

/**
 * *Descriptions need to be short so that all the cards' heights are aligned.
 * @type {*[]}
 */
export const projectData = [
  {
    id: 3,
    name: 'Doctor.com Provider Admin',
    image: rpadm,
    alt_name: 'DDC RPADM Header',
    href: 'https://www.doctor.com/solutions/universal-scheduling',
    description:
      'An administrative dashboard for healthcare providers to manage their listings, reviews, and appointments.',
    tools: ['React', 'Webpack', 'styled-components', 'PHP']
  },
  {
    id: 1,
    name: 'Luusfilm',
    image: luusfilm,
    alt_name: 'Luusfilm Header',
    href: 'https://luusfilm.tumblr.com',
    description: 'My personal photography blog hosted on Tumblr. Uses a custom theme made my yours truly.',
    tools: ['HTML', 'CSS', 'Tumblr']
  },
  {
    id: 0,
    name: 'Two Half-Hitches',
    image: thh,
    alt_name: 'THH Header',
    href: 'https://admiring-yalow-846eea.netlify.com',
    github: 'https://github.com/k3luu/thh',
    description:
      'Redesigned the website for Two Half-Hitches, a team dedicated to guiding explorers on their outdoor journeys.',
    tools: ['React', 'Gatsby', 'Gestalt']
  },
  {
    id: 2,
    name: 'Portfolio',
    image: portfolio,
    alt_name: 'Portfolio Header',
    href: 'http://kathyluu.io',
    github: 'https://github.com/k3luu/kathyluu',
    description: 'My portfolio.',
    tools: ['React', 'Webpack', 'styled-components', 'Material UI', 'Google Maps API']
  }
];
