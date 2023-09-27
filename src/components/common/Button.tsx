import { css, styled } from "styled-components";

interface ButtonProps {
  [props: string]: any;
}

interface CustomProps {
  $normal?: boolean;
  $save?: boolean;
  $modalbtn?: boolean;
  $confirm?: boolean;
  $leftbtn?: boolean;
  $rightbtn?: boolean;
  $disabled?: boolean;
  $templatebtn?: boolean;
  $invitebtn?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<CustomProps>`
  padding: 10px 20px;
  background: ${({ theme }) => theme.color.gray[0]};
  border-radius: 4px;
  font-weight: 600;
  border: none;

  box-shadow: 0px 0px 18px 0px rgba(83, 120, 230, 0.18);

  /* props 이름 앞에 $ 명시해야 경고가 뜨지 않습니다! */
  /* $: 임의의 props를 DOM까지 전달하게 만들어줍니다.*/
  /* 실 사용은 app/page.tsx를 참고해주세요! */
  ${(props) =>
    props.$normal &&
    css`
      padding: 30px; // $normal일 때의 padding
      background: ${(props) => props.theme.color.blue[3]};
      color: #fff;
    `}

  ${(props) =>
    props.$save &&
    css`
      display: flex;
      width: 100%;
      height: 45px;
      font-size: 16px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 10px;
      ${({ theme }) => theme.textColor.gray[0]};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: ${(props) => props.theme.color.blue[3]};
    `}

    ${(props) =>
    props.$disabled &&
    css`
      display: flex;
      width: 100%;
      height: 45px;
      font-size: 16px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 10px;
      ${({ theme }) => theme.textColor.gray[0]};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: ${(props) => props.theme.color.gray[3]};
      cursor: not-allowed;
    `}


    // 모달 버튼 한개
  ${(props) =>
    props.$confirm &&
    css`
      display: flex;
      width: 100%;
      height: 45px;
      padding: 15px 0px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      align-self: stretch;
      border-radius: 10px;
      background: ${(props) => props.theme.color.blue[3]};
      ${({ theme }) => theme.textColor.gray[0]};
      text-align: center;
      font-family: Pretendard;
      ${({ theme }) => theme.text.subHead2.semibold}
    `}


    // 모달 버튼 두 개 중 왼쪽
  ${(props) =>
    props.$leftbtn &&
    css`
      display: flex;
      width: 136px;
      height: 45px;
      padding: 8px 4px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      ${({ theme }) => theme.textColor.blue[300]};
      text-align: center;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.112px;
      background: ${(props) => props.theme.color.blue[0]};
    `}

    // 모달 버튼 두 개 중 오른쪽
  ${(props) =>
    props.$rightbtn &&
    css`
      display: flex;
      width: 136px;
      height: 45px;
      padding: 8px 4px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      ${({ theme }) => theme.textColor.gray[0]};
      text-align: center;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.112px;
      background: ${(props) => props.theme.color.blue[3]};
    `}

  ${(props) =>
    props.$modalbtn &&
    css`
      background: ${({ theme }) => theme.color.button.bgColor};
      color: #fff;
    `}

  ${(props) =>
    props.$templatebtn &&
    css`
      background: ${({ theme }) => theme.color.blue[3]};
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      svg {
        font-size: 18px;
      }
    `}

    ${(props) =>
    props.$invitebtn &&
    css`
      background: ${({ theme }) => theme.color.button.bgColor};
      display: inline-flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      ${({ theme }) => theme.textColor.gray[0]};
      text-align: center;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 0;
      width: 65px;
    `}
`;

export default Button;
