import { shallow } from "enzyme";
import React from "react";

import App from "../src/pages/index";

describe("Enzyme test", () => {
  it('App logo should contain "React Infinite Card Example" text', () => {
    const app = shallow(<App />);
    expect(app.find("#logo").text()).toEqual("React Infinite Card Example");
  });
});