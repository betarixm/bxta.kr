import React from "react";
import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";

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
                    "Wrote and inspected of content for Dreamhack Enterprise, including a problem to help understand HTTP and vulnerabilities that may appear during file management. " +
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
                tags: [],
                content:
                    "Simply analyzed the vulnerability of the Sellerhub, contributing to the most vulnerabilities among the team. ",
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
                    "As a media director, not only create artworks but also managing live broadcasting system for seminars. ",
            },
        ],
    },
    {
        title: "Research Projects",
        role: "Lead",
        period: [new Date(2022, 2 - 1, 1), null],
        entries: [
            {
                title: "MOTD: Two-pass Defense Network without Vaccination against Adversarial Example",
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
                tags: [],
                content:
                    "Not only participated in CTF as a member of the hacking team, but also shared knowledge through seminars.",
            },
            {
                title: "Infrastructure Maintainer",
                tags: ["Linux", "Github Actions", "Docker", "Django", "Flask", "React", "Vue"],
                content:
                    "Maintenance of pages necessary for PLUS, from bug fixes to developing new features. " +
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
                    "Built a pipeline for content creation, inspired by Agile. Successfully adopted an agile process and collaborating tools among group members.",
            },
            {
                title: "Infrastructure Maintainer",
                tags: ["Linux", "RTMP", "React", "Filming"],
                content:
                    "Managed not only filming equipment and studios, but also all the equipment of the broadcasting station, including computers and servers. ",
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
];
