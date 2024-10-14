let i = 0;
let messages = [
  {
    subject: "Apple's newest iPhone is here",
    preview: 'Watch our July event',
  },
  {
    subject: "Nintendo's Newsletter for July",
    preview: 'Introducing Strike, a 5-on-5 soccer game',
  },
  {
    subject: 'Your funds have been processed',
    preview: 'See your latest deposit online',
  },
  { subject: 'This Week in Sports', preview: 'The finals are heating up' },
  { subject: 'Changelog update', preview: 'Edge subroutines and more' },
  {
    subject: 'React Hawaii is next week!',
    preview: 'Time for fun in the sun',
  },
];

export function getNextEmail() {
  let nextEmail = { ...messages[i % messages.length], id: crypto.randomUUID() };
  i++;

  return nextEmail;
}

export function getInitialEmails() {
  return messages.slice(-5).map((m) => ({ ...m, id: crypto.randomUUID() }));
}
