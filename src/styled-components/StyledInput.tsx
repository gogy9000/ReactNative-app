import React from "react";
import styled from 'styled-components'
import {FONTSIZEPrimary, TEXTCOLOR,} from "../common/Variables";
import {TextInput} from "react-native";

export const StyledInput=styled(TextInput)`
  padding: 0 10px 0 10px;
  font-size:${FONTSIZEPrimary}px;
  color: ${TEXTCOLOR};
  border-style: solid;
  border-color: ${TEXTCOLOR};
  border-radius:10px;
  border-width: 1px;
`