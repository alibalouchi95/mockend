import { useState } from "react"
import Header from "./components/Header"
import CreateButton from "./components/Create";
import Edit from "../edit";

enum Status {
  "Create" = "Create",
  "Edit" = "Edit"
}

const Homepage = () => {
  const [status, setStatus] = useState<Status>(Status.Create);

  const renderContent = (status: Status) => {
    switch (status) {
      case Status.Create:
        return <CreateButton goToEdit={() => setStatus(Status.Edit)} />
      case Status.Edit:
        return <Edit />
    }
  }

  return <div className="w-full h-full bg-primary min-h-screen">
    <Header />
    <div className="w-2/3 mx-auto my-16">
      {renderContent(status)}
    </div>
  </div>
}

export default Homepage