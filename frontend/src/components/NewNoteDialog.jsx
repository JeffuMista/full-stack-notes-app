import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function NewNoteDialog({ onCreate }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", content: "" });

  function submit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onCreate(form).then(() => {
      setForm({ title: "", content: "" });
      setOpen(false);
    });
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        asChild
        className="p-2 border-1 rounded-md bg-yellow-200 hover:bg-yellow-300"
      >
        <Button className="font-bold text-lg text-gray">New Note</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold mb-2">
            Create Note
          </Dialog.Title>
          <form onSubmit={submit} className="space-y-3">
            <Input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            ></Input>
            <Textarea
              rows={6}
              placeholder="Content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            ></Textarea>
            <div className="flex gap-2">
              <Button type="submit" className="bg-slate-600 hover:bg-slate-700">
                Create
              </Button>
              <Button
                type="button"
                className="bg-slate-600 hover:bg-slate-700"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
