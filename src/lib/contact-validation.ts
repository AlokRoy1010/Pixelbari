export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactForm, string>>;

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};
  if (form.name.trim().length < 2) errors.name = "অনুগ্রহ করে আপনার নাম লিখুন";
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = "সঠিক ইমেইল ঠিকানা লিখুন";
  if (form.message.trim().length < 10) errors.message = "বার্তা অন্তত ১০ অক্ষরের হতে হবে";
  return errors;
}
