const Display = ({ currentCount }) => {
  console.log(`after ${currentCount}`);

  // return <div className="text-3xl font-semibold text-black"> {currentCount} </div>

  return (
    <div>
      <ul className="flex items-center justify-between space-x-25">
        <li>Subhanallah {0} </li>
        <li>Alhamdulillah {0} </li>
        <li>Allahu Akbar {0} </li>
      </ul>
    </div>
  );
};
export default Display;
