import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Default state`, () => {
  const wrapper = mount(<MockComponentWrapped />);

  expect(wrapper.state().activeItem).toEqual(-1);
});
