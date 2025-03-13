import {
  BlockButton,
  BlockSecButton,
  BlockText,
  ImageBlock,
  ItemBlock,
  ItemSecBlock,
  ItemTabBlock,
  ListBlock,
  ListIcon,
  ListSecBlock,
  ListSecBlockTab,
  MainBlockText,
  MainSecBlockText,
  QuestionTitleItem,
  SecBlockText,
  WorkTypeContainer,
  WorkTypeFirstBlock,
  WorkTypeItemContainer,
  WorkTypeMainTitle,
  WorkTypeSecBlock,
} from './WorkType.styled';
import img from '../../images/WorkTypePic.png';

const WorkType = () => {
  return (
    <WorkTypeContainer>
      <WorkTypeMainTitle>RODZAJE PRACY</WorkTypeMainTitle>
      <QuestionTitleItem>
        Jaki model współpracy jest dla Ciebie odpowiedni?
      </QuestionTitleItem>
      <WorkTypeItemContainer>
        <WorkTypeFirstBlock>
          <MainBlockText>Outsourcing</MainBlockText>
          <BlockText>
            Praca jest wykonywana pod Twoją kontrolą i płatna godzinowo.
          </BlockText>
          <ListBlock>
            <ItemBlock>Płacisz tylko za przepracowane godziny</ItemBlock>
            <ItemBlock>Możliwość modyfikacji zakresu i terminów</ItemBlock>
            <ItemBlock>Ty nadzorujesz proces</ItemBlock>
            <ItemBlock>Minimalne ryzyko</ItemBlock>
          </ListBlock>
          <BlockButton>Wybierz outsourcing</BlockButton>
          <ImageBlock src={img} alt={img} />
        </WorkTypeFirstBlock>
        <WorkTypeSecBlock>
          <MainSecBlockText>Prace akordowe</MainSecBlockText>
          <SecBlockText>
            Wykonujemy prace budowlane lub remontowe pod klucz
          </SecBlockText>
          <ListSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Cena z góry (mogą wystąpić ukryte koszty){' '}
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Wielkość i czas trwania pracy są stałe
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Wszystko zależy od wykonawcy{' '}
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Możliwe opóźnienia{' '}
            </ItemSecBlock>
          </ListSecBlock>

          <ListSecBlockTab>
            <ItemTabBlock>
              <ItemSecBlock>
                <ListIcon />
                Cena z góry (mogą wystąpić ukryte koszty)
              </ItemSecBlock>
              <ItemSecBlock>
                <ListIcon />
                Wielkość i czas trwania pracy są stałe
              </ItemSecBlock>
            </ItemTabBlock>
            <ItemTabBlock>
              <ItemSecBlock>
                <ListIcon />
                Wszystko zależy od wykonawcy{' '}
              </ItemSecBlock>
              <ItemSecBlock>
                <ListIcon />
                Możliwe opóźnienia
              </ItemSecBlock>{' '}
            </ItemTabBlock>
          </ListSecBlockTab>

          <BlockSecButton>Wybierz AKORD</BlockSecButton>
        </WorkTypeSecBlock>
      </WorkTypeItemContainer>
    </WorkTypeContainer>
  );
};

export default WorkType;
