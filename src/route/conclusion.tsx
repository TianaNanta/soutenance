import { useState } from "react";

function Conclusion() {
  const [message, setMessage] = useState<string>("Conclusion et perspectives");

  return (
    <h1 onClick={() => setMessage("🙏Merci pour votre attention🙏")}>
      {message}
    </h1>
  );
}

export default Conclusion;
