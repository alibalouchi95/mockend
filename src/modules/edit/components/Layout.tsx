import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  stepNumber?: number
}

const Layout = (props: Props) => {
  return <div className="w-full bg-white/20 rounded-xl shadow-xl p-8 flex flex-wrap justify-around gap-y-8">
    {props.children}
  </div>
}

export default Layout