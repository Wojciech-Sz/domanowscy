"use client";

import "react-datepicker/dist/react-datepicker.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { pl } from "date-fns/locale"; // Polish locale
import { CalendarIcon } from "lucide-react";
import { useState, useTransition } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { appointmentFormSchema } from "@/lib/validations";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const AppointmentForm = () => {
  registerLocale("pl", pl);
  setDefaultLocale("pl");
  const minDate = new Date();

  minDate.setDate(minDate.getDate() + 2);
  minDate.setHours(9);
  minDate.setMinutes(0);
  minDate.setSeconds(0);
  minDate.setMilliseconds(0);
  if (minDate.getDay() === 0) minDate.setDate(minDate.getDate() + 1);
  else if (minDate.getDay() === 6) minDate.setDate(minDate.getDate() + 2);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    subject: "15 min" as const,
    date: minDate,
    agree: false,
    payment: true,
  };
  const form = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: { ...initialValues },
  });
  const [isPending, startTransition] = useTransition();

  const [maxTime, setMaxTime] = useState(new Date("2024-07-14T16:45"));

  const handleSubjectChange = (value: "15 min" | "1 h" | "2 h") => {
    form.setValue("subject", value);
    const hours = form.getValues("date").getHours();
    const minutes = form.getValues("date").getMinutes();

    // Adjust the maxTime based on selected consultation time
    if (value === "15 min") {
      setMaxTime(new Date("2024-07-14T16:45"));
      form.setValue("payment", true);
    } else if (value === "1 h") {
      setMaxTime(new Date("2024-07-14T16:00"));
      form.setValue("payment", false);
      if (hours === 16 && minutes > 0) {
        const newDate = form.getValues("date");
        newDate.setMinutes(0);
        form.setValue("date", newDate);
      }
    } else if (value === "2 h") {
      setMaxTime(new Date("2024-07-14T15:00"));
      form.setValue("payment", false);
      if (hours >= 15) {
        const newDate = form.getValues("date");
        newDate.setMinutes(0);
        newDate.setHours(15);
        form.setValue("date", newDate);
      }
    }
  };

  const onSubmit = async (values: z.infer<typeof appointmentFormSchema>) => {
    startTransition(async () => {
      const response = await fetch("/api/send/appointment", {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("fetch response:", data);
      const message = data.error
        ? {
            title: "Wiadomość nie została wysłana",
            variant: "destructive" as const,
          }
        : {
            title: "Wiadomość została wysłana",
            variant: "default" as const,
          };

      form.reset();
      form.setValue("subject", "15 min");
      toast({
        ...message,
      });
    });
  };

  return (
    <div className="h-max max-w-md bg-background p-5">
      <Form {...form}>
        <form
          className="flex flex-col gap-3 font-montserrat"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* Imię */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Imię" {...field} />
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
                  <Input placeholder="Nazwisko" {...field} />
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
                  <Input type="tel" placeholder="Numer telefonu" {...field} />
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
                  <Input type="email" placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Konsultacja */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="border-2 border-input p-2">
                <FormLabel>Konsultacja:</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={(value: "15 min" | "1 h" | "2 h") => {
                      handleSubjectChange(value);
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                    className="flex items-center gap-3"
                  >
                    <FormItem className="flex items-center gap-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="15 min" />
                      </FormControl>
                      <FormLabel>15 min</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1 h" />
                      </FormControl>
                      <FormLabel>1 h</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2 h" />
                      </FormControl>
                      <FormLabel>2 h</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Płatność */}

          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem
                className={`${form.getValues("subject") === "15 min" ? "hidden" : "flex"} flex-col gap-3 space-y-0 border-2 border-input p-4`}
              >
                <div className="flex items-center gap-1">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-label="Potwierdzenie płatności"
                    />
                  </FormControl>
                  <FormLabel>Potwierdzenie płatności</FormLabel>
                </div>
                <div className="flex flex-col gap-1 leading-none">
                  <FormDescription>
                    Dane do płatności dostępne w szczegółach konsultacji.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Data i godzina */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-full text-foreground">
                <FormControl>
                  <div className="relative z-[1] ">
                    <DatePicker
                      className="input w-full cursor-pointer"
                      selected={field.value}
                      onChange={(date: Date | null) => {
                        if (!date?.getHours()) {
                          date?.setHours(9);
                        }
                        return field.onChange(date || minDate);
                      }}
                      timeCaption="Godzina"
                      showTimeSelect
                      minDate={minDate}
                      dateFormat="dd/MM/yyy HH:mm"
                      minTime={minDate}
                      timeIntervals={15}
                      maxTime={maxTime}
                      filterDate={(date) =>
                        date.getDay() !== 0 && date.getDay() !== 6
                      }
                      wrapperClassName="datePicker"
                    />
                    <CalendarIcon className="absolute right-4 top-3 z-[-1] size-4 " />
                  </div>
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
              <FormItem className="flex h-auto flex-col items-start border-2 border-input  bg-background px-4 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Zgoda na przetwarzanie danych osobowych"
                  />
                </FormControl>

                <FormDescription>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych. Dane
                  zostaną wykorzystane w celu umówienia konsultacji.
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
            {isPending ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
