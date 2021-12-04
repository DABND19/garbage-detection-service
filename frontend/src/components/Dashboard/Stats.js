import React from "react";
import styled from "styled-components";
import { Button, Progress, Table } from "antd";
import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { useQuery } from 'react-query';
import { fetchTop5 } from "../../api";
import useStore from "../../store";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Stats = () => {
  const { data } = useQuery('top5', fetchTop5, {
    refetchInterval: 15000, 
    onSuccess: (data) => console.log(data)
  })
  const store = useStore()

  return (
    <Container>
      <Card title='Заполненность баков'>
        <Progress type="circle" percent={67} />
      </Card>
      <Table 
        pagination={false}
        scroll={{ y: 250 }}
        dataSource={data}
        rowKey='id'
        columns={[
          {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
            render: (address, { location }) => (
              <Button 
                type="link" 
                onClick={() => {
                  store.map.changeCenter(location)
                  store.map.changeZoom(18)
                }}
              >
                {address}
              </Button>
            )
          },
          {
            title: 'Заполненность баков',
            dataIndex: 'fullness',
            key: 'fullness',
            sorter: (a, b) => a.fullness - b.fullness,
            render: (value) => value.toFixed(2) + '%'
          },
          {
            title: 'Количество мусора вне баков',
            dataIndex: 'nearbyGarbage',
            key: 'nearbyGarbage',
            sorter: (a, b) => a.nearbyGarbage - b.nearbyGarbage
          }
        ]}
      />
    </Container>
  );
};

export default observer(Stats);
