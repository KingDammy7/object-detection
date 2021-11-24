import "./App.css";
import adi from "./assets/adi.jpg";
import logoa from "./assets/logoa.png";


const App = () => {
	return (
		<div class='bg-blue-400'>
			<div class=''>
				<div class='bg-blue-400'>
					<div class='justify-center rounded shadow max-w-3xl md-full mx-auto bg-blue-200 pt-3'>
              <div class="my-10">
              <div class='text-center font-semibold text-xl'>
                Welcome to Tokunbo Object Detecting Service
              </div>
              <div class='flex flex-col items-center justify-center divide-y divide-white-300 px-4 w-full'>
					<div class='w-full mt-4 md:w-10/12 xl:w-8/12'>
						<div class='flex justify-end items-center pt-2 px-10 space-x-10 text-sm font-semibold'>
							<div class='inline-block font-semibold text-xs'>
								CAR DETECTION
							</div>
							<div class='inline-block font-semibold text-xs'>
								OBJECT DETECTION
							</div>
							<div class='inline-block font-semibold text-xs'>
								TRUCK DETECTION
							</div>
						</div>
					</div>
				</div>
            </div>
            
						<div class="mx-10 rounded-xl">
              <img src={adi} alt='profile' class='rounded-xl object-contain justify-center h-150 w-full mr-8' />
            </div>
						<br />
						<div class='flex space-x-8 justify-center'>
							<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded h-12'>
								Upload
							</button>
							<button class='bg-blue-500 hover:bg-blue-700 truncate text-white font-bold py-3 px-20 rounded h-12'>
								Start Detection
							</button>
						</div>
						<br />

						<h3 class='text-2xl pl-6'>Overview</h3>

						<p class=' mt-4 pl-6 text-base font-semibold'>
							This is an Audi A4 2015, The 2015 Audi A4 ranks near the top of
							the luxury small car class. This Audi has a good reliability
							rating, and it offers a spacious and luxurious interior, confident
							engine performance, and refined handling.{" "}
						</p>

						<div class='flex justify-center mt-8 text-l font-semibold'>
							<div class='flex-auto text-center text-s font-normal'>
								Make
								<div class='flex justify-center items-center  space-x-2 text-l font-semibold'>
									<div class='inline-block font-semibold text-xl'>Audi</div>
									<div class='relative w-13 h-13 justify-start'>
										<img
											src={logoa}
											alt='profile'
											class='w-10 rounded-full border border-gray-100 shadow-sm'
										/>
									</div>
								</div>
							</div>
							<div class='flex-auto text-center text-base font-normal'>
								Model
								<p class=" font-semibold text-xl">A4</p>
							</div>
							<div class='flex-auto text-center text-base font-normal'>
								Generation
								<p class=" font-semibold text-xl">IV (B8) Facelift (2011-2015)</p>
							</div>
							<div class='flex-auto text-center text-base font-normal'>
								Year
								<p class=" font-semibold text-xl">2015</p>
							</div>
              <div class='flex-auto text-center text-base font-normal'>
								Prob
								<p class=" font-semibold text-xl">100.00</p>
							</div>
						</div>

						<div class='flex justify-center mt-8 text-l font-semibold'>
            
              <div class='flex-auto text-center text-base font-normal'>
								Color(probability)
								<p class=" font-semibold text-xl">Blue (0.952) </p>
							</div>
							<div class='flex-auto text-center text-base font-normal'>
								Angle(probability)
								<p class=" font-semibold text-xl">Front(1)</p>
							</div>
							<div class='flex-auto text-center mb-8 text-base font-normal'>
								bbox
								<p>br_x:(0.8987)</p>
                				<p>br_y:(0.87)</p>
								<p>tl_x:(0.1164)</p>
								<p>tl_y:(0.1555)</p>
							</div>
						</div>
					</div>

					<br />
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default App;
