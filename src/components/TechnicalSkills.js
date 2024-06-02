import pencil from "../assets/pencil.png"
const TechnicalSkills = () => {
    return (
        <div className="px-10 w-1400 items-center mx-auto">
            <div className="flex">
                <img src={pencil} alt="pencil" />
                <p className="font-bold text-3xl mx-l-30">TECHNICAL SKILLS</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <table className="">
                <tr>
                    <td className="text-3xl font-bold">Skills</td>
                    <td className="p-3 text-2xl italic">Java, Node.js, HTML, CSS, JavaScript, React.js</td>
                </tr>
                <tr>
                    <td className="text-3xl font-bold">Frameworks</td>
                    <td className="p-3 text-2xl italic">Express.js, Spring boot, Bootstrap, jQuery</td>
                </tr>
                <tr>
                    <td className="text-3xl font-bold">Database</td>
                    <td className="p-3 text-2xl italic">SQL Server, MongoDB, MySQL</td>
                </tr>
                <tr>
                    <td className="text-3xl font-bold">Tool</td>
                    <td className="p-3 text-2xl italic">Postman, Git, Docker, Jenkins</td>
                </tr>
                <tr>
                    <td className="text-3xl font-bold">Other knowledge</td>
                    <td className="p-3 text-2xl italic">RESTful, Microservices Architecture, AWS Web Services(EC2, S3, DynamoDB)</td>
                </tr>
            </table>
            <hr class="border-2 border-gray-600 my-4" />
        </div>
    )
}
export default TechnicalSkills