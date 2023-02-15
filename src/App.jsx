import Button from './components/button';
import espoch from './images/logoico.png';

function App() {
  const add = () => {
    console.log('clic')
  }
  const reset = () => {
    console.log('reset')
  }
  return (
    <div className='App'>
      <div className='espoch-logo-contenedor'>
        <img src='' alt='' />
        <img className='espochLogo' src={espoch} alt='Logo ESPOCH' />
      </div>
      <div className='contenedor'></div>
      <Button
        text = 'ADD'
        buttonClick={true}
        manejarClic={add}
      />
      <Button
        text = 'RESET'
        buttonClick={false}
        manejarClic={reset}
      />
    </div>
  );
}

export default App;
