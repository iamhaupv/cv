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
                <p className="italic text-2xl">Back End Developer</p>
                <p className="text-2xl"> Resources: <a href="https://github.com/longsoisuaxe1a/node.js-mongodb-api-genchat">https://github.com/longsoisuaxe1a/node.js-mongodb-api-genchat</a>
                </p>
                <p className="text-2xl">&bull;  This project focuses on developing an API using Node.js combined with MongoDB database to build
                    a complete chat system called GenChat.</p>
                <p className="text-2xl">&bull; Techstack: Node.js, MongoDB, S3, Socket.</p>
            </div>
            <hr class="border-2 border-gray-600 my-4" />
            <div className="flex">
                <p className="font-bold text-3xl">- Book Store Management </p>
                <p className="italic mx-l-760">February 2024 - June 2024</p>
            </div>
            <p className="italic text-2xl">Back End Developer</p>
            <p className="text-2xl"> Resources:
                <a href="https://github.com/longsoisuaxe1a/node.js-mongodb-api-genchat">https://github.com/longsoisuaxe1a/node.js-mongodb-api-genchat</a>
            </p>
            <p className="text-2xl">&bull;The project is a microservices system developed with Spring Boot to efficiently manage bookstore
                operations.</p>
            <p className="text-2xl">&bull; The project utilizes technologies such as Redis for caching, API Gateway for managing API entry
                points, Discovery for service discovery, Retry for handling failed requests, Rate Limiter for limiting
                request rates into the system. Additionally, it employs JWT authentication for login and registration,
                token management, and authentication.</p>
            <p className="text-2xl">&bull; Techstack: Java, SQL Server, Docker, Redis, Spring boot, Postman.</p>
            <hr class="border-2 border-gray-600 my-4" />
        </div>
    )
}
export default Project