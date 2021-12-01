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
      name: 'top10',
      pathName: '/trending'
    },
    {
      id: 3,
      name: 'opinions',
      pathName: '/opinions'
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
