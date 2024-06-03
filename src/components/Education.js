import mortarboard from "../assets/mortarboard.png"
const Education = () => {
    return (
        <div className="px-10 w-1400 items-center mx-auto">
            <div className="flex ">
                <img src={mortarboard} alt="mortarboard" />
                <p className="font-bold text-3xl mx-l-30">EDUCATION</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <div className="flex ">
                <p className="font-bold text-3xl"> Major:</p>
                <p className="text-2xl mx-5 italic">Software Engineering of Industrial University of Ho Chi Minh City </p>
                <p className="mx-l-90 italic ">Oct 2020 - Dec 2024</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
        </div>
    )
}
export default Education