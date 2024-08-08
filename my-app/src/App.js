import { useState } from "react";
import "./App.scss";
import Modal from "./Component/Modal/Modal";
import NavMenu from "./Component/NavMenu/NavMenu";



function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <NavMenu />

      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
      }}>
        <h1>Click on the button to the open modal</h1>
        <button className="openBtnModal" onClick={() => setShowModal(true)}>
          Open
        </button>
      </div>
      {showModal && <Modal setShowModal={setShowModal} title="Modal" />}
    </div>
  );
}

export default App;
