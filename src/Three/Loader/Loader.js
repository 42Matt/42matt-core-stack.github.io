import { Html } from '@react-three/drei';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './Loader.css';

export function Loader() {
  const repeat = 3;
  const svgRef = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(svgRef);
    const tl = gsap.timeline({
      defaults: { duration: 4, repeat: -1, yoyo: true, repeatDelay: 0.3 },
    });

    tl.addLabel('start');

    tl.to(
      q('#outer-2, #inner-2, #mid-2'),
      { rotate: 180 * repeat, transformOrigin: '50% 50%', ease: 'power1.inOut' },
      'start'
    );

    tl.to(
      q('#outer-1, #inner-1, #mid-1'),
      { rotate: -180 * repeat, transformOrigin: '50% 50%', ease: 'power1.inOut' },
      'start'
    );
  }, []);

  return (
    <Html center>
      <div id="loading__container">
        <div id="loading__title">Loading&nbsp;... </div>

        <svg
          ref={svgRef}
          id="loading__svg"
          width="494"
          height="494"
          viewBox="0 0 494 494"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="outer">
            <g id="outer-2">
              <path
                id="hidden circle 2"
                opacity="0"
                d="M447.182 246.591C447.182 357.374 357.374 447.182 246.591 447.182C135.808 447.182 46 357.374 46 246.591C46 135.808 135.808 46 246.591 46C357.374 46 447.182 135.808 447.182 246.591Z"
                fill="white"
              />
              <path
                id="small bow"
                d="M55.41 245.759C55.41 352.325 142.515 437.835 245.216 437.835"
                stroke="#BE0085"
                strokeWidth="15"
              />
            </g>
            <g id="outer-1">
              <path
                id="hidden circle 1"
                opacity="0"
                d="M46 246.591C46 357.374 135.808 447.182 246.591 447.182C357.374 447.182 447.182 357.374 447.182 246.591C447.182 135.808 357.374 46 246.591 46C135.808 46 46 135.808 46 246.591Z"
                fill="white"
              />
              <path
                id="half circle 1"
                d="M245.216 56.276C144.28 55.586 55.41 139.194 55.41 245.76C55.41 352.326 142.515 437.835 245.216 437.835"
                stroke="#BE0085"
                strokeWidth="15"
              />
            </g>
          </g>

          <g id="mid">
            <g id="mid-2">
              <path
                id="hidden-circle-2"
                opacity="0"
                d="M163.897 83.9414C196.139 67.5133 232.529 61.0149 268.464 65.2682C304.399 69.5214 338.266 84.3351 365.782 107.836C393.298 131.337 413.228 162.47 423.05 197.297C432.872 232.125 432.147 269.083 420.965 303.498C409.782 337.913 388.646 368.239 360.229 390.642C331.811 413.044 297.389 426.517 261.314 429.356C225.24 432.195 189.133 424.273 157.561 406.592C125.989 388.911 100.369 362.264 83.9407 330.022C61.9113 286.787 57.9592 236.571 72.954 190.422C87.9487 144.273 120.662 105.971 163.897 83.9414V83.9414Z"
                fill="white"
              />
              <path
                id="small bow_2"
                d="M92.8606 326.885C134.096 409.2 238.843 446.802 325.448 402.675"
                stroke="#00BE72"
                strokeWidth="15"
              />
            </g>
            <g id="mid-1">
              <path
                id="hidden-circle-1"
                opacity="0"
                d="M330.021 409.979C420.054 364.105 455.852 253.931 409.978 163.898C364.104 73.8652 253.93 38.0675 163.897 83.9414C73.8645 129.815 38.0668 239.989 83.9407 330.022C129.815 420.055 239.989 455.852 330.021 409.979Z"
                fill="white"
              />
              <path
                id="half-circle-1"
                d="M92.8606 326.885C134.096 409.2 238.843 446.802 325.448 402.675C412.053 358.547 445.474 252.352 402.947 168.888"
                stroke="#6346FF"
                strokeWidth="15"
              />
            </g>
          </g>

          <g id="inner">
            <g id="inner-2">
              <path
                id="hidden-circle-2_2"
                opacity="0"
                d="M97.7997 319.77C83.4072 290.261 78.0883 257.147 82.5157 224.615C86.9431 192.083 100.918 161.595 122.673 137.005C144.428 112.416 172.986 94.8297 204.736 86.4707C236.485 78.1117 270.001 79.3553 301.044 90.0442C332.087 100.733 359.263 120.387 379.136 146.521C399.009 172.656 410.686 204.096 412.69 236.866C414.694 269.637 406.936 302.266 390.396 330.627C373.856 358.988 349.278 381.808 319.769 396.2C280.199 415.5 234.583 418.29 192.955 403.956C151.328 389.623 117.099 359.34 97.7997 319.77V319.77Z"
                fill="white"
              />
              <path
                id="small bow_3"
                d="M389.502 178.263C350.842 98.9989 255.033 66.9962 178.644 104.254"
                stroke="#6346FF"
                strokeWidth="15"
              />
            </g>
            <g id="inner-1">
              <path
                id="hidden-circle-1_2"
                opacity="0"
                d="M396.199 174.231C356.01 91.8299 256.631 57.6109 174.23 97.8005C91.8291 137.99 57.6101 237.369 97.7997 319.77C137.989 402.171 237.368 436.39 319.769 396.2C402.17 356.011 436.389 256.631 396.199 174.231Z"
                fill="white"
              />
              <path
                id="half-circle-1_2"
                d="M317.064 388.058C392.391 351.954 428.161 257.526 389.502 178.263C350.842 98.9989 255.033 66.9962 178.643 104.254"
                stroke="#00BE72"
                strokeWidth="15"
              />
            </g>
          </g>
        </svg>
      </div>
    </Html>
  );
}
