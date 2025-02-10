"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/actions/email.action";
import { ContactFormSchema } from "@/lib/validations";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  };
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { ...initialValues },
  });
  const [isPending, startTransition] = useTransition();

  const handleSendEmail = async (
    data: z.infer<typeof ContactFormSchema>
  ) => {
    startTransition(async () => {
      const result = await sendEmail(data);

      if (result.success) {
        toast({
          title: "Sukces",
          description:
            "Wiadomość została wysłana pomyślnie",
        });
        form.reset();
      } else {
        toast({
          title: "Błąd",
          description: "Wiadomość nie została wysłana",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form
          className="flex flex-col gap-3 font-montserrat"
          onSubmit={form.handleSubmit(handleSendEmail)}
        >
          {/* Imię */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=" "
                    placeholder="Imię"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nazwisko */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=" "
                    placeholder="Nazwisko"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefon */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    className=" "
                    placeholder="Numer telefonu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className=" "
                    placeholder="E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Temat */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=" "
                    placeholder="Temat"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Wiadomość */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className=" "
                    placeholder="Treść wiadomości"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agree */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex h-auto flex-col items-start  border-2  border-input  p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Zgoda na przetwarzanie danych osobowych"
                  />
                </FormControl>

                <FormDescription>
                  Wyrażam zgodę na przetwarzanie moich
                  danych osobowych. Dane zostaną
                  wykorzystane w celu odpowiedzi na zadane
                  pytanie.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="btn-contact"
          >
            {isPending ? (
              <>
                <Loader className="mr-2 size-4 animate-spin" />
                <span>Wysyłanie...</span>
              </>
            ) : (
              <>Wyslij</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
