import React from 'react';
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

  return <SvgXml xml={svgXML} width={width} height={height} />;
}
