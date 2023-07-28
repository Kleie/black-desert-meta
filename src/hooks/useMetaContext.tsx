import { useContext } from "react";
import { Context } from "../context/MetaContext";

export function useMetaContext() {
  return useContext(Context);
}
