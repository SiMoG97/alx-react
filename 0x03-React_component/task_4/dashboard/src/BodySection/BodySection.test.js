import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";
describe("", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
  });

  it("Checks that shallowing the component should render correctly the children and one h2 element", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text()).toEqual("test children node");

    const h2Title = wrapper.find("h2");
    expect(h2Title.length).toEqual(1);
    expect(h2Title.text()).toEqual("test title");
  });
});
