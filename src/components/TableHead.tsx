import Image from "next/image";

interface TableHeadColonna {
  valore: string;
  img: string;
}

export interface TableHeadProps {
  keys: TableHeadColonna[];
  onClick: (column: TableHeadColonna) => void;
}

export default function TableHead({ keys, onClick }: TableHeadProps) {

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
        {keys.map((key) => (
          <th key={key.valore + "-img"} className="text-left ps-2">
            {key.img ? (
              <Image
                src={key.img}
                alt={key.valore}
                width={48}
                height={48}
                style={{ display: "inline-block" }}
              />
            ) : null}
          </th>
        ))}
        <th></th>
        <th></th>
        </tr>
      <tr>
        {keys.map((key) => (
          <th key={key.valore} scope="col">
            <span className="flex items-center my-2">
                <span className="sr-only">Mostra informazioni</span>

              <span className="ms-2">
              {key.valore}
              </span>
              <i
                onClick={() => onClick(key)}
                className="cursor-pointer px-2 fa-solid fa-sort"
              ></i>
            </span>

          </th>
        ))}
        <th scope="col" className="px-4 py-2 text-center">
          Quantity
        </th>
        <th scope="col" className="px-4 py-2 text-center">
          <i className="fa-solid fa-cart-shopping"></i>
        </th>
      </tr>
    </thead>
  );
}