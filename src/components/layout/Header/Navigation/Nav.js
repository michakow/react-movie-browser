import { StyledList, StyledNav } from "./Nav.styled.js"
import NavItem from "./NavItem.js"

const Nav = () => {
  const listItems = [
    {
      id: 1,
      name: 'movies',
      pathName: '/movies',
      active: true
    },
    {
      id: 2,
      name: 'top10',
      pathName: '/trending',
      active: true
    },
    {
      id: 3,
      name: 'opinions',
      pathName: '/opinions',
      active: true
    },
    {
      id: 4,
      name: 'login',
      pathName: '/login',
      active: sessionStorage.getItem('account') ? !JSON.parse(sessionStorage.getItem('account')).logged : true
    },
    {
      id: 5,
      name: 'admin',
      pathName: '/admin',
      active: false
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
