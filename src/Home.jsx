import { useSelector } from "react-redux"

const Home = () => {
    const count = useSelector(state => state.counter.count)

    return (
        <div>
           <h6>This isc count value from home component:</h6>
           <h4>Count: {count}</h4>
        </div>
    )
}

export default Home
