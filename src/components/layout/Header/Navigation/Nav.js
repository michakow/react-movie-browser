import { StyledList, StyledNav } from "./Nav.styled.js"
import NavItem from "./NavItem.js"

const Nav = () => {
  const listItems = [
    {
      id: 1,
      name: 'movies',
      pathName: '/movies'
    },
    {
      id: 2,
      name: 'opinions',
      pathName: '/opinions'
    },
    {
      id: 3,
      name: 'download',
      pathName: '/download'
    }
  ]

  return (
    <StyledNav>
      <StyledList>
        {listItems.map((item) => (
          <NavItem 
            key={item.id}
            item={item}
          />
        ))}
      </StyledList>
    </StyledNav>
  )
}

export default Nav
