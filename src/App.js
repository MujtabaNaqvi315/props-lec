import Card from './components/Card';
import './App.css';

function App() {
  return (
    <>
      <h1 className='heading'>Nishan e Haider Holders</h1>

      <Card 
        name="Major Aziz Bhatti"
        imageUrl="https://allrajputathad.weebly.com/uploads/1/0/1/1/10113032/3363396.jpg"
        tel="+123456789"
        email="abc123@gmail.com"
      />

      <Card 
        name="Rashid Minhas"
        imageUrl="https://tutorials.pakshaheens.com/wp-content/uploads/2023/03/Pilot-Officer-Rashid-Minhas-150x150.jpg"
        tel="+123456789"
        email="abc123@gmail.com"
      />

      <Card 
        name="Sher Khan"
        imageUrl="https://i.pinimg.com/originals/eb/d7/53/ebd753083b6e846c7256f3cc80cf2d24.jpg"
        tel="+123456789"
        email="abc123@gmail.com"
      />
    </>
  );
}

export default App;
