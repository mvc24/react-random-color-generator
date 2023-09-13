import styled from '@emotion/styled';

export default function ColorDiv(props) {
  return (
    <div
      style={{
        width: props.width ? `${props.width}px` : '300px',
        height: props.height ? `${props.height}px` : '200px',
        borderRadius: '16px',
        border: `solid 2px '#fbfbfb'`,
        outline: `16px ${props.bgColor}`,
        backgroundColor: props.bgColor,
        color: props.color,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0.6em',
      }}
    >
      <span className="colorName">{props.bgColor}</span>
    </div>
  );
}

export const Heading = styled.h1`
  font-size: 1.6rem;
  color: #191308;
  font-weight: 900;
  width: 80vw;
`;

export const Container = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 3em;
  padding: 0.6em;
  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Victor Mono', monospace;
  padding: 0.4rem;
  margin: 0.8rem 0rem;
  border-radius: 3px;
  border: solid 1px #322a26;
  background-color: #f7f7f2;

  &:hover {
    color: #322a26;
    background-color: #e4e6c3;
    cursor: pointer;
  }
`;

export const FormDiv = styled.div`
  background-color: #e4e6c3;
  text-align: center;
  width: 70vw;
  margin: auto;
`;

/* export default function Form(props) {

  return (
<div>

  <span className="formSpan">Hue: </span>
  <input className="formField" value={props.setColorHue}
  />
   <input className="formField" value={props.setColorLightness} type='range'
  />

</div>
  )
} */
