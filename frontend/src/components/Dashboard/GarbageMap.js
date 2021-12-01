import React from "react";
import { Map, YMaps, ObjectManager } from "react-yandex-maps";

const features = [
  {
    type: "Feature",
    id: 0,
    geometry: { type: "Point", coordinates: [55.831903, 37.411961] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 1,
    geometry: { type: "Point", coordinates: [55.763338, 37.565466] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 2,
    geometry: { type: "Point", coordinates: [55.763338, 37.565466] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 3,
    geometry: { type: "Point", coordinates: [55.744522, 37.616378] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 4,
    geometry: { type: "Point", coordinates: [55.780898, 37.642889] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 5,
    geometry: { type: "Point", coordinates: [55.793559, 37.435983] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 6,
    geometry: { type: "Point", coordinates: [55.800584, 37.675638] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 7,
    geometry: { type: "Point", coordinates: [55.716733, 37.589988] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 8,
    geometry: { type: "Point", coordinates: [55.775724, 37.56084] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 9,
    geometry: { type: "Point", coordinates: [55.822144, 37.433781] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 10,
    geometry: { type: "Point", coordinates: [55.87417, 37.669838] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 11,
    geometry: { type: "Point", coordinates: [55.71677, 37.482338] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 12,
    geometry: { type: "Point", coordinates: [55.78085, 37.75021] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 13,
    geometry: { type: "Point", coordinates: [55.810906, 37.654142] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 14,
    geometry: { type: "Point", coordinates: [55.865386, 37.713329] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 15,
    geometry: { type: "Point", coordinates: [55.847121, 37.525797] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 16,
    geometry: { type: "Point", coordinates: [55.778655, 37.710743] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 17,
    geometry: { type: "Point", coordinates: [55.623415, 37.717934] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 18,
    geometry: { type: "Point", coordinates: [55.863193, 37.737] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 19,
    geometry: { type: "Point", coordinates: [55.86677, 37.760113] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 20,
    geometry: { type: "Point", coordinates: [55.698261, 37.730838] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 21,
    geometry: { type: "Point", coordinates: [55.6338, 37.564769] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 22,
    geometry: { type: "Point", coordinates: [55.639996, 37.5394] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 23,
    geometry: { type: "Point", coordinates: [55.69023, 37.405853] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 24,
    geometry: { type: "Point", coordinates: [55.77597, 37.5129] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 25,
    geometry: { type: "Point", coordinates: [55.775777, 37.44218] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 26,
    geometry: { type: "Point", coordinates: [55.811814, 37.440448] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 27,
    geometry: { type: "Point", coordinates: [55.751841, 37.404853] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 28,
    geometry: { type: "Point", coordinates: [55.627303, 37.728976] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 29,
    geometry: { type: "Point", coordinates: [55.816515, 37.597163] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 30,
    geometry: { type: "Point", coordinates: [55.664352, 37.689397] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 31,
    geometry: { type: "Point", coordinates: [55.679195, 37.600961] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 32,
    geometry: { type: "Point", coordinates: [55.673873, 37.658425] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 33,
    geometry: { type: "Point", coordinates: [55.681006, 37.605126] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 34,
    geometry: { type: "Point", coordinates: [55.876327, 37.431744] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 35,
    geometry: { type: "Point", coordinates: [55.843363, 37.778445] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 36,
    geometry: { type: "Point", coordinates: [55.875445, 37.549348] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 37,
    geometry: { type: "Point", coordinates: [55.662903, 37.702087] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 38,
    geometry: { type: "Point", coordinates: [55.746099, 37.434113] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 39,
    geometry: { type: "Point", coordinates: [55.83866, 37.712326] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 40,
    geometry: { type: "Point", coordinates: [55.774838, 37.415725] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 41,
    geometry: { type: "Point", coordinates: [55.871539, 37.630223] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 42,
    geometry: { type: "Point", coordinates: [55.657037, 37.571271] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 43,
    geometry: { type: "Point", coordinates: [55.691046, 37.711026] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 44,
    geometry: { type: "Point", coordinates: [55.803972, 37.65961] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 45,
    geometry: { type: "Point", coordinates: [55.616448, 37.452759] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 46,
    geometry: { type: "Point", coordinates: [55.781329, 37.442781] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 47,
    geometry: { type: "Point", coordinates: [55.844708, 37.74887] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 48,
    geometry: { type: "Point", coordinates: [55.723123, 37.406067] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
  {
    type: "Feature",
    id: 49,
    geometry: { type: "Point", coordinates: [55.858585, 37.48498] },
    properties: {
      balloonContentHeader:
        "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>",
      balloonContentBody:
        "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>",
      balloonContentFooter:
        "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>",
      clusterCaption: "<strong><s>Еще</s> одна</strong> метка",
      hintContent: "<strong>Текст  <s>подсказки</s></strong>",
    },
  },
];

const GarbageMap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width="100%"
        height="100%"
        features={features}
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
          features={features}
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
