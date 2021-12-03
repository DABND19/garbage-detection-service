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
      >
        <ObjectManager
          options={{
            clusterize: true,
            gridSize: 32,
          }}
          objects={{
            openBalloonOnClick: true,
          }}
          clusters={{}}
          features={data
            ?.filter((point) => point.garbageIndex != 0)
            .map((point) => ({
              type: "Feature",
              id: point.cameraId,
              geometry: { type: "Point", coordinates: point.location },
              properties: {
                hintContent: `Индекс загрязненности: ${point.garbageIndex}`,
                // balloonContentBody: "<img src='https://greenstroyspb.ru/ckfinder/userfiles/images/trash(1).jpg' width='300px'></img>",
              },
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
