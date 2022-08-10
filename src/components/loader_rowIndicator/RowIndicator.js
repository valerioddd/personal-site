import './RowIndicator.css';
import { ChevronDown } from 'react-feather';

function RowIndicator() {
  return (
    <div className="row-indicator">
      <div></div>
      <div>
        <ChevronDown color="rgb(192, 192, 192)" size={20}/>
      </div>
    </div>
  );
}

export default RowIndicator;
