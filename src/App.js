import './index.css';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorDiv, {
  Button,
  Container,
  Form,
  FormDiv,
  Heading,
} from './Components';

// Color scheme
// {"Moss green":"a6a15e","Moss green 2":"84894a","White":"fbfbfb","Raisin black":"2e2532","Raisin black 2":"201a23"}

/* - With #

#191308, #322a26, #f7f7f2, #e4e6c3, #899878

{"Smoky black":"191308","Van Dyke":"322a26","Baby powder":"f7f7f2","Beige":"e4e6c3","Moss green":"899878"} */

// App to export
export default function App() {
  const [generatedColor, setGeneratedColor] = useState('#84894a');
  const [boxHeight, setBoxHeight] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLightness, setColorLightness] = useState('');
  /*
   */

  const fontColor = '#f7f7f2';

  /* const checkContrast = generatedColor;

  const fontColor = checkContrast ? '#201a23' : '#fbfbfb'; */

  return (
    <Container>
      <Heading>Generate a random colour!</Heading>
      <ColorDiv
        bgColor={generatedColor}
        width={boxWidth}
        height={boxHeight}
        color={fontColor}
        outline={generatedColor}
      >
        {generatedColor}
      </ColorDiv>
      <Button
        onClick={() => {
          setGeneratedColor(randomColor());
        }}
      >
        Generate
      </Button>

      <FormDiv>
        <h2>You don't like randomness?</h2>
        <label htmlFor="hue">Choose your colour:</label>
        <br />
      </FormDiv>
    </Container>
  );
}
