import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("🟢 Odebrano dane:", data);

    // Wymagane pola
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "Wymagane pola nie zostały wypełnione" },
        { status: 400 }
      );
    }

    // Zapis do bazy danych
    const created = await prisma.contactForm.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        carModel: data.carModel || null,
        budget: data.budget || null,
        preferredContact: data.preferredContact || null,
        message: data.message,
        marketingConsent: Boolean(data.marketingConsent),
      },
    });

    // Escaping MarkdownV2 (łącznie z "-")
    const escape = (text: string | null | undefined): string =>
      (text ?? "-").replace(/([_*\[\]()~`>#+=|{}.!\\-])/g, "\\$1");

    const message = [
      "*📥 Nowa wiadomość z formularza kontaktowego VEHIX*",
      `*👤 Imię i nazwisko:* ${escape(data.name)}`,
      `*📞 Telefon:* ${escape(data.phone)}`,
      `*✉️ Email:* ${escape(data.email)}`,
      `*🚗 Model auta:* ${escape(data.carModel)}`,
      `*💰 Budżet:* ${escape(data.budget)}`,
      `*📬 Preferowany kontakt:* ${escape(data.preferredContact)}`,
      `*💬 Wiadomość:* ${escape(data.message)}`,
      `*✅ Zgoda marketingowa:* ${data.marketingConsent ? "TAK" : "NIE"}`
    ].join("\n");

    // Wysyłka do Telegrama
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "MarkdownV2",
    };

    console.log("📤 Wysyłka do Telegrama:", payload);

    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const tgResponseJson = await tgRes.json();
    console.log("📨 Odpowiedź z Telegrama:", tgResponseJson);

    if (!tgRes.ok || !tgResponseJson.ok) {
      console.error("❌ Telegram error:", tgResponseJson);
      return new NextResponse("Telegram error", { status: 500 });
    }

    return NextResponse.json({ success: true, id: created.id });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
