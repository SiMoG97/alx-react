import { getFullYeat, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils tests", () => {
  // getFullYear tests
  test("getFullYear returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYeat()).toBe(currentYear);
  });

  // getFooter tests
  test("getFooterCopy to return 'Holberton School' if arg is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test("getFooterCopy to return 'Holberton School main dashboard' if arg is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  // getLatestNotification tests
  test("getLatestNotification returns the right string", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
