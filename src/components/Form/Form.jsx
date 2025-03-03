import {
  AddressBlock,
  AddressText,
  Button,
  Column,
  ContactItem,
  ContactItemAdress,
  ContactList,
  ContactMainText,
  ContactSpan,
  ConteinerMap,
  FormBlock,
  FormConteiner,
  FormMainTitle,
  FromFlexConteiner,
  GeoIcon,
  Input,
  Label,
  MainAddressText,
  MainSecAddressText,
  MessegeIcon,
  PhoneIcon,
  Row,
  Textarea,
} from './Form.styled';

export const Form = () => {
  return (
    <FormConteiner>
      <FormMainTitle>Форма заявки</FormMainTitle>
      <FromFlexConteiner>
        <AddressBlock>
          <MainAddressText>оформить работы</MainAddressText>
          <MainSecAddressText>Оставьте заявку</MainSecAddressText>
          <AddressText>
            После отправки заявки, вы получите специалистов или смету на работы"
          </AddressText>
          <ContactMainText>НАШИ КОНТАКТЫ</ContactMainText>
          <ContactList>
            <ContactItem>
              <MessegeIcon /> contact@company.com
            </ContactItem>
            <ContactItem>
              <PhoneIcon /> WhatsApp
            </ContactItem>
            <ContactItem>
              <PhoneIcon /> (123) 456 - 789
            </ContactItem>
            <ContactItemAdress>
              <GeoIcon />
              <ContactSpan>794 Mcallister St San Francisco, 94102</ContactSpan>
            </ContactItemAdress>
          </ContactList>
          <ConteinerMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4309255152193!2d-122.42773082464984!3d37.77993971186333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a2b15f8d2b%3A0x36df21e94cffd932!2zNzk0IE1jQWxsaXN0ZXIgU3QsIFNhbiBGcmFuY2lzY28sIENBIDk0MTAyLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1741032245016!5m2!1sru!2sua"
              width="589"
              height="233"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ConteinerMap>
        </AddressBlock>
        <FormBlock>
          <Row>
            <Column>
              <Label>Имя</Label>
              <Input type="text" placeholder="John Carter" />
            </Column>
            <Column>
              <Label>Услуга</Label>
              <Input type="email" placeholder="example@email.com" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Телефон</Label>
              <Input type="text" placeholder="(123) 456 - 789" />
            </Column>
            <Column>
              <Label>Компания</Label>
              <Input type="text" placeholder="Facebook" />
            </Column>
          </Row>
          <Label>Комментарий (опционально)</Label>
          <Textarea placeholder="Please type your message here..." />
          <Button>Отправить заявку</Button>
        </FormBlock>
      </FromFlexConteiner>
    </FormConteiner>
  );
};

export default Form;
