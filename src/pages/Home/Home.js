import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home_content">
        <div className="home_header">
          <h1>Klippo Online Clipboard</h1>
          <div className="home_buttons">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <div className="info">
          <h2>How it works?</h2>
          <ul>
            <li>
              Enter the text you want to copy into the "Paste your text here" input box and hit
              <strong> "Send"</strong>
            </li>
            <li>
              Go to your other device and enter the generated code into the{' '}
              <strong>"Enter your retrieval code"</strong> box and hit retrieve
            </li>
            <li>Enjoy.</li>
          </ul>
        </div>
        <div className="home_body">
          <div className="input_group">
            <label htmlFor="text" className="input_label">
              Paste your text here
            </label>
            <textarea name="text" id="text" cols="30" rows="10" required></textarea>
            <input type="file" name="file" id="file" className="upload" />
            <div className="input_button">
              <button type="submit">
                Upload <MdIcons.MdUpload />
              </button>
            </div>
          </div>
          <div className="input_group">
            <label htmlFor="text" className="input_label">
              Enter your retrieval code
            </label>
            <textarea name="code" id="text" cols="30" rows="5" required></textarea>
            <div className="input_button">
              <button type="submit">
                Retrieve <MdIcons.MdFileDownload />
              </button>
            </div>
          </div>
        </div>

        <div className="home_footer">
          <a href="#">
            <IoIcons.IoLogoTwitter className="icon" />
          </a>
          <a href="#">
            <IoIcons.IoLogoGithub className="icon" />
          </a>
          <a href="#">
            <IoIcons.IoLogoLinkedin className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
