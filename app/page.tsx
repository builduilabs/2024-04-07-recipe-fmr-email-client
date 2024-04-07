import { getRandomEmails } from "@/lib/data";
import EmailClient from "./email-client";

export default function Page() {
  const initialMessages = getRandomEmails(10);

  return (
    <div className="flex h-screen flex-col items-center justify-center overscroll-y-contain p-10 text-gray-600">
      <EmailClient initialMessages={initialMessages} />
    </div>
  );
}
