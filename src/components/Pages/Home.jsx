import React from 'react';
import Hero from '../Hero';
import Spacing from '../Spacing';
import FunFact from '../FunFact';
import About from '../About';
import WhyChose from '../WhyChose';
import Service from '../Service';
import Portfolio from '../Portfolio';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import Award from '../Award';
import Accordion from '../Accordion';
import Cta from '../Cta';
import TestimonialSlider from '../Slider/TestimonialSlider';
import PostCarousel from '../Slider/PostCarousel';
import { pageTitle } from '../../helpers/PageTitle';
const funfactData = [
  { title: 'Happy Clients', number: '15K+' },
  { title: 'Projects Completed', number: '25K+' },
  { title: 'Skilled Team Members', number: '15+' },
  { title: 'Brands Transformed', number: '100+' },
];

const whyChoseFeatureData = [
  {
    title: 'Industry expertise and market insights',
    content:
      'We leverage deep industry knowledge and market trends to craft strategies that give brands a competitive edge.',
  },
  {
    title: 'Creative minds shaping brand identities',
    content:
      'Our team of designers and storytellers bring brands to life with innovative visuals and compelling narratives.',
  },
  {
    title: 'Data-driven strategies for business growth',
    content:
      'We combine analytics and creativity to develop marketing strategies that drive measurable results and long-term success.',
  },
];

const serviceListData = [
  {
    title: 'Brand & Digital Marketing',
    subtitle:
      'Social media management, influencer marketing & community engagement.',
    imgUrl: '/images/creative-agency/service_7.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'E-commerce Solutions',
    subtitle:
      'Marketplace management for Amazon, Flipkart & direct-to-consumer growth.',
    imgUrl: '/images/creative-agency/service_8.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Creative & Production',
    subtitle:
      'Video editing, professional shoots, merchandise, and brand identity design.',
    imgUrl: '/images/creative-agency/service_9.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Event Management',
    subtitle:
      'Luxury, corporate, and fundraising events with seamless execution.',
    imgUrl: '/images/creative-agency/service_10.jpeg',
    href: '/service/service-details',
  },
];

const portfolioData = [
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_1.jpeg',
    title: 'Awesome colorful artwork',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_2.jpeg',
    title: 'Admin dashboard UI design',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_3.jpeg',
    title: 'Product designing with brand',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/portfolio_4.jpeg',
    title: 'Kids education website design',
    btnText: 'See Project',
  },
];

const awardData = [
  {
    brand: 'Behance',
    title: 'UI/UX design of the month',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'December 12, 2023',
    awardImgUrl: '/images/creative-agency/award_img_1.svg',
  },
  {
    brand: 'Awwwards',
    title: 'CSS awards design',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'January 05, 2022',
    awardImgUrl: '/images/creative-agency/award_img_2.svg',
  },
  {
    brand: 'Google',
    title: 'Website of the day',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'March 20, 2021',
    awardImgUrl: '/images/creative-agency/award_img_3.svg',
  },
];

const testimonialData = [
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ansari Patron',
    avatarDesignation: 'CEO at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Jhon Doe',
    avatarDesignation: 'Manager at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ramatam Coo',
    avatarDesignation: 'MD at Delta',
  },
];

const faqData = [
  {
    title: '01. What services does The Dash Media offer?',
    content:
      'We specialize in social media marketing, e-commerce solutions, video production, influencer marketing, event management, website development, and more.',
  },
  {
    title: '02. How can The Dash Media help my brand grow?',
    content:
      'We create strategic marketing campaigns, design compelling visuals, and develop impactful content to drive brand visibility and engagement.',
  },
  {
    title: '03. Do you work with startups and small businesses?',
    content:
      'Yes! We tailor our solutions to fit businesses of all sizes, from startups to established enterprises.',
  },
  {
    title: '04. How do I get started with The Dash Media?',
    content:
      'Simply reach out via our contact form, email, or phone, and we’ll schedule a consultation to understand your needs.',
  },
  {
    title: '05. Do you offer customized marketing solutions?',
    content:
      'Absolutely! Every brand is unique, and we create tailored strategies to meet your specific goals and challenges.',
  },
];

