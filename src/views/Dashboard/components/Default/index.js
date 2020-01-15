import React from "react";
import { Container, GridContainer } from "./styles";
import {
  AiFillDollarCircle,
  AiFillClockCircle,
  AiFillMessage,
  AiFillSmile
} from "react-icons/ai";

import { withTheme } from "styled-components";

import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

import { Card, ProgressBar, GridDataTable } from "../../../../components";

import dataTable from "./data";

function Default(props) {
  return (
    <>
      <Container>
        <Card
          className="card"
          title="TASKS PROGRESS"
          color="#f3f3f3"
          backgroundCard="#6497b1"
          content={
            <div className="card-content">
              <span>75%</span>
              <AiFillClockCircle color="#f3f3f3" size={55} />
              <ProgressBar color="#fff" percentage={75} background="#ffcc5c" />
            </div>
          }
        />
        <Card
          className="card"
          title="TOTAL PROFIT"
          color="#f3f3f3"
          backgroundCard="#54b2a9"
          content={
            <div className="card-content">
              <span>$24,000</span>
              <AiFillDollarCircle color="#f3f3f3" size={55} />
            </div>
          }
        />
        <Card
          className="card"
          title="TOTAL USERS"
          color="#f3f3f3"
          backgroundCard="#4a4e4d"
          content={
            <div className="card-content">
              <span>6,000</span>
              <AiFillSmile color="#f3f3f3" size={55} />
            </div>
          }
        />
        <Card
          className="card"
          title="COMMENTARIES"
          color="#f3f3f3"
          backgroundCard="#3d3d5c"
          content={
            <>
              <div className="card-content">
                <span>220</span>
                <AiFillMessage color="#f3f3f3" size={55} />
              </div>
            </>
          }
        />
      </Container>
      <GridContainer columns="60% 40%">
        <Card
          className="card"
          title="Latest Sales"
          color="#333"
          backgroundCard="#fff"
          content={
            <div className="chart">
              <LineChart
                download={false}
                data={{
                  "2020-01-01": 5,
                  "2020-01-02": 2,
                  "2020-01-03": 8,
                  "2020-01-04": 5,
                  "2020-01-05": 12,
                  "2020-01-06": 6,
                  "2020-01-07": 14,
                  "2020-01-08": 3,
                  "2020-01-09": 9,
                  "2020-01-10": 14
                }}
              />
            </div>
          }
        />
        <Card
          className="card"
          title="Users By Device"
          color="#333"
          backgroundCard="#fff"
          content={
            <div className="chart">
              <PieChart
                download={false}
                data={[
                  ["Desktop", 62],
                  ["Tablet", 13],
                  ["Mobile", 25]
                ]}
              />
            </div>
          }
        />
      </GridContainer>
      <GridContainer columns="30% 70%">
        <Card
          className="card"
          title="Online Custumers"
          color="#333"
          backgroundCard="#fff"
          content={<></>}
        />
        <Card
          title="Last Sales"
          color="#333"
          backgroundCard="#fff"
          content={
            <>
              <GridDataTable
                pagination={false}
                pageSize={10}
                dataTable={dataTable}
              />
            </>
          }
        />
      </GridContainer>
    </>
  );
}

export default withTheme(Default);
