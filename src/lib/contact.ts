export const WHATSAPP_NUMBER = "919212461719";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type EnquiryDetails = {
  name: string;
  phone: string;
  service: string;
  propertyType?: string;
  message: string;
};

export function createEnquiryMessage({
  name,
  phone,
  service,
  propertyType,
  message,
}: EnquiryDetails): string {
  return [
    "Hello Khalid Carpenter and Woodwork Service Interior Decorator,",
    "",
    "I would like to enquire about your services.",
    "",
    `Name: ${name.trim()}`,
    `Customer Mobile: ${phone.trim()}`,
    `Service Required: ${service.trim()}`,
    `Property Type: ${propertyType?.trim() || "Not specified"}`,
    `Project Details: ${message.trim()}`,
    "",
    "Please contact me regarding this enquiry.",
    "",
    "Thank you.",
  ].join("\n");
}
