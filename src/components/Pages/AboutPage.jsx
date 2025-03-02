import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import AboutStyle4 from '../About/AboutStyle4';
import FunFact from '../FunFact';
import AboutStyle5 from '../About/AboutStyle5';
import IconBoxStyle6 from '../IconBox/IconBoxStyle6';
import SectionHeadingStyle5 from '../SectionHeading/SectionHeadingStyle5';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Marquee from '../Marquee';
import Brands from '../Brands';
import { pageTitle } from '../../helpers/PageTitle';

const funfactData = [
  { title: 'Happy Customers', number: '22k' },
  { title: 'Work’s Completed', number: '15k' },
  { title: 'Skilled Team Members', number: '121' },
  { title: 'Most Valuable Awards', number: '15' },
];

const teamData = [
  {
    memberImg: '/images/studio-agency/team_1.jpeg',
    memberName: 'James Berline',
    memberDesignation: 'React Developer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_2.jpeg',
    memberName: 'Bella Zubena',
    memberDesignation: 'Graphic Designer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_3.jpeg',
    memberName: 'Kemnei Alekzend',
    memberDesignation: 'Digital Marketer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_4.jpeg',
    memberName: 'Juliya Jesmine',
    memberDesignation: 'UX Researcher',
    href: '/team/team-details',
  },
];

const brandList = [
  {
    logoSrc: '/images/marketing-agency/brand_1.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4.svg',
    logoAlt: 'Brand',
  },
];

const brandListDark = [
  {
    logoSrc: '/images/marketing-agency/brand_1_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4_dark.svg',
    logoAlt: 'Brand',
  },
];

export default function AboutPage({ darkMode }) {
  pageTitle('About');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Transforming Brands with Strategy, Creativity & Innovation"
        subTitle="About Us"
        variant="text-center"
        shape="shape_1"
      />
      <Spacing lg="75" md="60" />
      <AboutStyle4
        thumbnailSrc="/images/digital-agency/about_1.jpeg"
        miniTitle="Company Info"
        title="At The Dash Media, we turn ideas into impact"
        subTitle="At The Dash Media, we are more than just a media and marketing agency—we are storytellers, strategists, and innovators. With a passion for creativity and data-driven execution, we help brands stand out in an increasingly competitive digital landscape."
        btnText="See Our Services"
        btnUrl="/service"
      />
      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing lg="125" md="70" />
      <AboutStyle5
        variant="cs_type_1"
        thumbnailSrc="/images/digital-agency/about_2.jpeg"
        miniTitle="What We Do"
        title="Best value service provider agency"
        subTitle="We make specializing in strategic digital marketing, partners with aiming the world's leading brands. Breaking from the norm, we push boundaries and do merge imaginative thinking possible."
        progressBarList={[
          { title: 'Brand Strategy & Creative Solutions', percentage: '95' },
          { title: 'Social Media Marketing & Management', percentage: '90' },
          { title: 'Video Production & Editing', percentage: '90' },
          { title: 'E-commerce & Marketplace Solutions', percentage: '85' },
          { title: 'Influencer & Community Marketing', percentage: '80' },
          { title: 'Event Management & Experiential Marketing', percentage: '80' },
          { title: 'Website Development & UI/UX Design', percentage: '75' },
        ]}
        salesTitle="Sales Increase"
        groth="25"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_primary_bg">
        <Spacing lg="140" md="70" />
        <div className="container">
          <SectionHeadingStyle5 title="How we work" />
          <Spacing lg="85" md="45" />
          <div className="cs_working_process_wrap cs_center">
            <div className="cs_working_process">
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_1.png"
                  iconSrc="/images/icons/search.svg"
                  title="In-Depth Analysis"
                  subTitle="We dive deep into market trends, audience behavior, and competitor insights to build a strong foundation for your brand’s strategy."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_2.png"
                  iconSrc="/images/icons/idea.svg"
                  title="Creative Conceptualization"
                  subTitle="Our team brainstorms unique and impactful ideas that align with your brand identity and marketing goals."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_3.png"
                  iconSrc="/images/icons/gear.svg"
                  title="Strategic Execution"
                  subTitle="We bring concepts to life with precision, ensuring seamless implementation across all platforms for maximum engagement and results."
                />
              </div>
            </div>
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Meet our expert team behind The Dash Media"
            subTitle="Our Team"
          />
          <Spacing lg="85" md="45" />
        </div>
        <TeamSlider data={teamData} />
      </section>
      <Spacing lg="135" md="70" />
      <Marquee text="We Create Design - Build App - Website - Branding - SEO" />
      <Spacing lg="84" md="50" />
      <div className="container">
        <Brands data={darkMode ? brandListDark : brandList} />
      </div>
      <Spacing lg="135" md="80" />
    </>
  );
}