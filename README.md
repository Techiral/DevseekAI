<h1 align="center">
 <b>Devseek.ai</b>
</h1>

<p align="center">
  <a href="#project-summary">Project Summary</a> •
  <a href="#features--capabilities">Features & Capabilities</a> •
  <a href="#pricing">Pricing</a> •
  <a href="#usage-examples">Usage Examples</a> •
  <a href="#contribution-guidelines">Contribution Guidelines</a> •
  <a href="#license-information">License Information</a> •
  <a href="#contact-details">Contact Details</a>
</p>

<br>

## Project Summary

<p align="center">
  Devseek.ai is an AI-powered SaaS platform that automates the entire Software Development Lifecycle (SDLC)—from ideation to deployment—eliminating the need for human developers. It employs AI agents to write code, test applications, fix bugs, and generate documentation, delivering fully functional, production-ready applications.
</p>

<p align="center">
  <img src="https://github.com/Techiral/DevseekAI/blob/main/app/bb.png?raw=true" alt="Devseek.ai Workflow">
</p>

## Features & Capabilities

- **AI-Powered Development**: Input your idea, and our AI builds the app—no coding required.
- **Full Automation**: AI manages planning, coding, testing, debugging, and documentation.
- **Ready-to-Deploy Apps**: Receive a launch-ready application from the AI.
- **Faster than Human Developers**: AI operates 10x faster, eliminating human delays.
- **No Human Errors**: AI produces optimized, scalable, and bug-free code.
- **Scalability & Cost Savings**: Eliminate the need for hiring engineers—just leverage AI.

## Pricing

We offer a tiered pricing model to cater to various needs:

1. **Early Access**: $149 Lifetime Access (Limited to 500-1000 users)
2. **Standard Subscription**: $99/month
3. **Enterprise**: $299/month

*Note: Early Access provides lifetime access at a one-time fee, creating urgency and value for early adopters.*

## Usage Examples

After purchasing and obtaining access to the repository, follow these steps to set up Devseek.ai:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Techiral/Devseek-AI.git
   cd Devseek-AI
   ```

2. **Create a Virtual Environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Settings**:
   ```bash
   cp example-config.json config.json
   ```
   Edit `config.json` to set your keys and other settings:
   - **LLM Provider**: Set your provider (e.g., openai, anthropic, or groq) key and endpoints. Leave null for default settings. Note that Azure and OpenRouter are supported via the openai setting.
   - **API Key**: If null, it will be read from environment variables.
   - **Database Settings**: SQLite is used by default; PostgreSQL is also supported.
   - **Ignore Paths**: Optionally update `fs.ignore_paths` to add files or folders that shouldn't be tracked by Devseek.ai in the workspace, useful for ignoring folders created by compilers.

5. **Start Devseek.ai**:
   ```bash
   python main.py
   ```
   All generated code will be stored in the `workspace` folder inside a folder named after the app name you enter upon starting the pilot.

## Contribution Guidelines

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request detailing your changes.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License Information

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Techiral/DevseekAI/blob/main/LICENSE) file for more details.

## Contact Details

For support or inquiries:

- **Email**: techiralthefuture@gmail.com
- **Website**: [https://devseek-ai.vercel.app/](https://devseek-ai.vercel.app/)
- **GitHub**: [https://github.com/Techiral/DevseekAI](https://github.com/Techiral/DevseekAI)

*Empower your development process with Devseek.ai—where AI meets innovation.*

---

**Related Resources**:

- [AI in Software Development](https://en.wikipedia.org/wiki/Artificial_intelligence_in_software_development)
- [Continuous Integration on GitHub](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration)
- [OpenAI API Documentation](https://platform.openai.com/docs/introduction)
