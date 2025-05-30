import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

type SkillsData = {
  name: string;
  icon: string; 
};

type SkillsSphereProps = {
  skills: SkillsData[];
  darkMode: boolean;
};

const SkillIcon = ({ skill, position, darkMode }: { skill: SkillsData; position: [number, number, number]; darkMode: boolean }) => {
  return (
    <Text
      position={position}
      fontSize={1.2}
      color={darkMode ? '#2DD4BF' : '#22C55E'}
      anchorX="center"
      anchorY="middle"
    >
      {skill.icon}
    </Text>
  );
};

const SkillsCloud = ({ skills, darkMode }: { skills: SkillsData[]; darkMode: boolean }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.3;
      groupRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });
  
  useEffect(() => {
    if (groupRef.current) {
      skills.forEach((_, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        if (groupRef.current && groupRef.current.children[index]) {
          const child = groupRef.current.children[index];
          child.position.setFromSphericalCoords(4, phi, theta);
          child.lookAt(0, 0, 0);
        }
      });
    }
  }, [skills]);
  
  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const x = 4 * Math.sin(phi) * Math.cos(theta);
        const y = 4 * Math.sin(phi) * Math.sin(theta);
        const z = 4 * Math.cos(phi);
        
        return (
          <SkillIcon 
            key={skill.name} 
            skill={skill} 
            position={[x, y, z]} 
            darkMode={darkMode} 
          />
        );
      })}
    </group>
  );
};

const SkillsSphere: React.FC<SkillsSphereProps> = ({ skills, darkMode }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillsCloud skills={skills} darkMode={darkMode} />
      </Canvas>
    </div>
  );
};

export default SkillsSphere;