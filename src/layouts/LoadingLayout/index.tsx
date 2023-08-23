import { Outlet } from "react-router-dom";
import { useMetaContext } from "../../hooks/useMetaContext";
import {
  LoadingScreen,
  LogoWrapper,
  // GrindBox,
  // HomeSkeletonContainer,
  // LeftConent,
  // MetaBox,
  // RightContent,
} from "./style";
import logo from "../../assets/logo.svg";

export function LoadingLayout() {
  const { loading } = useMetaContext();

  // if (loading) {
  //   return (
  //     <HomeSkeletonContainer>
  //       <LeftConent>
  //         <MetaBox />
  //         <GrindBox />
  //       </LeftConent>
  //       <RightContent />
  //     </HomeSkeletonContainer>
  //   );
  // }
  if (loading) {
    return (
      <LoadingScreen>
        <LogoWrapper>
          <img src={logo} alt="Main Logo" />
        </LogoWrapper>
      </LoadingScreen>
    );
  }

  return <Outlet />;
}
