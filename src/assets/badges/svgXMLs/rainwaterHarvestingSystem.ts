const rainwaterHarvestingSystemXML = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="70" height="70" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00195312)"/>
</pattern>
<image id="image0" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

const grayRainwaterHarvestingSystemXML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="70"
   height="70"
   viewBox="0 0 70 70"
   fill="none"
   version="1.1"
   id="svg792"
   sodipodi:docname="gray_rainwaterHarvestingSystem.svg"
   inkscape:version="1.0.2-2 (e86c870879, 2021-01-15)">
  <metadata
     id="metadata796">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1001"
     id="namedview794"
     showgrid="false"
     inkscape:zoom="11.857143"
     inkscape:cx="35"
     inkscape:cy="35"
     inkscape:window-x="-9"
     inkscape:window-y="-9"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg792" />
  <rect
     width="70"
     height="70"
     fill="url(#pattern0)"
     id="rect784"
     style="filter:url(#filter800)" />
  <defs
     id="defs790">
    <pattern
       id="pattern0"
       patternContentUnits="objectBoundingBox"
       width="1"
       height="1">
      <use
         xlink:href="#image0"
         transform="scale(0.00195312)"
         id="use786" />
    </pattern>
    <image
       id="image0"
       width="512"
       height="512"
       xlink:href="data:image/png;base64,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" />
    <filter
       style="color-interpolation-filters:sRGB;"
       inkscape:label="Greyscale"
       id="filter800">
      <feColorMatrix
         values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0 "
         id="feColorMatrix798" />
    </filter>
  </defs>
</svg>`;

export { rainwaterHarvestingSystemXML, grayRainwaterHarvestingSystemXML };
