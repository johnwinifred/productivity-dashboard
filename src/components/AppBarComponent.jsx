import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { AppBar, AppBarSection, Avatar, AppBarSpacer} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import Logo from "../assets/logo.png";
import { SvgIcon } from "@progress/kendo-react-common";
import { bellIcon, searchIcon, userIcon } from "@progress/kendo-svg-icons";
import {InputPrefix, InputSeparator,TextBox} from "@progress/kendo-react-inputs";

const AppBarComponent = () => {
  
  return (
    <AppBar
      positionMode="sticky"
      className="w-full h-[10rem] m-0 px-[10rem] bg-blue-200  flex items-center justify-between "
    >
      {/* Logo Section */}
      <AppBarSection className="flex items-center">
        <img src={Logo} className="w-40 md:w-70" alt="KendoReact Logo" />
      </AppBarSection>

      {/* Search Section */}

      <AppBarSection className="flex flex-row ">
        <div role="search">
          <TextBox
            className="flex flex-row gap-6 border text-black"
            prefix={() => (
              <>
                <InputPrefix className="flex">
                  <SvgIcon icon={searchIcon} className="w-[2rem]" />
                </InputPrefix>
                <InputSeparator className="text-black-500 h-10" />
              </>
            )}style={{
              width: "200%",
              color: "black",
              padding: "0.5rem",
              borderRadius: "1.5rem",
              fontSize: "1.5rem",
            }}
            placeholder="Search"
            fillMode="solid"
          />
        </div>
      </AppBarSection>

      {/* Icons & Avatar */}
      <AppBarSection className="flex items-center gap-[2rem]">
        <AppBarSection>
          <Button
            type="button"
            fillMode="flat"
            className="relative text-white "
          >
            <SvgIcon icon={bellIcon} className="w-[4rem] h-[4rem] text-white" />
            <BadgeContainer className="pb-6">
              <Badge
                rounded="full"
                themeColor="primary"
                size="medium"
                position="inside"
              />
            </BadgeContainer>
          </Button>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator text-white h-20" />
        </AppBarSection>

        <AppBarSection>
          <div className="flex justify-center items-center">
            <div className="flex gap-5">
              <Avatar type="icon" size="large" >
                <SvgIcon icon={userIcon} className="w-[3rem] h-[3rem] text-white"/>
              </Avatar>
            </div>
          </div>
        </AppBarSection>

      </AppBarSection>
    </AppBar>
  );
};

export default AppBarComponent;
