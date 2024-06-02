import project from "../assets/project.png"
const Project = () => {
    return (
        <div className="px-10 w-1400 items-center mx-auto">
            <div className="flex">
                <img src={project} alt="project" />
                <p className="font-bold text-3xl mx-l-30">COURSE PROJECT</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <div>
                <div className="flex">
                    <p className="font-bold text-3xl">- GenChat</p>
                    <p className="italic mx-l-1000">March 2024 - June 2024</p>
                </div>
                <p className="italic text-2xl">Full Stack Developer</p>
                <p className="text-2xl"> Resources: <a className="italic px-2 text-blue-500" href="https://github.com/iamhaupv/Gen-Chat">https://github.com/iamhaupv/Gen-Chat</a>
                </p>
                <table>
                    <tr>
                        <td className="text-3xl">&bull;</td>
                        <td className="p-2"><p className="text-2xl">Design and implement api, using node.js to connect mongodb cluster.</p> </td>
                    </tr>
                    <tr>
                        <td className="text-3xl align-baseline">&bull;</td>
                        <td className="p-2"><p className="text-2xl">Use bcrypt to encrypt user passwords, JWT to authenticate and authorize users, use Firebase to authenticate OTP with phone number, store images and files on S3, deploy nodejs to EC2.</p> </td>
                    </tr>
                    <tr>
                        <td className="text-3xl align-baseline">&bull;</td>
                        <td className="p-2"><p className="text-2xl">The application can have single chat or group chat to synchronize data across web and application platforms.</p> </td>
                    </tr>
                    <tr>
                        <td className="text-3xl">&bull;</td>
                        <td className="p-2"><p className="text-2xl">Techstack: Node.js, MongoDB, S3, EC2, Socket, Postman.</p> </td>
                    </tr>
                </table>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <div className="flex">
                <p className="font-bold text-3xl">- Book Store Management </p>
                <p className="italic mx-l-760">February 2024 - June 2024</p>
            </div>
            <p className="italic text-2xl">Back End Developer</p>
            <p className="text-2xl"> Resources:
                <a className="italic mx-2 text-blue-500" href="https://gitlab.com/iamhaupv/Management_BookStore_Microservice">https://gitlab.com/iamhaupv/Management_BookStore_Microservice</a>
            </p>
            <table>
                <tr>
                    <td className="text-3xl">&bull;</td>
                    <td className="p-2"><p className="text-2xl">The project is a microservices system developed with Spring Boot to efficiently manage bookstore
                        operations.</p></td>
                </tr>
                <tr>
                    <td className="text-3xl align-baseline">&bull;</td>
                    <td className="p-2"><p className="text-2xl">The project utilizes technologies such as Redis for caching, API Gateway for managing API entry
                        points, Discovery for service discovery, Retry for handling failed requests, Rate Limiter for limiting
                        request rates into the system. Additionally, it employs JWT authentication for login and registration,
                        token management, and authentication.</p></td>
                </tr>
                <tr>
                    <td className="text-3xl">&bull;</td>
                    <td className="p-2"><p className="text-2xl">Techstack: Java, SQL Server, Docker, Redis, Spring boot, Postman..</p></td>
                </tr>
            </table>
            <hr class="border-2 border-gray-600 my-4" />
        </div>
    )
}
export default Project