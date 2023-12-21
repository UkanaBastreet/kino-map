import { FC, useState } from "react";
import "./SearchPanel.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface SearchPanelProps {
  onSearch: (value: string) => void;
}

export const SearchPanel: FC<SearchPanelProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  function formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <>
      <form onSubmit={formSubmitHandler} className={"SearchPanel"}>
        <Input
          name="search-input"
          className="SearchPanel_Input"
          placeholder="Search..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};
