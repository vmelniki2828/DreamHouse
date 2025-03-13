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
  Map,
  MessegeIcon,
  PhoneIcon,
  Row,
  StyledTopBlock,
  Textarea,
} from './Form.styled';

export const Form = () => {
  return (
    <FormConteiner>
      <FormMainTitle>Formularz</FormMainTitle>
      <FromFlexConteiner>
        <AddressBlock>
          <MainAddressText>zarejestruj pracę</MainAddressText>
          <MainSecAddressText>Zostaw swoje zgłoszenie</MainSecAddressText>
          <AddressText>
            Po złożeniu wniosku otrzymają Państwo specjalistów lub wycenę prac.”
          </AddressText>
          <ContactMainText>NASZE KONTAKTY</ContactMainText>
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
            <StyledTopBlock />
            <Map
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4309255152193!2d-122.42773082464984!3d37.77993971186333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a2b15f8d2b%3A0x36df21e94cffd932!2zNzk0IE1jQWxsaXN0ZXIgU3QsIFNhbiBGcmFuY2lzY28sIENBIDk0MTAyLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1741032245016!5m2!1sru!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ConteinerMap>
        </AddressBlock>
        <FormBlock>
          <Row>
            <Column>
              <Label>Imię</Label>
              <Input type="text" placeholder="John Carter" />
            </Column>
            <Column>
              <Label>Praca</Label>
              <Input type="email" placeholder="example@email.com" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Telefon</Label>
              <Input type="text" placeholder="(123) 456 - 789" />
            </Column>
            <Column>
              <Label>Firma</Label>
              <Input type="text" placeholder="Facebook" />
            </Column>
          </Row>
          <Label>Komentarz (opcjonalnie)</Label>
          <Textarea placeholder="Proszę wpisać wiadomość prawną nere..." />
          <Button>Wyślij zgłoszenie</Button>
        </FormBlock>
      </FromFlexConteiner>
    </FormConteiner>
  );
};

export default Form;
