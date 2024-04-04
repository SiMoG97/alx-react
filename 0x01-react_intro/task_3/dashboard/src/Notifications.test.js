import { Notifications } from "./Notifications";
import { shallow } from "enzyme";

describe("<Notifications />", () => {
  it("should render without crashing", () => {
    const NotificationsComponent = shallow(<Notifications />);
    expect(NotificationsComponent).toBeDefined();
  });

  it("renders an ul", () => {
    const NotificationsComponent = shallow(<Notifications />);
    expect(NotificationsComponent.find("ul")).toBeDefined();
  });

  it("should render three list items", () => {
    const NotificationsComponent = shallow(<Notifications />);

    expect(NotificationsComponent.find("li")).toHaveLength(3);
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    const NotificationsComponent = shallow(<Notifications />);

    expect(NotificationsComponent.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
