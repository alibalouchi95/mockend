type Props = {
  title: string;
  iconName?: string;
  onClick: () => void
}

const MethodButton = (props: Props) => {
  return <button className="w-5/12 aspect-square rounded-xl bg-secondary/40 flex justify-center items-center text-2xl font-extrabold" onClick={props.onClick}>
    {props.title}
  </button>
}

export default MethodButton