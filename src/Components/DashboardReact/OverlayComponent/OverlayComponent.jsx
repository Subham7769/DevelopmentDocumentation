import { useNavigate } from 'react-router-dom';
import './OverlayComponent.css'

const OverlayComponent = () => {
  const navigate = useNavigate();
console.log("inside overlay");

  const handleNavigate = () => {
    navigate('/Dashboard');
  };

  return (
    <div className='AllArea'>
    <div className="overlay1">
      <p>Add at least one product</p>
      <button onClick={handleNavigate}>Add Product</button>
    </div>
    </div>
  );
};

export default OverlayComponent;
