import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: "Imię jest wymagane",
    })
    .max(50, {
      message: "Imię nie może przekraczać 50 znaków.",
    }),
  lastName: z
    .string()
    .min(1, {
      message: "Nazwisko jest wymagane",
    })
    .max(50, {
      message: "Nazwisko nie może przekraczać 50 znaków.",
    }),
  phoneNumber: z
    .string()
    .regex(
      /^(\+\d{1,3}[ ,.-])?(\d{1,4}[- ,.]?){2,}$/,
      "Numer telefonu jest nieprawidłowy."
    )
    .refine(
      (val) => {
        // Remove all non-digit characters for validation
        const digitsOnly = val.replace(/[^\d]/g, "");
        let countryCode = "";
        if (val.includes("+")) {
          const endOfCountryCodeIndex = val.search(/[-\s,.]/);
          if (endOfCountryCodeIndex !== -1) {
            countryCode = val.slice(1, endOfCountryCodeIndex); // Extract digits after +
          } else {
            countryCode = val.slice(1); // Extract all digits after + if no separator
          }
        }

        return digitsOnly.length - countryCode.length >= 9; // Not enough digits
      },
      {
        message:
          "Numer telefonu musi składać sie z conajmniej 9 cyfr (bez numeru kierunkowego).",
      }
    ),
  subject: z
    .string()
    .min(1, {
      message: "Temat jest wymagany",
    })
    .max(50, {
      message: "Temat nie może przekraczać 50 znaków.",
    }),
  email: z.string().email({ message: "Niepoprawny adres E-mail" }),
  message: z
    .string()
    .min(1, {
      message: "Wiadomość jest wymagana",
    })
    .max(500, {
      message: "wiadomość nie może przekraczać 500 znaków.",
    }),
  agree: z
    .boolean({ message: "Musisz wyrazić zgodę" })
    .refine((value) => value === true, {
      message: "Musisz wyrazić zgodę na przetwarzanie danych", // Wiadomość błędu
    }),
});

export const AppointmentFormSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: "Imię jest wymagane",
    })
    .max(50, {
      message: "Imię nie może przekraczać 50 znaków.",
    }),
  lastName: z
    .string()
    .min(1, {
      message: "Nazwisko jest wymagane",
    })
    .max(50, {
      message: "Nazwisko nie może przekraczać 50 znaków.",
    }),
  phoneNumber: z
    .string()
    .regex(
      /^(\+\d{1,3}[ ,.-])?(\d{1,4}[- ,.]?){2,}$/,
      "Numer telefonu jest nieprawidłowy."
    )
    .refine(
      (val) => {
        // Remove all non-digit characters for validation
        const digitsOnly = val.replace(/[^\d]/g, "");
        let countryCode = "";
        if (val.includes("+")) {
          const endOfCountryCodeIndex = val.search(/[-\s,.]/);
          if (endOfCountryCodeIndex !== -1) {
            countryCode = val.slice(1, endOfCountryCodeIndex); // Extract digits after +
          } else {
            countryCode = val.slice(1); // Extract all digits after + if no separator
          }
        }

        return digitsOnly.length - countryCode.length >= 9; // Not enough digits
      },
      {
        message:
          "Numer telefonu musi składać sie z conajmniej 9 cyfr (bez numeru kierunkowego).",
      }
    ),
  email: z.string().email({ message: "Niepoprawny adres E-mail" }),
  subject: z.enum(["15 min", "1 h", "2 h"], {
    message: "Wybierz typ konsultacji",
  }),
  date: z.date({ message: "Wybierz date" }),
  agree: z.boolean().refine((value) => value === true, {
    message: "Musisz wyrazić zgodę na przetwarzanie danych", // Wiadomość błędu
  }),
  payment: z
    .boolean({ message: "Wybierz typ płatnosci" })
    .refine((value) => value === true, {
      message: "Musisz potwierdzić płatność", // Wiadomość błędu
    }),
});
