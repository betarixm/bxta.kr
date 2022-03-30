import React from "react";
import { MarkGithubIcon, MailIcon, KeyIcon } from "@primer/octicons-react";
import { Link } from "gatsby";

export interface Experience {
    title: string;
    role: string;
    period: [Date, Date | null];
    entries: { title: string; tags: string[]; content: string }[];
}

export const Experiences: Experience[] = [
    {
        title: "Theori",
        role: "Research Intern",
        period: [new Date(2021, 6 - 1, 21), new Date(2021, 8 - 1, 20)],
        entries: [
            {
                title: "Security Audit",
                tags: ["REDACTED"],
                content:
                    "Analyzed the client's source code and discovering logical vulnerabilities from simple bugs.",
            },
            {
                title: "Dreamhack",
                tags: ["Jira", "Confluence", "Docker", "Flask"],
                content:
                    "Wrote and inspected of content for Dreamhack Enterprise, including problems to help understand HTTP and file management. " +
                    "Created a problem for Dreamhack CTF, which could be solved by understanding UUID1 and SSTI. ",
            },
        ],
    },
    {
        title: "Sellerhub",
        role: "Outsourcing",
        period: [new Date(2020, 11 - 1, 1), new Date(2021, 1 - 1, 4)],
        entries: [
            {
                title: "Security Audit",
                tags: ["REDACTED"],
                content:
                    "Simply analyzed the vulnerability of the Sellerhub, finding the most vulnerabilities in our team. ",
            },
        ],
    },
    {
        title: "POSTECH Online Hacking & Security Camp",
        role: "Mentor, Media Director",
        period: [new Date(2020, 6 - 1, 21), new Date(2022, 2 - 1, 20)],
        entries: [
            {
                title: "Mentor",
                tags: [
                    "Docker",
                    "Django",
                    "Flask",
                    "React",
                    "XSS",
                    "CORS",
                    "Prototype Pollution",
                    "SQLi",
                ],
                content:
                    "As a mentor of web hacking, taught hacking technique to high school students from basic to advanced. " +
                    "Built an attack and defense system for students to practice, and writing various problems for CTF. ",
            },
            {
                title: "Media Director",
                tags: ["OBS", "After Effect", "Premiere Pro", "Photoshop", "Illustrator"],
                content:
                    "As a media director, not only created artworks but also managed live broadcasting system for seminars. ",
            },
        ],
    },
    {
        title: "Research Projects",
        role: "Lead",
        period: [new Date(2022, 2 - 1, 1), null],
        entries: [
            {
                title: "MOTD: Modular Two-pass Defense Network against Adversarial Example",
                tags: ["Tensorflow", "Adversarial Attack"],
                content:
                    "Testing a model that minimizes the perturbations of adversarial attacks by transforming existing studies, including MagNet and SHIELD.",
            },
        ],
    },
    {
        title: "PLUS",
        role: "Member",
        period: [new Date(2019, 5 - 1, 1), null],
        entries: [
            {
                title: "Hacker",
                tags: ["Web Hacker"],
                content:
                    "Not only participated in CTF as a member of the hacking team, but also shared knowledge through seminars.",
            },
            {
                title: "Infrastructure Maintainer",
                tags: ["Linux", "Github Actions", "Docker", "Django", "Flask", "React", "Vue"],
                content:
                    "In charge of maintaining PLUS's infrastructure, from bug fixes to developing new features. " +
                    "Increased development productivity by introducing CI/CD pipeline.",
            },
        ],
    },
    {
        title: "PBS",
        role: "Chief Director",
        period: [new Date(2019, 2 - 1, 1), null],
        entries: [
            {
                title: "Establish the Task Pipeline",
                tags: ["Agile", "Notion", "Google Groups", "Google Calendar"],
                content:
                    "Built a pipeline for content creation, inspired by Agile. Successfully adopted an agile culture and collaborating tools among members.",
            },
            {
                title: "Infrastructure Maintainer",
                tags: ["Linux", "RTMP", "React", "Filming"],
                content:
                    "Managed not only filming equipment and studios, but also all the equipment of the broadcasting station, including servers. " +
                    "Constructed RTMP-based two-way live broadcasting system for POSTECH-KAIST Science War.",
            },
            {
                title: "Creator",
                tags: [
                    "Color Grading",
                    "OBS",
                    "After Effect",
                    "Premiere Pro",
                    "Photoshop",
                    "Illustrator",
                ],
                content:
                    "As a creator, participated in many video productions, including two parts for the cover of La La Land.",
            },
        ],
    },
];

