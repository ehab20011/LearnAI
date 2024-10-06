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
              By the end of this lesson, you&apos;ll be able to confidently use ChatGPT for various applications and improve your interaction with AI models.
            </p>
          </section>
    
        {/* Step 1, what is ChatGPT and how to access it*/}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 1: Getting Started with ChatGPT
            </h2>
            <p className="mb-4">
              ChatGPT, developed by OpenAI, is one of the most powerful AI language models. It can generate text, answer questions, help with coding, and much more. <strong>In this lesson, we&apos;ll cover how to set it up and make the most of it.</strong>
            </p>
            <p className="mb-4">
              To get started, you will need to create an account with OpenAI and access <a 
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
                    Once you&apos;re logged in, you&apos;ll see the ChatGPT dashboard where you can start typing prompts or questions and also see your 
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
                <strong>Now let&apos;s create your first interaction with ChatGPT!</strong>
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
              <li>Type a question or command (e.g., &quot;Explain the concept of AI.&quot;)</li>
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
    After receiving an initial response from ChatGPT, it&apos;s often helpful to refine your prompt to get more accurate or detailed information. Let’s explore how to iterate on your conversation with the model.
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
      If you&apos;re working with a complicated question, you can break it down into manageable pieces. ChatGPT can address each part individually to provide a detailed and step-by-step explanation.
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
    Although ChatGPT itself does not support direct file uploads, you can share links to files, such as PDFs or photos, to provide more context to your queries. Here&apos;s how to do it.
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
      <li>Copy the link and paste it into your prompt to ChatGPT, along with instructions on what you want it to do with the file (e.g., &quot;Please summarize the content of this PDF: [link]&quot;).</li>
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
      Similar to PDFs, you can attach images by sharing a link to the image. Upload the image to a cloud storage service and paste the link in your ChatGPT prompt. Here&apos;s an example:
    </p>
    <p className="italic text-sm bg-gray-100 p-4 rounded-lg">
      “Here’s a photo related to my question: 
      <a 
        href="https://picsum.photos/id/237/200/300" 
        className="text-blue-600 hover:text-blue-800 underline font-bold"
      >
        myphoto.png
      </a>. 
      Can you describe what&apos;s happening in this image?”
    </p>
  </div>
</section>


