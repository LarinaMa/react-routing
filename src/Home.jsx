import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
}
export default Home;
