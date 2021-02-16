import React from 'react'
import { shallow, mount } from "enzyme";
import Product from '../../components/Product';

describe("Product component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Product />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
})
