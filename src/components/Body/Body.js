import { useState, useEffect } from "react";
import {
  AddSensorModalCard,
  BodyContainer,
  BodyDevicesConfiguration,
  CardContainer,
  HandlersLi,
  HandlersTable,
  HandlersOl,
  SensorModalCard,
  OutPutsTable,
  OutPutsOl,
  OutPutsLi,
  PopUpMenu,
  CloseButton,
  HandlerGroup,
  OutputGr,
  LittleCardBody,
  AddButton,
  Header,
  SensorModal,
  Buttons,
  Handlers,
  HandlerArea,
  Outputs,
  OutputArea,
} from "./Body.elements";

import React from "react";
export const Body = () => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  const closeAddCard = () => {
    setShowResults(false);
  };

  return (
    <BodyContainer>
      <BodyDevicesConfiguration>Devices configuration</BodyDevicesConfiguration>
      <CardContainer>
        <SensorModalCard>
          <h1>WS-0042</h1>
          <HandlersTable>
            <span>Handlers</span>
            <HandlersOl>
              <HandlersLi>trim</HandlersLi>
              <HandlersLi>paddingToMultiple</HandlersLi>
              <HandlersLi>addTimeStamp</HandlersLi>
            </HandlersOl>
          </HandlersTable>
          <OutPutsTable>
            <span>Outputs</span>
            <OutPutsOl>
              <OutPutsLi>file</OutPutsLi>
            </OutPutsOl>
          </OutPutsTable>
        </SensorModalCard>
        <SensorModalCard>
          <h1>WS-0043</h1>
          <HandlersTable>
            <span>Handlers</span>
            <HandlersOl>
              <HandlersLi>trim</HandlersLi>
              <HandlersLi>paddingToMultiple</HandlersLi>
              <HandlersLi>addTimeStamp</HandlersLi>
            </HandlersOl>
          </HandlersTable>
          <OutPutsTable>
            <span>Outputs</span>
            <OutPutsOl>
              <OutPutsLi>file</OutPutsLi>
              <OutPutsLi>console</OutPutsLi>
            </OutPutsOl>
          </OutPutsTable>
        </SensorModalCard>
        <SensorModalCard>
          <h1>WS-0044</h1>
          <HandlersTable>
            <span>Handlers</span>
            <HandlersOl>
              <HandlersLi>trim</HandlersLi>
              <HandlersLi>paddingToMultiple</HandlersLi>
              <HandlersLi>addTimeStamp</HandlersLi>
            </HandlersOl>
          </HandlersTable>
          <OutPutsTable>
            <span>Outputs</span>
            <OutPutsOl>
              <OutPutsLi>console</OutPutsLi>
            </OutPutsOl>
          </OutPutsTable>
        </SensorModalCard>
        <SensorModalCard>
          <h1>WS-004</h1>
          <HandlersTable>
            <span>Handlers</span>
            <HandlersOl>
              <HandlersLi>trim</HandlersLi>
              <HandlersLi>paddingToMultiple</HandlersLi>
              <HandlersLi>addTimeStamp</HandlersLi>
            </HandlersOl>
          </HandlersTable>
          <OutPutsTable>
            <span>Outputs</span>
            <OutPutsOl>
              <OutPutsLi style={{ listStyle: "none" }}>-</OutPutsLi>
            </OutPutsOl>
          </OutPutsTable>
        </SensorModalCard>
        <AddSensorModalCard onClick={onClick}>
          <i class="fas fa-plus fa-8x"></i>
        </AddSensorModalCard>
        {showResults ? (
          <PopUpMenu>
            <Header>
              <h1>Add new configuration</h1>
              <span>Set up a new device so that the Wolf can deal with it</span>
            </Header>
            <SensorModal>
              <label>Sensor Modal *</label>
              <input type="text" />
            </SensorModal>
            <LittleCardBody>
              <label>Handlers</label>
              <HandlerGroup>
                <Handlers /> <HandlerArea />
              </HandlerGroup>
              <label>Outputs</label>
              <OutputGr>
                <Outputs />
                <OutputArea />
              </OutputGr>
            </LittleCardBody>
            <Buttons>
              <AddButton>Add</AddButton>
              <CloseButton onClick={closeAddCard}>Close</CloseButton>
            </Buttons>
          </PopUpMenu>
        ) : null}
      </CardContainer>
    </BodyContainer>
  );
};
export default Body;
