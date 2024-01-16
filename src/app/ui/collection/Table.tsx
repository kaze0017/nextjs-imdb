import React from "react";

export function Table({ collection }: { collection?: Array<any> }) {
  return (
    <div>
      {collection?.map((item) => {
        return (
          <div className="max-w-6xl mx-auto content-center" key={item.id}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
