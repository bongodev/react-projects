const Display = ({ currentCountSubhanallah,currentCountAlhamdulillah,currentCountAllahuAkbar }) => {
//   console.log(`after ${currentCount}`);

  // return <div className="text-3xl font-semibold text-black"> {currentCount} </div>

  return (
    <div>
      <ul className="flex items-center justify-between space-x-25 text-3xl font-bold space-x-45">
        <li> {currentCountSubhanallah} </li>
        <li> {currentCountAlhamdulillah} </li>
        <li> {currentCountAllahuAkbar} </li>
      </ul>
    </div>
  );
};
export default Display;
