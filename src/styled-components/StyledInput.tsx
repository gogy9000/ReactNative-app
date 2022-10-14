import React from "react";
import styled from 'styled-components/native'
import {FONTSIZEPrimary, TEXTCOLOR,} from "../common/Variables";
// import {TextInput} from "react-native";

export const StyledInput = styled.TextInput`
  padding: 0 10px 0 10px;
  font-size: ${FONTSIZEPrimary}px;
  color: ${TEXTCOLOR};
  border-style: solid;
  border-color: ${TEXTCOLOR};
  border-radius: 10px;
  border-width: 1px;
`
export const StyledButton=styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  padding:0 5px 0 5px;
  flex-wrap: nowrap;
    `