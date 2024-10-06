"use client"; 
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Lesson4Page() {
    return (
        <>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Lesson 4: Understanding Google Co-Pilot</h1>
          
          <section className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200 text-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Lesson Overview</h2>
            <p>
              In this lesson, you will learn:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>What Google Co-Pilot is and its core capabilities</li>
              <li>How to access and set up Google Co-Pilot for various tasks</li>
              <li>Basic steps to collaborate effectively using Google Co-Pilot</li>
              <li>Tips for maximizing productivity with Google Co-Pilot</li>
              <li>How to integrate Google Co-Pilot with other tools and services</li>
            </ul>
            <p className="mt-2">
              By the end of this lesson, you will be able to use Google Co-Pilot to enhance your collaborative work processes and automate tasks in an efficient way.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 1: Getting Started with Google Co-Pilot
            </h2>
            <p className="mb-4">
                To begin using Google Co-Pilot, navigate to the following link and sign in with your Google account:
                <a 
                href="https://co-pilot.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-bold"
                >
                Google Co-Pilot
                </a>.
            </p>
            <p className="mb-4">
                Once you have signed in, you will be directed to the main Google Co-Pilot interface, as shown below:
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
                <div className="w-full md:w-1/2">
                <Image
                    src="/images/copilot1.png"
                    alt="Google Co-Pilot Main Page"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="rounded-lg shadow-md"
                />
                </div>

                <div className="w-full md:w-1/2">
                <p>
                    Here, you can ask Co-Pilot anything by typing in the chat box at the bottom of the screen. Co-Pilot is designed to assist you with tasks and provide information based on your queries.
                </p>
                <p className="mt-4">
                    The new streamlined interface is faster, simpler, and offers a more personalized experience.
                </p>
                </div>
            </div>
            </section>

            <section className="mb-8">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 3: Co-Pilots Response with Links and Images
  </h2>
  <p className="mb-4">
    When you ask a question, Co-Pilot not only generates a detailed response, but it also provides helpful resources and even images related to your query.
    For example, when we asked about NYC, Co-Pilot included links for further learning and relevant images:
  </p>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
    <div className="w-full md:w-1/2">
      <Image
        src="/images/copilot4.png"
        alt="Google Co-Pilot generated links"
        width={600}
        height={150}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <p>
        Co-Pilot provides useful links at the end of the response, allowing you to learn more from trusted sources such as Britannica, NYC.gov, and Wikipedia.
        These helper links are great for expanding on the topic you are exploring.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
    <div className="w-full md:w-1/2">
      <Image
        src="/images/copilot3.jpg"
        alt="Google Co-Pilot generated NYC image"
        width={600}
        height={400}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <p>
        Co-Pilot may also include related images, giving you a more engaging and informative experience. In this case, it provided a stunning aerial view of the New York City skyline.
      </p>
    </div>
  </div>
</section>

<section className="mb-8">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 4: Exploring Co-Pilot Interactive Features
  </h2>
  <p className="mb-4">
    When interacting with Google Co-Pilot, you will notice several helpful features designed to enhance your experience and streamline your queries. Let’s take a closer look at the available options:
  </p>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
    <div className="w-full md:w-1/2">
      <Image
        src="/images/copilot5.png"
        alt="Google Co-Pilot chat options"
        width={600}
        height={150}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <p>
        As shown in the image, after typing your question, Co-Pilot provides suggested prompts in blue buttons, such as <strong> What are some must-visit places in NYC? </strong> These suggestions are useful for exploring related topics and making the conversation flow seamlessly.
      </p>
      <p className="mt-4">
        Additionally, you have the option to:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Add images:</strong> You can enhance your query by attaching images to receive visual-based answers or explanations.</li>
          <li><strong>Use the microphone:</strong> For hands-free interaction, Co-Pilot allows you to ask questions via voice using the microphone button.</li>
        </ul>
      </p>
    </div>
  </div>

  <p className="mb-4">
    Co-Pilot not only answers your questions but also suggests follow-up topics to keep the conversation going. Try out different questions and explore how Co-Pilot responds with rich media, text, and suggested prompts to deepen your understanding of the topic.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 6: Customizing Your Google Co-Pilot Experience
  </h2>
  <p className="mb-4">
    Google Co-Pilot offers various customization options to improve your user experience. You can find these settings by clicking on the settings icon in the top-right corner of the interface. Let’s explore the options available in the menu.
  </p>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
    <div className="w-full md:w-1/2">
      <Image
        src="/images/copilot6.png"
        alt="Google Co-Pilot customization menu"
        width={400}
        height={500}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <p>
        As shown in the image, the customization menu offers several settings, including:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Appearance:</strong> You can switch between <strong>Light</strong>, <strong>Dark</strong>, or <strong>System Default</strong> themes depending on your preference.</li>
        <li><strong>Privacy:</strong> Manage your privacy settings to ensure your information is handled securely.</li>
        <li><strong>Consumer Health Privacy:</strong> Provides an option for health-related privacy settings.</li>
        <li><strong>Feedback:</strong> You can submit feedback about your experience with Google Co-Pilot to help improve its functionality.</li>
        <li><strong>Your Privacy Choices:</strong> You have the option to adjust your privacy choices to align with your preferences and needs.</li>
      </ul>
    </div>
  </div>

  <p className="mb-4">
    These settings allow you to personalize the appearance and privacy aspects of your Google Co-Pilot, ensuring it aligns with your preferences.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 7: Using the Google Co-Pilot App
  </h2>
  <p className="mb-4">
    In addition to using Google Co-Pilot on your desktop, you can also enjoy the AI-powered chat on your phone by downloading the Google Co-Pilot app. The app offers the same features as the desktop version, allowing you to ask questions, get help with tasks, and interact with Co-Pilot on the go.
  </p>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
    <div className="w-full md:w-1/2">
      <Image
        src="/images/copilot7.png"
        alt="Google Co-Pilot App QR Code"
        width={300}
        height={400}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <p>
        As shown in the image, you can download the app by scanning the QR code, or by visiting your phones app store to search for Google Co-Pilot. The app provides AI-powered chat capabilities that make it easy to interact with Co-Pilot wherever you are.
      </p>
      <p className="mt-4">
        With the app, you can ask questions, get information, and receive suggestions just like on the desktop version, making it a powerful tool for staying productive on the go.
      </p>
    </div>
  </div>

  <p className="mb-4">
    Download the app now and start interacting with Google Co-Pilot anywhere, anytime.
  </p>

  <div className="text-center">
    <a 
      href="https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/copilot-app?form=MY02E3&OCID=MY02E3" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Learn More
    </a>
  </div>
</section>

{/* Step 8: Prompt Analyzer Feature */}
<section className="mb-8">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 8: Improve Your AI Prompts with Our Prompt Analyzer
  </h2>
  <p className="mb-4">
    If you’re looking to take your AI interactions to the next level, we’ve got you covered! Our web app includes a powerful <strong>Prompt Analyzer</strong> feature designed to help you improve the way you prompt AI models like Google Co-Pilot. This feature allows you to refine and optimize your queries for better results.
  </p>

  {/* Button to route to the Prompt Analyzer */}
  <div className="flex justify-center my-8">
    <a 
      href="/prompt-analyzer" 
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Try the Prompt Analyzer
    </a>
  </div>
</section>

{/* Step 9: Conclusion and Quiz */}
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 9: You’re Ready to Use Google Co-Pilot!
  </h2>
  <p className="mb-4 text-lg">
    Great job! You have successfully learned how to navigate and use Google Co-Pilot. You are now equipped to take full advantage of its AI-powered features for your tasks and projects.
  </p>

  <p className="mb-4 text-lg">
    Ready to test your knowledge? Take the AI quiz and challenge yourself on what you have learned so far!
  </p>

  {/* Button to route to the quiz */}
  <div className="flex justify-center my-8">
    <a 
      href="/ai-game" 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Start the AI Quiz
    </a>
  </div>
</section>


        </div>
        <Footer />
        </>
    );
}