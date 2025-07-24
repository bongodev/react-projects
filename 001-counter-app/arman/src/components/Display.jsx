const Display = ({
  currentCountSubhanallah,
  currentCountAlhamdulillah,
  currentCountAllahuAkbar,
}) => {
  return (
    <div>
      <ul className="flex items-center text-emerald-500 justify-between space-x-25 text-3xl font-bold space-x-45">
        <li> {currentCountSubhanallah} </li>
        <li> {currentCountAlhamdulillah} </li>
        <li> {currentCountAllahuAkbar} </li>
      </ul>
    </div>
  );
};
export default Display;
