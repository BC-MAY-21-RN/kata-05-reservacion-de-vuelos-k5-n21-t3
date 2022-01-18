/*
  botones azules: #5c6ef8


*/

import styled from 'styled-components';

export const LogOffButton = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: #5c6ef8;
  width: 80px;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  right: 31px;
`;
/*
  botones azules: #5c6ef8


*/

export const ArrowBack = styled.Text`
  margin-top: 30px;
  left: 31px;
  color: #5c6ef8;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100px;
`;

export const TitleScreen = styled.Text`
  left: 31px;
  color: black;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 80px;
`;

export const FlightsTopContainer = styled.View`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  width: 350px;
  height: 70px;
  margin: auto;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const Plane = styled.View`
  position: absolute;
  margin: auto;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const CountryOrigin = styled.Text`
  text-align: left;
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
export const StateOrigin = styled.Text`
  text-align: left;
  font-size: 15px;
  margin-bottom: 10px;
`;
export const CountryDestiny = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: right;
`;
export const StateDestiny = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  text-align: right;
`;

export const Container = styled.View`
  aling-content: center;
  margin: 10px;
`;
export const CustomInput = styled.TextInput`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
`;
export const NextButton = styled.TouchableOpacity`
  margin: auto;
  font-weight: bold;
  margin-bottom: 40px;
  background-color: #5c6ef8;
  width: 340px;
  text-align: auto;
  border-radius: 10px;
  padding: 10px;
  bottom: -185px;
`;

export const NextText = styled.Text`
  color: white;
  font-size: 18px;
  margin: auto;
`;
