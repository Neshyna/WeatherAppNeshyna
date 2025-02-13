import { ErrorProps } from "./types"
import { ErrorContainer } from "./styles"

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <ErrorContainer>{error.message}</ErrorContainer>
}

export default Error
