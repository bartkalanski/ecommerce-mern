import React from "react";
import { shallow, mount } from "enzyme";
import Rating from "../../components/Rating";

describe("Rating component", () => {
  let wrapper;
  it("should render without throwing an error", () => {
    wrapper = shallow(<Rating />);
    expect(wrapper).not.toBeNull();
  });
  it("should render text if text is available", () => {
      const text = "12 reviews"
      wrapper = mount(<Rating text={text}/>)
      expect(wrapper.contains(<span>12 reviews</span>)).toEqual(true)
  })
  it("should render half a star if value is 0.5", () =>{
    const value = 0.5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(0)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(1)
    expect(wrapper.find('.far.fa-star')).toHaveLength(4)
  })
  it("should render one full star if value is 1", () =>{
    const value = 1
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(1)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(0)
    expect(wrapper.find('.far.fa-star')).toHaveLength(4)
  })
  it("should render one and a half stars if value is 1.5", () =>{
    const value = 1.5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(1)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(1)
    expect(wrapper.find('.far.fa-star')).toHaveLength(3)
  })
  it("should render one two stars if value is 2", () =>{
    const value = 2
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(2)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(0)
    expect(wrapper.find('.far.fa-star')).toHaveLength(3)
  })
  it("should render one two and a half stars if value is 2.5", () =>{
    const value = 2.5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(2)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(1)
    expect(wrapper.find('.far.fa-star')).toHaveLength(2)
  })
  it("should render one three stars if value is 3", () =>{
    const value = 3
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(3)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(0)
    expect(wrapper.find('.far.fa-star')).toHaveLength(2)
  })
  it("should render one three and a half stars if value is 3.5", () =>{
    const value = 3.5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(3)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(1)
    expect(wrapper.find('.far.fa-star')).toHaveLength(1)
  })
  it("should render one four stars if value is 4", () =>{
    const value = 4
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(4)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(0)
    expect(wrapper.find('.far.fa-star')).toHaveLength(1)
  })
  it("should render one four and a half stars if value is 4.5", () =>{
    const value = 4.5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(4)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(1)
    expect(wrapper.find('.far.fa-star')).toHaveLength(0)
  })
  it("should render one five stars if value is 5", () =>{
    const value = 5
    wrapper = mount(<Rating value={value}/>)
    expect(wrapper.find('.fas.fa-star')).toHaveLength(5)
    expect(wrapper.find('.fas.fa-star-half-alt')).toHaveLength(0)
    expect(wrapper.find('.far.fa-star')).toHaveLength(0)
  })
});
