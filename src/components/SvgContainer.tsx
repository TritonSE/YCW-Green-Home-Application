import React from 'react';
import { SvgXml } from 'react-native-svg';

import badgeXMLs from '../assets/badges/titleToXML';

// to define the types for SvgContainer props
interface ISvgContainer {
  badgeTitle: string;
  height: string;
  width: string;
}

export default function SvgContainer({
  badgeTitle,
  height,
  width,
}: ISvgContainer): JSX.Element {
  if (!(badgeTitle in badgeXMLs)) return <></>;
  const svgXML = badgeXMLs[badgeTitle];

  return <SvgXml xml={svgXML} width={width} height={height} />;
}
