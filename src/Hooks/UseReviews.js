const { useState, useEffect } = require("react")

const UseReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    // console.log(reviews);
    return [reviews, setReviews];
}

export default UseReviews;