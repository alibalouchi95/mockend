import { useState } from "react";
import Layout from "./components/Layout"
import { Method } from "./components/Method";
import SelectMethod from "./components/Method";

const Edit = () => {
  const [method, setMethod] = useState<Method>()
  const [step, setStep] = useState<number>(0)

  const selectMethod = (method: keyof typeof Method) => {
    setMethod(Method[method])
    setStep(1)
  }

  const renderContent = (stepNumber: number) => {
    switch (stepNumber) {
      case 0:
        return <SelectMethod addMethod={selectMethod} />
    }
  }

  return <Layout stepNumber={step}>
    {renderContent(step)}
  </Layout>
}

export default Edit;