// src/app/howtoai/lesson1/page.js
import Image from 'next/image';

export default function Lesson1Page() {
    return (
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Lesson 1: Using Google's Notebook LM</h1>
          
          <section className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200 text-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Lesson Overview</h2>
            <p>
              In this lesson, you will learn:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>What Google's Notebook LM is and its capabilities</li>
              <li>How to access and set up Notebook LM</li>
              <li>Basic steps to create and run prompts</li>
              <li>Tips for effective use of the language model</li>
              <li>How to interpret and iterate on results</li>
            </ul>
            <p className="mt-2">
              By the end of this lesson, you'll be able to start your own projects using Notebook LM and understand its potential for various applications.
            </p>
          </section>
    
        {/* Step 1, what is notebookLM and how to access it*/}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 1: Getting Started with Google NotebookLM
            </h2>
            <p className="mb-4">
              Let's get up and running with Google NotebookLM! This tool can help you study and learn much faster and even answer questions you may have based on the material you upload to it. <strong>We'll dive deeper in this lesson as to what I mean by that.</strong>
            </p>
            <p className="mb-4">
              To get started, you will need a Google account (Gmail) and go to{' '}
              <a 
                href="https://notebooklm.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline hover:no-underline font-bold"
              >
                Google Notebook LM
              </a>
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/notebookLM-homepage.png"
                  alt="Google Notebook LM Interface"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2">
                <p>
                  This is what you should see when you first access Google Notebook LM.
                </p>
                <p className="mt-4">
                  <br />
                  Go ahead and click on <strong>"Try NotebookLM"</strong>
                </p>
              </div>
            </div>

            {/* Border between "Try NotebookLM and The NoteBooks dashboard" */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 my-6">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/notebooks-dashboard.png"
                  alt="Google Notebook LM Notebooks Dashboard"
                  width={400}
                  height={225}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">


              <h3 className="text-xl font-semibold mb-4 mt-2">The Notebooks Dashboard</h3>

                <p>
                    Once you're logged in, you'll see the notebooks dashboard. From this dashboard, you can:
                </p>
                <p className="mt-4">
                  
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Create a new notebook by clicking the "New notebook" button</li>
                  <li>Access your existing notebooks</li>
                </ul>


                <br />
                <strong>Let's make a new notebook, click on "Create"</strong>
              </div>
            </div>
          </section>

          {/* ************ Step 2 : Making  Notebook */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-sky-500 border-b-2 border-sky-300 pb-2">
                Step 2: Making a Notebook
                </h2>

        <p className="mb-4 text-lg">
          In order to work with NotebookLM you must upload sources.
          Thankfully we can upload different kinds of sources, not just PDFs.
          For this lesson we will upload a website link to Harvard's guide for prompting text-generative based models such as Google NotebookLM:
        </p>

        {/* New subsection: What is a prompt? */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Before we move forward, what is a Prompt?</h3>
          <p className="mb-2 text-sm text-gray-700">
            In simple terms, a prompt can be a question or command that you type in the AI tool, which gives you output.
            A deeper definition is A prompt is the text or question given to an AI language model like NotebookLM. It is an instruction for the AI to generate relevant and useful responses based on the prompt you give it.
          </p>
          <p className="text-sm text-gray-700">
            Effective prompting is key to getting the most out of AI tools. It involves clearly communicating your intent and providing enough context for accurate responses.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/upload-sources.png"  // Make sure to add this image to your project
              alt="Creating a new notebook in NotebookLM"
              width={600}
              height={338}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Creating a New Notebook</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li></li>
              <li>Give your notebook a name that reflects its purpose or the subject you're studying.</li>
              <li>Optionally, add a description to help you remember what this notebook is for.</li>
              <li>Click "Create" to generate your new notebook.</li>
            </ol>
          </div>
        </div>

        </section>


          


        </div>

    );
  }
