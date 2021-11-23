import { useState } from "react"
import { useHistory, useLocation } from "react-router"
import { StyledSearch, StyledInput } from "./Search.styled.js"

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { pathname, search } = useLocation();
  const history = useHistory()

  const onFormSubmit = (event) => {
    event.preventDefault()
    const searchParams = new URLSearchParams(search)
    searchValue.trim() ? searchParams.set('search', searchValue.trim()) : searchParams.delete('search')
    history.push(`${pathname}?${searchParams.toString()}`)
    setSearchValue('')
  }

  return (
    <StyledSearch onSubmit={onFormSubmit}>
      <StyledInput type='text' placeholder='search..' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
    </StyledSearch>
  )
}

export default Search
