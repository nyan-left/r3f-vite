import { ThreeElements } from '@react-three/fiber'
import "./App.css"
import { ZapparCanvas, ZapparCamera, FaceTracker, BrowserCompatibility } from '@zappar/zappar-react-three-fiber'

function Box(props: ThreeElements['mesh']) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={ 'orange'} />
    </mesh>
  )
}

function App(){
  return(
    <>
      <BrowserCompatibility fallback={<div>Sorry!</div>} />
      <ZapparCanvas>
        <ZapparCamera />
        <ambientLight />
        <pointLight/>
          <FaceTracker>
              <Box/>
            </FaceTracker>
      </ZapparCanvas>
    </>)
}

export default App;
