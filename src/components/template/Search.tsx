import { css, styled } from "styled-components";
import Input from "../common/Input";
import { MdOutlineSearch } from "react-icons/md";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <SearchBlock>
      <SearchContent>
        <SearchButton />
        <SearchInput $search placeholder="검색어를 입력하세요." />
      </SearchContent>
    </SearchBlock>
  );
};

const SearchBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

const SearchInput = styled(Input)`
  ${(props) =>
    props.$search &&
    css`
      width: inherit;
      padding-left: 50px;
    `}
`;

const SearchButton = styled(MdOutlineSearch)`
  position: absolute;
  left: 40px;
  font-size: 20px;
  cursor: pointer;
  color: ${({theme}) => theme.color.gray[5]};
`;

export default Search;
