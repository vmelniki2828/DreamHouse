import {
  ArrowItem,
  ArrowItemButton,
  HoveredBlock,
  ImgItem,
  ItemButton,
  ItemButtonBlock,
  ItemMainText,
  ServiceBlock,
  ServiceItem,
  ServiceItemLink,
  ServiceList,
  ServicesMainContainer,
  ServicesMainTitle,
  TextItem,
  TextItemBlock,
} from './Services.styled';
import build_img from '../../images/img_second_service_test.png';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const works = [
    'Prace ogólnobudowlane',
    'Prace monolityczne i betonowe',
    'Murowanie (cegła, bloczki)',
    'Prace elewacyjne',
    'Prace wykończeniowe',
  ];

  return (
    <ServicesMainContainer>
      <ServicesMainTitle>USŁUGI</ServicesMainTitle>
      <ServiceBlock>
        <ServiceList>
          {works.map((work, index) => (
            <ServiceItem
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <HoveredBlock isHovered={hoveredIndex === index} />
              <ItemMainText>{work}</ItemMainText>
              <ItemButtonBlock isHovered={hoveredIndex === index}>
                <ItemButton isHovered={hoveredIndex === index}>
                  Zamawiaj pracowników{' '}
                  <ArrowItemButton isHovered={hoveredIndex === index} />
                </ItemButton>
              </ItemButtonBlock>
            </ServiceItem>
          ))}
          <ServiceItemLink>
            <ImgItem src={build_img} alt="house" />
            <TextItemBlock>
              <TextItem>Zostaw prośbę o pracę</TextItem>
              <ArrowItem />
            </TextItemBlock>
          </ServiceItemLink>
        </ServiceList>
      </ServiceBlock>
    </ServicesMainContainer>
  );
};

export default Services;
