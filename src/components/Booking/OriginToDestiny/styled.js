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
  margin-bottom: 10px;
  margin-top: 20px;
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
export const DatePassengersContainer = styled.View`
  //border-bottom-color: black;
  //border-bottom-width: 1px;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const DateFlight = styled.Text`
  text-align: left;
  color: black;
  font-size: 15px;
`;
export const PassengersNumber = styled.Text`
  color: black;
  font-size: 15px;
  text-align: right;
`;

export const BlackLine = styled.View`
  width: 350px;
  height: 1px;
  background: black;
  margin: auto;
  margin-top: -22px;
`;
