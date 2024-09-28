import React from "react";
import Cards from "./components/Cards/page"; // Make sure the import is correct

const Home = () => {
  return (
    <div className=" bg-yellow-100 flex flex-wrap h-screen place-content-center justify-center gap-4 p-4">
      <Cards Name="Maryam" RollNo="1234" Day="Monday" Slot="2 to 5" />
      <Cards Name="Warda" RollNo="5456" Day="Saturday" Slot="9 to 12" />
      <Cards Name="Sheeza" RollNo="1345" Day="Monday" Slot="2 to 5" />
      <Cards Name="Samreen" RollNo="9493" Day="Thursday" Slot="7 to 10" />
    </div>
  );
};

export default Home;
