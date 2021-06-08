import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import Home from '../../organisms/_home-main-content/_home-main-content';
import Gallery from '../../organisms/_gallery-main-content/_gallery-main-content';
import Contact from '../../organisms/_contact-main-content/_contact-main-content';
import About from '../../organisms/_about-main-content/_about-main-content';
import GalleryAdmin from '../../organisms/_gallery-admin-main-content/_gallery-admin-main-content'
import Routing from './_routing'
describe("Routing component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
    expect(input.toJSON()).toMatchSnapshot();
  });
});

describe("routes using memory router", () => {
   it("should show Home component for /home router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/home']}">
        <Home />
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });
  it("should show Gallery component for /gallery router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/gallery']}">
        <Gallery/>
      </MemoryRouter>
    );
    expect(component.find(Gallery)).toHaveLength(1);
  });
  it("should show Conatct component for /contact router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/contact']}">
        <Contact  />
      </MemoryRouter>
    );
    expect(component.find(Contact)).toHaveLength(1);
  });
  it("should show About component for /gallery-admin router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/about']}">
        <About  />
      </MemoryRouter>
    );
    expect(component.find(About)).toHaveLength(1);
  });
  it("should show GalleryAdmin component for /gallery-admin router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/gallery-admin']}">
        <GalleryAdmin  />
      </MemoryRouter>
    );
    expect(component.find(GalleryAdmin)).toHaveLength(1);
  });
});
 