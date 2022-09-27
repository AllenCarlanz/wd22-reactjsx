import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function ContactForm() {
  return (
    <>
      <div className="contact-page">
        <h1>Contact Us!</h1>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="E-mail address" />
          <input type="text" placeholder="Phone #" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}


export default App;