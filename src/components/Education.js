import mortarboard from "../assets/mortarboard.png"
const Education = () =>{
    return (
        <div className="px-10 bg-green-200 border-solid border-2 w-1400 flex items-center mx-auto">
            <img src={mortarboard} alt="mortarboard"/>
            <p className="font-bold text-3xl mx-l-30">EDUCATION</p>
            <p className="mx-l-50 text-2xl"> Major: Software Engineering of Industrial University of Ho Chi Minh City </p>
            <p className="mx-l-90 italic">Oct 2020 - Dec 2024</p>
        </div>
    )
}
export default Education