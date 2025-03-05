import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import ServiceStyle2 from '../Service/ServiceStyle2';
import SectionHeading from '../SectionHeading';
import CtaStyle2 from '../Cta/CtaStyle2';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    number: '01',
    title: 'Social Media Management & Marketing',
    subTitle:
      'Strategic content planning, audience engagement, and performance-driven marketing to enhance brand visibility across platforms.',
      thumbnailSrc: '/images/studio-agency/Social Media Marketing.png',
      href: '/service/service-details',
  },
  {
    number: '02',
    title: 'E-commerce Solutions',
    subTitle:
      'Seamless marketplace management on Amazon, Flipkart, and other platforms to maximize online sales and customer reach.',
    thumbnailSrc: '/images/studio-agency/E commerce Solutions.png', // Fixed path
    href: '/service/service-details',
  },
  {
    number: '03',
    title: 'Event Management',
    subTitle:
      'Luxury, corporate, and fundraising events executed with precision, creativity, and a seamless on-ground experience.',
    thumbnailSrc: '/images/studio-agency/Event Management.png',
    href: '/service/service-details',
  },
  {
    number: '04',
    title: 'Website Development',
    subTitle:
      'Custom-designed, responsive, and high-performing websites optimized for user experience and brand identity.',
    thumbnailSrc: '/images/studio-agency/Web Development.png',
    href: '/service/service-details',
  },
  {
    number: '05',
    title: 'Video Production & Professional Shoots',
    subTitle:
      'Cinematic storytelling through high-quality video production, editing, and dynamic motion design.',
    thumbnailSrc: '/images/studio-agency/Video Production.png',
    href: '/service/service-details',
  },
  {
    number: '06',
    title: 'Merchandise Solutions',
    subTitle:
      'Customized brand merchandise, promotional products, and premium giveaways to strengthen brand recall.',
    thumbnailSrc: '/images/studio-agency/Merchandise Solutions.png',
    href: '/service/service-details',
  },
  {
    number: '07',
    title: 'Influencer Marketing',
    subTitle:
      'Collaborate with top influencers and content creators to amplify brand awareness and audience engagement.',
    thumbnailSrc: '/images/studio-agency/Influencer Marketing.png',
    href: '/service/service-details',
  },
  {
    number: '08',
    title: 'Brand Strategy & Consulting',
    subTitle:
      'Data-driven insights, competitive analysis, and strategic brand positioning to drive long-term business growth.',
      thumbnailSrc: '/images/studio-agency/Brand Strategy and Consultation.png', // Corrected path
      href: '/service/service-details',
  },
];

export default function ServicePage() {
  pageTitle('Service');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Empowering Brands with Impactful Solutions"
        subTitle="Our Services"
        shape="shape_2"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <ServiceStyle2 data={serviceData} />
      </div>
      <Spacing lg="150" md="80" />
      <div className="cs_height_140 cs_height_lg_70" />
      <CtaStyle2
        title="Do you have a specific project or goal in mind? Let’s turn Chaos into Creation Together!"
        btnText="Send Message"
        btnUrl="/contact"
      />
      <div className="cs_height_150 cs_height_lg_80" />
    </>
  );
}