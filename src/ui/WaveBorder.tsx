import React from 'react';
import styled from './styled';
import css from '@emotion/css';

const WavesSVG = styled.svg`
  position: relative;
  width: 100%;
  margin-bottom: -7px;
  height: 7vw;
  min-height: 7vw;
`;

const ParallaxG = styled.g`
  & > use {
    @keyframes moveForever {
      from {
        transform: translate3d(-90px, 0, 0);
      }
      to {
        transform: translate3d(85px, 0, 0);
      }
    }

    animation: moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite;
  }
`;

type WaveBorderProps = {
  className?: string;
  upperColor?: string;
  lowerColor?: string;
  animationNegativeDelay?: number;
};

const WaveBorder = (props: WaveBorderProps) => {
  const id = String(Math.random());
  const { className, upperColor, lowerColor, animationNegativeDelay } = props;
  return (
    <div
      className={className}
      style={upperColor ? { background: upperColor } : {}}
    >
      <WavesSVG
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={id}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <ParallaxG
          css={[
            animationNegativeDelay &&
              css`
                animation-delay: ${animationNegativeDelay};
              `,
          ]}
        >
          <use href={`#${id}`} x="48" y="0" fill={lowerColor} />
        </ParallaxG>
      </WavesSVG>
    </div>
  );
};

export default WaveBorder;