{/* ************ Step 6 : Using the Prompt Analyzer Tool */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 6: Using the Prompt Analyzer Tool
  </h2>

  <p className="mb-4 text-lg">
    Sometimes, before sending your prompt to ChatGPT, it&apos;s useful to analyze how well-structured it is. Our web app includes a <strong>Prompt Analyzer Tool</strong> that can help you refine your prompts to ensure you&apos;re getting the best results from ChatGPT.
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
        src="/images/gpt7.png"
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

{/* ************ Step 7 : Understanding the Different GPT Models */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 7: Understanding the Different GPT Models
  </h2>

  <p className="mb-4 text-lg">
    OpenAI has developed several versions of GPT, each with its own strengths and applications. Let’s explore the different models, their unique features, and when to use them.
  </p>

  {/* New subsection: GPT-3, GPT-3.5, and GPT-4 */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">GPT-3, GPT-3.5, and GPT-4</h3>
    <p className="mb-2 text-sm text-gray-700">
      Each version of GPT has been trained on massive datasets, but they differ in scale, complexity, and power.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>
        <strong>GPT-3:</strong> Known for its versatility, GPT-3 can handle a wide variety of tasks such as text generation, summarization, and answering questions. It’s one of the most widely used models today.
      </li>
      <li>
        <strong>GPT-3.5:</strong> An enhanced version of GPT-3 with improved performance in conversation, context understanding, and creative tasks.
      </li>
      <li>
        <strong>GPT-4:</strong> The latest and most advanced model with improved reasoning abilities, complex task handling, and enhanced accuracy. Ideal for complex tasks requiring in-depth understanding.
      </li>
    </ul>
    <p className="mt-2 text-sm text-gray-700">
      While all of these models are incredibly powerful, GPT-4 is recommended for tasks requiring deeper reasoning, while GPT-3 and GPT-3.5 are great for general conversational AI and content generation.
    </p>
  </div>

  {/* Visual of Models */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt8.png"
        alt="Different GPT Models"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">When to Use Each Model</h3>
      <ul className="list-disc list-inside text-lg">
        <li><strong>GPT-3:</strong> General text generation and simpler tasks</li>
        <li><strong>GPT-3.5:</strong> Conversational applications and creative projects</li>
        <li><strong>GPT-4:</strong> Complex reasoning, advanced problem-solving, and tasks requiring more detailed responses</li>
      </ul>
    </div>
  </div>
</section>


{/* ************ Step 8 : Creating Your Own GPT Model */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 8: Creating Your Own GPT Model
  </h2>

  <p className="mb-4 text-lg">
    OpenAI allows developers to create and customize their own GPT models using their API. In this step, we will guide you through the basics of building your own GPT-based solution.
  </p>

  {/* New subsection: Why Create Your Own Model? */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Why Create Your Own GPT Model?</h3>
    <p className="text-sm text-gray-700">
      Building your own GPT model allows you to tailor it to your specific needs, whether it&apos;s for conversational AI, customer service, coding assistance, or content generation. You can fine-tune the model for better accuracy in your domain.
    </p>
  </div>

  {/* Steps to Create Your GPT Model */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt9.png"
        alt="Creating Your Own GPT Model"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Steps to Create Your GPT Model</h3>
      <ol className="list-decimal list-inside space-y-2 text-lg">
        <li>Sign up for an OpenAI API key on their platform.</li>
        <li>Choose the GPT version you want to work with (e.g., GPT-3, GPT-3.5, or GPT-4).</li>
        <li>Fine-tune the model using your specific dataset or input parameters.</li>
        <li>Deploy the model using OpenAI&apos;s API for your project or app.</li>
      </ol>
    </div>
  </div>

  {/* Subsection: Benefits of Custom GPT Models */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Benefits of Custom GPT Models</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>Customized for your business or personal needs.</li>
      <li>Enhanced accuracy for specific tasks or queries.</li>
      <li>Scalable and flexible for various applications.</li>
    </ul>
  </div>

  {/* Visual Example */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt10.png"
        alt="Deploying a Custom GPT Model"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Deploy Your Custom GPT Model</h3>
      <p className="mb-4 text-lg">
        Once you&apos;ve fine-tuned your GPT model, you can deploy it to your web app or service. Use OpenAI&apos;s comprehensive API documentation to integrate it seamlessly into your application.
      </p>
    </div>
  </div>
</section>

{/* ************ Step 9 : Are You a Developer? */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    Step 9: Are You a Developer?
  </h2>

  <p className="mb-4 text-lg">
    If you’re a developer, this step will guide you on how to create and use an OpenAI API key. If you’re not a developer, feel free to <strong className="font-bold">skip this step</strong>.
  </p>

  {/* New subsection: For Developers - Creating and Using an API Key */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">For Developers: How to Create and Use an API Key</h3>
    <p className="text-sm text-gray-700">
      To interact with OpenAI’s models programmatically, you’ll need an API key. Here’s a quick guide to get started:
    </p>
    <ol className="list-decimal list-inside mt-2 space-y-2 text-sm text-gray-700">
      <li>
        <strong>Create an OpenAI Account:</strong> Go to 
        <a 
          href="https://platform.openai.com/signup" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 underline font-bold"
        >
          OpenAI Platform
        </a> and sign up.
      </li>
      <li>
        <strong>Navigate to the API Section:</strong> Once logged in, go to the API section of your dashboard.
      </li>
      <li>
        <strong>Create an API Key:</strong> Click “Create API Key” and copy the generated key.
      </li>
      <li>
        <strong>Store Your API Key Securely:</strong> Keep this key secure, as it grants access to the OpenAI API.
      </li>
      <li>
        <strong>Using the API Key:</strong> In your code, set up an environment variable or directly input the API key to start making requests to OpenAI’s models.
      </li>
    </ol>
    <p className="text-sm text-gray-700 mt-2">
      You can use the OpenAI API to interact with models like GPT-3, GPT-4, and more by sending requests through your applications.
    </p>
  </div>

  {/* Visual Example for Developers */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/gpt11.png"
        alt="Creating an API Key"
        width={600}
        height={338}
        layout="responsive"
        className="rounded-lg shadow-md"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Example Code for Using the API Key</h3>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-md text-sm overflow-x-auto">
        <code>
{`import openai

openai.api_key = 'YOUR_API_KEY'

response = openai.Completion.create(
  engine="text-davinci-003",
  prompt="Explain the concept of AI.",
  max_tokens=100
)

print(response.choices[0].text)`}  
        </code>
      </pre>
    </div>
  </div>

  {/* Subsection: For Non-Developers */}
  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-yellow-800">For Non-Developers</h3>
    <p className="text-sm text-gray-700">
      If you&apos;re not a developer, you can <strong className="font-bold">skip this step</strong>. You don&apos;t need an API key for basic interactions with ChatGPT.
    </p>
  </div>
</section>

{/* ************ Step 10 : Get Ready for the GPT Quiz */ }
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
    You’re Ready to Take the GPT Quiz!
  </h2>

  <p className="mb-4 text-lg">
    Congratulations on completing all the lessons! Now it’s time to put your knowledge to the test and see how well you understand GPT models and AI. Click the button below to start the quiz and have fun testing your skills!
  </p>

  {/* Button to route to the quiz */}
  <div className="flex justify-center my-8">
    <a 
      href="/ai-game" 
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
      Start the GPT Quiz
    </a>
  </div>

  {/* Support Section */}
  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold mb-2 text-blue-800">Need Help?</h3>
    <p className="text-sm text-gray-700">
      If you have any questions or need assistance, feel free to reach out to OpenAI’s support team at <a 
        href="mailto:support@openai.com" 
        className="text-blue-600 hover:text-blue-800 underline font-bold"
      >
        support@openai.com
      </a>.
    </p>
  </div>
</section>


</div>
        <Footer />
        </>
    );
  }
