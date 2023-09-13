import './index.css';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorDiv, { Container, Heading } from './Components';

// function to get and set my color

// App to export
export default function App() {
  const [generatedColor, setGeneratedColor] = useState(''); /*
  const [boxHeight, setBoxHeight] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLightness, setColorLightness] = useState(''); */

  const fontColor = '#fbfbfb';

  /* const checkContrast = generatedColor;

  const fontColor = checkContrast ? '#201a23' : '#fbfbfb'; */

  return (
    <Container>
      <Heading>Generate a random colour!</Heading>
      <ColorDiv
        bgColor={generatedColor}
        /*      width={boxWidth}
        height={boxHeight} */
        color={fontColor}
      >
        {generatedColor}
      </ColorDiv>
      <button
        onClick={() => {
          setGeneratedColor(randomColor());
        }}
      >
        Generate
      </button>
    </Container>
  );
}
