import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";


const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("🟢 Odebrano dane:", data);

    if (!data.name || !data.email || !data.phone || !data.preferredDate || !data.consultationType) {
      return NextResponse.json(
        { error: "Brakuje wymaganych pól." },
        { status: 400 }
      );
    }

    // ✅ Zapis do bazy danych
    const created = await prisma.consultation.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        preferredDate: new Date(data.preferredDate),
        consultationType: data.consultationType,
        needs: data.needs || null,
      },
    });

    // 🔐 Escaping MarkdownV2
    const escape = (text: string | null | undefined): string =>
      (text ?? "-").replace(/([_*\[\]()~`>#+=|{}.!\\-])/g, "\\$1");

    const message = [
      "*📅 Nowa konsultacja VEHIX*",
      `*👤 Imię i nazwisko:* ${escape(data.name)}`,
      `*📞 Telefon:* ${escape(data.phone)}`,
      `*✉️ Email:* ${escape(data.email)}`,
      `*🗓 Preferowana data:* ${escape(data.preferredDate)}`,
      `*📋 Forma konsultacji:* ${escape(data.consultationType)}`,
      `*🧠 Potrzeby:* ${escape(data.needs)}`
    ].join("\n");

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

    // ✅ Odpowiedź dla frontend
    return NextResponse.json({
      success: true,
      id: created.id,
      message: "Dziękujemy za rezerwację. Skontaktujemy się z Tobą w ciągu 30 minut (pn–pt, 9:00–18:00)."
    });
  } catch (err) {
    console.error("❌ API Error:", err);
    return new NextResponse("Wystąpił błąd podczas wysyłania formularza", { status: 500 });
  }
}
