import React, {useState, useContext} from "react"

const SelectedPlantContext = React.createContext()

export function useSelectedPlant() {
  return useContext(SelectedPlantContext)
}

export function SelectedPlantProvider(props) {
const [selectedPlant, setSelectedPlant] = useState("none")

  return (
    <SelectedPlantContext.Provider value={{ selectedPlant, setSelectedPlant }}>
      {props.children}
    </SelectedPlantContext.Provider>
  )
}