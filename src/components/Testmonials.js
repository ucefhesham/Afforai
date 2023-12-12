import './Testmonials.css';
import PHReview from '../images/ph-review.webp';
import DraggableList from './DraggableList';
import DraggableList2 from './DraggleList2.js';


function Testmonials() {
  return (
    <div className='testmonial'>

    <div className='testmonial-header'>
      <img src={PHReview} alt="PHReview" className='ph-review'/>
      <div className='testmonial-title'>See what our users say</div>
      <div className='testmonial-slogan'>Loved by thousands, all around the World</div>
    </div>

      <div className="container" data-animated>

	      <DraggableList />

        <DraggableList2 />

      </div>

    </div>  
  );
}

export default Testmonials;
