import {
  Blog,
  ComEvent,
  ComShop,
  Commuity,
  FindPeople,
  Footer,
  Header,
  Keep,
  MakeDating,
  Meet,
  Partner,
} from "../../component/index";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header/>
      <Meet />
      <Commuity />
      <ComEvent />
      <ComShop />
      <Partner />
      <FindPeople />
      <MakeDating />
      <Blog />
      <Keep/>
      <Footer/>
    </div>
  );
}
export default Home
