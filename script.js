const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
    
    help: "Available commands: <br> [whoami] [skills] [projects] [experience] [achievements] [certifications] [clear]",
    
    whoami: "MANSI SINGH<br>Mansi Singh is a dedicated Computer Science undergraduate at VIT Bhopal University and specializes in cybersecurity, digital forensics and software development. With expertise in ethical hacking, network security, and secure coding, she tackles digital defense challenges with a sharp analytical mindset and dedication to excellence. She actively engages in various CTF competitions, refining her skills in vulnerability analysis, reverse engineering, and penetration testing. Her involvement in cybersecurity communities keeps her updated on industry trends, encourages collaboration, and strengthens her ability to secure digital systems. Beyond technical skills, she excels in leadership and teamwork. In university clubs, she leads initiatives that foster collaboration, innovation, and knowledge-sharing among peers. Her blend of technical expertise and strong communication skills distinguishes her in both academic and professional settings. Her commitment to cybersecurity, paired with leadership and passion for technology, positions her as a promising professional ready to make impactful contributions to the field.",
    
    skills: `
        <br><span class='highlight'>Security Tools:</span> Kali Linux, Splunk, Wireshark, BurpSuite, Nmap, OWASP ZAP, , Openstego, Autopsy, Recuva, Maltego, Ghidra, FTK Imager, Sqlmap, Johntheripper, Hydra, Windows powershell
        <br><span class='highlight'>Languages:</span> Python, Java, Bash, MySql, JavaScript
        <br><span class='highlight'>Relevant Corsework:</span> Networking, Database Management System, SDLC/SSDLC, Operating Systems
        <br><span class='highlight'>Frameworks:</span> MITRE ATT@CK, NIST, Metasploit, Volatility, OSINT
        <br><span class='highlight'>Security Skills:</span> OWASP Top 10, Vulnerability Assessment, SOC, Scripting, Report writing, Cyber Kill chain, OSINT, Stenography, Ethical Hacking, Active Directory, Web Development, Privilege Escalation, OS Forensics`,
        
    projects: `
        <br><span class='highlight'>1. Pictoshield:</span> A secure graphical password authentication system to replace traditional text-based passwords..
        <br><span class='highlight'>2. SixFourMix:</span> A lightweight tool that supports multiple cryptographic primitives including Encodings and Ciphers.
        <br><span class='highlight'>2. SecureScan:</span> A CLI tool for performing real-time website security and vulnerability analysis.`,
    
    experience: `
        <br><span class='highlight'>Cyber Security Intern @ Elevate Labs:</span> Performed security scans using Nmap/OpenVAS and hardened systems.
        <br><span class='highlight'>Cyber Security Intern @ Codec Technologies:</span> Focused on web security (OWASP Top 10) and ethical hacking.`,
        

    certifications: `
        <br><span class='highlight'>Google (Coursera):</span> Bits and Bytes of Computer Networking
        <br><span class='highlight'>Meta (Coursera):</span> Data Analyst Certificate
        <br><span class='highlight'>Postman:</span> API Fundamentals Student Expert
        <br><span class='highlight'>Oracle:</span> Java Foundation Associate
        <br><span class='highlight'>TryHackMe:</span> Cyber Security Fundamentals`,
    
    achievements: `
        <br><span class='highlight'>TryHackMe (THM):</span> Ranked in Top 1% globally (5k out of lakhs).
        <br><span class='highlight'>100 Days of Code (2023):</span> Engaged in 100 Days of Code by discussing DSA concepts and optimization
techniques, enhancing problem-solving discussions within the coding community.
        <br><span class='highlight'>Leadership:</span>  Content team lead at iOS Club and Non-Tech domain lead at Cyber Warriors Club.
        
    `,
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const response = commands[cmd] || `Command not found: ${cmd}. Type 'help' for options.`;
        
        if (cmd === 'clear') {
            document.getElementById('output').innerHTML = ""; 
    input.value = "";
    return;
        } else {
            output.innerHTML += `<div class='output-text'><span class='prompt'>mansi@kali:~$</span> ${cmd}</div>`;
            output.innerHTML += `<div class='output-text'>${response}</div>`;
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

const github = () => {
    window.open('https://github.com/mansis30', '_blank');
    return "Opening Mansi's GitHub... 🚀";
};

const linkedin = () => {
    
    window.open('https://www.linkedin.com/in/mansisingh300705', '_blank');
    return "Connecting to Mansi's LinkedIn... 💼";
};


console.log("Welcome! Type github() or linkedin() to connect with the developer.");


const email = () => {
    window.location.href = "mailto:mansisingh.singh14@gmail.com";
    return "Opening your mail client... 📧";
};

const phone = () => {
    
    window.location.href = "tel:+919651102729"; 
    return "Attempting to dial Mansi... 📞";
};


const mansi = () => {
    console.log("Available commands: github(), linkedin(), email(), phone()");
    return "Contact details ready!";
};