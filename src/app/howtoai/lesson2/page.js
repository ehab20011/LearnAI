// src/app/howtoai/lesson2/page.js
"use client"; // This makes the component a Client Component
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Lesson2Page() {
    return (
        <>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Lesson 2: Using ChatGPT Effectively</h1>
          
          <section className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200 text-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Lesson Overview</h2>
            <p>
              In this lesson, you will learn:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>What ChatGPT is and its capabilities</li>
              <li>How to access and set up ChatGPT</li>
              <li>Basic steps to create and run prompts</li>
              <li>Tips for effective use of the language model</li>
              <li>How to interpret and iterate on results</li>
            </ul>
            <p className="mt-2">
              By the end of this lesson, you'll be able to confidently use ChatGPT for various applications and improve your interaction with AI models.
            </p>
          </section>
    
        {/* Step 1, what is ChatGPT and how to access it*/}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 1: Getting Started with ChatGPT
            </h2>
            <p className="mb-4">
              ChatGPT, developed by OpenAI, is one of the most powerful AI language models. It can generate text, answer questions, help with coding, and much more. <strong>In this lesson, we'll cover how to set it up and make the most of it.</strong>
            </p>
            <p className="mb-4">
              To get started, you will need to create an account with OpenAI and access{' '}
              <a 
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline hover:no-underline font-bold"
              >
                ChatGPT
              </a>
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/chatgpt-homepage.png"
                  alt="ChatGPT Interface"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  This is what you should see when you first access ChatGPT.
                </p>
                <p className="mt-4">
                  <br />
                  Go ahead and click on <strong>the text box.</strong>
                </p>
              </div>
            </div>

            {/* Border between "Try ChatGPT and Chat Dashboard" */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/historygpt.png"
                  alt="ChatGPT Dashboard"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">


              <h3 className="text-xl font-semibold mb-4 mt-2">The ChatGPT Dashboard</h3>

                <p>
                    Once you're logged in, you'll see the ChatGPT dashboard where you can start typing prompts or questions and also see your 
                    history on the left.
                </p>
                <p className="mt-4">
                   Let’s explore how to use it effectively.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Type a new prompt in the input box</li>
                  <li>Press enter to submit your prompt</li>
                </ul>

                <br />
                <strong>Now let's create your first interaction with ChatGPT!</strong>
              </div>
            </div>
          </section>

          {/* ************ Step 2 : Interacting with ChatGPT */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 2: Creating Effective Prompts for ChatGPT
                </h2>

        <p className="mb-4 text-lg">
          Working with ChatGPT requires clear, well-structured prompts. This allows the model to generate accurate and helpful responses. For this lesson, we will practice creating a simple prompt about a tech-related topic.
        </p>

        {/* New subsection: What is a prompt? */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Before we move forward, what is a Prompt?</h3>
          <p className="mb-2 text-sm text-gray-700">
            A prompt is a command or question that you input into ChatGPT, which the AI will respond to. The quality of the response depends on how you structure the prompt.
          </p>
          <p className="text-sm text-gray-700">
            Effective prompting is essential for maximizing the potential of AI tools. Make sure to provide clear instructions and sufficient context.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/gpt3.png"  
              alt="Creating a prompt in ChatGPT"
              width={600}
              height={338}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Writing Your First Prompt</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Type a question or command (e.g., "Explain the concept of AI.")</li>
              <li>Press enter to submit your prompt.</li>
              <li>ChatGPT will respond with its answer.</li>
            </ol>
          </div>
        </div>

        </section>

        {/* ************ Step 3 : Iterating on ChatGPT Responses */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 3: Iterating on ChatGPT Responses
  </h2>

  <p className="mb-4 text-lg">
    After receiving an initial response from ChatGPT, it's often helpful to refine your prompt to get more accurate or detailed information. Let’s explore how to iterate on your conversation with the model.
  </p>

  {/* New subsection: Refining Prompts */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Refining Prompts</h3>
    <p className="mb-2 text-sm text-gray-700">
      When you receive a response from ChatGPT, ask yourself:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-700">
      <li>Does the response cover everything I need?</li>
      <li>Are there details missing or areas that could be clarified?</li>
      <li>Can I add more context or information to get a better result?</li>
    </ul>
    <p className="mt-2 text-sm text-gray-700">
      By rephrasing or adding new details to your original prompt, you can improve the quality of the responses. 
    </p>
  </div>

  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt4.png"
        alt="Iterating on ChatGPT Response"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Refining Example</h3>
      <p className="mb-2 text-lg">
        Let’s say you asked ChatGPT: <strong>“Explain the concept of AI.”</strong> 
        If the response is too broad or lacks detail, you might follow up with:
      </p>
      <p className="mb-4 italic text-lg">
        “Can you explain it in the context of neural networks, and give examples?”
      </p>
    </div>
  </div>
</section>

        {/* ************ Step 4 : Handling Complex Queries */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 4: Handling Complex Queries
  </h2>

  <p className="mb-4 text-lg">
    ChatGPT is also great at handling multi-step or complex queries. Let’s explore how you can break down a large question into smaller parts and get the most out of your interaction with the model.
  </p>

  {/* New subsection: Breaking Down Complex Queries */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Breaking Down Queries</h3>
    <p className="mb-2 text-sm text-gray-700">
      If you're working with a complicated question, you can break it down into manageable pieces. ChatGPT can address each part individually to provide a detailed and step-by-step explanation.
    </p>
    <p className="text-sm text-gray-700">
      For example, instead of asking, “Explain the history of AI,” you can ask:
    </p>
    <ol className="list-decimal list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>“When was AI first conceptualized?”</li>
      <li>“What are the key milestones in AI development?”</li>
      <li>“What are the most recent advancements in AI?”</li>
    </ol>
    <p className="text-sm text-gray-700 mt-2">
      This approach will allow you to dig deeper into each area and get more detailed responses.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt5.png"
        alt="Handling Complex Queries with ChatGPT"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Example</h3>
      <p className="mb-4 text-lg">
        By breaking down your questions, you can better understand each concept and get clearer responses.
      </p>
    </div>
  </div>
</section>

{/* ************ Step 5 : Attaching Photos or PDFs */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 5: Attaching Photos or PDFs
  </h2>

  <p className="mb-4 text-lg">
    Although ChatGPT itself does not support direct file uploads, you can share links to files, such as PDFs or photos, to provide more context to your queries. Here's how to do it.
  </p>

  {/* New subsection: How to Attach Files */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">How to Attach Photos or PDFs</h3>
    <p className="text-sm text-gray-700">
      You can upload your files (e.g., PDFs or photos) to a cloud storage service (like Google Drive, Dropbox, or OneDrive) and share the link with ChatGPT. Follow these steps:
    </p>
    <ul className="list-decimal list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>Upload your file to a cloud storage service.</li>
      <li>Get the sharing link for the file. Make sure the link is public or viewable by anyone with the link.</li>
      <li>Copy the link and paste it into your prompt to ChatGPT, along with instructions on what you want it to do with the file (e.g., "Please summarize the content of this PDF: [link]").</li>
    </ul>
  </div>

  {/* Visual Example */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt6.png"
        alt="Attaching a file in ChatGPT"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Example</h3>
      <p className="text-lg">
        Here’s an example of how you might share a file with ChatGPT:
      </p>
      <p className="italic text-sm bg-gray-100 p-4 rounded-lg">
        “Here’s a link to a PDF I need summarized: 
        <a 
          href="https://example.com/myfile.pdf" 
          className="text-blue-600 hover:text-blue-800 underline font-bold"
        >
          myfile.pdf
        </a>. 
        Can you summarize its key points?”
      </p>
    </div>
  </div>

  {/* Subsection: Using Image Links in Prompts */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Using Image Links</h3>
    <p className="text-sm text-gray-700">
      Similar to PDFs, you can attach images by sharing a link to the image. Upload the image to a cloud storage service and paste the link in your ChatGPT prompt. Here's an example:
    </p>
    <p className="italic text-sm bg-gray-100 p-4 rounded-lg">
      “Here’s a photo related to my question: 
      <a 
        href="https://picsum.photos/id/237/200/300" 
        className="text-blue-600 hover:text-blue-800 underline font-bold"
      >
        myphoto.png
      </a>. 
      Can you describe what's happening in this image?”
    </p>
  </div>
</section>


{/* ************ Step 6 : Using the Prompt Analyzer Tool */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 6: Using the Prompt Analyzer Tool
  </h2>

  <p className="mb-4 text-lg">
    Sometimes, before sending your prompt to ChatGPT, it's useful to analyze how well-structured it is. Our web app includes a <strong>Prompt Analyzer Tool</strong> that can help you refine your prompts to ensure you're getting the best results from ChatGPT.
  </p>

  {/* New subsection: Benefits of the Prompt Analyzer */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Why Use the Prompt Analyzer?</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>It checks your prompt for clarity and completeness.</li>
      <li>It suggests improvements to make your prompt more specific and effective.</li>
      <li>It helps you avoid common pitfalls in prompt formulation, such as vague instructions or lack of context.</li>
    </ul>
    <p className="text-sm text-gray-700 mt-2">
      Using the Prompt Analyzer before interacting with ChatGPT ensures that you’re providing the AI with the best possible instructions to get accurate and relevant responses.
    </p>
  </div>

  {/* Visual and Call to Action */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/prompt-analyzer.png"
        alt="Prompt Analyzer Tool"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Try the Prompt Analyzer</h3>
      <p className="mb-4 text-lg">
        You can use the Prompt Analyzer tool in our web app to get feedback on your prompts. Click the button below to start analyzing your prompts!
      </p>
      <a 
        href="/prompt-analyzer" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Go to Prompt Analyzer
      </a>
    </div>
  </div>
</section>

        </div>

        <Footer />
        </>
    );
  }
