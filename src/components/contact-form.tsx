"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { type ContactResult, sendContactMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { Spinner } from "./ui/spinner";

const initialState: ContactResult = { ok: false, message: "" };

// Client form: inline errors per field, pending button, toast on success.
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const announcedRef = useRef(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Reset + toast only after a real success (not on first render).
  useEffect(() => {
    if (state.ok && state.message && !announcedRef.current) {
      announcedRef.current = true;
      toast.success(state.message);
      formRef.current?.reset();
      setFormValues({ name: "", email: "", message: "" });
    } else if (!state.ok) {
      announcedRef.current = false;
    }
  }, [state]);

  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-4">
      {/* Honeypot: visually hidden, not display:none, so bots still fill it. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={formValues.name}
          onChange={(event) =>
            setFormValues((values) => ({ ...values, name: event.target.value }))
          }
          required
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
        />
        {fieldErrors.name && (
          <p
            id="contact-name-error"
            role="alert"
            className="mt-1 text-sm text-red-300"
          >
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={formValues.email}
          onChange={(event) =>
            setFormValues((values) => ({
              ...values,
              email: event.target.value,
            }))
          }
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={
            fieldErrors.email ? "contact-email-error" : undefined
          }
        />
        {fieldErrors.email && (
          <p
            id="contact-email-error"
            role="alert"
            className="mt-1 text-sm text-red-300"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formValues.message}
          onChange={(event) =>
            setFormValues((values) => ({
              ...values,
              message: event.target.value,
            }))
          }
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "contact-message-error" : undefined
          }
        />
        {fieldErrors.message && (
          <p
            id="contact-message-error"
            role="alert"
            className="mt-1 text-sm text-red-300"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? <Spinner /> : "Send message"}
      </Button>

      <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {!state.ok && state.message ? state.message : ""}
      </p>
    </form>
  );
}
