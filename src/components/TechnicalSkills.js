import pencil from "../assets/pencil.png"
const TechnicalSkills = () => {
    return (
        <div className="px-10 bg-green-200 border-solid border-2 w-1400 items-center mx-auto">
            <div className="flex">
                <img src={pencil} alt="pencil" />
                <p className="font-bold text-3xl mx-l-30">TECHNICAL SKILLS</p>
            </div>
            <table>
                <tr>
                    <td>Skills</td>
                    <td>Java, Node.js, HTML, CSS, JavaScript, React.js</td>
                </tr>
                <tr>
                    <td>Frameworks</td>
                    <td>Express.js, Spring boot, Bootstrap, jQuery</td>
                </tr>
                <tr>
                    <td>Database</td>
                    <td>SQL Server, MongoDB, MySQL</td>
                </tr>
                <tr>
                    <td>Tool</td>
                    <td>Postman, Git, Docker, Jenkins</td>
                </tr>
                <tr>
                    <td>Other knowledge</td>
                    <td>RESTful, Microservices Architecture, AWS Web Services(EC2, S3, DynamoDB)</td>
                </tr>
            </table>
        </div>
    )
}
export default TechnicalSkills