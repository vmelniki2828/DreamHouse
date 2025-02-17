import {
  ArrowItem,
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

  return (
    <ServicesMainContainer>
      <ServicesMainTitle>УСЛУГИ</ServicesMainTitle>
      <ServiceBlock>
        <ServiceList>
          {[...Array(5)].map((_, index) => (
            <ServiceItem
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <HoveredBlock isHovered={hoveredIndex === index} />
              <ItemMainText>Общестроительные работы</ItemMainText>
              <ItemButtonBlock isHovered={hoveredIndex === index}>
                <ItemButton isHovered={hoveredIndex === index}>
                  Заказать рабочих
                </ItemButton>
              </ItemButtonBlock>
            </ServiceItem>
          ))}
          <ServiceItemLink>
            <ImgItem src={build_img} alt="house" />
            <TextItemBlock>
              <TextItem>Оставить заявку на работы</TextItem>
              <ArrowItem />
            </TextItemBlock>
          </ServiceItemLink>
        </ServiceList>
      </ServiceBlock>
    </ServicesMainContainer>
  );
};

export default Services;
