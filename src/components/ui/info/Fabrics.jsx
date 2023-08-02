import React from "react";
import LinkArrow from "../LinkArrow";
import TableMenu from "../../common/TableMenu";
import { info } from "../../../api/menu/header/info.api";
import FabricInfo from "../FabricInfo";
import { fabricInfo } from "../../../api/menu/header/info-fabric.api";

const Fabrics = () => {
  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <LinkArrow name="Виды тканей и трикотажных полотен" />
      <div className="flex flex-row px-5 py-10">
        <div className="hidden lg:flex">
          <TableMenu list={info.list} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">
            Виды тканей и трикотажных полотен
          </h1>
          <p>
            Для пошива хоккейных маек мы используем материалы со специальной
            гидрофобной обработкой. Благодаря этому они обладают свойствами
            одновременно пропускать воздух и не впитывать влагу. Это позволяет
            майкам оставаться сухими и за счет вентиляции не допускать перегрева
            игрока.
          </p>
          <p>
            Полотно для хоккея состоит из двух провязанных слоев, благодаря чему
            майка не «распускается» при зацепах и порезах. Специальная пряжа
            придает повышенную стойкость к истиранию и разрывам.
          </p>
          <p>
            Наши материалы полностью аналогичны тем, которые используют
            известные бренды для экипировки национальных сборных и команд NHL.
          </p>
          <br />
          <FabricInfo fabricInfo={fabricInfo} />
        </div>
      </div>
    </div>
  );
};

export default Fabrics;
