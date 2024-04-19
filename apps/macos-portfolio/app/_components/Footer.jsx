"use client";

import Image from "next/image";
import { createRoot } from "react-dom/client";
import Terminal from "./Terminal";
import Notes from "./Notes";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="h-full w-fit flex items-center *:px-2 *:h-fit *:w-fit *:cursor-pointer *:duration-200
      "
      >
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            const notesParent = document.getElementById("notesParent");
            const notes = notesParent.querySelector("#notes");
            const terminalParent = document.getElementById("terminalParent");
            const terminal = terminalParent.querySelector("#terminal");
            if (notes && terminal && terminalParent.classList.contains("z-0")) {
              terminalParent.classList.remove("z-0");
              terminalParent.classList.add("z-10");
              notesParent.classList.remove("z-10");
              notesParent.classList.add("z-0");
            } else if (terminal) {
              terminal.remove();
              sessionStorage.removeItem("commandIndx");
              sessionStorage.removeItem("commandsHistory");
              sessionStorage.removeItem("currentCommand");

              terminalParent.classList.remove("z-10");
              terminalParent.classList.remove("z-0");
              terminalParent.classList.add("-z-10");
              if (notes) {
                notesParent.classList.remove("z-0");
                notesParent.classList.add("z-10");
              }
            } else {
              await new Promise((resolve) => {
                event.target.classList.add("animate-bounce");
                setTimeout(() => {
                  resolve();
                }, 1500);
              });
              event.target.classList.remove("animate-bounce");
              if (notes) {
                notesParent.classList.remove("z-10");
                notesParent.classList.add("z-0");
              }
              terminalParent.classList.remove("-z-10");
              terminalParent.classList.add("z-10");
              const root = createRoot(terminalParent);
              root.render(<Terminal />);
            }
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            Terminal
          </span>
          <Image
            src={"/footer/terminal.png"}
            width={42.5}
            height={42.5}
            alt="Terminal"
          />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            await new Promise((resolve) => {
              event.target.classList.add("animate-bounce");
              setTimeout(() => {
                resolve();
              }, 1500);
            });
            event.target.classList.remove("animate-bounce");
            window.open("https://www.google.com/", "_blank");
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            Chrome
          </span>
          <Image
            src={"/footer/chrome.png"}
            width={37.5}
            height={37.5}
            alt="Picture of the author"
          />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            const notesParent = document.getElementById("notesParent");
            const notes = notesParent.querySelector("#notes");
            const terminalParent = document.getElementById("terminalParent");
            const terminal = terminalParent.querySelector("#terminal");
            if (notes && terminal && notesParent.classList.contains("z-0")) {
              notesParent.classList.remove("z-0");
              notesParent.classList.add("z-10");
              terminalParent.classList.remove("z-10");
              terminalParent.classList.add("z-0");
            } else if (notes) {
              notes.remove();
              notesParent.classList.remove("z-10");
              notesParent.classList.remove("z-0");
              notesParent.classList.add("-z-10");
              if (terminal) {
                terminalParent.classList.remove("z-0");
                terminalParent.classList.add("z-10");
              }
            } else {
              await new Promise((resolve) => {
                event.target.classList.add("animate-bounce");
                setTimeout(() => {
                  resolve();
                }, 1500);
              });
              event.target.classList.remove("animate-bounce");
              if (terminal) {
                terminalParent.classList.remove("z-10");
                terminalParent.classList.add("z-0");
              }
              notesParent.classList.remove("-z-10");
              notesParent.classList.add("z-10");
              const root = createRoot(notesParent);
              root.render(<Notes />);
            }
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            Notes
          </span>
          <Image src={"/footer/notes.png"} width={40} height={40} alt="Notes" />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            await new Promise((resolve) => {
              event.target.classList.add("animate-bounce");
              setTimeout(() => {
                resolve();
              }, 1500);
            });
            event.target.classList.remove("animate-bounce");
            window.open(
              "https://www.linkedin.com/in/akshat-garg-580322241/",
              "_blank"
            );
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            LinkedIn
          </span>
          <Image
            src={"/footer/linkedin.png"}
            width={40}
            height={40}
            alt="LinkedIn"
          />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            await new Promise((resolve) => {
              event.target.classList.add("animate-bounce");
              setTimeout(() => {
                resolve();
              }, 1500);
            });
            event.target.classList.remove("animate-bounce");
            window.open("https://twitter.com/akku_g__", "_blank");
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            X(Twitter)
          </span>
          <Image
            src={"/footer/x.png"}
            width={42.5}
            height={42.5}
            alt="X(Twitter)"
          />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            await new Promise((resolve) => {
              event.target.classList.add("animate-bounce");
              setTimeout(() => {
                resolve();
              }, 1500);
            });
            event.target.classList.remove("animate-bounce");
            window.open("https://github.com/akshat-g-07", "_blank");
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            Github
          </span>
          <Image
            src={"/footer/github.png"}
            width={40}
            height={40}
            alt="Github"
          />
        </div>
        <div
          className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom"
          onClick={async (event) => {
            await new Promise((resolve) => {
              event.target.classList.add("animate-bounce");
              setTimeout(() => {
                resolve();
              }, 1500);
            });
            event.target.classList.remove("animate-bounce");
            window.open("mailto:akshatg805@gmail.com", "_blank");
          }}
        >
          <span className="absolute scale-0 bottom-20 font-semibold mb-1">
            G-Mail
          </span>
          <Image src={"/footer/gmail.png"} width={45} height={45} alt="Gmail" />
        </div>
      </div>
    </>
  );
}
