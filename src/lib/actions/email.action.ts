"use server";

import { Resend } from "resend";

import EmailTemplate from "@/components/emails/EmailTemplate";

import handleError from "../handlers/error";
import logger from "../logger";
import { formatDateTime } from "../utils";

interface EmailParams {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  date?: Date;
  message?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(params: EmailParams) {
  const { firstName, lastName, email, phoneNumber, subject, date, message } =
    params;
  const name = `${firstName} ${lastName}`;
  const formattedDate = date && formatDateTime(date).dateTime;

  try {
    const { data, error } = await resend.emails.send({
      from: "Domanowscy Architekci <onboarding@resend.dev>",
      to: ["w.szczygielski00@gmail.com"],
      subject,
      react: EmailTemplate({
        name,
        email,
        phoneNumber,
        subject,
        date: formattedDate,
        message,
      }),
    });

    if (error) {
      logger.error(error);
      throw new Error("Nie udało się wysłać wiadomości: " + error.message);
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
