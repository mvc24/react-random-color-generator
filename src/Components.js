import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import tinycolor from 'tinycolor2';

export default function ColorDiv(props) {
  return (
    <div
      style={{
        width: props.width ? `${props.width}px` : '300px',
        height: props.height ? `${props.height}px` : '200px',
        borderRadius: '8px',
        border: `solid 2px ${props.color}`,
        outline: `4px ${props.bgColor}`,
        backgroundColor: props.bgColor,
        color: props.color,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0.6em',
      }}
    >
      <span>{props.bgColor}</span>
    </div>
  );
}

export const Heading = styled.h1`
  font-size: 2.4rem;
  color: #201a23;
  font-weight: 900;
`;

export const Container = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 3em;
  padding: 0.6em;
`;
