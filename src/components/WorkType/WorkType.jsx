import {
  BlockButton,
  BlockSecButton,
  BlockText,
  ImageBlock,
  ItemBlock,
  ItemSecBlock,
  ListBlock,
  ListIcon,
  ListSecBlock,
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
      <WorkTypeMainTitle>ВИДЫ РАБОТ</WorkTypeMainTitle>
      <QuestionTitleItem>
        Какой формат сотрудничества подходит именно вам?
      </QuestionTitleItem>
      <WorkTypeItemContainer>
        <WorkTypeFirstBlock>
          <MainBlockText>Аутсорсинг</MainBlockText>
          <BlockText>
            Работы проводятся под вашим контролем с почасовой оплатой труда.
          </BlockText>
          <ListBlock>
            <ItemBlock>Оплата только за выполненные часы</ItemBlock>
            <ItemBlock>Можно менять объем и сроки</ItemBlock>
            <ItemBlock>Вы контролируете процес</ItemBlock>
            <ItemBlock>Минимальные риски</ItemBlock>
          </ListBlock>
          <BlockButton>Выбрать аутсорсинг</BlockButton>
          <ImageBlock src={img} alt={img} />
        </WorkTypeFirstBlock>
        <WorkTypeSecBlock>
          <MainSecBlockText>Аккордные работы</MainSecBlockText>
          <SecBlockText>
            Выполнение задачи постройки или ремонта под ключ
          </SecBlockText>
          <ListSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Фиксированная цена (скрытые затраты)
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Обьём и срок работы зафиксированы
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Всё зависит от подрядчика
            </ItemSecBlock>
            <ItemSecBlock>
              <ListIcon />
              Возможны задержки
            </ItemSecBlock>
          </ListSecBlock>
          <BlockSecButton>Выбрать АККОРД</BlockSecButton>
        </WorkTypeSecBlock>
      </WorkTypeItemContainer>
    </WorkTypeContainer>
  );
};

export default WorkType;
