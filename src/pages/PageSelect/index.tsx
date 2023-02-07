import { Select } from "@/src/components/Select";
import React from "react";

export const PageSelect = () => {
  return (
    <div>
      <Select
        options={[
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
          { label: "Option 3", value: "opt3" },
        ]}
        value={"opt2"}
      />
    </div>
  );
};
