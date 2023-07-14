/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Space, Button, Image, Typography, Tree } from "antd";
const { DirectoryTree } = Tree;
import { DownOutlined, UpOutlined } from "@ant-design/icons";
const { Title } = Typography;
import images from "./importimage";
import lightIcon from "./icons/light.png";
import shadowIcon from "./icons/shadow.png";

export default function Tartot({ token }) {
  const [cards, setTarots] = useState(null);
  const [url, setUrl] = useState(null);
  const [showMore, clickShowMore] = useState(false);
  const [light, getLightMeanings] = useState(null);
  const [shadow, getShadowMeanings] = useState(null);
  const [meanings, getMeanings] = useState([]);
  useEffect(() => {
    console.log(token);
  }, [token]);
  const getRandomTarot = async () => {
    fetch("http://localhost:3000/tarots", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token: token,
      },
    })
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .then((tarots) => setTarots(tarots))
    .catch(error => {
      window.alert("Tarots Feature need new server.js to runing");
    })
  };
  useEffect(() => {
    if (cards != null) {
      const nameImg = `${cards.img.slice(0, -4)}`;
      for (let i in images) {
        if (i == nameImg) {
          setUrl(images[i]);
        }
      }
      getLightMeanings(cards.meanings.light);
      getShadowMeanings(cards.meanings.shadow);
    }
    if (light != null && shadow != null) {
      getMeanings([
        {
          title: "Light",
          key: "light",
          icon: (
            <Image
              preview={false}
              style={{ paddingRight: 10 }}
              width={32}
              src={lightIcon}
            ></Image>
          ),
          children: getChildrenItems(light, `light`),
        },
        {
          title: "Shadow",
          key: "shadow",
          icon: (
            <Image
              preview={false}
              style={{ paddingRight: 10 }}
              width={32}
              src={shadowIcon}
            ></Image>
          ),
          children: getChildrenItems(shadow, `shadow`),
        },
      ]);
    }
  }, [cards, light, shadow]);

  //change array to object
  const getChildrenItems = (array, part) => {
    let data = [];
    let i = 0;
    while (i < array.length) {
      const a = array[i];
      const key = `${part}${i}`; //make key unique by using part
      data[i] = {
        title: a,
        key: key,
        isLeaf: true,
        icon: <>-</>,
      };
      i++;
    }
    return data;
  };
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ minHeight: "100%", paddingTop: 30 }}
    >
      <Button type="primary" onClick={() => getRandomTarot()}>
        Get Your Random Tarot
      </Button>
      {cards != null && (
        <Space
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Space
            direction="vertical"
            align="center"
            style={{
              width: "100%",
              padding: 20,
              paddingLeft: 60,
            }}
            wrap={false}
          >
            <Image preview={false} width={320} height={480} src={url} />
            <Title level={4}>{cards.name}</Title>
          </Space>

          <Space
            direction="vertical"
            wrap={true}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: 20,
              paddingRight: 40,
            }}
          >
            <Title level={4}>{`Suit:  ${cards.suit}`}</Title>
            <Title level={4}>{`Arcana: ${cards.arcana}`}</Title>
            <Title
              level={4}
            >{`Fortune Telling: ${cards.fortune_telling}`}</Title>
            <Button
              onClick={() => clickShowMore(!showMore)}
              icon={!showMore ? <DownOutlined /> : <UpOutlined />}
            >
              ShowMore
            </Button>
            {showMore && <DirectoryTree multiple treeData={meanings} />}
          </Space>
        </Space>
      )}
    </Space>
  );
}
