import { SearchContainer } from "./styles"
import { SearchProps } from "./types"

function Search({
  name,
  type = "text",
  placeholder,
  id,
  value,
  onChange,
}: SearchProps) {
  return (
    <SearchContainer
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Search
