import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import DprManager from './components/DprManager'

function App() {
  return (
    <main className="grid h-screen overflow-hidden" style={{ gridTemplateRows: 'auto 1fr' }}>
      <header className="bg-bacgr">
        <h1>Utis toss game</h1>
      </header>
      <div className="relative">
        <Canvas
          style={{ position: 'absolute', inset: 0 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            stencil: false,
            depth: true,
            powerPreference: 'high-performance',
          }}
        >
          <DprManager />
          <Environment preset="warehouse" background resolution={256} environmentIntensity={0.6} />
          <ambientLight intensity={0.3} />
        </Canvas>
      </div>
    </main>
  )
}

export default App
