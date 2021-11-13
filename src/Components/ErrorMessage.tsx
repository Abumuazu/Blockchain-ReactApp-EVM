import {FC} from "react"
import styled from "styled-components"
interface IError {
    message: string | undefined;
}


  export const ErrorMessage: FC<IError> = ({message}) => {
    if (!message) return null;
  
    return (
      <Wrapper className="alert alert-error mt-5">
        <div className="flex-1">
          <label>{message}</label>
        </div>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 20%;
  width: fit-content; 
  padding:20px;
display: flex;
justify-Content:center;
align-items: center;
  `