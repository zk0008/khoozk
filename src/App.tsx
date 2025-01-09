import { Button } from "@mantine/core";
import { IoMdRadioButtonOn } from "react-icons/io";

function App() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline flex text-center items-center justify-center">
          Hello world!
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="default" leftSection={<IoMdRadioButtonOn size={14} />}>
          Hi
        </Button>
      </div>
    </div>
  );
}

export default App;
