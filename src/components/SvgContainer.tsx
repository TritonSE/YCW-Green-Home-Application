import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import badgeXMLs from '../assets/badges/titleToXML';

/* eslint-disable react/require-default-props */

// to define the types for SvgContainer props
interface ISvgContainer {
  badgeTitle: string;
  height: string;
  width: string;
  grayscale?: boolean;
}

export default function SvgContainer({
  badgeTitle,
  height,
  width,
  grayscale = false,
}: ISvgContainer): JSX.Element {
  if (!(badgeTitle in badgeXMLs)) return <></>;

  const badgeXMLObj = badgeXMLs[badgeTitle];
  const svgXML = grayscale ? badgeXMLObj.grayscale : badgeXMLObj.normal;

  return (
    <View style={{ opacity: grayscale ? 0.3 : 1.0 }}>
      <SvgXml xml={svgXML} width={width} height={height} />
    </View>
  );
}
