import {useGLTF} from '@react-three/drei'
import React,{ useMemo,useRef,useCallback } from 'react'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'

const ISS=React.memo(()=>{
    const ISSRef = useRef()
    const clockRef = useRef(new THREE.Clock())
    const memoizedISS = useMemo(()=>{
    return useGLTF('/ISSModel/ISS_stationary.gltf')
})
const xAxis = 2
const updateMoonPosition = useCallback(()=>{
    
    // orbit rotation
    ISSRef.current.position.x=Math.sin(clockRef.current.getElapsedTime()*0.8)*xAxis
    // Axis rotation
    ISSRef.current.position.z=Math.cos(clockRef.current.getElapsedTime()*0.8)*xAxis
        
},[])
useFrame(()=>{
    updateMoonPosition()
})

    return(
        <mesh>
            <primitive ref = {ISSRef} object={memoizedISS.scene} position={[xAxis,0,0]} scale={0.005}/>
        </mesh>
    )
})
export default ISS