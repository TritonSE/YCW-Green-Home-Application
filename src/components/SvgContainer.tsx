import React from 'react';
import { SvgXml } from 'react-native-svg';

// to define the types for SvgContainer props
interface ISvgContainer {
  xml: string;
  height: string;
  width: string;
}

export default function SvgContainer({
  xml,
  height,
  width,
}: ISvgContainer): JSX.Element {
  return <SvgXml xml={xml} width={width} height={height} />;
}
