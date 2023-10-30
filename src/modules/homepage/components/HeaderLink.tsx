import { Link } from "react-router-dom";

type Props = {
  title: string;
  linkTo: string;
}

const HeaderLink = (props: Props) => {
  return <Link to={props.linkTo} className="blur-[0.2px] hover:blur-[0.4px] px-2 py-1 rounded-sm">
    {props.title}
  </Link>
}

export default HeaderLink