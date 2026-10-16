import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full rounded-[10px] border border-[#561c24cb] bg-white p-3 text-[#561c24] outline-none focus:border-[#b3727b]";

  return (
    <section className="mx-auto my-10 w-full max-w-lg px-4">
      <div className="rounded-[25px] bg-[#f5efe6] p-6">
        <h1 className="mb-2 text-2xl font-[MoscaLaroke] text-[#561c24]">
          Contact us
        </h1>
        <p className="mb-6 text-[#b3727b]">
          Have a question about an order or a product? Send us a message.
        </p>

        {sent && (
          <p className="mb-4 rounded-[10px] bg-white p-3 text-[#561c24]">
            Message sent. We will reply by email.
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col font-[MoscaLaroke] gap-1 text-[#561c24]">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1 font-[MoscaLaroke] text-[#561c24]">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1 font-[MoscaLaroke] text-[#561c24]">
            Message
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="rounded-[10px] bg-[#561c24] p-3 font-[MoscaLaroke] text-white hover:bg-[#b3727b]"
          >
            Send message
          </button>
        </form>
      </div>
    
      <Link to="/">
        <button className="w-35 h-12 mt-10 text-[#e8d8c4] bg-[#561c24] font-[MoscaLaroke] hover:bg-[#9b5760] rounded-xl hover:font-bold hover:text-shadow-lg/30"> Go back </button>
      </Link>

      </section>

  );
};

export default ContactPage;
