import React from "react";
import { Map, YMaps, ObjectManager } from "react-yandex-maps";
import { useQuery } from "react-query";
import { fetchLitteredPoints } from "../../api";

const GarbageMap = () => {
  const { data } = useQuery("littered-points", fetchLitteredPoints);

  return (
    <YMaps>
      <Map
        defaultState={{
          center: [55.786778667350575, 49.12538845509848],
          zoom: 12,
        }}
        width="100%"
        height="100%"
        modules={["templateLayoutFactory", "layout.ImageWithContent"]}
      >
        <ObjectManager
          options={{
            clusterize: true,
            gridSize: 32,
          }}
          objects={{
            openBalloonOnClick: true,
          }}
          clusters={{
          }}
          features={data?.map((camera) => ({
            type: "Feature",
            id: camera.id,
            geometry: { type: "Point", coordinates: camera.location },
            properties: {
              hintContent: `Заполненные баки: ${camera.filledContainers}`,
            //   iconContent: "<img src='https://greenstroyspb.ru/ckfinder/userfiles/images/trash(1).jpg' width='50px'>fsdfdsfsadfadfad</img>",
              balloonContentBody: camera.photo && `<img src='${camera.photo}' width='400px'></img>`,
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/garbage-2546478-2131221.png',
              // Размеры метки.
              iconImageSize: [60, 60],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
            }
          }))}
          modules={[
            "objectManager.addon.objectsBalloon",
            "objectManager.addon.objectsHint",
          ]}
        />
      </Map>
    </YMaps>
  );
};

export default GarbageMap;
