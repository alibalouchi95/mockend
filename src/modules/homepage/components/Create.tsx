type Props = {
  goToEdit: () => void
}

const CreateButton = (props: Props) => {
  return <button className="m-auto max-w-sm w-full aspect-square bg-white/80 flex flex-row justify-center items-center rounded-xl shadow-xl text-4xl text-black" onClick={props.goToEdit}>
    Create Your Backend
  </button>
}

export default CreateButton