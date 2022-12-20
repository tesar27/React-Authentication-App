import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const createArray = (length) => [
    ...Array(length)
];

const Star = ({ selected = false, onSelect}) => {
    return (
        <FaStar color={selected ? "red" : "gray"} 
        onClick={onSelect}
        />
    )
}

const StarRating = ({ totalStars = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <>
         {createArray(totalStars).map((n,i) => (
                <Star key={i} 
                selected={selectedStars > i} 
                onSelect={() => setSelectedStars(i+1)}/>))
         }
        <p>{selectedStars} of {totalStars} stars</p>
        </>
    )
    
}
 
const Playground02 = () => {
    return (
        <>
         <StarRating className="" totalStars={5} />
        </>
    )
}

export default Playground02;
