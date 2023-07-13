import { useState } from "react";
import { Input, Space, } from "antd";

function Helloworld(){
    const  [value, setValue] = useState('')
    return(
        <Space direction="vertical">
        <Input
        placeholder="write st"
        style={{width:100}}
        type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      ></Input>
         {value}
      </Space>
    )
}
export default Helloworld;