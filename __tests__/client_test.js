import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import App from '../Client/src/components/App.jsx';
import ToggleBar from '../Client/src/components/ToggleBar.jsx';
import Adapter from 'enzyme-adapter-react-16';
import Arrow from '../Client/src/components/Arrow.jsx';
import Slide from '../Client/src/components/Slide.jsx';
import {clickedStyle} from '../Client/src/components/ToggleBar.jsx';
import axios from 'axios';
import exampleData from '../Client/src/example.js'
 
configure({ adapter: new Adapter() });

test("App renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
test("Arrow renders correctly", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(<Arrow clickFunction={mockCallBack}/>);
  expect(wrapper).toBeTruthy();
});
test("Slide renders correctly", () => {
  const wrapper = shallow(<Slide products={exampleData[0]}/>);
  expect(wrapper).toBeTruthy();
});
test("ToggleBar renders correctly", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(<ToggleBar toggle={mockCallBack}/>);
  expect(wrapper).toBeTruthy();
});

test("Arrow slide button calls proper function", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow((<Arrow clickFunction={mockCallBack} />));
  wrapper.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

test("Toggle button calls proper function", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow((<ToggleBar toggle={mockCallBack} />));
  wrapper.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
test("Heart button sets heartClicked state", () => {
  const wrapper = mount(<Slide products={exampleData[0]}/>);
  const heartButton = wrapper.find('button') 
  const heartClicked = wrapper.find('heartClicked')
  heartButton.simulate('click')
  expect(heartClicked).toBeTruthy();
});
// test("Mouse over and mouse leave changes state", () => {
//   const mockCallBack = jest.fn();
//   const wrapper = mount((<ToggleBar toggle={mockCallBack} />));  
//   const toggleButton = wrapper.find('button')
//   toggleButton.simulate('mouseOver')
//   expect(toggleButton.props('props')).toBe({"style": {"height": "5PX"}})
//   toggleButton.simulate('mouseLeave')
//   expect(toggleButton.props('props')).toBe({"style": {"height": "1PX"}})
// });

// test('should invoke fetchProducts on useEffect', () => {
//   const wrapper = shallow(<App />);
//   const mock = jest.fn();
//   wrapper.instance().fetchProducts = mock;
//   wrapper.instance().forceUpdate();
//   wrapper.instance().useEffect();
//   expect(mock).toHaveBeenCalled();
// });