const postData = [
  {
    thumbnailSrc: '/images/creative-agency/post_1.jpeg',
    title: 'How to keep fear from ruining your art business with confident',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_2.jpeg',
    title: 'Artistic mind will be great for creation anything',
    date: '22 Apr 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_3.jpeg',
    title: 'AI will take over all job for human within few years',
    date: '13 May 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_4.jpeg',
    title: 'Your agency need to replace some artistic mind people',
    date: '15 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_1.jpeg',
    title: 'How to keep fear from ruining your art business with confident',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_2.jpeg',
    title: 'Artistic mind will be great for creation anything',
    date: '22 Apr 2023',
    url: '/portfolio/portfolio-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_3.jpeg',
    title: 'AI will take over all job for human within few years',
    date: '13 May 2023',
    url: '/portfolio/portfolio-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_4.jpeg',
    title: 'Your agency need to replace some artistic mind people',
    date: '15 Mar 2023',
    url: '/portfolio/portfolio-details',
  },
];

// New Contact Element After Testimonials
const contactElement = {
  title: 'Do you have a specific project or goal in mind?',
  subtitle: 'Let’s turn Chaos into Creation Together!',
  buttonText: 'Contact Us',
  buttonUrl: '/contact-us',
};

export default function Home() {
  pageTitle('Zivan');
  return (
    <>
      <Hero
  title={[
    '15K+ Happy Clients',
    '25K+ Projects Completed',
    '5+ Skilled Team Members',
    '100+ Brands Transformed',
  ]}
  subtitle={
    <>
      Turning Chaos into Creation <br /> Elevate Your Brand with The Dash Media



    </>
  }
  videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
  bgUrl="/images/creative-agency/hero_video_bg_1.jpeg"
/>
      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing lg="125" md="70" />
      <About
        thumbnail="/images/creative-agency/about_1.jpeg"
        uperTitle="Who We Are"
        title="Transforming Brands with Digital Brilliance"
        subTitle="At The Dash Media, we go beyond the ordinary. Our team of experts in social media, branding, and digital marketing collaborates with businesses to craft impactful brand experiences. Combining creative storytelling, data-driven strategies, and cutting-edge technology, we help brands stand out, engage audiences, and drive real results."
        featureList={[
          'End-to-End Brand Solutions',
          'Creative Storytelling That Converts',
          'Data-Driven Marketing Strategies',
        ]}
        btnText="Learn More"
        btnUrl="/about"
      />
      <Spacing lg="185" md="75" />
      <WhyChose
        sectionTitle="We craft brand solutions that drive results"
        sectionSubTitle="Why Choose Us"
        whyChoseFeatureData={whyChoseFeatureData}
        thumbnailSrc="/images/creative-agency/why_choose_us_img_3.jpeg"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Our core services"
            subTitle="Services"
            variantColor="cs_white_color"
          />
          <Spacing lg="45" md="30" />
        </div>
        <div className="container">
          <Service
            sectionTitle="Our core services"
            sectionSubTitle="Services"
            data={serviceListData}
          />
          <Spacing lg="135" md="65" />
        </div>
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work" subTitle="Portfolio" />
          <Spacing lg="85" md="45" />
          <Portfolio data={portfolioData} />
          <Spacing lg="26" md="30" />
          <div className="text-center">
            <Button btnText="See All Project" btnUrl="/portfolio" />
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      {/*  */}
      <TestimonialSlider
        layeredImages={[
          '/images/creative-agency/layer_img_1.jpeg',
          '/images/creative-agency/layer_img_2.jpeg',
          '/images/creative-agency/layer_img_3.jpeg',
          '/images/creative-agency/layer_img_4.jpeg',
          '/images/creative-agency/layer_img_5.jpeg',
        ]}
        data={testimonialData}
      />
      <section>
        <div className="container">
          <Cta
            title=" Do you have a specific project or goal in mind? Let’s turn chaos into creation!"
            btnText="Contact Us"
            btnUrl="/contact"
            bgUrl="/images/creative-agency/cta_bg.jpeg"
          />
        </div>
      </section>
      <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
        </div>
        <PostCarousel data={postData} />
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Frequently asked question" subTitle="FAQs" />
          <Spacing lg="55" md="30" />
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Accordion variant="cs_type_1" data={faqData} />
            </div>
          </div>
        </div>
        <Spacing lg="120" md="50" />
      </section>
    </>
  );
}
