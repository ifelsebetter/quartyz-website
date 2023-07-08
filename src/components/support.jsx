import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";

const Support = () => {
  return (
    <div className="max-w-3xl mx-auto my-20 px-4">
      <div className="flex justify-start items-center mb-6">
        <a href="/">
          <IoCaretBackOutline className="text-2xl" />
        </a>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">How to Obtain the Key :</h2>
          <div className="mt-4">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tnSNdHDzrvg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Common Problems :</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Script Not Showing</h3>
          <p>
            If the script is not being displayed in the game, try the following troubleshooting steps:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>Delete the "Mukuro" folder inside the executor workspace folder.</li>
            <li>
              Consider using a different executor as the current one may not be
              compatible with the script.
            </li>
          </ol>
          <h3 className="text-xl font-bold mt-8">Function Not Working</h3>
          <p>
            If the function of the script is not working properly or not working at all, you can try the following solutions:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              Rejoin the game and execute the script again, as this can often help resolve the issue.
            </li>
          </ol>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Reporting Bugs or Issues :</h2>
        <div className="mt-4">
          <p>
            If you encounter any bugs or issues, please report them in the{" "}
            <strong>🔧┇report-bug</strong> channel.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Need Help?</h2>
        <div className="mt-4">
          <p>Here are a couple of ways to seek assistance:</p>
          <ul className="list-disc list-inside pl-4">
            <li>
              Ask Helper Bot for assistance by typing <strong>/help</strong>.
            </li>
            <li>
              If the bot doesn't provide a satisfactory answer, ask for help in
              the general chat. Helpers or other users might have an answer for
              you.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
