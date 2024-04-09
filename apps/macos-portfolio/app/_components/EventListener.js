import {
  Help,
  About,
  Skills,
  Education,
  Experience,
  Projects,
  Achievements,
  Mail,
} from "./Command-Values";

export default function OnKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const parentElement = document.getElementById("terminal-body");

    const commandOutputNode = document.createElement("div");
    switch (event.target.value) {
      case "clear":
        while (parentElement.hasChildNodes()) {
          parentElement.removeChild(parentElement.firstChild);
        }
        break;
      case "help":
        commandOutputNode.innerText = Help();
        break;
      case "about":
        commandOutputNode.innerText = About();
        break;
      case "skills":
        commandOutputNode.appendChild(Skills());
        break;
      case "education":
        commandOutputNode.innerText = Education();
        break;
      case "experience":
        commandOutputNode.innerText = Experience();
        break;
      case "projects":
        commandOutputNode.innerHTML = Projects();
        break;
      case "achievements":
        commandOutputNode.innerText = Achievements();
        break;
      case "resume":
        const resumeLink = document.createElement("a");
        resumeLink.href = "/resume/Akshat_Full_Stack_Resume.pdf";
        resumeLink.download = "Akshat_Full_Stack_Resume";
        resumeLink.click();
        break;
      case "github":
        window.open("https://github.com/akshat-g-07", "_blank");
        break;
      case "linkedin":
        window.open(
          "https://www.linkedin.com/in/akshat-garg-580322241/",
          "_blank"
        );
        break;
      case "x":
        window.open("https://twitter.com/akku_g__", "_blank");
        break;
      case "mail":
        commandOutputNode.innerText = Mail();
        break;

      default:
        break;
    }
    parentElement.appendChild(commandOutputNode);

    const terminalNode = document.createElement("div");
    terminalNode.classList = "w-[98%] bg-green-500 h-fit flex flex-start py-2";
    terminalNode.innerHTML = `
    <div class="w-fit bg-red-500 flex items-center px-2">
      <div class="w-fit bg-yellow-400 pr-2">akshat-garg</div>
      <div class="h-6 w-5 bg-white relative">
        <img src="/triangle.png" fill={true} alt="Terminal Triangle" />
      </div>
    </div>
    <input
      class="w-4/5 bg-white focus:outline-none border-none"
      type="text"
         />
 `;

    const terminalNodeInput = terminalNode.querySelector("input");
    terminalNodeInput.onkeydown = (event) => {
      OnKeyDown(event);
    };

    document.querySelectorAll("input").forEach((item) => {
      item.readOnly = true;
    });

    parentElement.appendChild(terminalNode);
    terminalNode.scrollIntoView();
    terminalNodeInput.focus();
  }
}
