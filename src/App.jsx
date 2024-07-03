import { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModal] = useState(false)

  const openModal = () =>  {
    setModal(true)
  };

  const closeModal = () =>  {
    setModal(false)
  };

  return (
    <div className='container'>

      <button onClick={openModal} className='button'>Abrir Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Exemplo de modal. Content label é para deficientes'
        overlayClassName='modal_overlay'
        className='modal_body'
      >
         <h1>Modal de exemplo</h1> 

         <hr/>

         <p>What is Lorem Ipsum?
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into 
         electronic typesetting, remaining essentially unchanged. It was popularised in 
         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
         and more recently with desktop publishing software like Aldus PageMaker including 
         versions of Lorem Ipsum.</p>

        <div className='modal_footer'>
          <button type='button' onClick={closeModal} className='button close'>Close modal</button>
        </div>
      </Modal>
    </div>
  )
}

export default App
