import { ImageBackground, ImageBackgroundComponent, View } from 'react-native';
import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import { css } from 'styled-components';

interface backgroundImageProps {
  path: string;
  backgroundColor: string;
}

export const CssBaseContainer = css`
  justify-content: center;
  align-items: center;
  background-color: ${(props:backgroundImageProps)=> props.backgroundColor};
  padding: 20px;
  flex: 1;
`

export const Container = styled(View)`
  ${CssBaseContainer}
`

export const BackgroundImageConteiner = styled(ImageBackground)`
  ${CssBaseContainer}
`

