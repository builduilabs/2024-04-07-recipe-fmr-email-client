export function getRandomEmail() {
  let messages = [
    {
      subject: "Apple's newest iPhone is here",
      preview: "Watch our July event",
    },
    {
      subject: "Nintendo's Newsletter for July",
      preview: "Introducing Strike, a 5-on-5 soccer game",
    },
    {
      subject: "Your funds have been processed",
      preview: "See your latest deposit online",
    },
    { subject: "This Week in Sports", preview: "The finals are heating up" },
    { subject: "Changelog update", preview: "Edge subroutines and more" },
    { subject: "React Hawaii is here!", preview: "Time for fun in the sun" },
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);

  return { ...messages[randomIndex], id: crypto.randomUUID() };
}

export function getRandomEmails(count: number) {
  return Array.from(Array(count).keys()).map(() => getRandomEmail());
}
