import puzzle from "../assets/puzzle.png"
const Activity = () => {
    return (
        <div className="px-10 w-1400 items-center mx-auto">
            <div className="flex">
                <img src={puzzle} alt="puzzle" />
                <p className="font-bold text-3xl mx-l-30">EXTRACURRICULAR ACTIVITIES</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <p className="text-2xl"> I volunteered with the Programming Club at IUH, where I helped students from the 17th Information
                Technology cohort grasp fundamental programming concepts, enriching their learning journey.
                Additionally, I actively participated in aiding the advancement and promotion of products for the
                Electrical and Electronic Engineering Department Club at Industrial University of Ho Chi Minh City.</p>
            <hr class="border-2 border-gray-600 my-4" />
        </div>
    )
}
export default Activity