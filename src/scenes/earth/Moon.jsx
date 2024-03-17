import {useTexture} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import React,{ useRef,useCallback} from 'react' 
import * as THREE from 'three'



const Moon = React.memo(()=>{

    const moonRef = useRef()
    const clockRef = useRef(new THREE.Clock())

    const [moonTexture] = useTexture(['/assets/moon-texture.jpg',])
    const xAxis = 4 
    const updateMoonPosition = useCallback(()=>{
        
        // orbit rotation
        moonRef.current.position.x=Math.sin(clockRef.current.getElapsedTime()*0.6)*xAxis
        // Axis rotation
        moonRef.current.position.z=Math.cos(clockRef.current.getElapsedTime()*0.6)*xAxis
        moonRef.current.rotation.y+=0.002
    },[])
    useFrame(()=>{
        updateMoonPosition()
    })

    return <mesh castShadow receiveShadow ref={moonRef} position={[xAxis,0,0]}>
        {/* radius X-axis Y-axis  */}
        <sphereGeometry args={[0.25,32,32]}/>
        <meshPhongMaterial map={moonTexture} 
        emissiveMap={moonTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
        /> 
    </mesh>
})
export default Moon