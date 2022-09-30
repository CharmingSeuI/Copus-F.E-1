import React, { useContext } from 'react';
import styled from 'styled-components';
import getRightFinalContent from '../../../api/test/rightBlock/bybook/getRightFinalContent';
import useAsync from '../../../hooks/useAsync';
import { finalContext } from '../../shared/ContentLayout';

const ContentPositioner = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  margin-bottom: 15px;
  background-color: rgba(197, 232, 207, 0.5);
`;

const Wonju = styled.div`
  margin-left: 7px;
  padding-top: 4px;
  font-size: 15px;
`;

const Page = styled.div`
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const CopyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 20px;
`;

const DciInformation = styled.div`
  color: grey;
  font-size: 11px;
`;

const CopyButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  width: fit-content;
  padding: 1px 5px;
  margin: 0px 3px;
  font-size: 9px;
  cursor: pointer;
`;

const ContentText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  margin-bottom: 40px;
`;

const Origin = styled.div`
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 12px;
`;

export default function Content() {
  const clickFinalContext = useContext(finalContext);

  const [finalDataJsonDatas] = useAsync(
    () => getRightFinalContent(clickFinalContext),
    [clickFinalContext],
  );
  console.log('final content data는: ', finalDataJsonDatas);

  const title = '上蘆沙先生';
  const wonju = '癸丑';
  const page = 'b137_261a';
  const dci = 'ITKC_MO_1237A_0010_010_0010_2020_B137_XML';
  const content =
    '湖天寒欲雪。陪坐獨春風。承訓方知悔。繙書枉用工。正心除外騖。觀理貴中通。曾傳尋門路。庶幾次第功。';

  return (
    <ContentPositioner>
      <Title>{title}</Title>

      <SubTitle>
        {title}
        <Wonju>{wonju}</Wonju>
        <Page>{page}</Page>
      </SubTitle>

      <CopyBlock>
        <DciInformation>[DCI]{dci}</DciInformation>
        <CopyButton>DCI 복사</CopyButton>
        <CopyButton>URL 복사</CopyButton>
      </CopyBlock>

      <ContentText>{content}</ContentText>
      <Origin> ⓒ 한국고전번역원 | 영인표점 한국문집총간 | 2010</Origin>
    </ContentPositioner>
  );
}
