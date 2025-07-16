import { useRef } from "react";

export default function CatalogoButton({ id }: { id: string }) {
  const link = `http://10.10.10.8:5001/pdf?id=${id}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div className="my-4 mx-3 gap-2">
      <div> Link pagina catalogo per il prodotto (versione beta) </div>
      <input
        ref={inputRef}
        type="text"
        value={link}
        readOnly
        className="w-full truncate rounded-lg border text-gray-700 bg-gray-100 font-mono text-sm"
        onFocus={e => e.target.select()}
        title={link}
      />
      <button
        type="button"
        onClick={handleCopy}
        className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded focus:outline-none"
        title="Copia link"
      >
        <i className="fa-regular fa-copy"></i>
      </button>
    </div>
  );
}