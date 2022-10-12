import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllApartmentActions } from "../../store/slice/AllDataApartment";
import ImageClicking from "../ImageClicking";

export const room = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
];

const Card = (props) => {
  const { image, sales, booked, free, id } = props;
  const store = useSelector((store) => store);
  console.log(store, "store");
  // getapartment
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllApartmentActions.opendb());
    dispatch(getAllApartmentActions.getapartment());
  }, [dispatch]);
  return (
    <div>
      <CardWrap>
        <WrapperFloor>
          <p>{id}-й этаж</p>
        </WrapperFloor>
        <Section>
          <ImageClicking
            id={id}
            images={image}
            idroom1={room[0].id}
            statusroom1={room[0].status}
            idroom2={room[1].id}
            statusroom2={room[1].status}
            idroom3={room[2].id}
            statusroom3={room[2].status}
            idroom4={room[3].id}
            statusroom4={room[3].status}
            idroom5={room[4].id}
            statusroom5={room[4].status}
            idroom6={room[5].id}
            statusroom6={room[5].status}
            idroom7={room[6].id}
            statusroom7={room[6].status}
            idroom8={room[7].id}
            statusroom8={room[7].status}
            idroom9={room[8].id}
            statusroom9={room[8].status}
            idroom10={room[9].id}
            statusroom10={room[9].status}
            idroom11={room[10].id}
            statusroom11={room[10].status}
            idroom12={room[11].id}
            statusroom12={room[11].status}
            idroom13={room[12].id}
            statusroom13={room[12].status}
            idroom14={room[13].id}
            statusroom14={room[13].status}
            idroom15={room[14].id}
            statusroom15={room[14].status}
            idroom16={room[15].id}
            statusroom16={room[15].status}
          />
        </Section>
        <Aside>
          <Redp>Продано:{sales}</Redp>
          <Yellowp>Бронировано:{booked}</Yellowp>
          <Bluep>Свободные:{free}</Bluep>
        </Aside>
      </CardWrap>
    </div>
  );
};

export default Card;
const WrapperFloor = styled("div")`
  position: absolute;
  width: 20%;
  height: 20%;
  color: darkgreen;
  top: 10%;
  right: 23%;
  & > p {
    font-size: 2vw;
    position: absolute;
    z-index: 2;
  }
`;
const CardWrap = styled("div")`
  width: 100%;
  height: 80%;
  position: relative;
  margin: 0 auto;
`;
const Section = styled("div")`
  margin: 0 auto;
  width: 100%;
`;
const Aside = styled("aside")`
  position: absolute;
  top: 15%;
  right: 15%;
  border-radius: 2px solid;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 30%;
  padding: 2%;
`;
const Redp = styled("p")`
  font-size: 2vw;
  color: red;
`;
const Yellowp = styled("p")`
  font-size: 2vw;
  color: orange;
`;
const Bluep = styled("p")`
  font-size: 2vw;
  color: blue;
`;
