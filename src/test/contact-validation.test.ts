import { describe, expect, it } from "vitest";

import { validateContact } from "@/lib/contact-validation";

const valid = { name: "রহিম", email: "rahim@example.com", phone: "", service: "", message: "একটি ওয়েবসাইট দরকার আমার" };

describe("contact form validation", () => {
  it("accepts a complete form", () => {
    expect(validateContact(valid)).toEqual({});
  });
  it("requires a name", () => {
    expect(validateContact({ ...valid, name: " " }).name).toBeDefined();
  });
  it("rejects an invalid email", () => {
    expect(validateContact({ ...valid, email: "rahim@" }).email).toBeDefined();
  });
  it("requires a message of at least 10 characters", () => {
    expect(validateContact({ ...valid, message: "হাই" }).message).toBeDefined();
  });
});
