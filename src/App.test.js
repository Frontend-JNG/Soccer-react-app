import { cleanup, render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import App from './App';
import Leagues from './components/Leagues';
import Standings from './components/Standings';
import ContactForm from './contactForm';
import "@testing-library/jest-dom/extend-expect";
import mount  from "enzyme";
import { Component } from 'react';

afterEach(()=>{
  cleanup();
});




 
it("standings and league's name", () => {
  const standings = {id: 364, location: "Liverpool", name: "Liverpool"}
  render(<Standings standings={standings} />);
  })
it("standings and league's name", () => {
  const contactForm = { type: {}, name: "fName", id: "fName" };
  render(<ContactForm contactForm={contactForm} />);
  const contactForms = screen.getByTestId({id: "fName", name: "fName" });
  expect(contactForms).toBeInTheDocument()
  expect(todoElement).toBe(jhon)
});
it("test", ()=>{
  expect(true).toBe(true)
})  

test('matches snapshot', () =>{
  const standings = { id: 364, location: "Liverpool", name: "Liverpool" };
  const tree = renderer.create(<Standings standings={standings} />).toJSON();
  expect(tree).toMatchSnapshot();
})
// git status


