/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Drawer, Typography, Select, Image, Space, Switch, Button } from 'antd';
import enUs from "../../assets/imgs/united-kingdom.png";
import vi from "../../assets/imgs/vietnam.png";
import iconLanguage from "../../assets/imgs/language.png";
import blackIconMenu from "../../assets/imgs/menublack.png";
import whiteIconMenu from "../../assets/imgs/menuwhite.png";
const { Option } = Select;
const { Text } = Typography;
export default function Setting({language,changeLanguage, colorTextByTheme, theme, setTheme}) {
  const [openSetting, setOpenSetting] = useState(false);

  const showSetting = () => {
    setOpenSetting(true);
  };

  const onClose = () => {
    setOpenSetting(false);
  };
  return (
    <>
      <Image preview={false} width={"24px"} src={theme=="light"? blackIconMenu : whiteIconMenu} onClick={showSetting}></Image>
      <Drawer 
        style={{backgroundColor: theme=="dark"? "#0B3B61":"white",}}
        title={
          <Text style={{ fontSize: 22, color: colorTextByTheme }}>
            Setting
          </Text>}
        placement="right"
        onClose={onClose}
        open={openSetting}
        closable={true}
        closeIcon={<Button
          type='text' style={{
          position: "absolute",
          right: '30px',
          top: 15,
          lineHeight: '30px',
          fontSize: 16,
          color: colorTextByTheme
        }} onClick={onClose}>X</Button>}
        >
        
        <Space>
        <Image preview={false} style={{height:'24px',width:'auto', stroke: colorTextByTheme}} src={iconLanguage}/>
          <Text style={{ marginRight:'5px',lineHeight:'34px',color: colorTextByTheme}}>
            Select Language:
          </Text>
          <Select
            style={{width: "70px", height: "34px"}}
            placeholder={<Image preview={false} width={"24px"} src={enUs}/>}
            onChange={(value)=>changeLanguage(value)}
          >
            <Option value="us"><Image preview={false} width={"24px"} src={enUs}/></Option>
            <Option value="vi"><Image preview={false} width={"24px"} src={vi}/></Option>
          </Select>
        </Space>
        <Space >
        <Typography style={{marginTop:20}}>
          <Text
            style={{ color: colorTextByTheme, marginRight:20}}>   
            <nobr>{language=="us"?`Light Mode: `: `Chủ đề: `}</nobr>
          </Text>
          <Switch
            defaultChecked
            checkedChildren={<Text style={{color:'white', lineHeight:'20px'}}>{language=="us"?"Dark":"Tối"}</Text>}
            unCheckedChildren={<Text style={{color:'black', lineHeight:'19px'}}>{language=="us"?"Light":"Sáng"}</Text>}
            onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
          />
        </Typography>
        </Space>
      </Drawer>
    </>
  );
}