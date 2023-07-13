import { useState } from "react";
import { Space, Input, Select } from "antd";

function Exchange() {
  const [heso1, setHeso1] = useState(30);
  const [value1, setValue1] = useState("");
  const [heso2, setHeso2] = useState(30);
  let result = (value1 * heso1) / heso2;
  return (
    <Space direction="vertical">
      <Space>
        <Select
          style={{
            width: 100,
          }}
          onChange={(value) => setHeso1(+value)}
          options={[
            { value: 1, label: "VND" },
            { value: 23000, label: "USD" },
            { value: 200, label: "JPY" },
          ]}
        ></Select>
        <Input
          type="number"
          value={value1}
          onChange={(e) => setValue1(+e.target.value)}
        ></Input>
      </Space>

      <Space>
        <Select
          style={{
            width: 100,
          }}
          onChange={(value) => setHeso2(+value)}
          options={[
            { value: 1, label: "VND" },
            { value: 23000, label: "USD" },
            { value: 200, label: "JPY" },
          ]}
        ></Select>
        <Space> {result}</Space>
      </Space>
    </Space>
  );
}

export default Exchange;
