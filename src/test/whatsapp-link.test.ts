import { describe, expect, it } from "vitest";

import { createEnquiryMessage, createWhatsAppUrl } from "@/lib/contact";

describe("WhatsApp contact link", () => {
  it("opens the provided WhatsApp number with a prepared message", () => {
    expect(createWhatsAppUrl("Hello, Md. Khalid")).toBe(
      "https://wa.me/919212461719?text=Hello%2C%20Md.%20Khalid",
    );
  });
});

describe("enquiry WhatsApp message", () => {
  it("includes every submitted detail in the expected format", () => {
    const message = createEnquiryMessage({
      name: "Asha Sharma",
      phone: "9876543210",
      service: "Modular Kitchen",
      propertyType: "Apartment",
      message: "Plan a new kitchen",
    });

    expect(message).toBe(
      [
        "Hello TIP TOP INTERIORS,",
        "",
        "I would like to enquire about your services.",
        "",
        "Name: Asha Sharma",
        "Customer Mobile: 9876543210",
        "Service Required: Modular Kitchen",
        "Property Type: Apartment",
        "Project Details: Plan a new kitchen",
        "",
        "Please contact me regarding this enquiry.",
        "",
        "Thank you.",
      ].join("\n"),
    );
    expect(createWhatsAppUrl(message)).toContain("https://wa.me/919212461719?text=");
  });

  it("marks an omitted property type as not specified", () => {
    expect(
      createEnquiryMessage({
        name: "Asha",
        phone: "9876543210",
        service: "Other",
        message: "Need a call",
      }),
    ).toContain("Property Type: Not specified");
  });
});
