import { useEffect, useState } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';


function App() {

  const [results, setResults] = useState([]);

  const fetchContacts = async () => {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json();
    console.log(data.results)
   setResults(data.results)
  }

  useEffect(() => {

    fetchContacts()
  }, []);
  
  // console.log(Array.isArray(results))

  return (
   
      <div className='layout'>
        <p>Contact cards</p>

        <div className='App'>
          {results.map((contact, index) => (
            <ContactCard key={index}
            contact={contact}
            />
          ))}
        </div>
        
      </div>
     

  );
}

export default App;
