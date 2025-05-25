import'./Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
        <div className="resume-wrapper">
            <div className="resume-download">
            <a href="/Images/Current_Resume.pdf" download>
                <img src="/Images/download_icon.png" alt="Download Resume" className="download-icon" />
            </a>
            </div>
            <div className="resume-page">
            <h2>Resume</h2>

            <section>
                <h3>Experience</h3>
                <ul>
                <li><strong>Legal Assistant</strong>, Van Ness Feldman (Seattle, WA) — 06/2024 - 08/2024<br />
                Completed weekly federal updates and grant findings for Sealaska, monitored and reported on Congressional hearings, and prepared case summaries.</li>

                <li><strong>Market Researcher</strong>, Primafy (Stanford, CA) — 03/2024 - 07/2024<br />
                Conducted market research and funding analysis for a start-up that uses AI-imaging to efficiently organize medical diagnoses.</li>

                <li><strong>Food Service Worker</strong>, Spud Fish and Chips (Kirkland, WA) — 07/2022 - 06/2023<br />
                Performed all aspects of running a small restaurant: cooking, customer service, and cleaning.</li>

                <li><strong>Co-Founder</strong>, Mary’s Place (Kenmore, WA) — 05/2022 - 08/2022<br />
                Established a youth soccer program to introduce kids to soccer. Provided gear and reached out to local businesses for permanent equipment.</li>

                <li><strong>Barista Trainer</strong>, Starbucks (Kirkland, WA) — 08/2021 - 12/2021<br />
                Managed operations and trained new employees at an independent store location.</li>
                </ul>
            </section>

            <section>
                <h3>Education</h3>
                <ul>
                <li><strong>Stanford University</strong>, Stanford, CA — B.S. in Computer Science, minor in Art Practice, expected 06/2027<br />
                Member of Stanford Native American Association, Alaska Native Student Association, Stanford Chess Club, TreeHacks 2025.</li>

                <li><strong>Inglemoor High School</strong>, Kenmore, WA — International Baccalaureate Diploma, 06/2023<br />
                Chess Club President, Economics Club, Honor Society, Varsity Soccer, Cross Country, Crew, Eastside Native American Program.</li>
                </ul>
            </section>

            <section>
                <h3>Skills</h3>
                <p>C++, Python, C, SQL, Excel, Google Docs</p>
            </section>

            <section>
                <h3>Community Service</h3>
                <ul>
                <li>Fundraising for Ronald McDonald House</li>
                <li>Algebra Tutoring at Kenmore Middle School</li>
                <li>Food Server at Generation Z Art Exhibit</li>
                <li>Crafted blankets for Humane Society</li>
                <li>Activity Coordinator at ENAP</li>
                <li>Transportation for Food Banks</li>
                <li>Environmental Cleanup</li>
                </ul>
            </section>

            <section>
                <h3>Contact</h3>
                <p>Roan Howard<br />
                roanahoward@gmail.com<br />
                206-755-6351<br />
                Kirkland, WA</p>
            </section>
            </div>
        </div>
    </div>
  );
}