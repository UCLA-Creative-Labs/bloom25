import Section from '../../components/Section/Section';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import placeholderImage from '../../assets/gray_box.png'
import exampleImage from '../../assets/example_image.png';
import './Home.css';
import { useState } from 'react';

function Home() {
  const topSectionContent = {
    heading: "Heading #1",
    description: "Description! This is my super cool and awesome fun fact. Oh cool! This is my other super cool and awesome fun fact."
  };

  const middleSectionContent = {
    heading: "Heading #1",
    caption: "Caption #1",
    description: `Description: ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.`
  };

  const cardsData = [
    {
      caption: "Grab a nice matcha!",
      description: "I enjoy cafe-hopping and trying new matcha around Los Angeles.",
      image: exampleImage
    },
    {
      caption: "Caption #1",
      description: "Description",
      image: placeholderImage
    },
    {
      caption: "Caption #1",
      description: "Description",
      image: placeholderImage
    },
    {
      caption: "Caption #1",
      description: "Description",
      image: placeholderImage
    },
    {
      caption: "Caption #1",
      description: "Description",
      image: placeholderImage
    },
    {
      caption: "Caption #1",
      description: "Description",
      image: placeholderImage
    }
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="home">
      <Section heading={topSectionContent.heading} description={topSectionContent.description} imagePosition="right"/>
      
      <Section heading={middleSectionContent.heading} caption={middleSectionContent.caption} description={middleSectionContent.description} imagePosition="left"/>
      
      <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
      {showMore && <CardCarousel heading="Heading #1" cards={cardsData}/>}
      
    </div>
  );
}

export default Home;