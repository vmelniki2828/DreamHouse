import {
  ArrowItem,
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

const Services = () => {
  return (
    <ServicesMainContainer>
      <ServicesMainTitle>УСЛУГИ</ServicesMainTitle>
      <ServiceBlock>
        <ServiceList>
          <ServiceItem>
            <ItemMainText>Общестроительные работы</ItemMainText>
            <ItemButtonBlock>
              <ItemButton>Заказать рабочих</ItemButton>
            </ItemButtonBlock>
          </ServiceItem>
          <ServiceItem>
            <ItemMainText>Общестроительные работы</ItemMainText>
            <ItemButtonBlock>
              <ItemButton>Заказать рабочих</ItemButton>
            </ItemButtonBlock>
          </ServiceItem>
          <ServiceItem>
            <ItemMainText>Общестроительные работы</ItemMainText>
            <ItemButtonBlock>
              <ItemButton>Заказать рабочих</ItemButton>
            </ItemButtonBlock>
          </ServiceItem>
          <ServiceItem>
            <ItemMainText>Общестроительные работы</ItemMainText>
            <ItemButtonBlock>
              <ItemButton>Заказать рабочих</ItemButton>
            </ItemButtonBlock>
          </ServiceItem>
          <ServiceItem>
            <ItemMainText>Общестроительные работы</ItemMainText>
            <ItemButtonBlock>
              <ItemButton>Заказать рабочих</ItemButton>
            </ItemButtonBlock>
          </ServiceItem>
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
