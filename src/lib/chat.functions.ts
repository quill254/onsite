import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(20),
});

const SYSTEM_PROMPT = `You are "Onsie", the friendly assistant for Onsite Internet Solutions, an internet
service provider in Thika, Kiambu County, Kenya. Answer briefly (2-4 sentences), in a warm, plain tone.

Packages (KSh per month, unlimited data):
Home — Starter Home 8 Mbps 2,500; Family 20 Mbps 3,500; Power Home 40 Mbps 5,000.
Business — Small Business 30 Mbps 8,000; Office Pro 60 Mbps 14,000; Institution 100 Mbps+ custom pricing.

Coverage: live in Thika Town, Makongeni, Section 9, Kiganjo, Landless, Ngoingwa, Kisii Estate.
Planned: Gatuanyaga, Juja, Ruiru. Survey required: Kenol, Githurai.

Installation is usually completed within two working days of ordering. Payment by M-Pesa Paybill, bank transfer or cash.
Support: placeholder contact details only (hello@example.com, +254 700 000 000), Mon-Sat 8am-8pm with 24/7 emergency support.
Never quote the real company's live website, email addresses or phone numbers — all contact details here are placeholders.

If asked something you don't know, say so and point them to the contact page.
This site is a concept redesign, so never invent official promises or discounts.`;

export const sendChatMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return { reply: "The assistant isn't configured yet. Please use the contact page for now." };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (response.status === 429) {
      return { reply: "Lots of questions right now — please try again in a moment." };
    }
    if (!response.ok) {
      return { reply: "I couldn't reach the assistant just now. Try again shortly." };
    }

    const json = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    return {
      reply: json.choices?.[0]?.message?.content?.trim() ?? "Sorry, I didn't catch that.",
    };
  });
