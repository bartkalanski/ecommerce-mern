import React from 'react'
import { shallow, mount } from "enzyme";
import HomeScreen from '../../screens/HomeScreen';

describe("Header components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeScreen />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
})
