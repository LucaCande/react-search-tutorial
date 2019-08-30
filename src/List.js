import React from 'react';
import Element from './Element';

const List = props => {
    return(
      <ul>
        { props.items.map(item => <Element key={item.id} item={item} /> ) }
      </ul>
    );
}

export default List;