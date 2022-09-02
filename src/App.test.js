import { cleanup, render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import Standings from './components/Standings';
import ContactForm from './contactForm';
import "@testing-library/jest-dom/extend-expect";
import Content from './components/Content';
import Navbar from './components/Navbar';

afterEach(()=>{
  cleanup();
});

it("standings and league's name", () => {
  const standings = {id: 364, location: "Liverpool", name: "Liverpool"}
  render(<Standings standings={standings} />);
  })
it("standings and league's name in the list", () => {
  const contactForm = { type: {}, name: "fName", id: "fName" };
  render(<ContactForm contactForm={contactForm} />);
  const contactForms = screen.getByTestId({id: "fName", name: "fName" });
  expect(contactForms).toBeInTheDocument()
  // expect(todoElement).toBe(jhon)
});
it("test", ()=>{
  expect(true).toBe(true)
})  

test('matches snapshot', () =>{
  const standings = { id: 364, location: "Liverpool", name: "Liverpool" };
  const tree = renderer.create(<Standings standings={standings} />).toJSON();
  expect(tree).toMatchSnapshot();
})


it('Should render same test passed into titile props', () => {
  render(<Navbar h1Element="Football App ⚽️ " />);
  const h1Element = screen.getByText(/football app ⚽️/i);
  expect(h1Element).toBeInTheDocument();
});

it('Should render components passed by role', () => {
  render(<Content title="Leagues"/>);
  const headingElement = screen.getByRole("heading", {name: "Leagues"});
  expect(headingElement).toBeInTheDocument();
});

it('Should render components passed by spesifc role', () => {
  render(<Content title="Standings"/>);
  const headingElement = screen.getByRole("heading", {name: "Standings"});
  expect(headingElement).toBeInTheDocument();
});




