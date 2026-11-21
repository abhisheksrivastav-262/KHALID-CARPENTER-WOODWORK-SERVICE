import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { EnquiryForm } from "@/components/page-content";

describe("EnquiryForm", () => {
  it("opens a prepared enquiry only for the approved WhatsApp destination", () => {
    const openWhatsApp = vi.spyOn(window, "open").mockReturnValue(null);
    render(<EnquiryForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/), { target: { value: "Asha Sharma" } });
    fireEvent.change(screen.getByLabelText(/Mobile Number/), {
      target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByLabelText(/Select Service/), {
      target: { value: "Modular Kitchen" },
    });
    fireEvent.change(screen.getByLabelText(/Property Type/), {
      target: { value: "Apartment" },
    });
    fireEvent.change(screen.getByLabelText(/Message \/ Project Details/), {
      target: { value: "Plan a new kitchen" },
    });

    fireEvent.submit(screen.getByRole("form", { name: "Send an enquiry" }));

    const destination = openWhatsApp.mock.calls[0]?.[0];
    expect(destination).toContain("https://wa.me/919212461719?text=");
    const message = new URL(destination as string).searchParams.get("text");
    expect(message).toContain("Name: Asha Sharma");
    expect(message).toContain("Customer Mobile: 9876543210");
    expect(message).toContain("Service Required: Modular Kitchen");
    expect(message).toContain("Property Type: Apartment");
    expect(message).toContain("Project Details: Plan a new kitchen");
    expect(screen.getByRole("status")).toHaveTextContent("WhatsApp did not open automatically");
    expect(screen.getByRole("link", { name: /prepared WhatsApp enquiry/i })).toBeInTheDocument();

    openWhatsApp.mockRestore();
  });

  it("rejects a mobile number with fewer than ten digits", () => {
    const openWhatsApp = vi.spyOn(window, "open").mockReturnValue(null);
    render(<EnquiryForm />);
    fireEvent.change(screen.getByLabelText(/Full Name/), { target: { value: "Asha Sharma" } });
    fireEvent.change(screen.getByLabelText(/Mobile Number/), { target: { value: "12345" } });
    fireEvent.change(screen.getByLabelText(/Select Service/), {
      target: { value: "Modular Kitchen" },
    });
    fireEvent.change(screen.getByLabelText(/Message \/ Project Details/), {
      target: { value: "Plan a new kitchen" },
    });

    fireEvent.submit(screen.getByRole("form", { name: "Send an enquiry" }));

    expect(openWhatsApp).not.toHaveBeenCalled();
    expect(screen.getByRole("status")).toHaveTextContent("Enter a valid mobile number");
    openWhatsApp.mockRestore();
  });
});
