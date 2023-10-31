/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/new_room_window_side.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.128}
      position={[-0.11, -1, 0]}
      rotation={[0, -Math.PI, 0]}
    >
      <group position={[-1.303, 11.537, -7.463]} scale={[0.445, 0.393, 0.445]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube155_1.geometry}
          material={materials.RenderMonitor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube155_2.geometry}
          material={materials.Case}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube155_3.geometry}
          material={materials.USB}
        />
      </group>
      <group
        position={[-1.271, 5.663, -5.154]}
        rotation={[Math.PI, -1.561, Math.PI]}
        scale={[1.947, 14.663, 4.487]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials["Material.121"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.120"]}
        />
      </group>
      <group
        position={[0.004, -0.017, -5.298]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.811, 2.021, 2.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_1"].geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_2"].geometry}
          material={materials["1042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_3"].geometry}
          material={materials["1053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_4"].geometry}
          material={materials["1045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_5"].geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_6"].geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_7"].geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_8"].geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_9"].geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Escritorio-pc-Teclado-Pantalla-mouse_10"].geometry}
          material={materials["Material.028"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["Material.023"]}
        position={[7.471, 9.354, -6.866]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials["Material.023"]}
        position={[7.467, 9.354, -6.873]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002.geometry}
        material={materials["Material.023"]}
        position={[7.463, 9.354, -6.881]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        material={materials["Material.023"]}
        position={[7.458, 9.354, -6.89]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004.geometry}
        material={materials["Material.023"]}
        position={[7.491, 9.354, -6.829]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve005.geometry}
        material={materials["Material.023"]}
        position={[7.487, 9.354, -6.836]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve006.geometry}
        material={materials["Material.023"]}
        position={[7.482, 9.354, -6.844]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve007.geometry}
        material={materials["Material.023"]}
        position={[7.478, 9.354, -6.853]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve008.geometry}
        material={materials["Material.023"]}
        position={[7.468, 9.32, -6.87]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve009.geometry}
        material={materials["Material.023"]}
        position={[7.464, 9.32, -6.878]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve010.geometry}
        material={materials["Material.023"]}
        position={[7.46, 9.32, -6.886]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve011.geometry}
        material={materials["Material.023"]}
        position={[7.456, 9.32, -6.895]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve012.geometry}
        material={materials["Material.023"]}
        position={[7.488, 9.32, -6.834]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve013.geometry}
        material={materials["Material.023"]}
        position={[7.484, 9.32, -6.842]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve014.geometry}
        material={materials["Material.023"]}
        position={[7.479, 9.32, -6.85]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve015.geometry}
        material={materials["Material.023"]}
        position={[7.475, 9.32, -6.859]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve016.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.316, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve017.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.316, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve018.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.283, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve019.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.283, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve020.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.382, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve021.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.382, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve022.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.35, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve023.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.35, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve024.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.447, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve025.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.447, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve026.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.414, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve027.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.414, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve028.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.508, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve029.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.508, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve030.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.475, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve031.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.475, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve032.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.572, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve033.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.572, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve034.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.539, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve035.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.539, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve036.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.248, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve037.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.248, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve038.geometry}
        material={materials["Material.034"]}
        position={[8.248, 8.215, -5.671]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve039.geometry}
        material={materials["Material.034"]}
        position={[8.27, 8.215, -5.63]}
        rotation={[0, 0.487, 0]}
        scale={0.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve040.geometry}
        material={materials["Material.034"]}
        position={[8.092, 6.474, -5.892]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve041.geometry}
        material={materials["Material.034"]}
        position={[8.087, 6.474, -5.901]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve042.geometry}
        material={materials["Material.034"]}
        position={[8.102, 6.474, -5.872]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve043.geometry}
        material={materials["Material.034"]}
        position={[8.113, 6.474, -5.852]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve044.geometry}
        material={materials["Material.034"]}
        position={[7.433, 6.474, -7.145]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve045.geometry}
        material={materials["Material.034"]}
        position={[7.431, 6.474, -7.149]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve046.geometry}
        material={materials["Material.034"]}
        position={[7.44, 6.474, -7.131]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve047.geometry}
        material={materials["Material.034"]}
        position={[7.444, 6.474, -7.119]}
        rotation={[-Math.PI, 1.084, 2.146]}
        scale={0.347}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve048.geometry}
        material={materials["Material.065"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.466, Math.PI]}
        scale={[0.206, 0.211, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve049.geometry}
        material={materials["Material.065"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, 0.702, -Math.PI]}
        scale={[0.206, 0.211, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve050.geometry}
        material={materials["Material.065"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.702, 0]}
        scale={[0.206, 0.211, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve051.geometry}
        material={materials["Material.065"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, 1.466, 0]}
        scale={[0.206, 0.211, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve052.geometry}
        material={materials["Material.056"]}
        position={[7.473, 8.457, -5.936]}
        rotation={[-1.012, 0.274, 0.408]}
        scale={0.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve053.geometry}
        material={materials["Material.056"]}
        position={[7.473, 8.657, -5.936]}
        rotation={[-1.012, 0.274, 0.408]}
        scale={0.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve054.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.733, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve055.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.72, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve056.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.709, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve057.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.694, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve058.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.628, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve059.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.615, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve060.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.603, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve061.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.589, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve062.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.525, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve063.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.512, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve064.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.5, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve065.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.486, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve066.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.473, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve067.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.46, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve068.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.449, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve069.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.434, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve070.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.356, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve071.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.343, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve072.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.331, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve073.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.317, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve074.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.223, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve075.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.21, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve076.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.198, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve077.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.184, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve078.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.086, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve079.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.073, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve080.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.061, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve081.geometry}
        material={materials["Material.089"]}
        position={[8.389, 7.047, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve082.geometry}
        material={materials["Material.089"]}
        position={[8.389, 6.985, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve083.geometry}
        material={materials["Material.089"]}
        position={[8.389, 6.971, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve084.geometry}
        material={materials["Material.089"]}
        position={[8.389, 6.96, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve085.geometry}
        material={materials["Material.089"]}
        position={[8.389, 6.945, -5.611]}
        rotation={[-Math.PI, 0.299, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve086.geometry}
        material={materials["Material.089"]}
        position={[7.274, 6.838, -5.735]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve087.geometry}
        material={materials["Material.089"]}
        position={[7.274, 6.811, -5.735]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve088.geometry}
        material={materials["Material.089"]}
        position={[7.287, 6.838, -5.711]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve089.geometry}
        material={materials["Material.089"]}
        position={[7.287, 6.811, -5.711]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve090.geometry}
        material={materials["Material.089"]}
        position={[7.301, 6.838, -5.684]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve091.geometry}
        material={materials["Material.089"]}
        position={[7.301, 6.811, -5.684]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve092.geometry}
        material={materials["Material.089"]}
        position={[7.314, 6.838, -5.659]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve093.geometry}
        material={materials["Material.089"]}
        position={[7.314, 6.811, -5.659]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.093"]}
        position={[7.088, 7.546, -6.866]}
        rotation={[0, 0.487, 0]}
        scale={0.339}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.093"]}
        position={[7.462, 7.545, -6.159]}
        rotation={[0, 0.487, 0]}
        scale={0.339}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.112"]}
        position={[8.096, 6.079, -4.654]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.757, 0.076, 0.535]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.113"]}
        position={[7.23, 5.8, -6.145]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.116"]}
        position={[7.512, 7.765, -5.552]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.812, -1.988, -1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.115"]}
        position={[7.512, 7.765, -5.552]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.812, -1.988, -1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.114"]}
        position={[7.512, 7.765, -5.552]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.812, -1.988, -1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.113"]}
        position={[7.512, 7.765, -5.552]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.812, -1.988, -1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.112"]}
        position={[8.097, 6.369, -4.651]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.757, 0.076, 0.535]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.117"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.602, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.038, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.110"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.107"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.106"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.105"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.103"]}
        position={[7.858, 7.728, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.104"]}
        position={[7.858, 7.728, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.103"]}
        position={[7.858, 7.204, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.104"]}
        position={[7.858, 7.204, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.102"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["Material.099"]}
        position={[7.858, 6.861, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["Material.100"]}
        position={[7.858, 6.861, -6.419]}
        rotation={[0, 0.487, 0]}
        scale={[0.054, 0.052, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["Material.101"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["Material.098"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["Material.097"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Material.117"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["Material.097"]}
        position={[7.798, 8.447, -6.687]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["Material.117"]}
        position={[7.798, 8.447, -6.687]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials["Material.097"]}
        position={[7.835, 8.447, -6.617]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials["Material.117"]}
        position={[7.835, 8.447, -6.617]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.097"]}
        position={[7.873, 8.447, -6.545]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["Material.117"]}
        position={[7.873, 8.447, -6.545]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["Material.094"]}
        position={[8.068, 9.143, -6.112]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["Material.094"]}
        position={[8.108, 9.143, -6.038]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials["Material.094"]}
        position={[8.145, 9.143, -5.967]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["Material.094"]}
        position={[8.183, 9.143, -5.895]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["Material.094"]}
        position={[8.068, 7.979, -6.112]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials["Material.094"]}
        position={[8.108, 7.979, -6.038]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials["Material.094"]}
        position={[8.145, 7.979, -5.967]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials["Material.094"]}
        position={[8.183, 7.979, -5.895]}
        rotation={[0, 0.487, 0]}
        scale={[0.028, 0.035, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials["Material.026"]}
        position={[7.065, 6.202, -6.614]}
        rotation={[0, 0.487, 0]}
        scale={[0.778, 0.851, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials["Material.024"]}
        position={[6.987, 6.202, -6.573]}
        rotation={[0, 0.487, 0]}
        scale={[0.778, 0.851, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials["Material.059"]}
        position={[7.347, 8.63, -7.13]}
        rotation={[0, -1.084, 0]}
        scale={[-0.898, -1.114, -0.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials["Material.033"]}
        position={[7.347, 8.63, -7.13]}
        rotation={[0, -1.084, 0]}
        scale={[-0.898, -1.114, -0.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials["Material.035"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials["Material.098"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials["Material.032"]}
        position={[7.347, 8.63, -7.13]}
        rotation={[0, -1.084, 0]}
        scale={[-0.898, -1.114, -0.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials["Material.089"]}
        position={[8.219, 8.387, -5.713]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.029, -0.21, -0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials["Material.089"]}
        position={[7.497, 9.228, -6.879]}
        rotation={[0, 0.487, 0]}
        scale={[0.029, 0.029, 0.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials["Material.037"]}
        position={[8.393, 8.701, -3.934]}
        rotation={[0, 0.487, 0]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials["Material.036"]}
        position={[7.512, 7.765, -5.552]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[-0.812, -1.988, -1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials["Material.037"]}
        position={[8.393, 7.562, -3.934]}
        rotation={[0, 0.487, 0]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={materials["Material.037"]}
        position={[8.393, 6.399, -3.934]}
        rotation={[0, 0.487, 0]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={materials["Material.037"]}
        position={[6.472, 8.753, -6.989]}
        rotation={[0, 0.487, 0]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials["Material.098"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={materials["Material.063"]}
        position={[7.758, 8.447, -6.763]}
        rotation={[0, 0.487, 0]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={materials["Material.113"]}
        position={[6.659, 7.373, -7.211]}
        rotation={[0, 0.487, 0]}
        scale={[0.678, 0.083, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials["Material.113"]}
        position={[6.659, 7.53, -7.211]}
        rotation={[0, 0.487, 0]}
        scale={[0.678, 0.083, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={materials["Material.113"]}
        position={[6.659, 7.229, -7.211]}
        rotation={[0, 0.487, 0]}
        scale={[0.678, 0.083, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials["Material.113"]}
        position={[6.659, 7.076, -7.211]}
        rotation={[0, 0.487, 0]}
        scale={[0.678, 0.083, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={materials["Material.113"]}
        position={[6.659, 6.908, -7.211]}
        rotation={[0, 0.487, 0]}
        scale={[0.678, 0.083, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials["Material.049"]}
        position={[8.042, 8.558, -5.821]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={materials["Material.047"]}
        position={[8.048, 8.558, -5.824]}
        rotation={[0, 0.487, 0]}
        scale={[0.103, 0.579, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={materials["Material.038"]}
        position={[5.991, 7.578, -6.857]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.686, 0.082, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={materials["Material.044"]}
        position={[8.042, 8.558, -5.821]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={materials["Material.046"]}
        position={[7.977, 8.554, -5.816]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={materials["Material.048"]}
        position={[7.977, 8.554, -5.816]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube067.geometry}
        material={materials["Material.046"]}
        position={[8.002, 8.562, -5.768]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={materials["Material.048"]}
        position={[8.002, 8.562, -5.768]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={materials["Material.049"]}
        position={[8.005, 8.558, -5.892]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube070.geometry}
        material={materials["Material.047"]}
        position={[8.01, 8.558, -5.895]}
        rotation={[0, 0.487, 0]}
        scale={[0.103, 0.579, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube071.geometry}
        material={materials["Material.044"]}
        position={[8.005, 8.558, -5.892]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube072.geometry}
        material={materials["Material.046"]}
        position={[7.939, 8.554, -5.887]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={materials["Material.048"]}
        position={[7.939, 8.554, -5.887]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube074.geometry}
        material={materials["Material.046"]}
        position={[7.965, 8.562, -5.839]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={materials["Material.048"]}
        position={[7.965, 8.562, -5.839]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={materials["Material.049"]}
        position={[7.967, 8.558, -5.963]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={materials["Material.047"]}
        position={[7.972, 8.558, -5.966]}
        rotation={[0, 0.487, 0]}
        scale={[0.103, 0.579, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube078.geometry}
        material={materials["Material.044"]}
        position={[7.967, 8.558, -5.963]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube079.geometry}
        material={materials["Material.046"]}
        position={[7.901, 8.554, -5.959]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube080.geometry}
        material={materials["Material.048"]}
        position={[7.901, 8.554, -5.959]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={materials["Material.046"]}
        position={[7.927, 8.562, -5.911]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube082.geometry}
        material={materials["Material.048"]}
        position={[7.927, 8.562, -5.911]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube083.geometry}
        material={materials["Material.049"]}
        position={[7.928, 8.558, -6.037]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube084.geometry}
        material={materials["Material.047"]}
        position={[7.933, 8.558, -6.04]}
        rotation={[0, 0.487, 0]}
        scale={[0.103, 0.579, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube085.geometry}
        material={materials["Material.044"]}
        position={[7.928, 8.558, -6.037]}
        rotation={[0, 0.487, 0]}
        scale={[0.116, 0.543, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086.geometry}
        material={materials["Material.046"]}
        position={[7.862, 8.554, -6.033]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={materials["Material.048"]}
        position={[7.862, 8.554, -6.033]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088.geometry}
        material={materials["Material.046"]}
        position={[7.888, 8.562, -5.984]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089.geometry}
        material={materials["Material.048"]}
        position={[7.888, 8.562, -5.984]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.142, 0.543, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090.geometry}
        material={materials["Material.050"]}
        position={[8.207, 6.736, -5.72]}
        rotation={[0, 0.487, 0]}
        scale={[-0.021, -0.021, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091.geometry}
        material={nodes.Cube091.material}
        position={[8.513, 9.749, -5.462]}
        rotation={[0, 0.487, 0]}
        scale={0.188}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092.geometry}
        material={materials["Material.087"]}
        position={[8.958, 9.724, -4.6]}
        rotation={[0, 0.487, 0]}
        scale={0.065}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials["Material.087"]}
        position={[8.873, 9.703, -4.752]}
        rotation={[0, 0.487, 0]}
        scale={[0.055, 0.065, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={materials["Material.050"]}
        position={[7.538, 6.736, -6.982]}
        rotation={[0, 0.487, 0]}
        scale={[-0.013, -0.013, -0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={materials["Material.051"]}
        position={[7.539, 9.665, -5.3]}
        rotation={[0, 0.487, 0]}
        scale={[0.605, 0.066, 0.605]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials["Material.037"]}
        position={[7.112, 9.529, -6.026]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials["Material.037"]}
        position={[7.632, 9.529, -5.044]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={[0.523, 0.523, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={materials["Material.052"]}
        position={[7.801, 8.53, -6.474]}
        rotation={[0, 0.487, 0]}
        scale={[0.01, 0.296, 0.296]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={materials["Material.055"]}
        position={[6.987, 6.202, -6.573]}
        rotation={[0, 0.487, 0]}
        scale={[0.778, 0.851, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={materials["Material.062"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, 0]}
        scale={[-0.503, -0.106, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials["Material.064"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, -0.487, 0]}
        scale={[0.261, 0.005, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={materials["Material.057"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={materials["Material.070"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={materials["Material.071"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials["Material.073"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials["Material.074"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={materials["Material.075"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials["Material.080"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={materials["Material.081"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials["Material.082"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.084, Math.PI]}
        scale={[0.007, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={materials["Material.083"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={materials["Material.084"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={materials["Material.066"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.031, 0.003, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.084, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={materials["Material.085"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.084, Math.PI]}
        scale={[0.046, 0.007, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={materials["Material.067"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.084, Math.PI]}
        scale={[0.007, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={materials["Material.088"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube133.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials["Material.072"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube143.geometry}
        material={materials["Material.079"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[-0.406, -0.006, -0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials["Material.090"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.08, 0.023, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials["Material.092"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.08, 0.023, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.71, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.038, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.477, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.064, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube148.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.333, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.064, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.195, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.064, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={materials["Material.089"]}
        position={[8.267, 7.066, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.035, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube151.geometry}
        material={materials["Material.089"]}
        position={[8.267, 6.965, -5.665]}
        rotation={[0, 0.487, 0]}
        scale={[0.027, 0.035, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube152.geometry}
        material={materials["Material.087"]}
        position={[8.809, 9.703, -4.873]}
        rotation={[0, 0.487, 0]}
        scale={[0.055, 0.065, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={materials["Material.060"]}
        position={[8.745, 9.703, -4.993]}
        rotation={[0, 0.487, 0]}
        scale={[0.055, 0.065, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.031"]}
        position={[8.154, 7.729, -5.827]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.44, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.109"]}
        position={[7.679, 8.44, -6.818]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.5, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.109"]}
        position={[7.679, 8.5, -6.818]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.557, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.109"]}
        position={[7.679, 8.557, -6.818]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.617, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.109"]}
        position={[7.679, 8.617, -6.818]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.674, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.109"]}
        position={[7.712, 8.378, -6.755]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.109"]}
        position={[7.679, 8.674, -6.818]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.109"]}
        position={[7.753, 8.163, -6.678]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Material.109"]}
        position={[7.781, 8.163, -6.626]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Material.109"]}
        position={[7.808, 8.163, -6.574]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["Material.109"]}
        position={[7.836, 8.163, -6.522]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Material.109"]}
        position={[7.866, 8.163, -6.466]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Material.109"]}
        position={[7.893, 8.163, -6.414]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Material.109"]}
        position={[7.781, 8.042, -6.626]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Material.109"]}
        position={[7.895, 8.042, -6.41]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Material.109"]}
        position={[8.026, 8.042, -6.163]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Material.109"]}
        position={[8.023, 8.638, -6.169]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Material.109"]}
        position={[8.023, 8.531, -6.169]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.592, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.467, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.652, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.712, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.233, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.177, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials["Material.109"]}
        position={[8.212, 8.115, -5.812]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials["Material.109"]}
        position={[8.271, 8.727, -5.7]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials["Material.109"]}
        position={[8.271, 8.784, -5.7]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials["Material.109"]}
        position={[7.547, 7.286, -7.068]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={materials["Material.109"]}
        position={[7.49, 7.286, -7.175]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034.geometry}
        material={materials["Material.109"]}
        position={[7.811, 6.73, -6.569]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={materials["Material.109"]}
        position={[7.908, 6.73, -6.386]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036.geometry}
        material={materials["Material.109"]}
        position={[8.232, 6.936, -5.773]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials["Material.031"]}
        position={[7.932, 7.414, -6.246]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038.geometry}
        material={materials["Material.031"]}
        position={[8.165, 7.047, -5.806]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder039.geometry}
        material={materials["Material.109"]}
        position={[7.742, 8.904, -6.698]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder040.geometry}
        material={materials["Material.109"]}
        position={[7.77, 8.904, -6.646]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041.geometry}
        material={materials["Material.109"]}
        position={[7.798, 8.904, -6.594]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042.geometry}
        material={materials["Material.109"]}
        position={[7.825, 8.904, -6.542]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials["Material.109"]}
        position={[7.855, 8.904, -6.486]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials["Material.109"]}
        position={[7.883, 8.904, -6.433]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder045.geometry}
        material={materials["Material.037"]}
        position={[8.392, 8.704, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder046.geometry}
        material={materials["Material.040"]}
        position={[8.392, 8.704, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder047.geometry}
        material={materials["Material.037"]}
        position={[8.385, 8.698, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048.geometry}
        material={materials["Material.037"]}
        position={[8.359, 8.704, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049.geometry}
        material={materials["Material.043"]}
        position={[8.359, 8.704, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials["Material.040"]}
        position={[8.385, 8.698, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials["Material.037"]}
        position={[8.392, 8.704, -3.932]}
        rotation={[1.285, -0.49, -0.559]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder052.geometry}
        material={materials["Material.037"]}
        position={[8.392, 8.75, -3.932]}
        rotation={[-0.905, -0.862, -2.339]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials["Material.037"]}
        position={[8.392, 8.704, -3.932]}
        rotation={[-1.92, 0.573, -2.551]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials["Material.037"]}
        position={[8.392, 8.704, -3.932]}
        rotation={[2.286, 0.892, -0.84]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["Material.037"]}
        position={[8.392, 7.565, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials["Material.040"]}
        position={[8.392, 7.565, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder057.geometry}
        material={materials["Material.037"]}
        position={[8.385, 7.559, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder058.geometry}
        material={materials["Material.037"]}
        position={[8.359, 7.565, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder059.geometry}
        material={materials["Material.043"]}
        position={[8.359, 7.565, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials["Material.040"]}
        position={[8.385, 7.559, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder061.geometry}
        material={materials["Material.037"]}
        position={[8.392, 7.565, -3.932]}
        rotation={[1.285, -0.49, -0.559]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder062.geometry}
        material={materials["Material.037"]}
        position={[8.392, 7.611, -3.932]}
        rotation={[-0.905, -0.862, -2.339]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063.geometry}
        material={materials["Material.037"]}
        position={[8.392, 7.565, -3.932]}
        rotation={[-1.92, 0.573, -2.551]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder064.geometry}
        material={materials["Material.037"]}
        position={[8.392, 7.565, -3.932]}
        rotation={[2.286, 0.892, -0.84]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder065.geometry}
        material={materials["Material.037"]}
        position={[8.392, 6.401, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder066.geometry}
        material={materials["Material.040"]}
        position={[8.392, 6.401, -3.932]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder067.geometry}
        material={materials["Material.037"]}
        position={[8.385, 6.395, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder068.geometry}
        material={materials["Material.037"]}
        position={[8.359, 6.401, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder069.geometry}
        material={materials["Material.043"]}
        position={[8.359, 6.401, -3.994]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder070.geometry}
        material={materials["Material.040"]}
        position={[8.385, 6.395, -3.946]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder071.geometry}
        material={materials["Material.037"]}
        position={[8.392, 6.401, -3.932]}
        rotation={[1.285, -0.49, -0.559]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder072.geometry}
        material={materials["Material.037"]}
        position={[8.392, 6.448, -3.932]}
        rotation={[-0.905, -0.862, -2.339]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder073.geometry}
        material={materials["Material.037"]}
        position={[8.392, 6.401, -3.932]}
        rotation={[-1.92, 0.573, -2.551]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder074.geometry}
        material={materials["Material.037"]}
        position={[8.392, 6.401, -3.932]}
        rotation={[2.286, 0.892, -0.84]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder075.geometry}
        material={materials["Material.037"]}
        position={[6.506, 8.755, -6.922]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder076.geometry}
        material={materials["Material.040"]}
        position={[6.506, 8.755, -6.922]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder077.geometry}
        material={materials["Material.037"]}
        position={[6.485, 8.75, -6.963]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder078.geometry}
        material={materials["Material.037"]}
        position={[6.473, 8.755, -6.984]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder079.geometry}
        material={materials["Material.043"]}
        position={[6.473, 8.755, -6.984]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder080.geometry}
        material={materials["Material.040"]}
        position={[6.485, 8.75, -6.963]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder081.geometry}
        material={materials["Material.037"]}
        position={[6.506, 8.755, -6.922]}
        rotation={[1.285, -0.49, -0.559]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder082.geometry}
        material={materials["Material.037"]}
        position={[6.506, 8.802, -6.922]}
        rotation={[-0.905, -0.862, -2.339]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder083.geometry}
        material={materials["Material.037"]}
        position={[6.506, 8.755, -6.922]}
        rotation={[-1.92, 0.573, -2.551]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder084.geometry}
        material={materials["Material.037"]}
        position={[6.506, 8.755, -6.922]}
        rotation={[2.286, 0.892, -0.84]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder085.geometry}
        material={materials["Material.037"]}
        position={[7.111, 9.532, -6.027]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder086.geometry}
        material={materials["Material.040"]}
        position={[7.106, 9.528, -6.036]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder087.geometry}
        material={materials["Material.037"]}
        position={[7.109, 9.564, -6.031]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder088.geometry}
        material={materials["Material.037"]}
        position={[7.107, 9.583, -6.034]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder089.geometry}
        material={materials["Material.043"]}
        position={[7.107, 9.583, -6.034]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder090.geometry}
        material={materials["Material.040"]}
        position={[7.109, 9.564, -6.031]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder091.geometry}
        material={materials["Material.037"]}
        position={[7.071, 9.532, -6.006]}
        rotation={[-Math.PI, 0.522, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder092.geometry}
        material={materials["Material.037"]}
        position={[7.077, 9.537, -5.994]}
        rotation={[-Math.PI, -1.024, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder093.geometry}
        material={materials["Material.037"]}
        position={[7.071, 9.532, -6.006]}
        rotation={[0, -0.423, Math.PI]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder094.geometry}
        material={materials["Material.037"]}
        position={[7.071, 9.532, -6.006]}
        rotation={[0, 0.981, -Math.PI]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder095.geometry}
        material={materials["Material.037"]}
        position={[7.631, 9.532, -5.045]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder096.geometry}
        material={materials["Material.040"]}
        position={[7.626, 9.528, -5.053]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.451, 0.063, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder097.geometry}
        material={materials["Material.037"]}
        position={[7.629, 9.564, -5.048]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder098.geometry}
        material={materials["Material.037"]}
        position={[7.627, 9.583, -5.051]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder099.geometry}
        material={materials["Material.043"]}
        position={[7.627, 9.583, -5.051]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.148, 0.025, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder100.geometry}
        material={materials["Material.040"]}
        position={[7.629, 9.564, -5.048]}
        rotation={[-Math.PI, 1.084, 0]}
        scale={[0.137, 0.149, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder101.geometry}
        material={materials["Material.037"]}
        position={[7.591, 9.532, -5.023]}
        rotation={[-Math.PI, 0.522, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder102.geometry}
        material={materials["Material.037"]}
        position={[7.597, 9.537, -5.011]}
        rotation={[-Math.PI, -1.024, 0]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder103.geometry}
        material={materials["Material.037"]}
        position={[7.591, 9.532, -5.023]}
        rotation={[0, -0.423, Math.PI]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder104.geometry}
        material={materials["Material.037"]}
        position={[7.591, 9.532, -5.023]}
        rotation={[0, 0.981, -Math.PI]}
        scale={[0.501, 0.093, 0.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder105.geometry}
        material={materials["Material.053"]}
        position={[7.819, 8.537, -6.473]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={0.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder106.geometry}
        material={materials["Material.054"]}
        position={[7.819, 8.537, -6.473]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={0.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder107.geometry}
        material={materials["Material.031"]}
        position={[8.012, 8.216, -6.227]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder108.geometry}
        material={materials["Material.031"]}
        position={[8.012, 8.849, -6.227]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder109.geometry}
        material={materials["Material.031"]}
        position={[7.714, 8.849, -6.789]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder110.geometry}
        material={materials["Material.031"]}
        position={[7.714, 8.221, -6.789]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={[0.023, 0.011, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder111.geometry}
        material={materials["Material.096"]}
        position={[7.084, 7.604, -6.867]}
        rotation={[0, 0.487, 0]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder112.geometry}
        material={materials["Material.095"]}
        position={[7.084, 7.604, -6.867]}
        rotation={[0, 0.487, 0]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder113.geometry}
        material={materials["Material.096"]}
        position={[7.463, 7.604, -6.151]}
        rotation={[0, 0.487, 0]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder114.geometry}
        material={materials["Material.095"]}
        position={[7.463, 7.604, -6.151]}
        rotation={[0, 0.487, 0]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder115.geometry}
        material={materials["Material.042"]}
        position={[7.907, 8.658, -6.167]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder116.geometry}
        material={materials["Material.042"]}
        position={[7.907, 8.457, -6.167]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder117.geometry}
        material={materials["Material.087"]}
        position={[8.632, 9.76, -5.099]}
        rotation={[0, 0.487, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder118.geometry}
        material={materials["Material.058"]}
        position={[8.718, 9.76, -5.145]}
        rotation={[0, 0.487, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder120.geometry}
        material={materials["Material.061"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={0.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder121.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder122.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder123.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder124.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder125.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder126.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI, -0.487, 0]}
        scale={[0.035, 0.001, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder127.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder128.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder129.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder130.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, 0.734, 0]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder131.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, 0.734, 0]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder132.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, 0.734, 0]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder133.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.155, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder134.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.155, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder135.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.155, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder136.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.959, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder137.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.959, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder138.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.959, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder139.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.566, 3.142]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder140.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.566, 3.142]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder141.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.566, 3.142]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder142.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.081, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder143.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.081, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder144.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.081, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder145.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.578, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder146.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.578, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder147.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -0.578, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder148.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.405, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder149.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.405, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder150.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.405, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder151.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder152.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder153.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder154.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder155.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder156.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder157.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder158.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder159.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder160.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder161.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder162.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder163.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder164.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder165.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder166.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder167.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder168.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder169.geometry}
        material={materials["Material.076"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder170.geometry}
        material={materials["Material.077"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder171.geometry}
        material={materials["Material.078"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, -1.406, Math.PI]}
        scale={[0.028, 0.016, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder172.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.025, 0, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder173.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[Math.PI, -0.487, Math.PI]}
        scale={[0.025, 0, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder185.geometry}
        material={materials["Material.091"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI / 2, 0, -2.655]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder186.geometry}
        material={materials["Material.091"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[-Math.PI / 2, 0, -2.655]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GamerStorm_logo.geometry}
        material={materials.GamerStorm_logo}
        position={[8.364, 9.773, -4.037]}
        rotation={[0, 0.487, 0]}
        scale={0.209}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.111"]}
        position={[8.094, 7.391, -6.06]}
        rotation={[0, 0.487, -Math.PI / 2]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.113"]}
        position={[6.413, 8.737, -7.061]}
        rotation={[Math.PI / 2, 0, -0.487]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.039"]}
        position={[7.325, 9.756, -5.749]}
        rotation={[0, 0.487, 0]}
        scale={[0.711, 0.851, 1.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.041"]}
        position={[7.322, 9.772, -5.769]}
        rotation={[0, 0.487, 0]}
        scale={[0.698, 0.851, 1.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials["Material.069"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.09, 0.09, 0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials["Material.086"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.09, 0.09, 0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROGTRANSPARENT.geometry}
        material={materials.ROGTRANSPARENT}
        position={[8.067, 7.362, -5.977]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.354}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, Math.PI]}
        scale={[0.028, 0.007, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, 0]}
        scale={[0.02, 0.005, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007.geometry}
        material={materials["Material.068"]}
        position={[7.283, 7.589, -6.464]}
        rotation={[0, 0.487, 0]}
        scale={[0.02, 0.005, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.383, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.445, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["Material.108"]}
        position={[7.651, 8.445, -6.813]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.505, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials["Material.108"]}
        position={[7.651, 8.505, -6.813]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.562, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={materials["Material.108"]}
        position={[7.651, 8.562, -6.813]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text007.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.622, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text008.geometry}
        material={materials["Material.108"]}
        position={[7.651, 8.622, -6.813]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text009.geometry}
        material={materials["Material.108"]}
        position={[7.684, 8.679, -6.751]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text010.geometry}
        material={materials["Material.108"]}
        position={[7.651, 8.679, -6.813]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text011.geometry}
        material={materials["Material.108"]}
        position={[7.725, 8.168, -6.673]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text012.geometry}
        material={materials["Material.108"]}
        position={[7.753, 8.168, -6.621]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text013.geometry}
        material={materials["Material.108"]}
        position={[7.78, 8.168, -6.569]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text014.geometry}
        material={materials["Material.108"]}
        position={[7.808, 8.168, -6.518]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text015.geometry}
        material={materials["Material.108"]}
        position={[7.837, 8.168, -6.461]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text016.geometry}
        material={materials["Material.108"]}
        position={[7.865, 8.168, -6.409]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text017.geometry}
        material={materials["Material.108"]}
        position={[7.753, 8.047, -6.621]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text018.geometry}
        material={materials["Material.108"]}
        position={[7.867, 8.047, -6.406]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text019.geometry}
        material={materials["Material.108"]}
        position={[7.998, 8.047, -6.158]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text020.geometry}
        material={materials["Material.108"]}
        position={[7.995, 8.642, -6.164]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text021.geometry}
        material={materials["Material.108"]}
        position={[7.995, 8.535, -6.164]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text022.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.596, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text023.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.472, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text024.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.657, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text025.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.716, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text026.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.238, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text027.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.181, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text028.geometry}
        material={materials["Material.108"]}
        position={[8.183, 8.119, -5.808]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text029.geometry}
        material={materials["Material.108"]}
        position={[8.243, 8.732, -5.695]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text030.geometry}
        material={materials["Material.108"]}
        position={[8.243, 8.789, -5.695]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text031.geometry}
        material={materials["Material.108"]}
        position={[7.519, 7.29, -7.063]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text032.geometry}
        material={materials["Material.108"]}
        position={[7.462, 7.29, -7.17]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text033.geometry}
        material={materials["Material.108"]}
        position={[7.783, 6.735, -6.564]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text034.geometry}
        material={materials["Material.108"]}
        position={[7.88, 6.735, -6.382]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text035.geometry}
        material={materials["Material.108"]}
        position={[8.204, 6.94, -5.768]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text036.geometry}
        material={materials["Material.108"]}
        position={[7.714, 8.908, -6.694]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text037.geometry}
        material={materials["Material.108"]}
        position={[7.742, 8.908, -6.642]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text038.geometry}
        material={materials["Material.108"]}
        position={[7.77, 8.908, -6.589]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text039.geometry}
        material={materials["Material.108"]}
        position={[7.797, 8.908, -6.537]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text040.geometry}
        material={materials["Material.108"]}
        position={[7.827, 8.908, -6.481]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text041.geometry}
        material={materials["Material.108"]}
        position={[7.855, 8.908, -6.429]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text042.geometry}
        material={materials["Material.118"]}
        position={[6.661, 7.518, -6.8]}
        rotation={[Math.PI / 2, 0, 1.084]}
        scale={[0.8, 0.035, 0.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text043.geometry}
        material={materials["Material.045"]}
        position={[7.931, 9.049, -5.785]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text044.geometry}
        material={materials["Material.045"]}
        position={[7.951, 8.066, -5.748]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text045.geometry}
        material={materials["Material.045"]}
        position={[7.89, 8.607, -5.751]}
        rotation={[Math.PI, -0.487, Math.PI / 2]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text046.geometry}
        material={materials["Material.045"]}
        position={[7.893, 9.049, -5.856]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text047.geometry}
        material={materials["Material.045"]}
        position={[7.913, 8.066, -5.819]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text048.geometry}
        material={materials["Material.045"]}
        position={[7.852, 8.607, -5.821]}
        rotation={[Math.PI, -0.487, Math.PI / 2]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text049.geometry}
        material={materials["Material.045"]}
        position={[7.855, 9.049, -5.928]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text050.geometry}
        material={materials["Material.045"]}
        position={[7.875, 8.066, -5.89]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text051.geometry}
        material={materials["Material.045"]}
        position={[7.814, 8.607, -5.893]}
        rotation={[Math.PI, -0.487, Math.PI / 2]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text052.geometry}
        material={materials["Material.045"]}
        position={[7.816, 9.049, -6.002]}
        rotation={[-Math.PI, 1.084, Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text053.geometry}
        material={materials["Material.045"]}
        position={[7.836, 8.066, -5.964]}
        rotation={[Math.PI, 1.084, -Math.PI / 2]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text054.geometry}
        material={materials["Material.045"]}
        position={[7.775, 8.607, -5.967]}
        rotation={[Math.PI, -0.487, Math.PI / 2]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Losck screen"]}
        position={[1.647, 7.449, -6.779]}
        rotation={[0, -0.218, 0]}
      />
      <group position={[-4.407, 7.459, -6.893]} rotation={[0, 0.173, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_1.geometry}
          material={materials["Color 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_2.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_3.geometry}
          material={materials.Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_4.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_5.geometry}
          material={materials["Color 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube152_6.geometry}
          material={materials["Color 3"]}
        />
      </group>
      <group position={[1.653, 7.459, -6.795]} rotation={[0, -0.218, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_1.geometry}
          material={materials["Color 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_2.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_3.geometry}
          material={materials.Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_4.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_5.geometry}
          material={materials["Color 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube154_6.geometry}
          material={materials["Color 3"]}
        />
      </group>
      <group
        position={[-1.315, 5.773, -5.777]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Keys1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials.Body1}
          />
        </group>
      </group>
      <group position={[1.318, 5.666, -4.255]} scale={14.843}>
        <group
          position={[-0.001, 0.008, -0.051]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_1.geometry}
            material={materials["Material.134"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_2.geometry}
            material={materials["Material.126"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_3.geometry}
            material={materials["Material.125"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_4.geometry}
            material={materials["Material.133"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_5.geometry}
            material={materials["main body"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_6.geometry}
            material={materials["Material.129"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_7.geometry}
            material={materials["Material.127"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_8.geometry}
            material={materials["main body.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_9.geometry}
            material={materials["Material.132"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_10.geometry}
            material={materials["Material.122"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_11.geometry}
            material={materials["Material.124"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_12.geometry}
            material={materials["Material.123"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_13.geometry}
            material={materials["Material.131"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_14.geometry}
            material={materials["Material.128"]}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={8}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.phongE2}
            position={[0.1, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.phongE2}
            position={[0.1, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[19.21, -0.1, 19.9]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={7}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[366.217, 115.97, -143.771]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.789}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.candle_Material007_0.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.candle_Material008_0.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.candle_Material013_0.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <group
            position={[85.821, 88.279, 64.486]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.flower_leaf1_0.geometry}
              material={materials.leaf1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.flower_leaf2_0.geometry}
              material={materials.leaf2}
            />
          </group>
          <group
            position={[188.831, 243.457, -26.58]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.688, 2.688, 23.024]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lighting_Material001_0.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lighting_Material003_0.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lighting_Material014_0.geometry}
              material={materials["Material.018"]}
            />
          </group>
          <group
            position={[388.469, 117.552, -211.434]}
            rotation={[-Math.PI / 2, 0.148, 0]}
            scale={[2.712, 31.279, 31.279]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.painting_Material010_0.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.painting_Material011_0.geometry}
              material={materials["Material.011"]}
            />
          </group>
          <group
            position={[81.651, 59.793, -127.726]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[25.257, 25.257, 2.667]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.seat_Leather_0.geometry}
              material={materials.Leather}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.seat_Material5_0.geometry}
              material={materials.Material5}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bowl_grey_0.geometry}
            material={materials.grey}
            position={[372.827, 99.081, 270.913]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[16.524, 16.524, 12.674]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cabinet_Material015_0.geometry}
            material={materials["Material.015"]}
            position={[367.527, 300.186, 45.941]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[34.407, 249.171, 3.605]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.carpet_Carpet__0.geometry}
            material={materials.Carpet}
            position={[81.578, 2.411, 26.536]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[190.768, 245.015, 0.524]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chopping_board1_Material1_0.geometry}
            material={materials.Material1}
            position={[388.318, 97.913, 187.245]}
            rotation={[-1.593, -1.28, -0.023]}
            scale={[1.332, 1.546, 1.332]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chopping_board2_Material2_0.geometry}
            material={materials.Material2}
            position={[391.595, 98.773, 194.446]}
            rotation={[-1.6, -1.347, -0.03]}
            scale={[1.399, 1.586, 1.399]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.faucet_Material006_0.geometry}
            material={materials["Material.001"]}
            position={[392.071, 95.046, 141.652]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.204, 0.204, 1.555]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.floor_floor_0.geometry}
            material={materials.floor}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.house_Material009_0.geometry}
            material={materials["Material.009"]}
            position={[0, 151.309, -0.282]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[396.176, 396.176, 150]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.IKEA_seat_wood__0.geometry}
            material={materials.wood}
            position={[363.595, 31.995, -331.439]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[17.536, 15.514, 15.514]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jar1_Material3_0.geometry}
            material={materials.Material3}
            position={[375.22, 92.792, -108.769]}
            rotation={[-Math.PI / 2, 0, -1.875]}
            scale={0.898}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jar2_Material4_0.geometry}
            material={materials.Material4}
            position={[372.586, 97.235, -121.78]}
            rotation={[-Math.PI / 2, 0, -1.247]}
            scale={0.824}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jar3_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[383.419, 94.983, 239.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={8.337}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jar4_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[377.036, 94.34, 219.292]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={7.771}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table_Material5001_0.geometry}
            material={materials["Material5.001"]}
            position={[83.099, 65.739, 24.667]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[80.747, 80.747, 10.763]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vase_grey001_0.geometry}
            material={materials["grey.001"]}
            position={[85.258, 86.332, 64.115]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={8.337}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.window_Material016_0.geometry}
            material={materials["Material.016"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/new_room_window_side.glb");
