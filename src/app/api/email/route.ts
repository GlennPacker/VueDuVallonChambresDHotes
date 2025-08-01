
import { sendEmail } from '../services/primaryEmailService';
import { secondarySendEmail } from '../services/secondaryEmailService';

export async function POST(req: Request) {
  const body = await req.json();
  try {
    await sendContactEmail(body);
    return new Response(null, { status: 204 });
  } catch (e: unknown) {
    const { message } = e as { message: string };
    return new Response(JSON.stringify({
      message: 'unable to send email',
      error: message
    }), {status: 500});
  }
}



const sendContactEmail = (body: any) => {
  const { message, name, email } = body;
  
  return Promise.allSettled([
    sendEmail(message, `Message from ${name} (${email})`, email),
    secondarySendEmail(message, `Message from ${name} (${email})`, email),
  ]);
}
