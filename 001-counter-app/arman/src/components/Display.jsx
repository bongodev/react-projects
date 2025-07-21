const Display = ({ currentCount }) => {

    console.log(`after ${currentCount}`);
    
    return <div className="text-3xl font-semibold text-black"> {currentCount} </div>
}
export default Display;