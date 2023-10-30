import MethodButton from "./MethodButton"

export enum Method {
  "GET" = "GET",
  "POST" = "POST",
  "DELETE" = "DELETE",
  "PUT" = "PUT"
}

type Props = {
  addMethod: (method: keyof typeof Method) => void
}

const SelectMethod = (props: Props) => {

  const selectMethod = (method: keyof typeof Method) => {
    props.addMethod(method)
  }

  return <>
    {(Object.keys(Method) as Array<keyof typeof Method>).map((method) => <MethodButton onClick={() => selectMethod(method)} title={method} />)}
  </>
}

export default SelectMethod