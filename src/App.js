
import './App.css';
import { useState, useEffect } from 'react';



const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMousePositionChange = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMousePositionChange);

    return () => {
      window.removeEventListener('mousemove', handleMousePositionChange);
    };
  }, []);

  return position;
};

const withMousePosition = (Component) => {
  return (props) => {
    const position = MousePosition();

    return <Component {...position} {...props} />;
  };
};

const PanelMouseLogger = withMousePosition(({ x, y }) => (
  <div className="panel">
    Mouse is at {x}, {y}
  </div>
));

const PointMouseLogger = withMousePosition(({ x, y }) => (
  <div className="point">
    Point: ({x}, {y})
  </div>
));





function App() {
  return (
    <div className="App">
      <h1>Small Cursor Value Code with HOC in REACT</h1>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
