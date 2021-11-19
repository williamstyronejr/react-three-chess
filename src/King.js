/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: marcelo.medeirossilva (https://sketchfab.com/marcelo.medeirossilva)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/models/640c64de51ba48c4aa341b803e243d36
title: Low Poly Chess - King
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/king.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} />
        <group position={[0, 0, 3.47]}>
          <mesh geometry={nodes.Chess_King_0.geometry} material={materials.Root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/king.gltf')
