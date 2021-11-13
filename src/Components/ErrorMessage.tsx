import {FC} from "react"
interface IError {
    message: string | undefined;
}


  export const ErrorMessage: FC<IError> = ({message}) => {
    if (!message) return null;
  
    return (
      <div style={{backgroundColor: "white", borderRadius: "6px",}} className="alert alert-error mt-5">
        <div className="flex-1">
          <label>{message}</label>
        </div>
      </div>
    );
  }