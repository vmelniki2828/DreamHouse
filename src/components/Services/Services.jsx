import {
  ArrowItem,
  ArrowItemButton,
  HoveredBlock,
  ImgItem,
  ItemButton,
  ItemButtonBlock,
  // ItemMainText,
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
import build_img1 from '../../images/uslugi_1img.png';
import build_img2 from '../../images/uslugi_2img.png';
import build_img3 from '../../images/uslugi_3img.png';
import build_img4 from '../../images/uslugi_4img.png';
import build_img5 from '../../images/uslugi_5img.png';

import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const works = [build_img1, build_img2, build_img3, build_img4, build_img5];

  return (
    <ServicesMainContainer>
      <ServicesMainTitle id="Services">USŁUGI</ServicesMainTitle>
      <ServiceBlock>
        <ServiceList>
          {works.map((work, index) => (
            <ServiceItem
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              service_bg={work}
            >
              <HoveredBlock isHovered={hoveredIndex === index} />
              {/* <ItemMainText>{work}</ItemMainText> */}
              <ItemButtonBlock isHovered={hoveredIndex === index}>
                <ItemButton isHovered={hoveredIndex === index}>
                  Zamawiaj pracowników
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
