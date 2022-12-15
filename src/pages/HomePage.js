import BackgroundParallax from "../components/BackgroundParallax";
import { ParallaxLayer } from "@react-spring/parallax";

export default function HomePage() {
    return (
        <>
            <BackgroundParallax>
                <ParallaxLayer
                    sticky={{ start: 0, end: 1 }}
                    speed={10}
                    factor={1}
                >
                    <div
                        style={{
                            display: 'flex',
                            color: 'white',
                            alignItems: 'center',
                            justifyContent: 'left',
                            padding: '10px',
                        }}
                    >
                        Stewart Moreland
                    </div>
                </ParallaxLayer>
            </BackgroundParallax>
        </>
    )
}
