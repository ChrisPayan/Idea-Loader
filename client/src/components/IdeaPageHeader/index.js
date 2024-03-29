import { useState } from "react";
import brainstormImg from "../../imgs/brainstorm (3).png";

function IdeaPageHeader({ onClick }) {
	const [notesInput, setNotes] = useState("");

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
					{/* <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a> */}
					<div className="flex items-center justify-center py-16">
						<img src={brainstormImg} alt="still not displaying" />
					</div>
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
							<span className="relative inline-block">
								<svg
									viewBox="0 0 52 24"
									fill="currentColor"
									className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
								>
									<defs>
										<pattern
											id="e77df901-b9d7-4b9b-822e-16b2d410795b"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
										width="52"
										height="24"
									/>
								</svg>
								<span className="relative">Create</span>
							</span>{" "}
							quick, free flowing ideas.
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							Click the button below to add more words to your idea map!
						</p>
					</div>
					<div className="flex items-center sm:justify-center">
						<button
							className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
							onClick={onClick}
						>
							Random Words
						</button>
						<div className="block items-center sm:justify-center">
							<form
								className="space-y-8 ng-untouched ng-pristine ng-valid"
								onSubmit={() => {}}
								id="notes"
							>
								<div className="space-y-4">
									<div>
										<div className="mb-2">
											<label className="text-sm" htmlFor="notes">
												Notes:
											</label>
											<input
												className="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
												id="notes"
												type="text"
												value={notesInput}
												onChange={(e) => {
													e.preventDefault();
													setNotes(e.target.value);
												}}
											/>
										</div>
									</div>
								</div>
							</form>
							<button
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
								onClick={() => {
									setNotes("");
								}}
							>
								Write Notes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default IdeaPageHeader;
