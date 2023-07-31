import { useContext } from "react";
import { RegistroContext } from "./RegistroContext";
export function useRegistro() {
  const context = useContext(RegistroContext);
  if (!context)
    throw Error("useRegistro must be used within a MarkersProvider");
  return context;
}
