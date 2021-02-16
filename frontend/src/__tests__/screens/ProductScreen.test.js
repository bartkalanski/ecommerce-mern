import React from "react";
import { shallow, mount } from "enzyme";
import ProductScreen from "../../screens/ProductScreen";
import products from '../../products'

describe("ProductScreen component", () => {
  const match = {
    params: {
      id: '1',
    },
  };
  it("should render without throwing an error", () => {
    let wrapper = shallow(<ProductScreen match={match} products={products}/>);
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('Col[data-test="countInStock"]').text()).toBe("In Stock")
  });
  it("should render In Stock text if product is in stock", () => {
    let wrapper = shallow(<ProductScreen match={match} products={products}/>);
    expect(wrapper.find('Col[data-test="countInStock"]').text()).toBe("In Stock")
  });
  it("should render Out Of Stock text if product is out of stock", () => {
    const match = {
        params: {
          id: '6',
        },
      };
    let wrapper = shallow(<ProductScreen match={match} products={products}/>);
    expect(wrapper.find('Col[data-test="countInStock"]').text()).toBe("Out Of Stock")
  });
});
