import { ContactFormModel } from "@/types/contactFormModel";
import { ReviewFormModel } from "@/types/reviewFormModel";

export function sendEmail(data: ContactFormModel | ReviewFormModel | string) {
  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .catch(err => console.log(err));
}
