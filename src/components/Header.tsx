import React from "react";
import { Button } from "@mantine/core";

const Header: React.FC = () => (
  <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
    <h1 className="text-xl">My Website</h1>
    <Button variant="light" color="blue">
      Get Started
    </Button>
  </header>
);

export default Header;
