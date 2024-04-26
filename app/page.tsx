import { getRandomEmails } from "@/lib/data";
import EmailClient from "./email-client";

export default function Page() {
  const initialMessages = getRandomEmails(5);

  return (
    <div className="flex h-screen flex-col items-center justify-center overscroll-y-contain text-gray-600">
      <EmailClient initialMessages={initialMessages} />
    </div>
  );
}
