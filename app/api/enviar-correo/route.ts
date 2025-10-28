// /app/api/enviar-correo/route.ts
import { NextResponse } from "next/server";
import axios, { isAxiosError } from "axios";

type ContactPayload = {
  nombre: string;
  correo: string;
  servicio: string;
  mensaje: string;
};

export async function POST(req: Request) {
  const { nombre, correo, servicio, mensaje } =
    (await req.json()) as ContactPayload;

  const apiKey = process.env.BREVO_API_KEY;
  const templateId = process.env.BREVO_TEMPLATE_ID;
  const toEmail = process.env.BREVO_EMAIL_TO;

  if (!apiKey || !templateId || !toEmail) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    );
  }

  try {
    const res = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "systech", email: "syst3choficial@gmail.com" },
        to: [{ email: toEmail }],
        replyTo: { email: correo, name: nombre },
        templateId: Number(templateId),
        params: {
          nombre,
          correo,
          servicio,
          mensaje,
          year: new Date().getFullYear(),
        },
        subject: `Nuevo mensaje — ${servicio} — ${nombre}`,
      },
      {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return NextResponse.json({ ok: true, data: res.data });
  } catch (error: unknown) {
    // Narrowing seguro para no usar `any`
    const detail = isAxiosError(error)
      ? error.response?.data ?? error.message
      : error instanceof Error
      ? error.message
      : String(error);

    console.error("Brevo error:", detail);
    return NextResponse.json(
      { error: "Error al enviar el correo", detalle: detail },
      { status: 500 }
    );
  }
}
