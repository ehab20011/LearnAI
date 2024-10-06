"use client"; 
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Lesson3Page() {
    return (
        <>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Lesson 3: Understanding Google Gemini</h1>
          
          <section className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200 text-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Lesson Overview</h2>
            <p>
              In this lesson, you will learn:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>What Google Gemini is and its core capabilities</li>
              <li>How to access and set up Google Gemini for various applications</li>
              <li>Basic steps to create and run tasks using Google Gemini</li>
              <li>Tips for effectively using Google Gemini in your projects</li>
              <li>How to integrate Google Gemini with other tools</li>
            </ul>
            <p className="mt-2">
              By the end of this lesson, you'll be able to confidently utilize Google Gemini to enhance your AI and machine learning workflows.
            </p>
          </section>
    
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 1: Getting Started with Google Gemini
            </h2>
            <p className="mb-4">
              After logging into your Google Cloud Platform account, you can start working with Google Gemini. Follow the steps below to get started.
            </p>
            <p className="mb-4">
              First, log into your Google Cloud account and navigate to your project dashboard. You should see a section that promotes Google Gemini.
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/gemini1.png"
                  alt="Google Cloud Gemini Section"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  Once you&apos;re logged in, you will see the dashboard as shown in the image. To begin, click the <strong>“Try Gemini”</strong> button on the right side of your screen to start working with Google Gemini 1.5 Pro.
                </p>
                <p className="mt-4">
                  This will direct you to the Google Gemini setup page, where you can begin creating and running tasks using the AI model.
                </p>
              </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 2: Welcome to Google Gemini
            </h2>
            <p className="mb-4">
              After clicking &quot;Try Gemini,&quot; you will be directed to the Gemini welcome screen, as shown below. Here, you can start interacting with Google&apos;s AI assistant for cloud-related tasks.
            </p>
            <p className="mb-4">
              The assistant is designed to help you with troubleshooting, reviewing code snippets, and answering questions about Google Cloud services.
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/gemini2.png"
                  alt="Google Gemini Welcome Screen"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  On this page, click the <strong>“Start Chatting”</strong> button to begin your session with Google Gemini. This will open a chat interface where you can type your questions or tasks for the AI to handle.
                </p>
                <p className="mt-4">
                  Gemini will assist you by answering questions or troubleshooting tasks related to Google Cloud.
                </p>
              </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 3: Google Gemini Prompt Interface
            </h2>
            <p className="mb-4">
              After clicking &quot;Start Chatting,&quot; you will be directed to the Google Gemini prompt interface, where you can start interacting with the model. The interface allows you to write your prompts, insert media, and customize the response.
            </p>
            <p className="mb-4">
              This interface gives you control over various settings like temperature, token limits, and grounding. You can choose the model version and region, providing flexibility for different use cases.
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/gemini3.png"
                  alt="Google Gemini Prompt Interface"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  To get started, simply type your prompt into the text box labeled <strong>“Prompt”</strong>. You can also insert media, variables, or examples to make your prompt more specific.
                </p>
                <p className="mt-4">
                  Adjust the model settings on the right, including temperature (which controls creativity), output token limits, and grounding options. Once ready, hit the submit icon to receive a response from Gemini.
                </p>
              </div>
            </div>

            <p className="mb-4">
              At the bottom of the interface, you will also find example tasks like &quot;Question answering about an image,&quot; &quot;Extract video chapters,&quot; and &quot;Document classification.&quot; These can help guide your interactions with Gemini.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 4: Asking &quot;What is Artificial Intelligence?&quot;
            </h2>
            <p className="mb-4">
              Now that you&apos;re familiar with the Google Gemini interface, lets try out your first prompt! In the &quot;Prompt&quot; box, type <strong>&quot;What is artificial intelligence?&quot;</strong> and click on the submit button.
            </p>
            <p className="mb-4">
              After submitting the prompt, Google Gemini will generate a detailed response defining artificial intelligence, along with its types and key concepts. Here is what the response should look like:
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/gemini4.png"
                  alt="Response to 'What is Artificial Intelligence?'"
                  width={600}
                  height={400}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  The response will provide an overview of artificial intelligence, including the three types: Narrow AI, General AI, and Super AI. It will also introduce key concepts like Machine Learning, Deep Learning, Natural Language Processing (NLP), and more.
                </p>
                <p className="mt-4">
                  Use this response as a foundation to ask follow-up questions or explore deeper into AI concepts.
                </p>
              </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 5: Are You a Developer?
            </h2>
            <p className="mb-4 text-lg">
                If you’re a developer, this step will guide you on how to create and use a Google Cloud API key to interact with the Gemini API. If you’re not a developer, feel free to <strong className="font-bold">skip this step</strong>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">For Developers: How to Create and Use an API Key</h3>
                <p className="text-sm text-gray-700">
                    To start using Google Gemini via API, you need to create an API key. Here’s a quick guide to get started:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>
                        <strong>Create a Google Cloud Account:</strong> Go to 
                        <a 
                            href="https://cloud.google.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800 underline font-bold"
                        >
                            Google Cloud
                        </a> and sign up.
                    </li>
                    <li>
                        <strong>Navigate to the API Section:</strong> Once logged in, navigate to the API & Services section in your Google Cloud console.
                    </li>
                    <li>
                        <strong>Create an API Key:</strong> In the API & Services dashboard, click on “Credentials,” then “Create Credentials,” and select “API Key.”
                    </li>
                    <li>
                        <strong>Store Your API Key Securely:</strong> Copy the generated API key and store it securely, as this will allow you to interact with the Gemini API.
                    </li>
                    <li>
                        <strong>Using the API Key:</strong> You can now use this key to send requests to Google Gemini. Refer to the API documentation for details on integrating it into your application.
                    </li>
                </ol>
            </div>

            {/* Visual example of the API setup */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/gemini5.png"
                        alt="Gemini API Setup"
                        width={600}
                        height={400}
                        layout="responsive"
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <p>
                        Once your API key is set up, you can follow the Gemini API documentation to start generating content or performing tasks via API. This will enable advanced integrations with your applications or workflows.
                    </p>
                </div>
            </div>

            {/* Subsection: For Non-Developers */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">For Non-Developers</h3>
                <p className="text-sm text-gray-700">
                    If you&apos;re not a developer, you can <strong className="font-bold">skip this step</strong>. You don&apos;t need an API key for basic interactions with Google Gemini.
                </p>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 6: Explore the Possibilities with Google Gemini
            </h2>
            <p className="mb-4 text-lg">
                Google Gemini offers a wide array of features that unlock exciting possibilities for developers, researchers, and businesses alike. Whether you&apos;re working on natural language processing, multimedia content generation, or advanced AI applications, Gemini has something for you. Let&apos;s explore some of the cool things you can do with Gemini.
            </p>

            {/* Section 1: Multimodal Capabilities */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">1. Multimodal Content Generation</h3>
                <p className="text-sm text-gray-700">
                    Google Gemini isn&apos;t limited to just text. It can handle multimodal prompts, which means you can provide text, audio, images, and even video as input, and it will respond accordingly. This feature is perfect for:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>Generating image captions based on image inputs</li>
                    <li>Providing summaries of audio files</li>
                    <li>Extracting information from videos, like chapter titles or descriptions</li>
                </ul>
            </div>

            {/* Section 2: Advanced NLP (Natural Language Processing) */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-green-800">2. Advanced Natural Language Processing (NLP)</h3>
                <p className="text-sm text-gray-700">
                    One of the core strengths of Google Gemini is its ability to understand and process human language. This enables it to perform a range of NLP tasks such as:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>Text summarization: Generate concise summaries of long texts</li>
                    <li>Question answering: Get precise answers to questions based on text input</li>
                    <li>Sentiment analysis: Analyze the emotional tone of a piece of text</li>
                    <li>Text translation: Translate between multiple languages seamlessly</li>
                </ul>
            </div>

            {/* Section 3: Custom Fine-Tuning */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">3. Custom Fine-Tuning for Specific Use Cases</h3>
                <p className="text-sm text-gray-700">
                    Google Gemini allows you to fine-tune the model based on your own datasets or business needs. This means you can create a version of Gemini that&apos;s highly specialized for tasks like:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>Customer support: Train Gemini to understand and respond to your company&apos;s specific queries</li>
                    <li>Healthcare: Customize Gemini for medical data interpretation or diagnosis support</li>
                    <li>Legal analysis: Tailor Gemini to process legal documents and provide recommendations</li>
                </ul>
            </div>

            {/* Section 4: AI-Assisted Code Writing */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">4. AI-Assisted Code Writing</h3>
                <p className="text-sm text-gray-700">
                    Gemini can also assist developers by helping to generate, review, and optimize code. It can:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>Generate code snippets based on text descriptions of what you want to build</li>
                    <li>Provide code suggestions as you type</li>
                    <li>Review existing code and recommend optimizations or fixes</li>
                </ul>
            </div>

            {/* Section 5: Automating Data Analysis */}
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-red-800">5. Automating Data Analysis</h3>
                <p className="text-sm text-gray-700">
                    Gemini can be used to automate data analysis, making it easier to uncover insights from large datasets. Some key features include:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>Generating reports and summaries based on raw data</li>
                    <li>Predictive analysis using machine learning models</li>
                    <li>Clustering and categorization of data</li>
                </ul>
            </div>

            {/* Section 6: Integrating with Other Google Cloud Services */}
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 my-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">6. Seamless Integration with Google Cloud</h3>
                <p className="text-sm text-gray-700">
                    Since Gemini is part of the Google Cloud ecosystem, you can easily integrate it with other Google Cloud services like:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
                    <li>BigQuery for large-scale data analysis</li>
                    <li>Cloud Vision for image recognition tasks</li>
                    <li>Cloud Translation for multilingual applications</li>
                    <li>Vertex AI for building, deploying, and scaling machine learning models</li>
                </ul>
            </div>

            <p className="mt-4 text-lg">
                The possibilities with Google Gemini are endless. Whether you&apos;re looking to streamline your business operations, build cutting-edge AI applications, or automate complex workflows, Gemini has the tools to make it happen.
            </p>
        </section>

        <section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    You’re Ready to Start Using Google Gemini and Test Your Skills!
  </h2>

  <p className="mb-4 text-lg">
    Congratulations on completing all the lessons! Now it’s time to put your knowledge into practice. You’ve learned about the amazing features and capabilities of Google Gemini, and now it’s time to apply those skills in your own projects. You can also test your knowledge by taking the AI quiz we’ve prepared!
  </p>

  {/* Buttons to start using Google Gemini and route to the quiz */}
  <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 my-8">
    <a 
      href="https://cloud.google.com/gemini" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Start Using Google Gemini
    </a>
    <a 
      href="/ai-game" 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Take the AI Quiz
    </a>
  </div>

  {/* Support Section */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Need Help?</h3>
    <p className="text-sm text-gray-700">
      If you have any questions or need assistance, feel free to reach out to Google Clouds support team at <a 
        href="https://cloud.google.com/support" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline font-bold"
      >
        Google Cloud Support
      </a>.
    </p>
  </div>
</section>

        </div>
        <Footer />
        </>
    );
}
