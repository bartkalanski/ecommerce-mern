import React from 'react'
import { shallow, mount } from "enzyme";
import App from '../App';

describe("App components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
})
