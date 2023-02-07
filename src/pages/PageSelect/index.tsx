import { FormControl } from "@/src/components/FormControl";
import { Select } from "@/src/components/Select";
import React from "react";

export const PageSelect = () => {
  return (
    <div style={{ padding: "50px" }}>
      <FormControl
        label="Test 1"
        input={
          <Select
            options={[
              { label: "Option 1", value: "opt1" },
              { label: "Option 2", value: "opt2" },
              { label: "Option 3", value: "opt3" },
            ]}
            value={"opt2"}
          />
        }
        helper="Test"
      />
    </div>
  );
};
