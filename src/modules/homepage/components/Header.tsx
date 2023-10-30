import HeaderLink from "./HeaderLink"

const Header = () => {
  return <div className="w-full h-20 bg-secondary shadow-lg px-4 py-2 flex flex-row justify-between items-center">
    <p className="bg-green-500 w-36 h-full" />
    <div className="flex flex-row gap-4">
      <HeaderLink linkTo="/about-us" title="Homepage" />
      <HeaderLink linkTo="/about-us" title="Examples" />
      <HeaderLink linkTo="/about-us" title="About Us" />
    </div>
  </div>
}

export default Header