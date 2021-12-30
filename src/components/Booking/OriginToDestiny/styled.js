/*
  botones azules: #5c6ef8


*/

import styled from 'styled-components';

export const FlightsTopContainer = styled.View`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  width: 350px;
  height: 70px;
  margin: auto;
  margin-bottom: 30px;
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
