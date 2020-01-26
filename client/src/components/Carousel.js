import React from 'react'; 
import ProductBlock from './ProductBlock';
//import data from './dummy_data'

export default function Carousel(props) {
  return (
    <div>
      <button>Back</button>
      <ProductBlock data={props.data} />
      <button>Forward</button>
    </div>
  );
}
