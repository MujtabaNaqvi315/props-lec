import Card from './components/Card';
import './App.css';
import contacts from './contacts';
import Avatar from './components/Avatar';

// function createCard (contact) {
//   return <Card 
//     key = {contact.id}
//     // id = {contact.id}
//     name = {contact.name}
//     imageUrl = {contact.imageUrl}
//     tel = {contact.tel}
//     email = {contact.email}
//   />
// }

function App() {


  return (
    <>
      <h1 className='heading'>Nishan e Haider Holders</h1>
      <Avatar 
        imageUrl="https://img.dunyanews.tv/images/userfiles/nishan-e-haider(1).jpg"
      />
      {/* {contacts.map(createCard)} */}

      {contacts.map(contact => (
        <Card 
          key = {contact.id}
          // id = {contact.id}
          name = {contact.name}
          imageUrl = {contact.imageUrl}
          tel = {contact.tel}
          email = {contact.email}  
        />
      ))}

      {/* <Card 
        name={contacts[0].name}
        imageUrl={contacts[0].imageUrl}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        imageUrl={contacts[1].imageUrl}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        imageUrl={contacts[2].imageUrl}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
    </>
  );
}

export default App;
