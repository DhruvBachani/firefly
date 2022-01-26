import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const CardContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: yellow;
  color: #20364d;
  position: relative;
  cursor: default;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.6;
  padding: 0 1em;
`;

const SelectButtonContainer = styled(motion.div)`
  width: 200px;
  height: 50px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #16eef6;
  position: relative;
  cursor: default;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SelectText = styled.h4`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 16px;
  font-weight: 900;
`;

const TaskCard = ({ task }) => {
  return (
    <div className="firefly-container">
      <CardContainer>
        <TopContainer>
          <h5>{task.taskName}</h5>
        </TopContainer>
        <BottomContainer>
          <p>{task.taskDescription}</p>
        </BottomContainer>
        <SelectButtonContainer>
          <SelectText>Select</SelectText>
        </SelectButtonContainer>
      </CardContainer>
    </div>
  );
};

export default TaskCard;
