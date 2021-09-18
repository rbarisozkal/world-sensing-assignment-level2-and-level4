import React from "react";

import {
  SideBarHeaderContainer,
  SideBarHeader,
  Seperator,
  Preferences,
  ConfigButton,
  HandlersButton,
  OutputsButton,
} from "./SideBar.elements";

export const Sidebar = () => {
  return (
    <SideBarHeaderContainer>
      <SideBarHeader> <i class="fas fa-dog"></i> Data Wolf</SideBarHeader>
      <Seperator />
      <Preferences>
        <ConfigButton> <i class="fas fa-stream"></i> Configurations</ConfigButton>
        <HandlersButton>
          <i class="fas fa-cog"></i>
          Handlers
        </HandlersButton>
        <OutputsButton>
          <i class="fas fa-map-marker-alt"></i>
          Outputs
        </OutputsButton>
      </Preferences>
    </SideBarHeaderContainer>
  );
};
export default Sidebar;
