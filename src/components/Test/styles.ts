import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
`
export const Dropdown = styled.div`
  width: 40rem;
`

export const Header = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: row;
`

export const SubHeader = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
`

export const SubheaderTitleWrapper = styled.div`
  display: inline-flex;
  flex: nowrap;
  cursor: pointer;
`

export const HeaderTitleWrapper = styled.div`
  display: inline-flex;
  flex: nowrap;
  cursor: pointer;
`

export const SubheaderTitle = styled.div`
  padding: 10px;
`

export const SubArrow = styled.div`
  background-color: #4a25aa;
  width: 5rem;
  margin-left: auto;
  padding: 10px;

  img {
    transform: rotate(270deg);
  }

  img.active {
    transform: rotate(360deg);
  }
`

export const Arrow = styled.div`
  background-color: #ed533f;
  width: 5rem;
  padding: 10px;
  margin-left: auto;

  img {
    transform: rotate(270deg);
  }

  img.active {
    transform: rotate(360deg);
  }
`

export const DropdownHeader = styled.div`
  cursor: pointer;
  width: 35rem;
  padding: 1rem;
  background-color: #ed533f;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

export const DropdownContent = styled.ul`
  width: 100%;
  list-style-type: none;
  background-color: #ed533f;
  border: none;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  li {
    cursor: pointer;
    list-style-type: none;
    padding: 10px;
    background-color: #4a25aa;
    ul {
      background-color: #4a25aa;
      font-size: 16px;
      width: 40.2rem;
      position: relative;
      left: -3%;
      display: none;
      list-style-type: none;
      padding: 2rem;
      border-top: none;

      li {
        cursor: pointer;
      }
    }
  }

  li.active > ul {
    display: flex;
  }
`
