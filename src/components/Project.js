import project from "../assets/project.png";
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
          <p className="italic mx-l-1000">February 2024 - July 2014</p>
        </div>
        <p className="italic text-2xl">Full Stack Developer</p>
        <p className="text-2xl">
          {" "}
          Resources:{" "}
          <a
            className="italic px-2 text-blue-500"
            href="https://github.com/iamhaupv/Gen-Chat"
          >
            https://github.com/iamhaupv/Gen-Chat
          </a>
        </p>
        <table>
          <tr>
            <td className="text-3xl">&bull;</td>
            <td className="p-2">
              <p className="text-2xl">
                Design and implement api, using node.js to connect mongodb
                cluster.
              </p>{" "}
            </td>
          </tr>
          <tr>
            <td className="text-3xl align-baseline">&bull;</td>
            <td className="p-2">
              <p className="text-2xl">
                Use bcrypt to encrypt user passwords, JWT to authenticate and
                authorize users, use Firebase to authenticate OTP with phone
                number, store images and files on S3, deploy nodejs to EC2.
              </p>{" "}
            </td>
          </tr>
          <tr>
            <td className="text-3xl align-baseline">&bull;</td>
            <td className="p-2">
              <p className="text-2xl">
                The application is developed according to the client-server
                model, the application can have single chat or group chat to
                synchronize data across web and application platforms.
              </p>{" "}
            </td>
          </tr>
          <tr>
            <td className="text-3xl">&bull;</td>
            <td className="p-2">
              <p className="text-2xl">
                Techstack: <i>Node.js, MongoDB, S3, EC2, Socket, Postman</i>.
              </p>{" "}
            </td>
          </tr>
        </table>
      </div>
      <hr class="border-2 border-gray-600 my-4" />
      <div className="flex">
        <p className="font-bold text-3xl">- Book Store Management </p>
        <p className="italic mx-l-760">January 2024 - July 2024</p>
      </div>
      <p className="italic text-2xl">Back End Developer</p>
      <p className="text-2xl">
        {" "}
        Resources:
        <a
          className="italic mx-2 text-blue-500"
          href="https://gitlab.com/iamhaupv/Management_BookStore_Microservice"
        >
          https://gitlab.com/iamhaupv/Management_BookStore_Microservice
        </a>
      </p>
      <table>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              The application is developed according to the microservice model
              so that it can be easily managed, expanded and deployed
              independently.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Use JWT to authenticate and authorize users, Bcrypt to encrypt the
              user's password, each service will connect to a separate database
              and Redis cache to enhance performance, Discovery to let other
              services register for it to play. present and help them
              communicate with each other easily. There is an API Gateway so
              that all requests must go through the Gateway, which has a
              loadbalance function to authenticate the request token and then
              forward the request to the service that needs to be processed.
              Retry is the mechanism that allows this to happen. Returning a
              request or a series of requests when encountering an error ensures
              the system operates at its best. Ratelimiter on the client and
              server protects the system from DDOS attacks, optimizes resources,
              minimizes waiting time and latency.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Full-service Dockerfile to create images that run on multiple
              environments, Docker Compose to run up to containers with Docker
              with one command, Jenkinsfile connects to Gitlab via Webhook to
              send requests to Jenkins to execute the CICD process. When pushing
              code to Gitlab, it calls Jenkins to perform the CICD build
              process, pushing images based on Dockerfile to Dockerhub and
              pulling them back.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Techstack: <i>Java, MySQL, Docker, Docker-Compose, Gitlab, Jenkins,
              JWT, Redis, Spring boot, Postman</i>.
            </p>
          </td>
        </tr>
      </table>
      <hr class="border-2 border-gray-600 my-4" />
      {/* shoe - shop */}
      <div className="flex">
        <p className="font-bold text-3xl">- Shoe Shop </p>
        <p className="italic ml-[1000px]">April 2024 - Present</p>
      </div>
      <p className="italic text-2xl">Frond End Developer</p>
      <p className="text-2xl">
        {" "}
        Resources:
        <a
          className="italic mx-2 text-blue-500"
          href="Resources: https://github.com/iamhaupv/shoe-shop-web"
        >
          Resources: https://github.com/iamhaupv/shoe-shop-web
        </a>
      </p>
      <table>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">Use React.js and Tailwindcss to make UI.</p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              User-friendly interface, easy to use, intuitive, responsive.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Use Fire base to authenticate registered users by phone number.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Use axios to call API, save tokens to localstorage to manage user
              state and authentication related methods.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Techstack: <i>React.js, Tailwindcss, axios, firebase</i>.
            </p>
          </td>
        </tr>
      </table>
      <p className="italic text-2xl">Back End Developer</p>
      <p className="text-2xl">
        {" "}
        Resources:
        <a
          className="italic mx-2 text-blue-500"
          href="Resources: https://github.com/iamhaupv/shoe-shop-backend"
        >
          Resources: https://github.com/iamhaupv/shoe-shop-backend
        </a>
      </p>
      <table>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">Design standard API with RESTful API.</p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Use Node.js to connect to mongodb cluster to manipulate and store
              the database.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl align-baseline">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Use Bcryt to encrypt user passwords, JWT to authenticate and
              authorize users to access system resources, S3 to save images.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Decentralize administrator and user rights, administrators manage
              shoes. Users view shoes, add products to cart.
            </p>
          </td>
        </tr>
        <tr>
          <td className="text-3xl">&bull;</td>
          <td className="p-2">
            <p className="text-2xl">
              Techstack: <i>Node.js, Postman, JWT, S3, cors, MongoDB</i>.
            </p>
          </td>
        </tr>
      </table>
      <hr class="border-2 border-gray-600 my-4" />
    </div>
  );
};
export default Project;
