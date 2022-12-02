import './index.css'
import visualization from './src/visualization'
import { songsImage } from './src/songsImage'

function App() {
    return <visualization slides={songsImage} />;
}