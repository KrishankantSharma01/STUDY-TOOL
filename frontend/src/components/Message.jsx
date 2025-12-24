import AudioButton from "./AudioButton";

export default function Message({ role, text }) {
  const isStudent = role === "student";

  return (
    <div
      className={`w-full flex ${
        isStudent ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`alert ${
          isStudent ? "alert-primary" : "alert-secondary"
        } max-w-[70%]`}
        role="alert"
      >
        <div>{text}</div>

        {!isStudent && <AudioButton text={text} />}
      </div>
    </div>
  );
}
