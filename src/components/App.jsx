import About from './About/About';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import Header from './Header/Header';
import Services from './Services/Services';
import WorkType from './WorkType/WorkType';

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <WorkType />
      <Form />
      <Footer />
    </div>
  );
};
