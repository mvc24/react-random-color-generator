import './index.css';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorDiv, { Button, Container, FormDiv, Heading } from './Components';

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
  const [colorLuminosity, setColorLuminosity] = useState('');
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
          setGeneratedColor(
            randomColor({
              luminosity: colorLuminosity,
              hue: colorHue,
            }),
          );
        }}
      >
        Generate
      </Button>

      <FormDiv>
        <h2>You don't like randomness?</h2>
        <p className="instructions">
          Change as much as you like and go back to generating colours by
          pressing the button
        </p>
        <p>Choose your colour:</p>
        <input
          name="hue"
          onChange={(event) => setColorHue(event.target.value)}
        />
        <br />
        <p>Choose your luminosity:</p>
        <span>Make it bright!</span>
        <input
          name="luminosity"
          type="radio"
          value="bright"
          onChange={(event) => setColorLuminosity(event.target.value)}
        />
        <br />
        <span>I like it light</span>
        <input
          name="luminosity"
          type="radio"
          value="light"
          onChange={(event) => setColorLuminosity(event.target.value)}
        />
        <br />
        <span>Keep it dark!</span>
        <input
          name="luminosity"
          type="radio"
          value="dark"
          onChange={(event) => setColorLuminosity(event.target.value)}
        />
        <br />
        <p>The size of this box is boring</p>
        <label>
          height
          <input
            name="boxHeight"
            type="range"
            min="100"
            max="500"
            value={boxHeight}
            onChange={(event) => setBoxHeight(event.target.value)}
          />
        </label>
        <label>
          width
          <input
            name="boxWidth"
            type="range"
            min="200"
            max="600"
            value={boxWidth}
            onChange={(event) => setBoxWidth(event.target.value)}
          />
        </label>
        {/* The button doesn't reset anything yet
        <Button type="reset" onClick={() => reset things} /> */}
        <p className="instructions">
          Please refresh the page to reset your values, because this developer
          doesn't know how to create working reset buttons yet.
        </p>
      </FormDiv>
    </Container>
  );
}
