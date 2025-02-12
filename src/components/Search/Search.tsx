import { SearchContainer } from "./styles"
import { SearchProps } from "./types"

function Search({ name, type = "text", placeholder, id, value }: SearchProps) {
  return (
    <SearchContainer>
     <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </SearchContainer>
  )
}

export default Search
