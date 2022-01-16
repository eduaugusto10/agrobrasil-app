import React, { useState, useContext, useMemo } from "react";
import api from "../../../services/api";
import Header from "../../../components/Header";
import ProductContext from "../ProductContext";
import UploadImage from "../../../assets/uploads.svg";
import S3 from "react-aws-s3";
import { BallGreen, BallWhite } from "../style";
import {
  Image,
  DivColumn,
  SubTitle,
  Text,
  Card,
  InsideCard,
  WhiteButton,
  GreenButton,
  Label,
} from "./style";
export function Photos() {
  const hasThumbail = { border: "none" };
  const [step, setStep] = useState("first");
  const { changeStep, prodID } = useContext(ProductContext);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailII, setThumbnailII] = useState(null);
  const [thumbnailIII, setThumbnailIII] = useState(null);
  const [thumbnailIV, setThumbnailIV] = useState(null);
  const [thumbnailV, setThumbnailV] = useState(null);
  const [fileNameS3, setFileNameS3] = useState(null);
  const [fileNameS3I, setFileNameS3I] = useState(null);
  const [fileNameS3II, setFileNameS3II] = useState(null);
  const [fileNameS3III, setFileNameS3III] = useState(null);
  const [fileNameS3IV, setFileNameS3IV] = useState(null);
  const [fileNameS3V, setFileNameS3V] = useState(null);

  const uploadFile = async (event, number) => {
    const file = event.target.files[0];
    if (file.name !== undefined) {
      setFileNameS3(file);
      /* const config = {
      bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
      dirName: process.env.REACT_APP_S3_DIRNAME,
      region: process.env.REACT_APP_S3_REGION,
      accessKeyId: process.env.REACT_APP_S3_KEY_ID,
      secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
      s3Url: process.env.REACT_APP_S3_URL,
    }; */
      const config = {
        bucketName: "agrobrasil-online",
        dirName: "media",
        region: "us-east-2",
        accessKeyId: "AKIAVMCUEB22AIZEQL7W",
        secretAccessKey: "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",
      };
      const ReactS3Client = new S3(config);

      ReactS3Client.uploadFile(file, file.name)
        .then((data) => {
          setFileNameS3(data.location);
          console.log(data.location);
          switch (number) {
            case 1:
              setFileNameS3I(data.location);
              break;
            case 2:
              setFileNameS3II(data.location);
              break;
            case 3:
              setFileNameS3III(data.location);
              break;
            case 4:
              setFileNameS3IV(data.location);
              break;
            case 5:
              setFileNameS3V(data.location);
              break;
            default:
              break;
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const previewWhite = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  const previewII = useMemo(() => {
    return thumbnailII ? URL.createObjectURL(thumbnailII) : null;
  }, [thumbnailII]);
  const previewIII = useMemo(() => {
    return thumbnailIII ? URL.createObjectURL(thumbnailIII) : null;
  }, [thumbnailIII]);
  const previewIV = useMemo(() => {
    return thumbnailIV ? URL.createObjectURL(thumbnailIV) : null;
  }, [thumbnailIV]);
  const previewV = useMemo(() => {
    return thumbnailV ? URL.createObjectURL(thumbnailV) : null;
  }, [thumbnailV]);

  async function updateProduct() {
    const data = new FormData();
    data.append("payment_status", "pagamento");
    data.append("image_1", fileNameS3I);
    data.append("image_2", fileNameS3II);
    data.append("image_3", fileNameS3III);
    data.append("image_4", fileNameS3IV);
    data.append("image_5", fileNameS3V);
    try {
      api.put(`/products/${prodID}`, data).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.log("Erro na senha");
    }
  }

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Coloque fotos do seu produto</Text>
        <SubTitle>Você pode colocar até 5 fotos do seu produto</SubTitle>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card onClick={() => setStep("second")}>
            <InsideCard>
              <Label
                style={{
                  backgroundImage: `url(${previewWhite})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={thumbnail ? { hasThumbail } : ""}
              >
                {!thumbnail && (
                  <div style={{ margin: "80px" }}>
                    <Image src={UploadImage} />
                  </div>
                )}
                {thumbnail && <div style={{ margin: "80px" }}></div>}
                <input
                  type="file"
                  onChange={(e) => {
                    uploadFile(e, 1);
                    setThumbnail(e.target.files[0]);
                  }}
                />
              </Label>
            </InsideCard>
            <SubTitle>Capa</SubTitle>
          </Card>
          <Card>
            <InsideCard>
              <Label
                style={{
                  backgroundImage: `url(${previewII})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={thumbnailII ? { hasThumbail } : ""}
              >
                {!thumbnailII && (
                  <div style={{ margin: "80px" }}>
                    <Image src={UploadImage} />
                  </div>
                )}
                {thumbnailII && <div style={{ margin: "80px" }}></div>}
                <input
                  type="file"
                  onChange={(e) => {
                    uploadFile(e, 2);
                    setThumbnailII(e.target.files[0]);
                  }}
                />
              </Label>
            </InsideCard>
            <SubTitle>Anexo II</SubTitle>
          </Card>
          <Card>
            <InsideCard>
              <Label
                style={{
                  backgroundImage: `url(${previewIII})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={thumbnailIII ? { hasThumbail } : ""}
              >
                {!thumbnailIII && (
                  <div style={{ margin: "80px" }}>
                    <Image src={UploadImage} />
                  </div>
                )}
                {thumbnailIII && <div style={{ margin: "80px" }}></div>}
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    uploadFile(e, 3);
                    setThumbnailIII(e.target.files[0]);
                  }}
                />
              </Label>
            </InsideCard>
            <SubTitle>Anexo III</SubTitle>
          </Card>
          <Card>
            <InsideCard>
              <Label
                style={{
                  backgroundImage: `url(${previewIV})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={thumbnailIV ? { hasThumbail } : ""}
              >
                {!thumbnailIV && (
                  <div style={{ margin: "80px" }}>
                    <Image src={UploadImage} />
                  </div>
                )}
                {thumbnailIV && <div style={{ margin: "80px" }}></div>}
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    uploadFile(e, 4);
                    setThumbnailIV(e.target.files[0]);
                  }}
                />
              </Label>
            </InsideCard>
            <SubTitle>Anexo IV</SubTitle>
          </Card>
          <Card>
            <InsideCard>
              <Label
                style={{
                  backgroundImage: `url(${previewV})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={thumbnailV ? { hasThumbail } : ""}
              >
                {!thumbnailV && (
                  <div style={{ margin: "80px" }}>
                    <Image src={UploadImage} />
                  </div>
                )}
                {thumbnailV && <div style={{ margin: "80px" }}></div>}
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    uploadFile(e, 5);
                    setThumbnailV(e.target.files[0]);
                  }}
                />
              </Label>
            </InsideCard>
            <SubTitle>Anexo V</SubTitle>
          </Card>
        </div>
        <div style={{ display: "flex", flexDiretion: "row" }}>
          <WhiteButton onClick={() => changeStep("third")}>VOLTAR</WhiteButton>
          <GreenButton
            onClick={() => {
              updateProduct();
              changeStep("fifth");
            }}
          >
            CONTINUAR
          </GreenButton>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallWhite />
          <BallWhite />
          <BallGreen />
          <BallWhite />
          <BallWhite />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default Photos;
