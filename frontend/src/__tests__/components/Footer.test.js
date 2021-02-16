import React from 'react'
import { shallow, mount } from "enzyme";
import Footer from '../../components/Footer';

describe("App components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
})
