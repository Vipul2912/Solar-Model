import {useTexture} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import React,{ useRef} from 'react'



const Sun = React.memo(()=>{

    const sunRef = useRef()

    const [sunTexture] = useTexture(['/assets/sun-texture.jpg'])
     useFrame(()=>{
        sunRef.current.rotation.y-=0.002
     })
 
    return <mesh ref={sunRef} position={[0,0,0]}>
        {/* radius X-axis Y-axis  */}
        <sphereGeometry args={[2,32,32]}/>
        <meshPhongMaterial map={sunTexture} emissiveMap={sunTexture} emissiveIntensity={0.6} emissive={0xffffff}/> 
        <pointLight castShadow/>
    </mesh>
})
export default Sun