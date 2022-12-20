import layer1 from '../assets/bg-01.png';
import layer2 from '../assets/bg-02.png';
import layer3 from '../assets/bg-03.png';
import layer4 from '../assets/bg-04.png';
import layer5 from '../assets/bg-05.png';
import layer6 from '../assets/bg-06.png';

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TypingAnimation from './TypingAnimation';



export default function BackgroundParallax(props) {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'slategray' }}>
      <Parallax pages={1.45}>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          factor={1}
          style={{
            backgroundImage: `url(${layer6})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-10'
          }}
        > </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={1}
          style={{
            backgroundImage: `url(${layer5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-10'
          }}
        > </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={.9}
          factor={1}
          style={{
            backgroundImage: `url(${layer4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-10'
          }}
        > </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${layer3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-10'
          }}
        > </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1.1}
          factor={1}
          style={{
            backgroundImage: `url(${layer2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-10'
          }}
        > </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: .6, end: 1 }}
          speed={10}
          factor={1}
          offset={0}
        >
          <TypingAnimation
            text='STEWART MORELAND'
            interval={10}
            style={{
              color: 'white',
              fontSize: '50px',
              marginLeft: '15%',
            }}
          />

          <TypingAnimation
            text='full stack developer (in progress)'
            interval={10}
            style={{
              color: 'white',
              fontSize: '30px',
              marginLeft: '15%',
            }}
          />

        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1.2}
          factor={1}
          style={{
            backgroundImage: `url(${layer1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '0'
          }}
        > </ParallaxLayer>
      </Parallax>
    </div>
  );
}
