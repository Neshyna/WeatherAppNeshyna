export interface SearchSliceState {
    data: string[]
    error?: string
    status: "default" | "loading" | "success" | "error"
  }
  