export const Ctfs: {
    title: string;
    team: string;
    rank: string;
}[] = [
    { title: "2022 Codegate CTF Preliminary", team: "PLUS", rank: "5th" },
    { title: "2022 zer0pts CTF", team: "PLUS", rank: "5th" },
    { title: "2021 zer0pts CTF", team: "K-Students", rank: "2nd" },
    { title: "2021 POSTECH-KAIST SCIENCE WAR", team: "PLUS", rank: "2nd" },
    { title: "2020 DEF CON CTF QUALS", team: "koreanbadass", rank: "7th" },
    { title: "2020 DEF CON CTF FINAL", team: "koreanbadass", rank: "12th" },
    { title: "2020 CONFidence CTF Teaser", team: "DDP", rank: "1st" },
    { title: "2020 Plaid CTF", team: "koreanbadass", rank: "4th" },
    { title: "2020 Codegate CTF Preliminary", team: "MINUS", rank: "8th" },
    { title: "2020 UIUCTF", team: "PLUS", rank: "6th" },
    { title: "2020 SECCON CTF", team: "Disaster-level Hacker Laboratory", rank: "8th" },
    { title: "2020 Balsn CTF", team: "PLUS", rank: "8th" },
    { title: "2021 LINE CTF", team: "K-Students", rank: "13th" },
    { title: "2020 Definit CTF", team: "2u1q", rank: "18th" },
    { title: "2020 0CTF/TCTF Quals", team: "PLUS x GoN", rank: "20th" },
    { title: "2020 N1CTF", team: "PLUS", rank: "21th" },
    { title: "2019 HITCON CTF", team: "LeaveCat-PLUS", rank: "14th" },
    { title: "2019 TokyoWesterns CTF", team: "LeaveCat-PLUS", rank: "17th" },
];

export const Awards: Experience[] = [
    {
        title: "Undergraduate Group Research Program",
        role: "Team Leader",
        period: [new Date(2020, 4 - 1, 1), new Date(2020, 12 - 1, 1)],
        entries: [
            {
                title: "Payment System using Blockchain",
                tags: ["React", "Node", "Smart Contract", "Docker"],
                content:
                    "1st prize. " +
                    "Developed a payment system using a blockchain as a team. Participate in front-end development, and led the beta test. " +
                    "This project was also selected as a ICON Foundation Grant Program. ",
            },
        ],
    },
];

export const Educations: Experience[] = [
    {
        title: "POSTECH",
        role: "Bachelor, Computer Science and Engineering",
        period: [new Date(2019, 2 - 1, 1), null],
        entries: [],
    },
];

export const Contacts = [
    {
        indicator: <MarkGithubIcon />,
        content: "betarixm",
    },
    {
        indicator: <MailIcon />,
        content: "beta.underalpha@gmail.com",
    },
    {
        indicator: <MailIcon />,
        content: "beta.underalpha@postech.ac.kr",
    },
    {
        indicator: <KeyIcon />,
        content: <Link to={"/pgp"}>PGP Public Key</Link>,
    },
];

export const Pgp: string =
    "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
    "Version: Mailvelope v4.5.1\n" +
    "Comment: https://www.mailvelope.com\n" +
    "\n" +
    "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\n" +
    "SosXnVjW\n" +
    "=mpHi\n" +
    "-----END PGP PUBLIC KEY BLOCK-----";
