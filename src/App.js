import './App.css';
import BaiTapGameBauCua from './BaiTapTongHop/BaiTapGameBauCua';
import ContextProvider from './Context_Provider/ContextProvider';
import Context from './Provider/Reducer';
function App() {
  return (
    <div className="">
      <Context>

        <BaiTapGameBauCua></BaiTapGameBauCua>

      </Context>
      {/* <ContextProvider></ContextProvider> */}
    </div >
  );
}

export default App;
