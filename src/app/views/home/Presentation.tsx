import { ApperText } from "../../animated/ApperText";
import { DivUp } from "../../animated/DivUp";
import { TextFalling } from "../../animated/TextFalling";
import { ImgLogo } from "../../components/cards/ImgLogo";
import { ImgLogoItems } from "../../helpers/ImgLogoItems";

export const Presentation = () => {
  return (
    <>
      <div
        id="aboutMe"
        className="homeContainer flex items-center justify-evenly flex-col"
      >
        <div className="flex-center-center flex-col xl:flex-row gap-12 px-4">
          <DivUp>
            <>
              <img
                src="/img/brand/avatar.jpeg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
              {ImgLogoItems.map((item, index) => (
                <ImgLogo
                  key={item.src}
                  src={item.src}
                  top={item.top}
                  left={item.left}
                  rotate={item.rotate}
                  delay={index * 0.1}
                />
              ))}
            </>
          </DivUp>
          <div className="flex-center-center flex-col gap-12 max-w-2xl">
            <div className="text-center">
              <ApperText
                text="Julian Kaymer Agama Tanta"
                className="text-gigant"
              />
              <TextFalling
                text="FrontEnd developer and UX/UI designer"
                className="text-small"
              />
            </div>
            <ApperText
              text="Soy Julian, programador frontend y UX/UI designer. Cuento con experiencia y me encanta trabajar en equipo. ¡Hagamos un gran proyecto!"
              className="text-body text-center hidden sm:inline-block"
            />
          </div>
        </div>
        <div className="flex items-center flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly w-full">
          <div className="flex-center-center text-center gap-5 sm:gap-20">
            <div>
              <TextFalling text="+ de 7" className="h1" />
              <ApperText text="meses de experiencia" className="text-small" />
            </div>
            <div>
              <TextFalling text="2" className="h1" />
              <ApperText text="proyectos participados" className="text-small" />
            </div>
          </div>
          <button className="btn btn-principal">Descargar CV</button>
        </div>
      </div>
    </>
  );
};
